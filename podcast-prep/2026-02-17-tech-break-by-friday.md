# Tech Break by Friday — Podcast Prep
**Date:** Tue Feb 17, 2026 · 3:30–4:30pm EST
**Host:** Paraskevi Kivroglou
**Format:** 1hr video interview via Google Meet
**Audience:** Non-technical professionals who want to feel confident, not threatened, by AI. Business owners and founders looking for operational reality, not hype.

---

## 1. The "Safety" Audit — AI in Regulated Industries

*Her question: In healthcare and defense, AI mistakes are non-negotiable. How should everyday business owners think about "AI safety"? Is compliance a roadblock to ROI, or the only way to build a sustainable system?*

**Key talking points:**

- **Compliance is a feature, not a tax.** At Highmark, the compliance requirements forced better engineering — explainability, audit trails, human review loops. Those same patterns made the system more trustworthy to end users, which drove adoption. The 97% underwriting time reduction happened *because of* the guardrails, not despite them.

- **The DoD lesson:** At RAND, the bar for "can we trust this output?" was life-and-death. That discipline translates directly — if you build AI that could survive a Pentagon review, it'll hold up in any boardroom. Most companies skip this and pay for it later in rework and lost trust.

- **For small businesses: start with the "what if this is wrong?" test.** Before deploying any AI, ask: what's the blast radius of a bad output? Customer-facing recommendations? Low blast radius. Financial decisions? High. Match your safety investment to the consequences. You don't need a compliance department — you need a habit of asking the question.

- **The hidden ROI of constraints:** Regulated industries move slower to adopt but retain longer. The companies that build trust early own the market. Unregulated competitors who ship fast and break things end up with technical debt that becomes a business liability.

**Story to tell:** The Highmark underwriting transformation — walking into a room of insurance underwriters who'd done things the same way for 30 years and getting them to trust an ML system. The compliance framework was the thing that got them to say yes.

---

## 2. Hype vs. Operational Reality — Where Companies Burn Money

*Her question: Where do you see companies burning the most money? What's the gap between "deploying ML" and actually seeing business impact?*

**Key talking points:**

- **The "AI strategy deck" trap.** Companies spend 6 months and $500K on an AI strategy with a consultancy, get a beautiful PowerPoint, then realize nobody on their team can execute it. The strategy isn't the hard part — the plumbing is. Data pipelines, integration points, monitoring, retraining cycles.

- **The three money pits:**
  1. **Building before measuring.** Teams ship a model without defining what success looks like in business terms. "95% accuracy" means nothing if it doesn't move a KPI the CFO cares about.
  2. **Custom when commodity will do.** Companies training custom models for tasks that GPT-4 or Claude handle out of the box. Save the custom work for your actual differentiator.
  3. **Ignoring the last mile.** The model works in a notebook. Great. Now it needs to live in a production system, handle edge cases, degrade gracefully, and be monitored by someone who isn't a data scientist. That's where 80% of the budget should go and where 80% of projects die.

- **The Qloo perspective:** Consumer preference prediction across entertainment, dining, travel, fashion — the AI is only as good as the data infrastructure underneath it. The unsexy work of building robust data pipelines and maintaining data quality is what separates "cool demo" from "Fortune 500 contract."

- **AGI distraction:** Every dollar a mid-market company spends worrying about AGI is a dollar not spent on the AI that could transform their operations *today*. The revolution is already here — it's just in boring applications like document processing, inventory optimization, and customer routing.

**Story to tell:** A Qloo client engagement where the flashy AI demo got the deal signed, but the actual value came from mundane data integration work that nobody wanted to fund initially. The "boring" part was the business case.

---

## 3. The Human Element — Trust and Cultural Change

*Her question: How do large-scale pivots succeed culturally? How do we get the "humans in the loop" to trust the black box?*

**Key talking points:**

- **You don't sell AI to people — you solve their problem.** The Highmark underwriters didn't care about machine learning. They cared that they were drowning in paperwork and going home late. Frame the AI as "this does the part of your job you hate" and resistance drops overnight.

- **Transparency beats perfection.** People don't need to understand the model — they need to understand when to trust it and when to override it. Build confidence intervals into the UX. "The system is 95% confident this is correct" gives a human something to work with. A binary yes/no output creates anxiety.

- **The pilot cohort strategy:** Don't roll out to everyone. Find the 3-5 people who are most frustrated with the current process and make them co-designers. They become your internal evangelists. At Sixfold, the pivot worked because the early adopters did the selling internally — not the executives.

- **Acknowledge what's lost.** Every automation displaces expertise someone spent years building. If you don't honor that, you breed resentment. The best implementations create new roles that leverage human judgment at a higher level — the underwriter becomes a reviewer, the analyst becomes a strategist.

- **The "override button" principle:** Always give humans a way out. The moment someone feels trapped by the AI, trust collapses. Even if they never use it, the existence of the override is what makes adoption possible.

**Story to tell:** A specific pivot where cultural resistance was the main blocker — not technical limitations. How the breakthrough came from listening to frontline workers, not from better algorithms.

---

## General Tips for This Show

- **Her audience is non-technical.** Avoid jargon. When you use a technical term, immediately translate it. "We built a classifier — basically a system that sorts things into buckets automatically."
- **She wants counter-narrative.** Her brand is cutting through hype. Lean into contrarian takes. "The companies most obsessed with AI are often the least ready for it."
- **Specific numbers land.** The 97% stat is what hooked her. Have 2-3 more concrete metrics ready.
- **Keep the energy conversational.** This isn't a keynote — it's a podcast for people on their commute. Stories > frameworks.
