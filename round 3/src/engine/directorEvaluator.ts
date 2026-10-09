import { Mission, EvaluationResult, CategoryScore, ConceptRequirement } from '../types/frameZero';

/**
 * Normalizes text for semantic token matching.
 */
function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[-_–—/]/g, ' ')
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Checks if any term in terms list is present in the prompt.
 * Supports multi-word phrases and robust token/substring matching.
 */
function matchConcept(normalizedPrompt: string, terms: string[]): { matched: boolean; matchedTerm: string | null } {
  const paddedPrompt = ` ${normalizedPrompt} `;
  for (const term of terms) {
    const cleanTerm = normalizeText(term);
    if (!cleanTerm) continue;

    // Check whole phrase within word boundary / spaces
    if (paddedPrompt.includes(` ${cleanTerm} `) || normalizedPrompt.includes(cleanTerm)) {
      return { matched: true, matchedTerm: cleanTerm };
    }

    // Also support prefix/word matching for compound roots
    const termWords = cleanTerm.split(' ');
    if (termWords.length > 1) {
      const allWordsPresent = termWords.every(w => paddedPrompt.includes(` ${w} `) || paddedPrompt.includes(w));
      if (allWordsPresent) {
        return { matched: true, matchedTerm: cleanTerm };
      }
    }
  }
  return { matched: false, matchedTerm: null };
}

/**
 * Checks for keyword stuffing / spam.
 * If a word appears more than 3 times, or word repetition ratio is abnormal,
 * it returns a dampening factor.
 */
function calculateRepetitionDampener(rawPrompt: string): number {
  const words = rawPrompt.toLowerCase().split(/\s+/).filter(w => w.length > 3);
  if (words.length === 0) return 1.0;

  const frequency: Record<string, number> = {};
  for (const w of words) {
    frequency[w] = (frequency[w] || 0) + 1;
  }

  let excessiveRepeats = 0;
  for (const count of Object.values(frequency)) {
    if (count >= 4) {
      excessiveRepeats += (count - 3);
    }
  }

  // Deduct dampener if spamming keywords
  if (excessiveRepeats >= 3) {
    return Math.max(0.65, 1.0 - (excessiveRepeats * 0.05));
  }
  return 1.0;
}

export function evaluateDirectorPrompt(rawPrompt: string, mission: Mission): EvaluationResult {
  const cleanPrompt = rawPrompt.trim();
  const normalized = normalizeText(cleanPrompt);
  const words = cleanPrompt.split(/\s+/).filter(Boolean);
  const wordCount = words.length;

  const maxElements = 35;
  const maxEmotion = 20;
  const maxComp = 20;
  const maxLighting = 15;
  const maxConsistency = 10;

  // Empty or ultra-short input handling (< 3 words or blank)
  if (!cleanPrompt || wordCount === 0) {
    return {
      totalScore: 0,
      categoryScores: {
        elements: { name: 'Required Scene Elements', earned: 0, max: maxElements, percentage: 0, explanation: 'Slate is empty. No scene elements specified.', evidence: [] },
        emotion: { name: 'Emotional Direction', earned: 0, max: maxEmotion, percentage: 0, explanation: 'No emotional nuance specified.', evidence: [] },
        composition: { name: 'Cinematic Composition', earned: 0, max: maxComp, percentage: 0, explanation: 'No camera framing or composition specified.', evidence: [] },
        lighting: { name: 'Lighting & Atmosphere', earned: 0, max: maxLighting, percentage: 0, explanation: 'No lighting or atmospheric direction specified.', evidence: [] },
        consistency: { name: 'Consistency & Tone', earned: 0, max: maxConsistency, percentage: 0, explanation: 'Empty prompt cannot demonstrate scene-consistent tone.', evidence: [] },
      },
      satisfiedRequirements: [],
      missingRequirements: mission.requirements.map(r => r.label),
      detectedContradictions: [],
      feedbackNotes: ['The director’s slate is empty. Write instructions to frame the scene.'],
      directorRank: 'Empty Frame',
      promptWordCount: 0,
      isLocked: false
    };
  }

  const satisfiedRequirements: string[] = [];
  const missingRequirements: string[] = [];
  const feedbackNotes: string[] = [];

  // Track evidence per category
  const elementsEvidence: string[] = [];
  const emotionEvidence: string[] = [];
  const compEvidence: string[] = [];
  const lightingEvidence: string[] = [];

  // 1. Evaluate Scene Elements (Max: 35 pts)
  const elementReqs = mission.requirements.filter(r => r.category === 'element');
  let elementsEarned = 0;

  elementReqs.forEach(req => {
    const terms = [...req.primaryTerms, ...req.synonyms];
    const match = matchConcept(normalized, terms);
    if (match.matched) {
      elementsEarned += req.weight;
      satisfiedRequirements.push(req.label);
      if (match.matchedTerm) elementsEvidence.push(`${req.label} ("${match.matchedTerm}")`);
    } else {
      missingRequirements.push(req.label);
    }
  });

  // 2. Evaluate Emotional Direction (Max: 20 pts)
  const emotionReqs = mission.requirements.filter(r => r.category === 'emotion');
  let emotionEarned = 0;

  emotionReqs.forEach(req => {
    const terms = [...req.primaryTerms, ...req.synonyms];
    const match = matchConcept(normalized, terms);
    if (match.matched) {
      emotionEarned += req.weight;
      satisfiedRequirements.push(req.label);
      if (match.matchedTerm) emotionEvidence.push(`${req.label} ("${match.matchedTerm}")`);
    } else {
      missingRequirements.push(req.label);
    }
  });

  // 3. Evaluate Cinematic Composition (Max: 20 pts)
  const compReqs = mission.requirements.filter(r => r.category === 'composition');
  let compEarned = 0;

  compReqs.forEach(req => {
    const terms = [...req.primaryTerms, ...req.synonyms];
    const match = matchConcept(normalized, terms);
    if (match.matched) {
      compEarned += req.weight;
      satisfiedRequirements.push(req.label);
      if (match.matchedTerm) compEvidence.push(`${req.label} ("${match.matchedTerm}")`);
    } else {
      missingRequirements.push(req.label);
    }
  });

  // 4. Evaluate Lighting & Atmosphere (Max: 15 pts)
  const lightReqs = mission.requirements.filter(r => r.category === 'lighting');
  let lightingEarned = 0;

  lightReqs.forEach(req => {
    const terms = [...req.primaryTerms, ...req.synonyms];
    const match = matchConcept(normalized, terms);
    if (match.matched) {
      lightingEarned += req.weight;
      satisfiedRequirements.push(req.label);
      if (match.matchedTerm) lightingEvidence.push(`${req.label} ("${match.matchedTerm}")`);
    } else {
      missingRequirements.push(req.label);
    }
  });

  // Apply repetition/spam dampening if detected
  const dampener = calculateRepetitionDampener(cleanPrompt);
  elementsEarned = Math.round(elementsEarned * dampener);
  emotionEarned = Math.round(emotionEarned * dampener);
  compEarned = Math.round(compEarned * dampener);
  lightingEarned = Math.round(lightingEarned * dampener);

  // Clamp category sub-scores
  elementsEarned = Math.min(maxElements, Math.max(0, elementsEarned));
  emotionEarned = Math.min(maxEmotion, Math.max(0, emotionEarned));
  compEarned = Math.min(maxComp, Math.max(0, compEarned));
  lightingEarned = Math.min(maxLighting, Math.max(0, lightingEarned));

  // 5. Evaluate Consistency & Contradictions (Max: 10 pts)
  // CRITICAL FIX: Consistency must NOT default to 10/10 if the prompt is meaningless,
  // unrelated, or has zero substantive content matching the scene brief!
  const substantiveScore = elementsEarned + emotionEarned + compEarned + lightingEarned;
  const detectedContradictions: string[] = [];

  let consistencyEarned = 0;
  let consistencyExplanation = '';

  mission.contradictions.forEach(rule => {
    const match = matchConcept(normalized, rule.conflictingTerms);
    if (match.matched) {
      detectedContradictions.push(rule.explanation);
    }
  });

  if (substantiveScore === 0) {
    // Quality Gate: Prompt has no relevant scene content (e.g. "its very goof", random noise)
    consistencyEarned = 0;
    consistencyExplanation = 'No scene elements or directorial directives detected. Tonal consistency cannot be awarded.';
    feedbackNotes.push('The submitted direction lacks relevance to the scene brief. Review the requirements and re-frame the scene.');
  } else {
    // Award consistency proportional to established scene substance and absence of contradictions
    // Scale base consistency: 1-10 based on substantive score
    // 35+ substantive points allows full 10 base consistency
    const baseConsistency = Math.min(maxConsistency, Math.max(2, Math.round((substantiveScore / 35) * maxConsistency)));
    
    let penaltyTotal = 0;
    mission.contradictions.forEach(rule => {
      const match = matchConcept(normalized, rule.conflictingTerms);
      if (match.matched) {
        penaltyTotal += rule.penalty;
      }
    });

    consistencyEarned = Math.max(0, baseConsistency - penaltyTotal);

    if (detectedContradictions.length > 0) {
      consistencyExplanation = `Tonal contradiction detected: ${detectedContradictions.join('; ')}`;
    } else if (substantiveScore >= 35) {
      consistencyExplanation = 'Scene direction maintains strong narrative cohesion and tonal consistency with the brief.';
    } else {
      consistencyExplanation = 'Partial narrative consistency established for identified scene elements.';
    }
  }

  consistencyEarned = Math.min(maxConsistency, Math.max(0, consistencyEarned));

  const totalScore = Math.min(100, Math.max(0, elementsEarned + emotionEarned + compEarned + lightingEarned + consistencyEarned));

  // Generate Constructive Director Feedback Notes
  if (satisfiedRequirements.length >= 5 && detectedContradictions.length === 0) {
    feedbackNotes.push('The primary scene elements, atmosphere, and camera framing are harmoniously captured.');
  } else if (elementsEarned >= 25) {
    feedbackNotes.push('Core subjects and environmental elements are well established in the frame.');
  }

  if (substantiveScore > 0 && emotionEarned < maxEmotion) {
    feedbackNotes.push(`The character's emotional nuance needs stronger emphasis (${mission.brief.emotionRequirement.toLowerCase()}).`);
  }

  if (substantiveScore > 0 && compEarned < maxComp) {
    feedbackNotes.push(`Specify camera distance, angle, or cinematic depth (e.g., ${mission.brief.compositionRequirement.toLowerCase()}).`);
  }

  if (substantiveScore > 0 && lightingEarned < maxLighting) {
    feedbackNotes.push(`Describe the interplay of lighting and atmosphere (${mission.brief.lightingRequirement.toLowerCase()}).`);
  }

  detectedContradictions.forEach(c => {
    feedbackNotes.push(`Tone Conflict: ${c}`);
  });

  if (dampener < 1.0) {
    feedbackNotes.push('Excessive word repetition detected. Concise directing communicates artistic vision more effectively.');
  }

  // Determine Director Tier Rank
  let directorRank = 'Apprentice Director';
  if (totalScore >= 92) directorRank = 'Master Auteur (巨匠)';
  else if (totalScore >= 80) directorRank = 'Visionary Director (名監督)';
  else if (totalScore >= 65) directorRank = 'Cinematic Stylist (演出家)';
  else if (totalScore >= 45) directorRank = 'Assistant Director (助監督)';
  else if (totalScore === 0) directorRank = 'Empty Frame';

  return {
    totalScore,
    categoryScores: {
      elements: {
        name: 'Required Scene Elements',
        earned: elementsEarned,
        max: maxElements,
        percentage: Math.round((elementsEarned / maxElements) * 100),
        explanation: `${elementsEarned}/${maxElements} pts awarded. ${satisfiedRequirements.filter(r => elementReqs.some(e => e.label === r)).length} of ${elementReqs.length} elements verified.`,
        evidence: elementsEvidence,
      },
      emotion: {
        name: 'Emotional Direction',
        earned: emotionEarned,
        max: maxEmotion,
        percentage: Math.round((emotionEarned / maxEmotion) * 100),
        explanation: `${emotionEarned}/${maxEmotion} pts awarded for emotional nuances.`,
        evidence: emotionEvidence,
      },
      composition: {
        name: 'Cinematic Composition',
        earned: compEarned,
        max: maxComp,
        percentage: Math.round((compEarned / maxComp) * 100),
        explanation: `${compEarned}/${maxComp} pts awarded for camera framing and perspective.`,
        evidence: compEvidence,
      },
      lighting: {
        name: 'Lighting & Atmosphere',
        earned: lightingEarned,
        max: maxLighting,
        percentage: Math.round((lightingEarned / maxLighting) * 100),
        explanation: `${lightingEarned}/${maxLighting} pts awarded for lighting and atmospheric mood.`,
        evidence: lightingEvidence,
      },
      consistency: {
        name: 'Consistency & Tone',
        earned: consistencyEarned,
        max: maxConsistency,
        percentage: Math.round((consistencyEarned / maxConsistency) * 100),
        explanation: consistencyExplanation,
        evidence: detectedContradictions.length > 0 ? [`Contradictions: ${detectedContradictions.join(', ')}`] : ['No contradictory directives.'],
      }
    },
    satisfiedRequirements,
    missingRequirements,
    detectedContradictions,
    feedbackNotes,
    directorRank,
    promptWordCount: wordCount,
    isLocked: false
  };
}
