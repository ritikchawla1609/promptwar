/**
 * Operation Blackbox · Response Generator
 * Produces structured conversational intelligence briefings deterministically.
 */

export function generateIntelligenceResponse(parsedIntent, retrievalResult, missionState) {
  const {
    isEmpty,
    cleanPrompt,
    systems,
    actions,
    timestamps,
    hasDiscrepancyIntent,
    hasComparativeIntent,
    isTrapSusceptible,
    isMetaQuery,
    isBroadQuery,
    sourceIds
  } = parsedIntent;

  const { topRecords, citations } = retrievalResult;

  // 1. Empty Prompt Handling
  if (isEmpty) {
    return {
      summary: "No prompt submitted.",
      establishedFacts: [],
      uncertainties: ["Enter an investigative query into the prompt editor to query the intelligence archive."],
      improvementTip: "Ask a specific question referencing a system, timestamp, or record ID.",
      citations: []
    };
  }

  // 2. Meta / Cheat / Injection Prompt Handling
  if (isMetaQuery) {
    return {
      summary: "Security Protocol Enforced",
      establishedFacts: [
        {
          text: "The intelligence archive does not disclose conclusions directly. You must formulate forensic queries against the facility telemetry, access logs, and system audits.",
          citation: null
        }
      ],
      uncertainties: ["Direct solution reveals are restricted by audit policy."],
      improvementTip: "Frame your prompt as a forensic inquiry: query specific events, network routes, or conflicting timestamps.",
      citations: []
    };
  }

  // 3. Trap Query Handling (Accepting Vance's claim about Dr. Chen)
  if (isTrapSusceptible) {
    return {
      summary: "Preliminary Report Scrutiny Required",
      establishedFacts: [
        {
          text: "Officer Vance's preliminary memorandum suggests Terminal B-12 activity attributed to Dr. Chen at 05:17 local time.",
          citation: "REC-07"
        },
        {
          text: "However, surface gate RFID telemetry confirms Dr. Chen's vehicle departed facility grounds earlier that night at 02:15 UTC and did not return.",
          citation: "REC-11"
        }
      ],
      uncertainties: [
        "Vance's handwritten log uses local wristwatch time without timezone specification. Compare this with facility NTP synchronization standard.",
        "Physical terminal audit records for Terminal B-12 show zero active keystrokes."
      ],
      improvementTip: "Investigate whether the incident report reflects an uncorroborated assumption or a time offset discrepancy.",
      citations: ["REC-07", "REC-11"]
    };
  }

  // 4. Discrepancy / Contradiction Query Handling
  if (hasDiscrepancyIntent || (sourceIds.includes('REC-07') && (sourceIds.includes('REC-11') || sourceIds.includes('REC-14')))) {
    return {
      summary: "Timestamp & Attribution Conflict Identified",
      establishedFacts: [
        {
          text: "Security Officer Vance logged an incident at '05:17' based on an unadjusted wristwatch set to Central European Summer Time (UTC+2).",
          citation: "REC-07"
        },
        {
          text: "All facility servers and automated sensors enforce strict Stratum-1 Coordinated Universal Time (UTC) with sub-millisecond precision.",
          citation: "REC-14"
        },
        {
          text: "At 03:17 UTC (which corresponds to 05:17 CEST), Dr. Chen was verified off-site, having passed outbound security Gate 1 at 02:15 UTC.",
          citation: "REC-11"
        }
      ],
      uncertainties: [
        "Officer Vance's memo is an uncorroborated red herring. The true breach occurred digitally via internal telemetry rather than physical console interaction."
      ],
      improvementTip: "Now that the false lead is eliminated, pinpoint the automated mechanism on server SV-4-CRYO-09 that initiated the 03:17 UTC exfiltration.",
      citations: ["REC-07", "REC-11", "REC-14"]
    };
  }

  // 5. Host Server / Cron / Script Execution Queries
  if (actions.includes('script_execution') || systems.includes('vault_server')) {
    const facts = [
      {
        text: "Kernel audit logs on host SV-4-CRYO-09 record the execution of '/opt/aethelgard/maintenance/diag_vault_sync.sh' at 03:04 UTC under root privileges (PID 14209).",
        citation: "REC-04"
      },
      {
        text: "The maintenance script performed direct block-level memory mapping to storage volume /mnt/vault/seq_v4/, siphoning 84.62 GB of genomic sequence data.",
        citation: "REC-10"
      }
    ];

    if (sourceIds.includes('REC-13') || cleanPrompt.toLowerCase().includes('advisory') || cleanPrompt.toLowerCase().includes('vulnerability')) {
      facts.push({
        text: "Engineering Advisory Memo #2026-44 previously warned that this maintenance script lacked cryptographic hash integrity checking and possessed raw hardware bus access.",
        citation: "REC-13"
      });
    }

    return {
      summary: "Automated Host Execution Traced",
      establishedFacts: facts,
      uncertainties: [
        "The script was scheduled via a rogue crontab entry rather than interactive user logon.",
        "Verify how this process piped raw volume data out of the facility without triggering perimeter firewalls."
      ],
      improvementTip: "Corroborate this host script execution with perimeter optical telemetry to establish the exfiltration channel.",
      citations: citations.length ? citations : ["REC-04", "REC-10"]
    };
  }

  // 6. Network Telemetry / Exfiltration / Optical Relay Queries
  if (actions.includes('data_exfiltration') || systems.includes('optical_relay') || systems.includes('firewall_gateway')) {
    const facts = [
      {
        text: "An unauthorized egress transfer of 84.6 GB commenced at 03:17:44 UTC via Perimeter Optical Relay trunk 04 to external endpoint 198.51.100.44.",
        citation: "REC-02"
      },
      {
        text: "The transfer utilized the optical diagnostic auxiliary wavelength (1310 nm, Lambda-14) on port 8443, bypassing regular perimeter packet inspection.",
        citation: "REC-12"
      },
      {
        text: "Firewall logs confirm session SESS-99410-EXT terminated cleanly at 03:45:02 UTC after transferring ~84.6 GB.",
        citation: "REC-05"
      }
    ];

    return {
      summary: "Perimeter Optical Egress Identified",
      establishedFacts: facts,
      uncertainties: [
        "The transmission channel is established, but the source process that unlocked the encrypted sequence archives on the host server remains to be linked."
      ],
      improvementTip: "Examine host system daemon records around 03:00–03:15 UTC to identify what process generated the outbound stream.",
      citations: ["REC-02", "REC-05", "REC-12"]
    };
  }

  // 7. Thermal / Physical Sensor Queries
  if (systems.includes('thermal_sensors') || systems.includes('power_grid')) {
    return {
      summary: "Physical & Environmental Baseline Verified",
      establishedFacts: [
        {
          text: "Chassis thermistors on SV-4-CRYO-09 recorded a sharp +19.8°C thermal rise between 03:18 UTC and 03:30 UTC due to continuous 100% optical bus transmission duty cycle.",
          citation: "REC-08"
        },
        {
          text: "Facility power grid telemetry remained completely stable across all sectors, ruling out physical sabotage or power supply manipulation.",
          citation: "REC-03"
        }
      ],
      uncertainties: [
        "Environmental sensors confirm hardware load, but do not identify the software payload responsible."
      ],
      improvementTip: "Cross-reference this thermal spike timeframe with daemon execution logs and storage read records.",
      citations: ["REC-08", "REC-03"]
    };
  }

  // 8. Specific Single Record Lookup
  if (sourceIds.length === 1 && topRecords.length > 0) {
    const rec = topRecords[0];
    return {
      summary: `Document Briefing: ${rec.id} — ${rec.title}`,
      establishedFacts: [
        {
          text: `${rec.summary} (Logged: ${rec.timestamp}, Classification: ${rec.reliability}).`,
          citation: rec.id
        }
      ],
      uncertainties: [
        "A single document provides an isolated data point. Corroborate this against network telemetry or system daemon traces to establish causality."
      ],
      improvementTip: `Compare ${rec.id} with related records (such as system logs or gate registries) to test its validity.`,
      citations: [rec.id]
    };
  }

  // 9. Broad or Vague Queries
  if (isBroadQuery) {
    return {
      summary: "Facility Incident Overview",
      establishedFacts: [
        {
          text: "At 03:17 UTC, an anomalous 84.6 GB outbound transmission was detected originating from Sub-level 4 Cryogenic Vault Server (SV-4-CRYO-09).",
          citation: "REC-02"
        },
        {
          text: "Multiple contradictory internal memos exist regarding whether the breach occurred physically or via automated maintenance tasks.",
          citation: "REC-07"
        }
      ],
      uncertainties: [
        "The query is broad. Specific details regarding execution vector, compromised volumes, and timeline discrepancies require focused inquiry."
      ],
      improvementTip: "Narrow your prompt: ask about specific server daemon logs, network interfaces, or staff departure records.",
      citations: ["REC-02", "REC-07"]
    };
  }

  // 10. Fallback Synthesis
  const defaultCitations = topRecords.map(r => r.id);
  return {
    summary: "Intelligence Synthesis",
    establishedFacts: topRecords.slice(0, 2).map(r => ({
      text: r.summary,
      citation: r.id
    })),
    uncertainties: [
      "The submitted query yielded partial matches across the intelligence repository. Refine your query parameters to establish precise sequence and attribution."
    ],
    improvementTip: "Specify a system ID (e.g. SV-4-CRYO-09), a time window (e.g. 03:00 to 03:45 UTC), or compare specific record IDs.",
    citations: defaultCitations
  };
}
