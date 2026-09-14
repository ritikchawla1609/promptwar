// Rigorous, 100% Transparent Prompt & Cut Scorer for Prompt War Round 1
// Clean, credible, enterprise-grade mathematical formula:
// 1. Context Cut (Max 40 pts): +5 pts per Signal (8 total = 40 max) - 10 pts per Trap - 3 pts per Noise
// 2. Prompt Engineering (Max 35 pts): Directive Action (8), Role (7), Clue Synthesis vs Dump (8), Constraints (6), Format (6)
// 3. AI Execution Viability (Max 25 pts): Base 25 minus trap disruption (-8/trap), unprompted dump penalty (-18), and missing context (-3/signal)
// Total = Cut (0-40) + Prompt (0-35) + AI Execution (0-25) = EXACT 100 PTS MAX

export const INSTRUCTION_VERBS = [
  'act', 'role', 'you are', 'as a', 'as an', 'create', 'generate', 'develop',
  'design', 'write', 'structure', 'build', 'formulate', 'plan', 'draft',
  'outline', 'provide', 'synthesize', 'execute', 'give', 'tell', 'help',
  'explain', 'show', 'make', 'summarize', 'suggest', 'propose', 'devise',
  'architect', 'compose', 'organize', 'deliver', 'prepare', 'guide', 'break down',
  'pitch', 'present', 'detail', 'list', 'strategist', 'founder', 'engineer', 'lead'
];

export function getFragmentKeywords(frag) {
  if (!frag) return [];
  const combined = `${frag.text || ''} ${frag.fullText || ''}`.toLowerCase();
  const numbers = combined.match(/\d+[\d,kmb\-%]*/g) || [];
  const stopWords = new Set([
    'the', 'and', 'for', 'with', 'from', 'this', 'that', 'are', 'was', 'were',
    'role', 'goal', 'format', 'target', 'constraint', 'scope', 'metric', 'directive',
    'channel', 'strategy', 'timeline', 'source', 'platform'
  ]);
  const words = combined
    .replace(/[^a-z0-9]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length >= 3 && !stopWords.has(w));
  return Array.from(new Set([...numbers, ...words]));
}

export function evaluatePlayerRun({ scenario, survivingFragments, promptText }) {
  const prompt = (promptText || '').trim();
  const lowerPrompt = prompt.toLowerCase();
  const words = prompt ? prompt.split(/\s+/).filter(Boolean) : [];
  const wordCount = words.length;

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

  // C. Trivia Noise Penalty: -3 pts per trivia enclosed
  const noisePenalty = noiseCount * 3;

  // Cookie Cut Subtotal (Clamped between 0 and 40)
  const cookieCutScore = Math.max(0, Math.min(40, signalsScore - trapPenalty - noisePenalty));

  // --- PART 2: PROMPT ENGINEERING RIGOR (Max 35 pts) ---
  // Flexible, Personalized Evaluation based on Scenario Keyword Requirements

  // Check which surviving clue requirements are satisfied in promptText
  const coveredRequirements = survivingFragments.filter((frag) => {
    const kws = getFragmentKeywords(frag);
    return kws.some((kw) => lowerPrompt.includes(kw));
  });
  const coveredCount = coveredRequirements.length;
  const totalClues = Math.max(1, survivingFragments.length);
  const coverageRatio = coveredCount / totalClues;

  // A. Requirement Keywords Coverage (Max 20 pts)
  let requirementsScore = 0;
  if (coverageRatio >= 0.75 || coveredCount >= 6) {
    requirementsScore = 20;
  } else if (coverageRatio >= 0.5 || coveredCount >= 4) {
    requirementsScore = 16;
  } else if (coverageRatio >= 0.25 || coveredCount >= 2) {
    requirementsScore = 12;
  } else if (coveredCount >= 1) {
    requirementsScore = 8;
  } else if (wordCount >= 10) {
    requirementsScore = 5;
  }

  // B. Broad Instruction & Intent Recognition (Max 8 pts)
  const hasDirectiveVerb = INSTRUCTION_VERBS.some((v) => lowerPrompt.includes(v));
  const directiveScore = hasDirectiveVerb ? 8 : (wordCount >= 8 ? 5 : 2);

  // C. Personalized Synthesis & Context Depth (Max 7 pts)
  let synthesisScore = 0;
  if (wordCount >= 25) {
    synthesisScore = 7;
  } else if (wordCount >= 15) {
    synthesisScore = 5;
  } else if (wordCount >= 8) {
    synthesisScore = 3;
  } else if (wordCount > 0) {
    synthesisScore = 2;
  }

  // True Clue Dump Detection: Only if user literally clicked 2+ clues and wrote <= 2 original words
  let strippedPrompt = lowerPrompt;
  survivingFragments.forEach((frag) => {
    const fragWords = frag.text.toLowerCase().split(/\s+/);
    fragWords.forEach((fw) => {
      if (fw.length > 2) strippedPrompt = strippedPrompt.replaceAll(fw, '');
    });
  });
  const originalWordCount = strippedPrompt.split(/\s+/).filter((w) => w.length > 2).length;
  const isRawDataDump = originalWordCount <= 2 && survivingFragments.length >= 2 && promptText.length > 20 && !hasDirectiveVerb;

  // Prompt Subtotal (Max 35 pts)
  let promptScore = requirementsScore + directiveScore + synthesisScore;
  if (isRawDataDump) {
    promptScore = Math.min(10, promptScore);
  }
  promptScore = Math.max(0, Math.min(35, promptScore));

  // --- PART 3: AI EXECUTION FEASIBILITY (Max 25 pts) ---
  const trapDamage = trapCount * 8;
  const missingContextDamage = relevantCount < 4 ? (4 - relevantCount) * 2 : 0;
  const dumpPenalty = isRawDataDump ? 10 : 0;

  let aiExecutionScore = 25 - trapDamage - missingContextDamage - dumpPenalty;
  aiExecutionScore = Math.max(0, Math.min(25, aiExecutionScore));

  // --- TOTAL SCORE: EXACT MATHEMATICAL SUM (0 to 100 PTS) ---
  const totalScore = Math.max(0, Math.min(100, cookieCutScore + promptScore + aiExecutionScore));

  // --- DYNAMIC AI OUTPUT SIMULATION ---
  let dynamicAiOutput = scenario.sampleAiSolution;
  let isContaminated = false;
  let contaminationReasons = [];

  if (isRawDataDump && wordCount > 0) {
    isContaminated = true;
    contaminationReasons.push('Execution Failure: Raw clue list without instructions. No prompt framing provided to AI.');
    dynamicAiOutput = `### ⚠️ AI MODEL EXECUTION HALTED (NO PROMPT FRAMING)

#### Prompt Audit & Diagnostic:
* **The Error:** The participant pasted raw context fragments into the workstation without writing prompt instructions or assigning a role.
* **LLM Ingestion Failure:** An LLM is not an autonomous mind that guesses your intent—it requires explicit directive action verbs (e.g. *'Create a 7-day marketing plan'*, *'Act as a Senior Strategist'*).
* **Observed Input Structure:** Only raw data fragments detected:
${survivingFragments.map((f) => `  * [CLUE FRAGMENT]: ${f.text}`).join('\n')}

#### Model Outcome:
* **Task Identified:** NONE (No action command found).
* **Strategy Generated:** HALTED (Produced generic non-actionable hallucination).
* **Feasibility Rating:** ${aiExecutionScore} / 25 PTS (Severe unprompted penalty applied).

* **ACADEMIC & EVALUATION VERDICT:** Dumping data into a prompt window is not prompt engineering. An actionable instruction directive is mandatory.`;
  } else if (trapCount > 0) {
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

  if (isRawDataDump || !hasDirectiveVerb) {
    playerTitle = 'UNPROMPTED DATA DUMP';
    titleBadgeColor = 'text-red-400 border-red-500 bg-red-500/10';
    titleFeedback = 'Disqualified from high marks: Dumped raw clues without writing prompt instructions or directives.';
  } else if (totalScore < 35) {
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
        requirements: requirementsScore,
        directive: directiveScore,
        synthesis: synthesisScore,
        coveredRequirementsCount: coveredCount,
        isRawDataDump,
      },
      aiExecution: aiExecutionScore,
      aiExecutionBreakdown: {
        base: 25,
        trapDamage,
        missingContextDamage,
        dumpPenalty,
      },
    },
    counts: {
      relevantCount,
      noiseCount,
      trapCount,
      wordCount,
      originalWordCount,
      coveredCount,
    },
    aiOutput: dynamicAiOutput,
    isContaminated,
    contaminationReasons,
    isRawDataDump,
    hasDirectiveVerb,
  };
}
