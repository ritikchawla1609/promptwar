/**
 * Operation Blackbox · Scoring Engine
 * 100-Point Rubric with Explicit Partial Credit
 * 
 * - Information extraction: 25 points
 * - Prompt precision: 25 points
 * - Reasoning and verification: 20 points
 * - Constraint handling: 15 points
 * - Final answer: 15 points
 */

import { MISSION_METADATA } from '../data/records.js';

export function calculateLiveScore(promptHistory, discoveredEvidence, submissionData = null) {
  // 1. Information Extraction (25 pts)
  let infoScore = 0;
  const discoveredEntities = new Set();
  const discoveredSources = new Set(discoveredEvidence || []);

  promptHistory.forEach(entry => {
    const { parsedIntent } = entry;
    if (parsedIntent) {
      parsedIntent.systems?.forEach(s => discoveredEntities.add(s));
      parsedIntent.actions?.forEach(a => discoveredEntities.add(a));
    }
  });

  // Compromised host identified
  if (discoveredEntities.has('vault_server') || discoveredSources.has('REC-04') || discoveredSources.has('REC-10')) {
    infoScore += 7;
  }
  // Exfiltration volume / optical relay identified
  if (discoveredEntities.has('optical_relay') || discoveredSources.has('REC-02') || discoveredSources.has('REC-05')) {
    infoScore += 6;
  }
  // Root script execution identified
  if (discoveredEntities.has('script_execution') || discoveredSources.has('REC-04') || discoveredSources.has('REC-13')) {
    infoScore += 6;
  }
  // Diagnostic bus bypass / physical sensors identified
  if (discoveredEntities.has('thermal_sensors') || discoveredEntities.has('storage_san') || discoveredSources.has('REC-08') || discoveredSources.has('REC-12')) {
    infoScore += 6;
  }
  infoScore = Math.min(25, infoScore);

  // 2. Prompt Precision (25 pts)
  let precisionScore = 0;
  if (promptHistory.length > 0) {
    const validPrompts = promptHistory.filter(p => !p.parsedIntent?.isEmpty && !p.parsedIntent?.isMetaQuery);
    if (validPrompts.length > 0) {
      // Calculate average precision from intent parser
      const avgPrecision = validPrompts.reduce((acc, p) => acc + (p.parsedIntent?.precisionScore || 0), 0) / validPrompts.length;
      
      // Bonus for source ID referencing in queries
      const usedSourceRef = validPrompts.some(p => p.parsedIntent?.sourceIds?.length > 0);
      const usedSpecificEntities = validPrompts.some(p => (p.parsedIntent?.systems?.length || 0) + (p.parsedIntent?.actions?.length || 0) >= 2);
      
      precisionScore = Math.round(avgPrecision * 0.6) + (usedSourceRef ? 5 : 0) + (usedSpecificEntities ? 5 : 0);
    }
  }
  precisionScore = Math.min(25, Math.max(0, precisionScore));

  // 3. Reasoning & Verification (20 pts)
  let reasoningScore = 0;
  // Cross-referencing 2 or more sources
  const multiSourcePrompt = promptHistory.some(p => (p.parsedIntent?.sourceIds?.length || 0) >= 2 || p.parsedIntent?.hasComparativeIntent);
  if (multiSourcePrompt) reasoningScore += 8;

  // Investigating discrepancy or checking Dr. Chen's departure against Vance
  const checkedDiscrepancy = promptHistory.some(p => p.parsedIntent?.hasDiscrepancyIntent || (p.parsedIntent?.sourceIds?.includes('REC-07') && p.parsedIntent?.sourceIds?.includes('REC-11')));
  if (checkedDiscrepancy) reasoningScore += 7;

  // Ruled out firmware / power grid or verified NTP standard
  const checkedBaseline = promptHistory.some(p => p.parsedIntent?.systems?.includes('firmware_audit') || p.parsedIntent?.systems?.includes('power_grid') || p.parsedIntent?.systems?.includes('ntp_time'));
  if (checkedBaseline) reasoningScore += 5;

  reasoningScore = Math.min(20, reasoningScore);

  // 4. Constraint Handling (15 pts)
  let constraintScore = 0;
  // Applied temporal / timestamp constraint
  const usedTimeConstraint = promptHistory.some(p => p.parsedIntent?.hasTemporalConstraint);
  if (usedTimeConstraint) constraintScore += 5;

  // Filtered by specific subsystem or interface
  const usedSubsystemFilter = promptHistory.some(p => (p.parsedIntent?.systems?.length || 0) >= 1 && (p.parsedIntent?.actions?.length || 0) >= 1);
  if (usedSubsystemFilter) constraintScore += 5;

  // Explicitly asked for citations, evidence, or specific document fields
  const askedForCitations = promptHistory.some(p => /\b(?:citation|evidence|source|record\s*id|log\s*entry|proof)\b/i.test(p.prompt || ''));
  if (askedForCitations) constraintScore += 5;

  constraintScore = Math.min(15, constraintScore);

  // 5. Final Answer (15 pts)
  let finalScore = 0;
  const answerBreakdown = {
    system: 0,
    vector: 0,
    sequence: 0,
    trapRecord: 0,
    discrepancy: 0
  };

  if (submissionData) {
    const {
      selectedSystem,
      selectedVector,
      selectedSequence,
      selectedTrapRecord,
      discrepancyExplanation
    } = submissionData;

    // A. Compromised System (3 pts)
    if (selectedSystem === 'vault_server') {
      answerBreakdown.system = 3;
      finalScore += 3;
    }

    // B. Breach Mechanism (3 pts)
    if (selectedVector === 'cron_script') {
      answerBreakdown.vector = 3;
      finalScore += 3;
    }

    // C. Chronological Sequence (3 pts)
    if (selectedSequence === 'correct_chronology') {
      answerBreakdown.sequence = 3;
      finalScore += 3;
    } else if (selectedSequence === 'partial_chronology') {
      answerBreakdown.sequence = 1.5;
      finalScore += 1.5;
    }

    // D. Trap Record Identification (3 pts)
    if (selectedTrapRecord === 'REC-07') {
      answerBreakdown.trapRecord = 3;
      finalScore += 3;
    }

    // E. Discrepancy Explanation (3 pts)
    if (discrepancyExplanation && discrepancyExplanation.trim().length >= 20) {
      const lowerExp = discrepancyExplanation.toLowerCase();
      let expHits = 0;
      if (lowerExp.includes('utc') || lowerExp.includes('timezone') || lowerExp.includes('time zone') || lowerExp.includes('cest') || lowerExp.includes('wrist') || lowerExp.includes('offset')) {
        expHits += 1.5;
      }
      if (lowerExp.includes('chen') || lowerExp.includes('gate') || lowerExp.includes('depart') || lowerExp.includes('02:15') || lowerExp.includes('car') || lowerExp.includes('rec-11')) {
        expHits += 1.5;
      }
      answerBreakdown.discrepancy = Math.min(3, expHits || 1); // at least partial 1 if detailed
      finalScore += answerBreakdown.discrepancy;
    }
  }

  finalScore = Math.min(15, Math.round(finalScore));

  const totalScore = Math.min(100, Math.round(infoScore + precisionScore + reasoningScore + constraintScore + finalScore));

  // Performance Tier
  let performanceTier = 'Provisional Operative';
  if (totalScore >= 90) performanceTier = 'Principal Forensics Specialist';
  else if (totalScore >= 75) performanceTier = 'Senior Intelligence Analyst';
  else if (totalScore >= 60) performanceTier = 'Tactical Verification Officer';
  else if (totalScore >= 40) performanceTier = 'Field Intelligence Investigator';

  return {
    totalScore,
    breakdown: {
      informationExtraction: infoScore,
      promptPrecision: precisionScore,
      reasoningVerification: reasoningScore,
      constraintHandling: constraintScore,
      finalAnswer: finalScore
    },
    answerBreakdown,
    performanceTier,
    discoveredSourceCount: discoveredSources.size,
    promptCount: promptHistory.length
  };
}
