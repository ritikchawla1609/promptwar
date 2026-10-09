/**
 * Operation Blackbox · Retrieval Engine
 * Matches intelligence records against parsed query intents deterministically.
 */

import { INTELLIGENCE_RECORDS } from '../data/records.js';

export function retrieveRelevantRecords(parsedIntent) {
  if (parsedIntent.isEmpty) {
    return {
      topRecords: [],
      citations: [],
      matchedCategories: []
    };
  }

  const {
    sourceIds,
    systems,
    actions,
    timestamps,
    hasDiscrepancyIntent,
    hasComparativeIntent,
    cleanPrompt
  } = parsedIntent;

  const promptLower = cleanPrompt.toLowerCase();

  // Score each record
  const scoredRecords = INTELLIGENCE_RECORDS.map(record => {
    let score = 0;
    const reasons = [];

    // 1. Direct Source ID hit (massively prioritized)
    if (sourceIds.includes(record.id)) {
      score += 100;
      reasons.push('Direct source reference');
    }

    // 2. System alignment
    if (systems.includes('vault_server') && (record.id === 'REC-02' || record.id === 'REC-04' || record.id === 'REC-08' || record.id === 'REC-10')) {
      score += 35;
      reasons.push('Cryogenic vault system match');
    }
    if (systems.includes('optical_relay') && (record.id === 'REC-02' || record.id === 'REC-05' || record.id === 'REC-12')) {
      score += 35;
      reasons.push('Optical relay telemetry match');
    }
    if (systems.includes('firewall_gateway') && (record.id === 'REC-02' || record.id === 'REC-05')) {
      score += 30;
      reasons.push('Perimeter gateway match');
    }
    if (systems.includes('terminal_b12') && (record.id === 'REC-07' || record.id === 'REC-11')) {
      score += 35;
      reasons.push('Terminal B-12 & location audit');
    }
    if (systems.includes('thermal_sensors') && record.id === 'REC-08') {
      score += 40;
      reasons.push('Chassis thermistor match');
    }
    if (systems.includes('storage_san') && (record.id === 'REC-10' || record.id === 'REC-04')) {
      score += 35;
      reasons.push('Storage array volume audit');
    }
    if (systems.includes('power_grid') && record.id === 'REC-03') {
      score += 40;
      reasons.push('Electrical SCADA log');
    }
    if (systems.includes('firmware_audit') && record.id === 'REC-09') {
      score += 40;
      reasons.push('Firmware integrity hash');
    }
    if (systems.includes('ntp_time') && (record.id === 'REC-14' || record.id === 'REC-07')) {
      score += 40;
      reasons.push('Time synchronization standard');
    }

    // 3. Action alignment
    if (actions.includes('script_execution') && (record.id === 'REC-04' || record.id === 'REC-10' || record.id === 'REC-13')) {
      score += 40;
      reasons.push('Diagnostic maintenance script trace');
    }
    if (actions.includes('data_exfiltration') && (record.id === 'REC-02' || record.id === 'REC-05' || record.id === 'REC-10' || record.id === 'REC-12')) {
      score += 35;
      reasons.push('Exfiltration telemetry');
    }
    if (actions.includes('physical_access') && (record.id === 'REC-01' || record.id === 'REC-11' || record.id === 'REC-06')) {
      score += 35;
      reasons.push('Physical turnstile / security badge');
    }
    if (actions.includes('dr_chen') && (record.id === 'REC-06' || record.id === 'REC-07' || record.id === 'REC-11')) {
      score += 45;
      reasons.push('Personnel presence record');
    }
    if (actions.includes('officer_vance') && (record.id === 'REC-06' || record.id === 'REC-07' || record.id === 'REC-14')) {
      score += 45;
      reasons.push('Officer report audit');
    }

    // 4. Timestamp matches
    if (timestamps.some(ts => record.content.toLowerCase().includes(ts.toLowerCase()))) {
      score += 25;
      reasons.push('Timestamp alignment');
    }

    // 5. Discrepancy & conflict cross-reference
    if (hasDiscrepancyIntent && (record.id === 'REC-07' || record.id === 'REC-11' || record.id === 'REC-14')) {
      score += 40;
      reasons.push('Contradiction corroboration');
    }

    // 6. Keyword relevance fallback
    const keyTerms = [
      'exfiltration', '84.6', 'cryo', 'optical', 'diag_vault_sync', 'cron',
      'chen', 'vance', 'thermal', 'san', 'ntp', '1310', 'bypass', 'maintenance'
    ];
    let termHits = 0;
    keyTerms.forEach(term => {
      if (promptLower.includes(term) && record.content.toLowerCase().includes(term)) {
        termHits += 1;
      }
    });
    score += termHits * 8;

    return {
      record,
      score,
      reasons
    };
  });

  // Filter records with meaningful relevance
  const filtered = scoredRecords
    .filter(item => item.score > 15)
    .sort((a, b) => b.score - a.score);

  // If no specific record scored high (e.g. broad query), return the primary foundational records
  let topRecords = filtered.slice(0, 4).map(f => f.record);

  if (topRecords.length === 0) {
    if (parsedIntent.isBroadQuery) {
      topRecords = [
        INTELLIGENCE_RECORDS.find(r => r.id === 'REC-02'),
        INTELLIGENCE_RECORDS.find(r => r.id === 'REC-04')
      ].filter(Boolean);
    }
  }

  const citations = topRecords.map(r => r.id);
  const matchedCategories = [...new Set(topRecords.map(r => r.category))];

  return {
    topRecords,
    citations,
    matchedCategories,
    scores: filtered.map(f => ({ id: f.record.id, score: f.score }))
  };
}
