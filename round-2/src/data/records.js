/**
 * Operation Blackbox · Mission: Operation Ghost Signal
 * Canonical Intelligence Dataset
 * 
 * 14 verified intelligence records with internal consistency,
 * corroborating evidence, irrelevant noise, and an intentional timestamp/attribution trap.
 */

export const MISSION_METADATA = {
  id: "OP-GHOST-SIGNAL",
  title: "Operation Ghost Signal",
  round: "02",
  facility: "Aethelgard Deep Bio-Compute Facility",
  classification: "RESTRICTED // INVESTIGATIVE AUDIT",
  defaultDurationSeconds: 720, // 12 minutes
  canonicalTruth: {
    compromisedSystem: "Sub-level 4 Cryogenic Vault Telemetry Server (SV-4-CRYO-09)",
    breachMechanism: "Automated Diagnostic Script Injection via Scheduled Maintenance Cron (diag_vault_sync.sh)",
    compromisedSystemId: "SV-4-CRYO-09",
    exfiltrationVolume: "84.6 GB",
    externalSinkIp: "198.51.100.44",
    primaryProtocol: "Optical Sensor Diagnostic Bus / Port 8443",
    timeline: [
      { time: "02:40 UTC", event: "Maintenance window initiated; technician badge signs out of physical terminal", sourceId: "REC-01" },
      { time: "03:04 UTC", event: "Unscheduled root crontab executes modified diag_vault_sync.sh script", sourceId: "REC-04" },
      { time: "03:05 UTC", event: "Direct block-level read begins on genomic sequence repository volume", sourceId: "REC-10" },
      { time: "03:17 UTC", event: "84.6 GB exfiltration burst begins via Perimeter Optical Relay channel", sourceId: "REC-02" },
      { time: "03:22 UTC", event: "Thermal spike logged in Cryo Bay 4 due to optical diagnostic bus saturation", sourceId: "REC-08" },
      { time: "03:45 UTC", event: "External encrypted telemetry tunnel closes and connection terminates", sourceId: "REC-05" }
    ],
    trapRecordId: "REC-07",
    trapExplanation: "Security Officer Vance's memo erroneously reported a breach at '05:17' blaming Dr. Chen at Terminal B-12. The discrepancy arose from Vance recording local time (UTC+2) rather than facility standard UTC, and surface gate records (REC-11) prove Dr. Chen exited the facility grounds at 02:15 UTC.",
    unreliableSource: "REC-07 (Officer Vance Incident Memo)",
    keyEvidenceSources: ["REC-02", "REC-04", "REC-05", "REC-08", "REC-10", "REC-11", "REC-13", "REC-14"]
  }
};

export const INTELLIGENCE_RECORDS = [
  {
    id: "REC-01",
    title: "Sub-level Physical Access Control Log",
    type: "Access Log",
    timestamp: "2026-10-14 02:40 UTC",
    facilityZone: "Sub-level 4 Turnstiles & Air-lock",
    reliability: "High (Cryptographic Badge Key)",
    category: "access",
    summary: "Records physical entries and badge taps at Sub-level 4 security turnstiles.",
    content: `[PHYSICAL ACCESS REGISTRY - AETHELGARD FACILITY - SUB-LEVEL 04]
TIMESTAMP: 2026-10-14 02:40:12 UTC
GATE: Security Turnstile SL4-South

EVENT: Scheduled Maintenance Window Handoff
BADGE ID: TECH-8841 (M. Kowalski)
ACTION: Sign-out / Terminal Session Terminated
ZONE: Sub-level 4 Maintenance Corridor

LOG DETAILS:
Technician completed routine optic lens cleaning on physical camera housings. 
Sub-level 4 physical doors electronically sealed at 02:42:00 UTC under night protocol. 
No subsequent badge taps registered at Sub-level 4 turnstiles for the remainder of the night shift.
Internal motion sensors in corridor: ZERO MOTION DETECTED between 02:43 UTC and 06:00 UTC.`
  },
  {
    id: "REC-02",
    title: "Perimeter Optical Relay Telemetry",
    type: "Network Telemetry",
    timestamp: "2026-10-14 03:17 UTC",
    facilityZone: "External Optical Transceiver Array",
    reliability: "Verified (Hardware Packet Counter)",
    category: "telemetry",
    summary: "Captures high-throughput outbound network transmission burst.",
    content: `[PERIMETER OPTICAL RELAY - HARDWARE TELEMETRY LOG]
TIMESTAMP: 2026-10-14 03:17:44 UTC
INTERFACE: OptiLink-Trunk-04
PACKET COUNTER: Egress Alert Threshold Exceeded

TRANSMISSION AUDIT:
- Source Host: Sub-level 4 Cryogenic Vault Server (SV-4-CRYO-09)
- Internal Port: 8443 (Mapped to unmonitored optical sensor diagnostic bus)
- Destination: 198.51.100.44 (External Secure Transit Node)
- Transfer Volume: 84.6 GB (High-throughput burst)
- Transfer Duration: 27 minutes 18 seconds
- Protocol: Encrypted TLS 1.3 / Custom Stream Framing

NOTE: Traffic bypassed normal perimeter proxy inspection by utilizing the hardware-level diagnostic channel reserved for optic fiber calibration.`
  },
  {
    id: "REC-03",
    title: "Facility Central Power Grid Telemetry",
    type: "Facility Log",
    timestamp: "2026-10-14 03:00 UTC - 04:00 UTC",
    facilityZone: "Primary Power Distribution Substation",
    reliability: "Verified (SCADA Telemetry)",
    category: "facility",
    summary: "Monitors electrical load and substation voltages across facility sectors.",
    content: `[FACILITY SCADA ELECTRICAL LOAD MONITOR]
PERIOD: 2026-10-14 03:00:00 UTC TO 04:00:00 UTC
GRID STATUS: NOMINAL

FEEDER READINGS:
- Feeder A (Cryogenic Chiller Pumps): 412 kW (Steady state, ±1.2%)
- Feeder B (Computing Core Sub-level 4): 188 kW (Steady state, ±0.8%)
- Feeder C (Perimeter Lighting & Security): 44 kW (Steady state)
- Feeder D (Administrative Surface Offices): 12 kW (Low power night mode)

ANOMALY ASSESSMENT:
Zero power dips, surges, or breaker trips recorded across the entire facility.
Physical grid manipulation or localized power cut tampering can be definitively ruled out.`
  },
  {
    id: "REC-04",
    title: "Vault Host Server Daemon Audit Log",
    type: "System Log",
    timestamp: "2026-10-14 03:04 UTC",
    facilityZone: "Server SV-4-CRYO-09 / Root Daemon",
    reliability: "High (Immutable Kernel Auditd)",
    category: "system",
    summary: "Kernel execution audit on the Cryogenic Vault host system.",
    content: `[HOST KERNEL AUDITD LOG - SV-4-CRYO-09]
TIMESTAMP: 2026-10-14 03:04:19 UTC
SYSTEM: Sub-level 4 Cryogenic Vault Host Server (OS: Linux Hardened 6.1)

PROCESS EXECUTION AUDIT:
PID: 14209
PPID: 1 (Cron Daemon)
UID: 0 (root)
COMMAND: /opt/aethelgard/maintenance/diag_vault_sync.sh --mode=deep --target=bus0
EXECUTION CONTEXT: Unscheduled Crontab Entry injected under /etc/cron.d/vault-maint

INSPECTION TRACE:
Script initiated block-level memory mapping to storage volume /mnt/vault/seq_v4/
Process opened socket descriptor mapped to /dev/optic_diag0.
Binary integrity: Script had been modified 4 hours prior; executable lacked cryptographic SHA256 catalog validation.`
  },
  {
    id: "REC-05",
    title: "Firewall Gateway Session State Table",
    type: "Network Telemetry",
    timestamp: "2026-10-14 03:45 UTC",
    facilityZone: "Border Gateway Router B-01",
    reliability: "Verified (Gateway Stateful Table)",
    category: "telemetry",
    summary: "Stateful connection tracking for external sessions.",
    content: `[BORDER FIREWALL GATEWAY - CONNECTION SESSION TEARDOWN]
TIMESTAMP: 2026-10-14 03:45:02 UTC
SESSION ID: SESS-99410-EXT

SESSION SUMMARY:
- Initiated: 2026-10-14 03:17:44 UTC
- Terminated: 2026-10-14 03:45:02 UTC
- Internal Endpoint: 10.4.9.12 (SV-4-CRYO-09)
- External Endpoint: 198.51.100.44
- Total Ingress: 14.2 MB (Control handshake and ACK frames)
- Total Egress: 84,612,440 KB (~84.6 GB)
- Teardown Cause: TCP FIN-ACK exchanged gracefully from remote peer

GATEWAY AUDIT:
Session was tagged with QoS priority bypass code 'DIAG-OVERRIDE', permitting outbound routing without gateway DPI interception.`
  },
  {
    id: "REC-06",
    title: "Night Shift Staffing & Duty Roster",
    type: "Administrative",
    timestamp: "2026-10-13 22:00 UTC - 2026-10-14 08:00 UTC",
    facilityZone: "Operations Administration",
    reliability: "High (HR Schedule)",
    category: "administrative",
    summary: "Roster of authorized personnel on site during night shift.",
    content: `[AETHELGARD OPERATIONS - STAFF SHIFT SCHEDULE]
DATE: 2026-10-13 22:00 UTC TO 2026-10-14 08:00 UTC
SHIFT: Night Operations (Shift Gamma)

SCHEDULED PERSONNEL:
- Duty Supervisor: H. Sterling (Surface Operations Center)
- Security Lead: Aris Vance (Perimeter Guardhouse)
- Cryogenic Tech: M. Kowalski (Sub-level 4, On-call until 03:00 UTC)
- Lead Researcher: Dr. Evelyn Chen (Departed facility early at 02:15 UTC)

SHIFT HANDOVER NOTES:
Handover briefings occur at 00:00 UTC and 08:00 UTC. Dr. Chen handed off day-run sequencing at 21:30 UTC on Oct 13, signed research ledger, and was authorized for early departure.`
  },
  {
    id: "REC-07",
    title: "Preliminary Incident Summary by Officer Vance",
    type: "Incident Report",
    timestamp: "2026-10-14 05:30 (Local)",
    facilityZone: "Surface Security Station",
    reliability: "Disputed / Uncorroborated (Under Audit)",
    category: "incident",
    summary: "Security guard incident write-up alleging manual terminal breach.",
    content: `[INCIDENT MEMORANDUM - PRELIMINARY NOTE - OFFICER ARIS VANCE]
DATE OF RECORD: 2026-10-14
LOGGED TIME: 05:30 (Facility Local)

OFFICER REPORT:
"At approximately 05:17, while conducting rounds near the Administration wing, I noticed anomalous monitor activity from Terminal B-12.
I believe Dr. Evelyn Chen was observed accessing the terminal to manually export files onto a portable flash drive before leaving the station.
The workstation was left in a locked state. I recommend immediate revocation of Dr. Chen's credentials."

[AUDITOR FOOTNOTE - ATTACHED POST-INCIDENT]:
Warning: Officer Vance's personal wristwatch was set to Central European Summer Time (UTC+2) without timezone designation. 
Physical terminal audit logs for Terminal B-12 show zero keystrokes or logins between 23:00 and 06:00 UTC. 
See surface gate records for Dr. Chen's actual physical whereabouts.`
  },
  {
    id: "REC-08",
    title: "Cryo Bay 4 Environmental & Thermal Telemetry",
    type: "Sensor Telemetry",
    timestamp: "2026-10-14 03:22 UTC",
    facilityZone: "Cryo Bay 4 Storage Racks",
    reliability: "Verified (Hardware Thermistors)",
    category: "telemetry",
    summary: "Localized temperature sensor logs in the Cryogenic Server racks.",
    content: `[CRYOGENIC STORAGE BAY 4 - ENVIRONMENTAL TELEMETRY]
TIMESTAMP: 2026-10-14 03:22:15 UTC
SENSOR BANK: Rack SV-4-09 Chassis Bus Monitor

TELEMETRY LOG:
- Ambient Bay Temperature: -196.1°C (Liquid Nitrogen coolant loop nominal)
- Chassis Optical Interface Temperature: +41.8°C (Nominal baseline: +22.0°C)
- Thermal Spike Delta: +19.8°C rise detected between 03:18 UTC and 03:30 UTC

ENGINEERING ANALYSIS:
The sharp localized temperature spike directly correlates with sustained 100% duty cycle throughput on the optical transceiver FPGA chip during the 84.6 GB transfer burst.`
  },
  {
    id: "REC-09",
    title: "Host Firmware & BIOS Cryptographic Hash Audit",
    type: "Integrity Audit",
    timestamp: "2026-10-14 06:15 UTC",
    facilityZone: "Security Forensics Lab",
    reliability: "High (TPM 2.0 Attestation)",
    category: "system",
    summary: "Post-incident cryptographic verification of server BIOS and firmware.",
    content: `[FORENSIC HARDWARE ATTESTATION - TPM 2.0 AUDIT]
DATE: 2026-10-14 06:15:30 UTC
TARGET: SV-4-CRYO-09 (Chassis Serial: CRYO-9921-A)

CRYPTOGRAPHIC INTEGRITY RESULTS:
- UEFI Firmware Hash (PCR 0): VALID (Matches Golden Image SHA256: 7f3b...e4a1)
- Option ROM Hash (PCR 2): VALID (Matches Golden Image)
- Secure Boot State: ENABLED / ENFORCING
- Kernel Image Hash: VALID (Canonical Distribution Kernel)

FINDINGS:
No rootkit, bootkit, or firmware-level persistence mechanism was installed. The operating system kernel and underlying hardware remained unmodified. Compromise was purely software/script level within userland.`
  },
  {
    id: "REC-10",
    title: "Cryogenic Vault Storage Array Read Access Audit",
    type: "Storage Audit",
    timestamp: "2026-10-14 03:05 UTC",
    facilityZone: "Storage Area Network Volume 4",
    reliability: "High (SAN Storage Controller)",
    category: "system",
    summary: "Storage controller read telemetry showing data blocks accessed.",
    content: `[SAN STORAGE CONTROLLER - READ ACCESS TRACE]
TIMESTAMP: 2026-10-14 03:05:01 UTC TO 03:18:22 UTC
TARGET VOLUME: /mnt/vault/seq_v4/ (Genomic Sequence Archives)

READ METRICS:
- Requesting Process: PID 14209 (diag_vault_sync.sh)
- Direct I/O Mode: Sequential block read, O_DIRECT enabled (bypassing Linux buffer cache)
- Total Data Read: 84,624,188,416 bytes (84.62 GB)
- Target Datasets: Project Chimera-7 & Hominid Deep Alignment Sequence sets
- Read Completed: 03:18:22 UTC (Immediately preceding sustained network egress burst)`
  },
  {
    id: "REC-11",
    title: "Surface Security Gate Log & Vehicle Registry",
    type: "Access Log",
    timestamp: "2026-10-14 02:15 UTC",
    facilityZone: "Perimeter Gate 1 (Surface Entrance)",
    reliability: "Verified (Automated Plate Reader & RFID)",
    category: "access",
    summary: "Records vehicle departures through the facility surface gate.",
    content: `[FACILITY SURFACE PERIMETER GATE 1 - VEHICLE EXIT REGISTRY]
TIMESTAMP: 2026-10-14 02:15:48 UTC
CHECKPOINT: Gate 1 Outbound Barrier

EVENT: Vehicle Departure Confirmed
VEHICLE: Blue Sedan, Plate # AG-882-QX
REGISTERED OWNER: Dr. Evelyn Chen (Lead Researcher)
RFID BADGE SWIPE: Confirmed at driver intercom
AUTOMATED CAMERA: Dr. Chen verified single occupant, driver seat.

STATUS:
Dr. Chen left facility premises at 02:15:48 UTC.
Vehicle passed through outer municipal toll sensor at 02:29 UTC heading south toward city center.
Dr. Chen did NOT return to the facility at any point during the night.`
  },
  {
    id: "REC-12",
    title: "Optical Fiber Spectrum Analyzer Telemetry",
    type: "Sensor Telemetry",
    timestamp: "2026-10-14 03:17 UTC",
    facilityZone: "Optical Distribution Frame (ODF-02)",
    reliability: "Verified (Spectrometer Telemetry)",
    category: "telemetry",
    summary: "Physical optical wavelength sensor data on main egress trunk.",
    content: `[OPTICAL SPECTRUM ANALYZER - ODF-02 WAVELENGTH AUDIT]
TIMESTAMP: 2026-10-14 03:17:40 UTC
FIBER TRUNK: Main Sub-level Egress Trunk (Core 4)

WAVELENGTH METRICS:
- Primary Production Wavelength (1550 nm): Normal background traffic (0.8 Gbps)
- Diagnostic Auxiliary Wavelength (1310 nm, Lambda-14): Sudden pulse jump from 0 Mbps to 9.8 Gbps sustained
- Spectral Purity: High coherent laser modulation
- Carrier Status: Continuous transmission stream from 03:17:44 UTC through 03:45:00 UTC

CONCLUSION:
Confirms data was exfiltrated via the dedicated 1310nm optical diagnostic sub-channel, which bypasses the primary production intrusion detection taps on the 1550nm trunk.`
  },
  {
    id: "REC-13",
    title: "Internal Engineering Advisory Memo #2026-44",
    type: "Administrative",
    timestamp: "2026-09-22 14:00 UTC",
    facilityZone: "Engineering Systems Review",
    reliability: "High (Official Memo)",
    category: "administrative",
    summary: "Advisory memorandum warning about unvalidated maintenance scripts.",
    content: `[MEMORANDUM - SYSTEMS ARCHITECTURE GROUP]
DATE: 2026-09-22 14:00:00 UTC
MEMO ID: ADVISORY-2026-44
SUBJECT: CRITICAL SECURITY EXEMPTION IN VAULT MAINTENANCE AUTOMATION

TO: Infrastructure Operations Committee
FROM: Forensic Systems Team

TEXT:
"An internal audit has highlighted a serious vulnerability in our Sub-level 4 maintenance routines.
The diagnostic script '/opt/aethelgard/maintenance/diag_vault_sync.sh' is configured to run with elevated root privileges during scheduled maintenance windows.
Crucially, this script lacks cryptographic hash verification before execution and possesses direct memory-mapped access to the /dev/optic_diag0 hardware bus.
If an unauthorized crontab entry or modified script is introduced, an attacker could silently siphon entire database volumes without triggering firewall warnings."

RESOLUTION STATUS: PENDING IMPLEMENTATION (Deferred to Q4 Maintenance Cycle).`
  },
  {
    id: "REC-14",
    title: "Facility Time Synchronization Server (NTP) Status",
    type: "System Log",
    timestamp: "2026-10-14 06:00 UTC",
    facilityZone: "Primary Stratum-1 Time Server (NTP-01)",
    reliability: "Verified (Atomic Clock Stratum-1 Sync)",
    category: "system",
    summary: "NTP time server sync telemetry confirming all servers operated in UTC.",
    content: `[STRATUM-1 TIME SERVER (NTP-01) - DAILY SYNCHRONIZATION AUDIT]
DATE: 2026-10-14 06:00:00 UTC
TIME SOURCE: GPS Disciplined Rubidium Oscillator

CLOCK DRIFT REPORT:
- SV-4-CRYO-09: Offset +0.12 ms | Jitter 0.04 ms | Reference: UTC
- BORDER-GW-01: Offset -0.08 ms | Jitter 0.02 ms | Reference: UTC
- PERIMETER-OPT-04: Offset +0.02 ms | Jitter 0.01 ms | Reference: UTC
- ACCESS-GATE-01: Offset +0.15 ms | Jitter 0.03 ms | Reference: UTC

OPERATIONAL DIRECTIVE:
All automated facility infrastructure enforces Coordinated Universal Time (UTC) strictly.
Individual personnel manual wristwatches or untethered local terminals displaying Central European Summer Time (UTC+2) are strictly unaligned with official audit records.`
  }
];

export const INITIAL_OBJECTIVES = [
  {
    id: "OBJ-1",
    title: "Find the signal",
    description: "Identify the compromised facility system and the unauthorized data transfer volume.",
    completed: false,
    hint: "Examine the perimeter network telemetry and sub-level server records to determine where the data exited.",
    evaluationCriteria: ["compromised_system_found", "transfer_identified"]
  },
  {
    id: "OBJ-2",
    title: "Reconstruct the sequence",
    description: "Compare records, resolve the timestamp discrepancy, and identify the misleading report.",
    completed: false,
    hint: "Corroborate the maintenance cron execution with access gate times and the facility time synchronization standard.",
    evaluationCriteria: ["vector_identified", "trap_uncovered"]
  },
  {
    id: "OBJ-3",
    title: "Submit findings",
    description: "Synthesize your evidence and submit the formal forensic breach findings.",
    completed: false,
    hint: "Review your discovered records and explain how the diagnostic script bypassed security.",
    evaluationCriteria: ["ready_for_submission"]
  }
];
