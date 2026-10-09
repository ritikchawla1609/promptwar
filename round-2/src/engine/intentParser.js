/**
 * Operation Blackbox · Intent Parser
 * Deterministic local linguistic & entity analyzer for intelligence queries.
 */

export function parsePromptIntent(rawPrompt) {
  if (!rawPrompt || typeof rawPrompt !== 'string') {
    return {
      isEmpty: true,
      rawPrompt: '',
      cleanPrompt: '',
      wordCount: 0,
      charCount: 0,
      entities: [],
      systems: [],
      timestamps: [],
      sourceIds: [],
      hasTemporalConstraint: false,
      hasComparativeIntent: false,
      hasDiscrepancyIntent: false,
      isTrapSusceptible: false,
      isMetaQuery: false,
      isBroadQuery: false,
      precisionScore: 0
    };
  }

  const prompt = rawPrompt.trim();
  const lower = prompt.toLowerCase();
  const words = prompt.split(/\s+/).filter(Boolean);
  const wordCount = words.length;
  const charCount = prompt.length;

  // 1. Detect Source IDs (e.g. REC-01, REC-12, REC 04, record 7)
  const sourceIdMatches = prompt.match(/\b(?:REC[-_ ]?0?([1-9]|1[0-4])|record[-_ ]?0?([1-9]|1[0-4]))\b/gi) || [];
  const normalizedSourceIds = [...new Set(sourceIdMatches.map(m => {
    const num = m.replace(/[^0-9]/g, '');
    const padded = num.padStart(2, '0');
    return `REC-${padded}`;
  }))];

  // 2. Systems & Infrastructure Entity Detection
  const systems = [];
  if (/\b(?:sv[-_ ]?4[-_ ]?cryo[-_ ]?09|cryo(?:genic)?(?:\s+vault|\s+server)?|vault\s+host|sub[-_ ]?level\s*4)\b/i.test(prompt)) {
    systems.push('vault_server');
  }
  if (/\b(?:optical\s+relay|optilink|transceiver|fiber|spectr(?:um|ometer)|1310\s*nm|1550\s*nm|diagnostic\s+bus|lambda[-_ ]?14)\b/i.test(prompt)) {
    systems.push('optical_relay');
  }
  if (/\b(?:firewall|gateway|border\s+gw|sess[-_ ]?99410|port\s*8443|198\.51\.100\.44)\b/i.test(prompt)) {
    systems.push('firewall_gateway');
  }
  if (/\b(?:terminal\s*b[-_ ]?12|workstation|surface\s+terminal)\b/i.test(prompt)) {
    systems.push('terminal_b12');
  }
  if (/\b(?:power\s+grid|scada|chiller|substation|feeder)\b/i.test(prompt)) {
    systems.push('power_grid');
  }
  if (/\b(?:firmware|bios|tpm|uefi|rootkit|bootkit|hash)\b/i.test(prompt)) {
    systems.push('firmware_audit');
  }
  if (/\b(?:sensor|thermal|temperature|thermistor|bay\s*4|coolant)\b/i.test(prompt)) {
    systems.push('thermal_sensors');
  }
  if (/\b(?:san|storage|seq_v4|genomic|chimera|database)\b/i.test(prompt)) {
    systems.push('storage_san');
  }
  if (/\b(?:ntp|clock|time\s+server|stratum|synchronization|drift)\b/i.test(prompt)) {
    systems.push('ntp_time');
  }

  // 3. Vector / Action Detection
  const actions = [];
  if (/\b(?:diag_vault_sync\.sh|cron(?:tab)?|script|scheduled\s+maintenance|pid\s*14209|maintenance\s+routine)\b/i.test(prompt)) {
    actions.push('script_execution');
  }
  if (/\b(?:exfiltration|transfer|egress|leak|stolen|download|upload|sink|84\.6\s*gb|packet\s+counter)\b/i.test(prompt)) {
    actions.push('data_exfiltration');
  }
  if (/\b(?:badge|physical\s+access|turnstile|gate\s*1|kowalski|door|airlock)\b/i.test(prompt)) {
    actions.push('physical_access');
  }
  if (/\b(?:chen|evelyn|doctor|vehicle|car|departure|license\s+plate)\b/i.test(prompt)) {
    actions.push('dr_chen');
  }
  if (/\b(?:vance|aris|guard|officer|incident\s+memo|security\s+lead)\b/i.test(prompt)) {
    actions.push('officer_vance');
  }

  // 4. Timestamp & Temporal Constraints
  const timestampMatches = prompt.match(/\b(?:0?[0-9]|1[0-9]|2[0-3]):[0-5][0-9](?::[0-5][0-9])?(?:\s*(?:utc|cest|am|pm|local))?\b/gi) || [];
  const hasTimeKeywords = /\b(?:utc|timeline|chronolog(?:y|ical)|order\s+of\s+events|sequence|between|after|before|timestamp|window)\b/i.test(prompt);
  const hasTemporalConstraint = timestampMatches.length > 0 || hasTimeKeywords;

  // 5. Comparison & Discrepancy Intent
  const hasComparativeIntent = /\b(?:compare|corroborat(?:e|ing)|cross[-_ ]?reference|versus|vs\.?|differ(?:ence)?|match(?:ing)?|agree)\b/i.test(prompt);
  const hasDiscrepancyIntent = /\b(?:discrepancy|contradict(?:ion)?|unreliable|dispute|fake|false|trap|mismatch|conflict|inaccurate|alibi|timezone|offset|wristwatch)\b/i.test(prompt);

  // 6. Trap Susceptibility
  // If player asks specifically why Dr. Chen did it or how Terminal B-12 was breached without skepticism
  const isTrapSusceptible = /\b(?:why\s+did\s+(?:dr\s+)?chen|how\s+did\s+(?:dr\s+)?chen\s+steal|terminal\s*b[-_ ]?12\s+(?:breach|compromise)|confirm\s+(?:dr\s+)?chen)\b/i.test(prompt)
    && !hasDiscrepancyIntent;

  // 7. Meta Queries (Cheat attempts, prompt injections)
  const isMetaQuery = /\b(?:ignore\s+previous|system\s+prompt|reveal\s+(?:all|the\s+answer|solution)|tell\s+me\s+who\s+did\s+it|cheat|answer\s+key)\b/i.test(prompt);

  // 8. Broad Queries
  const isBroadQuery = (wordCount < 6 && /\b(?:what\s+happened|summary|overview|tell\s+me\s+everything|status|who\s+did\s+it|help)\b/i.test(lower))
    || (systems.length === 0 && actions.length === 0 && normalizedSourceIds.length === 0 && !hasTemporalConstraint);

  // 9. Precision Scoring
  // Specificity + source reference + constraints + proper question formulation
  let precisionPoints = 0;
  if (wordCount >= 5 && wordCount <= 60) precisionPoints += 5;
  if (systems.length >= 1) precisionPoints += 6;
  if (actions.length >= 1) precisionPoints += 5;
  if (normalizedSourceIds.length >= 1) precisionPoints += 5;
  if (hasTemporalConstraint) precisionPoints += 4;
  if (hasComparativeIntent || hasDiscrepancyIntent) precisionPoints += 5;
  if (isBroadQuery) precisionPoints = Math.min(precisionPoints, 6);
  if (isMetaQuery) precisionPoints = 2;

  return {
    rawPrompt,
    cleanPrompt: prompt,
    wordCount,
    charCount,
    sourceIds: normalizedSourceIds,
    systems,
    actions,
    timestamps: timestampMatches,
    hasTemporalConstraint,
    hasComparativeIntent,
    hasDiscrepancyIntent,
    isTrapSusceptible,
    isMetaQuery,
    isBroadQuery,
    precisionScore: Math.min(25, precisionPoints)
  };
}
