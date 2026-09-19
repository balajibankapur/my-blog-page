import type { APIRoute } from 'astro';
import { Redis } from '@upstash/redis';

export const prerender = false;

const redis = Redis.fromEnv();

const VALID_REACTIONS = ['helped_me', 'learned', 'use', 'shallow', 'unclear'] as const;
type Reaction = (typeof VALID_REACTIONS)[number];

function isValidReaction(r: string): r is Reaction {
	return (VALID_REACTIONS as readonly string[]).includes(r);
}

function isValidSlug(s: string): boolean {
	return /^[a-z0-9-]{1,80}$/.test(s);
}

async function getCounts(slug: string): Promise<Record<Reaction, number>> {
	const raw = (await redis.hgetall(`reactions:${slug}`)) as Record<string, number | string> | null;
	const counts = Object.fromEntries(VALID_REACTIONS.map((r) => [r, 0])) as Record<Reaction, number>;
	if (raw) {
		for (const r of VALID_REACTIONS) {
			const v = raw[r];
			counts[r] = typeof v === 'number' ? v : v ? parseInt(String(v), 10) || 0 : 0;
		}
	}
	return counts;
}

export const GET: APIRoute = async ({ url }) => {
	const slug = url.searchParams.get('slug');
	if (!slug || !isValidSlug(slug)) {
		return new Response(JSON.stringify({ error: 'invalid slug' }), {
			status: 400,
			headers: { 'content-type': 'application/json' },
		});
	}
	const counts = await getCounts(slug);
	return new Response(JSON.stringify({ counts }), {
		status: 200,
		headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
	});
};

export const POST: APIRoute = async ({ url }) => {
	const slug = url.searchParams.get('slug');
	const r = url.searchParams.get('r');
	if (!slug || !isValidSlug(slug) || !r || !isValidReaction(r)) {
		return new Response(JSON.stringify({ error: 'invalid request' }), {
			status: 400,
			headers: { 'content-type': 'application/json' },
		});
	}
	await redis.hincrby(`reactions:${slug}`, r, 1);
	const counts = await getCounts(slug);
	return new Response(JSON.stringify({ counts }), {
		status: 200,
		headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
	});
};
