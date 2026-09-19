---
title: 'The Harness Around AI Is Half the Job'
description: 'Provenance, guardrails, license checks. The tools already exist. The question is whether we run them on AI-generated code with the same rigor we run them on human-written code.'
pubDate: 'Sep 19 2026'
---

AI is writing meaningful amounts of production code now. Real features, real designs, real artifacts shipping to real customers. It feels like a straight productivity win.

It also opens categories of risk that the AI can't catch by itself. The catch has to live in the *harness* around the AI. And if the harness isn't there, or isn't run with the same discipline we run on human-written code, the productivity gain quietly becomes a liability.

Three specific areas are worth naming.

## Provenance

For any line of code that ships in your product, you should be able to answer: *where did this come from?*

For human-written code, git blame does most of the work. For AI-generated code you need more: which model produced it, when, with what prompt and context, on which version of the tool. That's not paranoia. That's what an audit, a security review, or a legal question is going to ask, and the person who has to answer might not be the person who accepted the AI's output.

A natural pushback: *"The developer reviews the AI's output as they go, and the PR reviewer looks at it again before merge. Isn't that enough?"*

For bugs, style issues, and architectural mismatches, it usually is. But some things can't be seen by looking at the code, no matter how careful the reader. Human eyes can't tell whether a well-written function was produced from patterns the model learned during training or copied verbatim from a specific GPL-licensed repo. They can't tell what data the model saw during generation, or which of three models used in a session produced which lines. They can't answer an auditor's *"which AI tools ran on production code, on which plans, with what logging?"* And they can't invoke the enterprise indemnification most AI tools offer, since that requires proof of tool, plan, and version.

Two humans looking at code answers *"is this code good?"* Provenance answers *"where did this code come from, and can we reconstruct the conditions under which it was generated?"* Both are needed, and neither substitutes for the other. **PR review is a diagnosis. Provenance is a medical record.**

GitHub's audit logs, Cursor's session traces, and SBOM generators (SLSA-style supply-chain manifests) exist to solve this. Run them, because any AI-generated artifact that ships without a paper trail is a future incident waiting for a query.

## Copyright and license

AI models can reproduce copyrighted code they've seen during training, and they can pull in dependencies with licenses that quietly conflict with your product's shipping model. Neither of those is caught by tests. Both are caught by software composition analysis tools that most teams already own.

Black Duck, Snyk, FOSSA, and Mend all do this well. They scan for dependency licenses, flag reproductions of known open-source code, and report violations against a policy you define. What's new is that we need to run them on AI-generated code with the same rigor we run them on hand-written contributions, not less. The risk profile is arguably worse, because AI produces plausible-looking code faster than a human would, and plausibility is not the same as legality.

## Guardrails

The last one is quieter. What did the AI have access to when it generated code? What actions did the agent take, and under what constraints?

For an editor-based flow (Copilot, Cursor, Claude Code), guardrails are mostly about what files and secrets the AI can read. For an agent acting on production systems, they're about which actions require human approval, which data paths are off-limits, and what the blast radius of an autonomous decision is. Policies expressed in code (Sentinel, OPA, and similar) are tools most teams already have. AI-generated changes need to run through them like everything else does.

## The math

If you want a way to hold this in your head, try this:

<div class="formula">
<strong>Certified Output = AI Output × Provenance × License Compliance × Guardrail Coverage</strong>
</div>

Each factor on the right sits between 0 and 1. The multiplication is the point. If any factor collapses toward zero, the whole product collapses with it. It doesn't matter how much AI Output you generated. Without provenance, without license compliance, without guardrails, none of it is certified.

Or, in dollar terms:

<div class="formula">
<strong>Net Value = Productivity Gain − (AI Volume × [1 − Harness Coverage] × Cost of Incident)</strong>
</div>

The productivity gain is real. So is the risk exposure that scales with volume when harness coverage is incomplete. If Harness Coverage approaches 1, the second term vanishes and you keep the gain. If it approaches 0, the second term can eat the gain, and then some.

Both formulas point at the same thing: **the harness is not overhead. It is the multiplier that turns AI output into value you can actually ship.**

## The point

The harness is not the boring part. It is the product. It is what turns AI-generated output into something you can safely ship.

Skip it and every productivity gain gets multiplied by every risk gap in it. Get it right and the AI earns its place in the workflow, because the code it produces goes through the same rigor and comes out with the same guarantees as anything a human would write.

**AI can generate. The harness certifies. And in a production system, certification is the whole game.**
