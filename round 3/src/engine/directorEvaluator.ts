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

  // Empty prompt handling
  if (!cleanPrompt || wordCount === 0) {
    return {
      totalScore: 0,
      categoryScores: {
        elements: { name: 'Required Scene Elements', earned: 0, max: 35, percentage: 0 },
        emotion: { name: 'Emotional Direction', earned: 0, max: 20, percentage: 0 },
        composition: { name: 'Cinematic Composition', earned: 0, max: 20, percentage: 0 },
        lighting: { name: 'Lighting & Atmosphere', earned: 0, max: 15, percentage: 0 },
        consistency: { name: 'Consistency & Tone', earned: 10, max: 10, percentage: 100 },
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

  // 1. Evaluate Scene Elements (Max: 35 pts)
  const elementReqs = mission.requirements.filter(r => r.category === 'element');
  let elementsEarned = 0;
  const maxElements = 35;

  elementReqs.forEach(req => {
    const terms = [...req.primaryTerms, ...req.synonyms];
    const match = matchConcept(normalized, terms);
    if (match.matched) {
      elementsEarned += req.weight;
      satisfiedRequirements.push(req.label);
    } else {
      missingRequirements.push(req.label);
    }
  });

  // 2. Evaluate Emotional Direction (Max: 20 pts)
  const emotionReqs = mission.requirements.filter(r => r.category === 'emotion');
  let emotionEarned = 0;
  const maxEmotion = 20;

  emotionReqs.forEach(req => {
    const terms = [...req.primaryTerms, ...req.synonyms];
    const match = matchConcept(normalized, terms);
    if (match.matched) {
      emotionEarned += req.weight;
      satisfiedRequirements.push(req.label);
    } else {
      missingRequirements.push(req.label);
    }
  });

  // 3. Evaluate Cinematic Composition (Max: 20 pts)
  const compReqs = mission.requirements.filter(r => r.category === 'composition');
  let compEarned = 0;
  const maxComp = 20;

  compReqs.forEach(req => {
    const terms = [...req.primaryTerms, ...req.synonyms];
    const match = matchConcept(normalized, terms);
    if (match.matched) {
      compEarned += req.weight;
      satisfiedRequirements.push(req.label);
    } else {
      missingRequirements.push(req.label);
    }
  });

  // 4. Evaluate Lighting & Atmosphere (Max: 15 pts)
  const lightReqs = mission.requirements.filter(r => r.category === 'lighting');
  let lightingEarned = 0;
  const maxLighting = 15;

  lightReqs.forEach(req => {
    const terms = [...req.primaryTerms, ...req.synonyms];
    const match = matchConcept(normalized, terms);
    if (match.matched) {
      lightingEarned += req.weight;
      satisfiedRequirements.push(req.label);
    } else {
      missingRequirements.push(req.label);
    }
  });

  // 5. Evaluate Consistency & Contradictions (Max: 10 pts)
  const maxConsistency = 10;
  let consistencyEarned = 10;
  const detectedContradictions: string[] = [];

  mission.contradictions.forEach(rule => {
    const match = matchConcept(normalized, rule.conflictingTerms);
    if (match.matched) {
      consistencyEarned = Math.max(0, consistencyEarned - rule.penalty);
      detectedContradictions.push(rule.explanation);
    }
  });

  // Apply repetition/spam dampening if detected
  const dampener = calculateRepetitionDampener(cleanPrompt);
  elementsEarned = Math.round(elementsEarned * dampener);
  emotionEarned = Math.round(emotionEarned * dampener);
  compEarned = Math.round(compEarned * dampener);
  lightingEarned = Math.round(lightingEarned * dampener);

  // Partial credit cap check
  elementsEarned = Math.min(maxElements, Math.max(0, elementsEarned));
  emotionEarned = Math.min(maxEmotion, Math.max(0, emotionEarned));
  compEarned = Math.min(maxComp, Math.max(0, compEarned));
  lightingEarned = Math.min(maxLighting, Math.max(0, lightingEarned));
  consistencyEarned = Math.min(maxConsistency, Math.max(0, consistencyEarned));

  const totalScore = Math.min(100, Math.max(0, elementsEarned + emotionEarned + compEarned + lightingEarned + consistencyEarned));

  // Generate Constructive Director Feedback Notes
  if (satisfiedRequirements.length >= 5 && detectedContradictions.length === 0) {
    feedbackNotes.push('The primary scene elements, atmosphere, and camera framing are harmoniously captured.');
  } else if (elementsEarned >= 25) {
    feedbackNotes.push('Core subjects and environmental elements are well established in the frame.');
  }

  if (emotionEarned < maxEmotion) {
    feedbackNotes.push(`The character's emotional nuance needs stronger emphasis (${mission.brief.emotionRequirement.toLowerCase()}).`);
  }

  if (compEarned < maxComp) {
    feedbackNotes.push(`Specify camera distance, angle, or cinematic depth (e.g., ${mission.brief.compositionRequirement.toLowerCase()}).`);
  }

  if (lightingEarned < maxLighting) {
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

  return {
    totalScore,
    categoryScores: {
      elements: {
        name: 'Required Scene Elements',
        earned: elementsEarned,
        max: maxElements,
        percentage: Math.round((elementsEarned / maxElements) * 100)
      },
      emotion: {
        name: 'Emotional Direction',
        earned: emotionEarned,
        max: maxEmotion,
        percentage: Math.round((emotionEarned / maxEmotion) * 100)
      },
      composition: {
        name: 'Cinematic Composition',
        earned: compEarned,
        max: maxComp,
        percentage: Math.round((compEarned / maxComp) * 100)
      },
      lighting: {
        name: 'Lighting & Atmosphere',
        earned: lightingEarned,
        max: maxLighting,
        percentage: Math.round((lightingEarned / maxLighting) * 100)
      },
      consistency: {
        name: 'Consistency & Tone',
        earned: consistencyEarned,
        max: maxConsistency,
        percentage: Math.round((consistencyEarned / maxConsistency) * 100)
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
