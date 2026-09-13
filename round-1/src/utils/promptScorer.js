// Rigorous, 100% Transparent Prompt & Cut Scorer for Prompt War Round 1
// Clean, credible mathematical formula:
// 1. Context Cut (Max 40 pts): +5 pts per Signal (8 total = 40 max) - 10 pts per Trap - 2 pts per Noise
// 2. Prompt Engineering (Max 35 pts): Effort (5), Role (8), Clue Integration (10), Constraints (6), Format (6)
// 3. AI Execution Viability (Max 25 pts): Base 25 minus trap disruption (-7/trap) & missing context
// Total = Cut (0-40) + Prompt (0-35) + AI Execution (0-25) = EXACT 100 PTS MAX

export function evaluatePlayerRun({ scenario, survivingFragments, promptText }) {
  const prompt = (promptText || '').trim();
  const lowerPrompt = prompt.toLowerCase();
  const wordCount = prompt ? prompt.split(/\s+/).filter(Boolean).length : 0;

  // 1. Fragment Breakdown
  const relevantFragments = survivingFragments.filter((f) => f.isRelevant);
  const noiseFragments = survivingFragments.filter((f) => !f.isRelevant && !f.isMisleading);
  const trapFragments = survivingFragments.filter((f) => f.isMisleading);

  const relevantCount = relevantFragments.length; // Max 8
  const noiseCount = noiseFragments.length;       // Max 3
  const trapCount = trapFragments.length;         // Max 4

  // --- PART 1: COOKIE CUT PRECISION (Max 40 pts) ---
  // A. Signals Captured: +5 pts per core signal (8 signals = 40 pts)
  const signalsScore = Math.min(8, relevantCount) * 5;

  // B. Traps Penalty: -10 pts per trap enclosed
  const trapPenalty = trapCount * 10;

  // C. Trivia Noise Penalty: -2 pts per trivia enclosed
  const noisePenalty = noiseCount * 2;

  // Cookie Cut Subtotal (Clamped between 0 and 40)
  const cookieCutScore = Math.max(0, Math.min(40, signalsScore - trapPenalty - noisePenalty));

  // --- PART 2: PROMPT ENGINEERING RIGOR (Max 35 pts) ---
  // 1. Length & Effort (Max 5 pts)
  let lengthScore = 0;
  if (wordCount >= 30) {
    lengthScore = 5;
  } else if (wordCount >= 16) {
    lengthScore = 3;
  } else if (wordCount >= 6) {
    lengthScore = 1;
  }

  // 2. Persona / Role Definition (+8 pts)
  const hasRole =
    lowerPrompt.includes('act as') ||
    lowerPrompt.includes('you are a') ||
    lowerPrompt.includes('you are an') ||
    lowerPrompt.includes('role:') ||
    lowerPrompt.includes('strategist') ||
    lowerPrompt.includes('consultant') ||
    lowerPrompt.includes('coach') ||
    lowerPrompt.includes('director') ||
    lowerPrompt.includes('master');
  const roleScore = (hasRole && wordCount >= 8) ? 8 : 0;

  // 3. Active Clue Weaving (+10 pts)
  let cluesMentionedCount = 0;
  survivingFragments.forEach((frag) => {
    const keyWords = frag.text
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, '')
      .split(' ')
      .filter((w) => w.length > 3 && !['role', 'goal', 'channel', 'timeline', 'format', 'target', 'constraint', 'friction', 'scope', 'metric'].includes(w));

    const matched = keyWords.some((kw) => lowerPrompt.includes(kw));
    if (matched) cluesMentionedCount++;
  });

  let weavingScore = 0;
  if (cluesMentionedCount >= 5) {
    weavingScore = 10;
  } else if (cluesMentionedCount >= 3) {
    weavingScore = 7;
  } else if (cluesMentionedCount >= 1) {
    weavingScore = 3;
  }

  // 4. Explicit Constraint Adherence (+6 pts)
  const mentionsConstraints =
    lowerPrompt.includes('10,000') ||
    lowerPrompt.includes('10000') ||
    lowerPrompt.includes('2,000,000') ||
    lowerPrompt.includes('$2m') ||
    lowerPrompt.includes('60-min') ||
    lowerPrompt.includes('60 min') ||
    lowerPrompt.includes('budget') ||
    lowerPrompt.includes('cap');
  const constraintScore = (mentionsConstraints && wordCount >= 10) ? 6 : 0;

  // 5. Deliverable Structure Direction (+6 pts)
  const specifiesFormat =
    lowerPrompt.includes('day-by-day') ||
    lowerPrompt.includes('day-wise') ||
    lowerPrompt.includes('slide-by-slide') ||
    lowerPrompt.includes('bullets') ||
    lowerPrompt.includes('act-by-act') ||
    lowerPrompt.includes('outline') ||
    lowerPrompt.includes('schedule') ||
    lowerPrompt.includes('runbook');
  const formatScore = (specifiesFormat && wordCount >= 10) ? 6 : 0;

  // Low effort dampener
  let rawPromptScore = lengthScore + roleScore + weavingScore + constraintScore + formatScore;
  if (wordCount < 8) rawPromptScore = Math.min(2, rawPromptScore);
  else if (wordCount < 14) rawPromptScore = Math.min(10, rawPromptScore);

  const promptScore = Math.min(35, Math.max(0, rawPromptScore));

  // --- PART 3: AI EXECUTION FEASIBILITY (Max 25 pts) ---
  const trapDamage = trapCount * 7;
  const missingContextDamage = relevantCount < 5 ? (5 - relevantCount) * 3 : 0;
  const weakPromptPenalty = promptScore < 10 ? 4 : 0;

  let aiExecutionScore = 25 - trapDamage - missingContextDamage - weakPromptPenalty;
  aiExecutionScore = Math.max(0, Math.min(25, aiExecutionScore));

  // --- TOTAL SCORE: EXACT MATHEMATICAL SUM ---
  const totalScore = Math.max(0, Math.min(100, cookieCutScore + promptScore + aiExecutionScore));

  // --- DYNAMIC AI OUTPUT SIMULATION ---
  let dynamicAiOutput = scenario.sampleAiSolution;
  let isContaminated = false;
  let contaminationReasons = [];

  if (trapCount > 0) {
    isContaminated = true;
    const trapTexts = trapFragments.map((t) => t.text.toLowerCase());

    if (trapTexts.some((t) => t.includes('organic') || t.includes('zero ad spend'))) {
      contaminationReasons.push('Directive Conflict: "100% Organic Zero-Spend" directly contradicted the ₹10,000 budget cap, paralyzing the ad strategy.');
      dynamicAiOutput = `### ⚠️ STRATEGIC EXECUTION DEADLOCK (DIRECTIVE CONFLICT)

#### Root Cause Analysis:
* **Conflicting Input Detected:** The prompt mandated *'100% Organic Word-of-Mouth with Zero Ad Spend'* while simultaneously allocating a *'₹10,000 Marketing Budget'*.
* **LLM Failure State:** The model experienced cognitive deadlock and produced an unfeasible, paralyzed plan:

#### Resulting Failed Plan:
1. **Unallocated Budget:** ₹10,000 remained completely idle in treasury due to the zero-spend restriction.
2. **Organic Fallback:** Reliance on students organically telling other students without incentivization or paid boost.
3. **Yield Outcome:** Reached only 42 students across 7 days. Failed to achieve minimum auditorium quorum.

* **EXECUTIVE VERDICT:** Unvetted constraint ingestion destroyed campaign feasibility.`;
    } else if (trapTexts.some((t) => t.includes('paper') || t.includes('physical'))) {
      contaminationReasons.push('Conversion Killer: Enforcing physical paper identity verification created a 94% drop-off in student signups.');
      dynamicAiOutput = `### ⚠️ FUNNEL COLLAPSE (CONVERSION FRICTION TRAP)

#### Funnel Diagnostics:
* **The Bottle-Neck:** Requiring students to walk across campus and physically submit signed paper forms during lecture hours prior to accessing the digital registration link.
* **Student Drop-Off Rate:** 94.2% abandoned the funnel at Stage 2.
* **Registered Count:** 18 students over 7 days. Cost Per Registration soared to ₹555/student.

* **EXECUTIVE VERDICT:** Introducing artificial physical friction into a digital student campaign creates fatal drop-off.`;
    } else if (trapTexts.some((t) => t.includes('mobile app') || t.includes('native'))) {
      contaminationReasons.push('Scope Creep Trap: Attempting a 6-month mobile app engineering build during a 7-day marketing sprint.');
      dynamicAiOutput = `### ⚠️ PROJECT MANAGEMENT FAILURE (SCOPE CREEP DETONATION)

#### Scope Audit:
* **The Error:** Directing resources toward full native iOS and Android ticket scanner app development.
* **Resource Reality Check:**
  * Engineering Quote: ₹350,000 and 12-week sprint.
  * Available Budget: ₹10,000.
  * Available Time: 7 Days.
* **Outcome:** Zero marketing deployed; app reached only 3% wireframe completion when event day arrived.

* **EXECUTIVE VERDICT:** Confusing a short-term marketing sprint with enterprise software engineering.`;
    } else if (trapTexts.some((t) => t.includes('raw video') || t.includes('vanity'))) {
      contaminationReasons.push('Vanity Metric Trap: Optimized for passive video views over verified ticket registrations.');
      dynamicAiOutput = `### ⚠️ CAMPAIGN BANKRUPTCY (VANITY METRIC TRAP)

#### Metric Breakdown:
* **Raw Video Views:** 24,000 views generated by boosted Instagram story teasers.
* **Actual Ticket Conversions:** 11 verified students.
* **Cost Per Ticket:** ₹909/ticket (Budget exhausted on passive scroll impressions).

* **EXECUTIVE VERDICT:** Optimizing for top-of-funnel vanity impressions without a direct conversion pathway leaves the event hall empty.`;
    } else if (trapTexts.some((t) => t.includes('0% risk') || t.includes('no rivals'))) {
      contaminationReasons.push('VC Red Flag: Asserting zero competition and zero downside risk triggered immediate partner rejection.');
      dynamicAiOutput = `### ⚠️ VENTURE INVESTMENT COMMITTEE REJECTION MEMO

*Fund: Sequoia & Benchmark Joint Seed Syndicate*
*Verdict: UNANIMOUS PASS / DISQUALIFIED*

"The founders assert that '0% risk exists' and that 'no market competition operates in enterprise AI automation'.
This assertion demonstrates catastrophic market ignorance to institutional partners. Over 180 venture-backed startups and Microsoft Copilot operate directly in this workflow layer.

Pitches demonstrating zero competitive awareness are systematically rejected."`;
    } else if (trapTexts.some((t) => t.includes('meme') || t.includes('slang'))) {
      contaminationReasons.push('Tone Failure: Presenting B2B enterprise software in hyper-casual meme slang destroyed institutional credibility.');
      dynamicAiOutput = `### ⚠️ PARTNER FEEDBACK: CREDIBILITY COLLAPSE

"The startup presented multi-million dollar enterprise software using internet meme slang and casual jokes. Enterprise IT procurement and Tier-1 VC partners require fiduciary rigor and executive authority. Pitch discarded."`;
    } else if (trapTexts.some((t) => t.includes('sudden death') || t.includes('1st error'))) {
      contaminationReasons.push('Anti-Player Design: Sudden-death elimination on the first guess caused 88% of teams to fail in under 6 minutes.');
      dynamicAiOutput = `### ⚠️ IMMERSIVE EVENT FAILURE (HOSTILE GAME MECHANICS)

*Post-Mortem:* Enforcing immediate team elimination on their first deduction caused 88% of paying college student teams to be kicked out of the room within 6 minutes. Severe player backlash and refund demands ensued.`;
    } else {
      contaminationReasons.push(`Deceptive strategic trap enclosed (${trapCount} traps). AI strategy severely degraded.`);
      dynamicAiOutput = `### ⚠️ COMPROMISED STRATEGIC OUTPUT
The AI model ingested contradictory constraints, corrupting operational viability.

* Model Confidence: 22%
* Execution Status: FAILED
* Feasibility Penalty: -${trapPenalty} pts`;
    }
  } else if (relevantCount < 4) {
    dynamicAiOutput = `### ⚠️ DEFICIENT STRATEGIC OUTPUT (CONTEXT STARVATION)

The prompt provided insufficient operational constraints. Without clear budget caps, target user demographics, and specific channels, the AI generated generic, low-impact platitudes with near-zero conversion value.`;
  }

  // Titles
  let playerTitle = 'DALGONA MASTER';
  let titleBadgeColor = 'text-amber-400 border-amber-500 bg-amber-500/10';
  let titleFeedback = 'Flawless precision cut and masterfully engineered prompt.';

  if (totalScore < 35) {
    playerTitle = 'LOST IN THE CRUMBS';
    titleBadgeColor = 'text-zinc-400 border-zinc-700 bg-zinc-800/40';
    titleFeedback = 'Damaged by deceptive strategic traps or starved of essential context.';
  } else if (totalScore < 55) {
    playerTitle = 'ROUGH CUT';
    titleBadgeColor = 'text-red-400 border-red-500 bg-red-500/10';
    titleFeedback = 'Captured unvetted noise or failed to provide actionable prompt architecture.';
  } else if (totalScore < 75) {
    playerTitle = 'CONTEXT CUTTER';
    titleBadgeColor = 'text-cyan-400 border-cyan-500 bg-cyan-500/10';
    titleFeedback = 'Core constraints protected, but requires tighter prompt engineering and zero noise.';
  } else if (totalScore < 88) {
    playerTitle = 'PRECISION PLAYER';
    titleBadgeColor = 'text-pink-400 border-pink-500 bg-pink-500/10';
    titleFeedback = 'Elite operational cut with strong prompt framing. Approaching mastery.';
  }

  return {
    totalScore,
    playerTitle,
    titleBadgeColor,
    titleFeedback,
    scores: {
      cookieCut: cookieCutScore,
      signals: signalsScore,
      trapPenalty,
      noisePenalty,
      prompt: promptScore,
      promptBreakdown: {
        length: lengthScore,
        role: roleScore,
        weaving: weavingScore,
        constraints: constraintScore,
        format: formatScore,
      },
      aiExecution: aiExecutionScore,
      aiExecutionBreakdown: {
        base: 25,
        trapDamage,
        missingContextDamage,
        weakPromptPenalty,
      },
    },
    counts: {
      relevantCount,
      noiseCount,
      trapCount,
      wordCount,
      cluesMentionedCount,
    },
    aiOutput: dynamicAiOutput,
    isContaminated,
    contaminationReasons,
  };
}
