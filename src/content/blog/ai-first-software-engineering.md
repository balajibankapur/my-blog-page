---
title: 'AI-First Software Engineering: Reimagining the SDLC'
description: 'How Generative AI could transform software engineering — and why existing products make the problem much harder.'
pubDate: 'Aug 9 2026'
---

For more than two decades, software engineering has followed a fairly predictable lifecycle. Requirements become designs, designs become code, and code is tested, reviewed, released, and maintained. Generative AI is now challenging almost every stage of that lifecycle. But when we talk about AI and software development, the conversation often narrows to a single question — *“How much code can AI generate?”* — when the more interesting question is *“How can AI improve the entire Software Development Lifecycle?”*

## 🧩 AI Beyond Code Generation

Engineers don’t spend all their time writing code. A significant part of engineering effort goes into understanding requirements, exploring existing systems, designing solutions, reviewing code, creating tests, debugging, documenting, and understanding the impact of changes. Generative AI could potentially assist across all of these activities.

| SDLC Activity | Potential AI Assistance |
| --- | --- |
| 📋 Requirements | Analyze, classify and identify ambiguity |
| 🏛️ Architecture | Explore possible designs and trade-offs |
| 🎨 Design | Assist with design artifacts |
| 💻 Coding | Generate, explain and refactor code |
| 🧪 Testing | Generate test scenarios and edge cases |
| 👁️ Code Review | Identify potential issues |
| 🐛 Debugging | Analyze code, logs and failures |
| 📚 Documentation | Assist with technical documentation |
| 🔧 Maintenance | Help understand dependencies and change impact |

The opportunity, therefore, isn’t simply writing code faster — it is potentially reducing the friction between the different activities that engineers perform.

## 🏚️ But What About Existing Products?

This is where the problem becomes much more interesting. Building a new application with AI assistance is one thing; you can design the application around AI from the beginning. Legacy products are completely different. Many enterprise products have evolved over 10, 15, 20 or even 30 years, and they typically contain:

- Millions of lines of code across multiple programming languages
- Old frameworks and tools, with incomplete documentation
- Complex dependencies and hidden business rules
- Tribal knowledge and architecture that exists mainly in people’s heads
- Tests that don’t completely describe system behavior

Before AI can meaningfully help with such a product, there is a fundamental question:

<div class="callout callout-think">
<strong>🤔 Think about it —</strong> How does AI understand a system that even humans sometimes struggle to understand?
</div>

That may be one of the biggest challenges in applying AI to the existing SDLC.

## 🕰️ The Legacy Code Challenge

Imagine asking an AI coding agent to *“add this new feature to our product.”* Generating some code may not be difficult, but does the AI understand why the existing architecture was designed this way, which modules depend on this behavior, which undocumented assumptions exist, which interfaces cannot be changed, what historical decisions led to the current implementation, and what could break somewhere else?

Generating code is relatively easy. **Generating the right change is much harder** — and this is where context becomes critical. Perhaps the AI needs to understand more than source code; maybe it needs to connect:

<div class="context-chain">
  <span>📋 Requirements</span><span class="arrow">→</span>
  <span>🏛️ Architecture</span><span class="arrow">→</span>
  <span>🎨 Design</span><span class="arrow">→</span>
  <span>💻 Source Code</span><span class="arrow">→</span>
  <span>🧪 Tests</span><span class="arrow">→</span>
  <span>🐛 Defects</span><span class="arrow">→</span>
  <span>📚 Docs</span><span class="arrow">→</span>
  <span>🧠 Product Knowledge</span>
</div>

How we create that context is a problem worth exploring.

## 🧭 A Hint at the Possible Direction

I don’t think the answer is simply putting the entire codebase into an LLM. The interesting question is how we can create *structured context* around a software system — connecting different forms of knowledge, understanding the relationships between requirements, components, interfaces, code, tests, and defects, and perhaps using AI agents that gradually build and maintain that understanding.

These aren’t answers — just clues toward a larger architectural problem. And that problem becomes even more interesting when we start thinking about **Agentic AI**.

## 🤖 From AI Assistant to AI Engineering System

Today, many developers use AI as a coding assistant. But imagine extending that idea across the SDLC — a system where different AI capabilities assist with each stage:

<div class="sdlc-pipeline">
  <div class="sdlc-step"><span class="sdlc-icon">📋</span><span>Requirements</span></div>
  <div class="sdlc-arrow">→</div>
  <div class="sdlc-step"><span class="sdlc-icon">🏛️</span><span>Architecture</span></div>
  <div class="sdlc-arrow">→</div>
  <div class="sdlc-step"><span class="sdlc-icon">💻</span><span>Development</span></div>
  <div class="sdlc-arrow">→</div>
  <div class="sdlc-step"><span class="sdlc-icon">🧪</span><span>Testing</span></div>
  <div class="sdlc-arrow">→</div>
  <div class="sdlc-step"><span class="sdlc-icon">👁️</span><span>Review</span></div>
  <div class="sdlc-arrow">→</div>
  <div class="sdlc-step"><span class="sdlc-icon">📚</span><span>Docs</span></div>
  <div class="sdlc-arrow">→</div>
  <div class="sdlc-step"><span class="sdlc-icon">🔧</span><span>Maintenance</span></div>
</div>

The interesting part isn’t simply having multiple agents. The real challenge is understanding how they should share context, knowledge, decisions, and feedback — and, importantly, deciding **where humans must remain in the loop**.

## ⚖️ Leverage, Not Replace

There is a mindset question that comes before any technical one: are we using AI to *replace* steps in the SDLC, or to *leverage* the people and processes we already have? The steps in the lifecycle exist for reasons — requirements clarify intent, reviews catch defects, tests prevent regressions, documentation preserves institutional memory. It is tempting to skip those gates when AI can produce a working artifact in seconds, but skipping them doesn’t improve the outcome; it just moves the risk downstream. The stronger position, at least to start with, is to keep the process intact and let AI make each step faster, clearer, and better informed.

That framing also raises two engineering concerns that are easy to underestimate: **consistency** and **quality**. LLMs are non-deterministic by nature — the same prompt can produce different results, and small changes in phrasing or context can shift the output in ways that are hard to predict. In an engineering setting, that variability matters. Reviewers need to trust what they’re reading, teams need repeatable behavior across similar tasks, and downstream tools need stable interfaces. Building AI into the SDLC without addressing consistency risks eroding the very trust that makes the SDLC work.

Quality is a similar story. Code that runs is not the same as code that is engineering-grade — readable, testable, secure, aligned with team conventions, and appropriate for the system it lives in. An AI that produces a lot of “works on my prompt” output but requires heavy rework isn’t actually saving effort; it’s shifting the work from writing to reviewing and repairing. The bar for AI-generated artifacts in a real product has to be the same bar we hold humans to.

Put together, this suggests a starting posture: use AI to augment the existing process, measure consistency and quality as first-class outcomes, and only remove or restructure steps once we have real evidence that the AI-augmented flow is at least as reliable as what it replaces.

## 📊 The Productivity Question

There is another question we shouldn’t ignore:

<div class="callout callout-think">
<strong>🤔 Think about it —</strong> How do we know AI actually improves productivity?
</div>

Generating more code doesn’t necessarily mean becoming more productive. We need to think about outcomes such as development cycle time, engineering effort, defect rate, test coverage, review effort, rework, time spent understanding legacy code, and time to diagnose problems. The goal isn’t to maximize AI-generated output — the goal is **better engineering outcomes**.

## 🧪 Where I Want to Explore

This is where my interest in AI meets my experience in software architecture. The questions I want to explore include:

- How can AI understand a large existing product, and how should software knowledge be represented for AI?
- Can RAG provide enough context for complex engineering systems, and where could knowledge graphs help?
- How should AI agents collaborate across the SDLC, and how do we evaluate whether AI-generated engineering artifacts are actually correct?
- How much autonomy should we give an AI system working on production software?

I don’t have all the answers, and I don’t think we should pretend that we do. The technology is evolving quickly, and many of these problems are still being figured out — which is exactly what makes this space exciting. I’ll be exploring these questions through experiments, architecture discussions, and practical examples, starting with the fundamentals and gradually moving toward more autonomous AI-driven engineering systems.

Because I believe the future of software engineering isn’t simply about AI writing our code. **It may be about AI becoming part of the engineering system itself.**
