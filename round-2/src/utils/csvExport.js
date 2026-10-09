/**
 * Operation Blackbox · CSV Report Exporter
 */

export function exportSessionToCSV({
  teamName,
  scoreData,
  submissionData,
  promptHistory,
  discoveredEvidence,
  elapsedSeconds
}) {
  const timestamp = new Date().toISOString();
  const rows = [];

  // Header / Metadata
  rows.push(['OPERATION BLACKBOX - MISSION DEBRIEF REPORT']);
  rows.push(['Generated At', timestamp]);
  rows.push(['Team Name', teamName || 'Anonymous Team']);
  rows.push(['Performance Tier', scoreData?.performanceTier || 'N/A']);
  rows.push(['Total Score (out of 100)', scoreData?.totalScore || 0]);
  rows.push(['Time Elapsed (seconds)', elapsedSeconds || 0]);
  rows.push([]);

  // Rubric Breakdown
  rows.push(['SCORE BREAKDOWN', 'POINTS EARNED', 'MAX POINTS']);
  rows.push(['Information Extraction', scoreData?.breakdown?.informationExtraction || 0, 25]);
  rows.push(['Prompt Precision', scoreData?.breakdown?.promptPrecision || 0, 25]);
  rows.push(['Reasoning & Verification', scoreData?.breakdown?.reasoningVerification || 0, 20]);
  rows.push(['Constraint Handling', scoreData?.breakdown?.constraintHandling || 0, 15]);
  rows.push(['Final Answer', scoreData?.breakdown?.finalAnswer || 0, 15]);
  rows.push([]);

  // Discovered Evidence
  rows.push(['DISCOVERED EVIDENCE SOURCES', (discoveredEvidence || []).join('; ')]);
  rows.push([]);

  // Submission Details
  if (submissionData) {
    rows.push(['FINAL SUBMISSION DETAILS']);
    rows.push(['Compromised System', submissionData.selectedSystem || 'None']);
    rows.push(['Breach Vector', submissionData.selectedVector || 'None']);
    rows.push(['Event Sequence', submissionData.selectedSequence || 'None']);
    rows.push(['Trap Record Identified', submissionData.selectedTrapRecord || 'None']);
    rows.push(['Contradiction Explanation', `"${(submissionData.discrepancyExplanation || '').replace(/"/g, '""')}"`]);
    rows.push([]);
  }

  // Prompt History
  rows.push(['PROMPT QUERY AUDIT TRAIL']);
  rows.push(['#', 'Timestamp', 'Query Text', 'Citations Retrieved', 'Precision Score']);
  (promptHistory || []).forEach((item, index) => {
    const escapedPrompt = `"${(item.prompt || '').replace(/"/g, '""')}"`;
    const citations = (item.response?.citations || []).join('; ');
    rows.push([
      index + 1,
      item.timestamp || 'N/A',
      escapedPrompt,
      citations,
      item.parsedIntent?.precisionScore || 0
    ]);
  });

  const csvContent = rows.map(r => r.join(',')).join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  const safeTeam = (teamName || 'team').toLowerCase().replace(/[^a-z0-9]/g, '_');
  link.setAttribute('download', `blackbox_report_${safeTeam}_${Date.now()}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
