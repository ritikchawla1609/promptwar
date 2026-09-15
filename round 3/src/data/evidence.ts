import { EvidenceItem } from '../types/game';

export const EVIDENCE_ITEMS: EvidenceItem[] = [
  {
    id: 'ev-1',
    title: 'Evidence 01: East Hallway Photograph',
    round: 1,
    type: 'photo',
    timestamp: '11:47 PM (Camera Metadata)',
    content: 'Long exposure capture of the East Corridor outside Study Room 17-B. A tall grandfather clock stands against the mahogany wainscoting. A shadow stretches across the Persian carpet near the study entrance.',
    hiddenDetails: 'Exif metadata reveals camera hardware internal clock was drifting by +0.00s, but optical glare suggests the pendulum in the background was arrested.',
    tags: ['Hallway', 'Visual', 'Phase 1'],
    connectedClueIds: ['ev-2', 'ev-4', 'ev-5'],
    leadsToClue: 'ev-2',
    contradictsSuspect: 'aarav',
    significance: 'Links Aarav to the hallway and reveals the grandfather clock pendulum was already stationary at 11:47 PM.'
  },
  {
    id: 'ev-2',
    title: 'Evidence 02: Grandfather Clock Close-up',
    round: 1,
    type: 'photo',
    timestamp: '11:47:00 (Fixed Face)',
    content: 'Macro photograph of the antique German brass grandfather clock in the East Hallway. Roman numerals. The hour hand points between XI and XII, minute hand precisely at 47 minutes.',
    hiddenDetails: 'The escapement wheel has a thin sliver of graphite jammed between the teeth. The clock was intentionally halted at 11:47 PM hours before the incident.',
    tags: ['Clock', 'Critical', 'Phase 1'],
    connectedClueIds: ['ev-1', 'ev-3', 'ev-4', 'ev-11'],
    leadsToClue: 'ev-4',
    contradictsSuspect: 'meera',
    significance: 'Proves the 11:47 PM time of death was fabricated; the clock was manually jammed with graphite before any attack occurred.'
  },
  {
    id: 'ev-3',
    title: "Evidence 03: Victim's Leather Field Notebook",
    round: 1,
    type: 'document',
    timestamp: 'Recovered from Desk',
    content: `PAGE 47 - HANDWRITTEN IN BLACK INK:
"11:47
12:03
12:13
12:17

Never trust the first time.
Death is not the moment the body stops.
The walls carry ears that listen to the pendulum."`,
    hiddenDetails: 'Page indentations show frantic writing. Numbers 11, 47, 12, 03, 13, 17 are underlined with double strokes—these serve as word indices in the Blackwood Master Cipher.',
    tags: ['Notebook', 'Cipher Key', 'Phase 1'],
    connectedClueIds: ['ev-2', 'ev-6', 'ev-13'],
    leadsToClue: 'ev-6',
    significance: 'Victim foresaw the temporal manipulation: warns that 11:47 is a false time, and points to the architectural secrets in the walls.'
  },
  {
    id: 'ev-4',
    title: 'Evidence 04: Dictaphone Audio Reel (Tape #4)',
    round: 1,
    type: 'audio',
    timestamp: 'Recovered from Study Floor',
    content: `[Normal Playback 1.0x]:
"When the house stopped... someone started."
(Heavy tape hiss, electrical hum, background rhythmic pendulum clatter).`,
    hiddenDetails: `[Slowdown Playback 0.5x - REVERSE FREQUENCY DECODED]:
Sub-bass spectral analysis reveals a hidden whisper buried beneath the tape rumble:
"Someone started BEFORE the house stopped."
This establishes that the attack occurred BEFORE the 12:13 blackout!`,
    tags: ['Audio', 'Forensic', 'Phase 1'],
    connectedClueIds: ['ev-1', 'ev-2', 'ev-6', 'ev-10'],
    leadsToClue: 'ev-10',
    contradictsSuspect: 'kabir',
    significance: '0.5x sub-bass layer proves the violent attack occurred prior to Kabir\'s 12:13 AM building blackout.'
  },
  {
    id: 'ev-5',
    title: 'Evidence 05: Five Suspect Initial Depositions',
    round: 1,
    type: 'document',
    timestamp: '12:30 AM (Post-Incident)',
    content: `OFFICIAL STATEMENTS LOGGED:
1. AARAV MEHTA: "I entered the hallway at 11:47 PM to retrieve books. I did not enter Sen's room."
2. RIYA SHARMA: "I was in the reading room studying old journals until the power cut."
3. KABIR VARMA: "Server room network reboot from 11:55 PM to 12:20 AM."
4. DR. MEERA PATEL: "Kitchen tea brewing between 11:40 PM and 12:10 AM without interruption."
5. DEV NEGI: "Basement maintenance bay, checking boiler valves all night."`,
    hiddenDetails: 'Every suspect tells at least one lie to conceal their separate unlawful act, but only one is concealing murder.',
    tags: ['Statements', 'Alibis', 'Phase 2'],
    connectedClueIds: ['ev-6', 'ev-7', 'ev-10', 'ev-12'],
    leadsToClue: 'ev-6',
    significance: 'Establishes baseline alibis. Every suspect has committed a secondary crime, masking the real murderer.'
  },
  {
    id: 'ev-6',
    title: 'Evidence 06: Composite CCTV Timeline Log',
    round: 3,
    type: 'cctv',
    timestamp: '11:45 PM - 12:20 AM',
    content: `TIMELINE CHRONOLOGY:
• 11:47 PM — Aarav Mehta enters East Wing Corridor.
• 11:52 PM — Riya Sharma enters Reading Room Antechamber.
• 11:58 PM — Kabir Varma swipes into Basement Server Enclosure.
• 12:03 AM — Dr. Meera Patel recorded in Kitchen Service Hallway.
• 12:08 AM — Dev Negi enters Lower Basement Stairs.
• 12:13 AM — [CRITICAL EVENT] Complete building blackout / Circuit overload.
• 12:17 AM — Auxiliary generator kicks on; corridor illumination restored.
• 12:18 AM — Victim Vikram Sen discovered motionless in locked Study 17-B.`,
    hiddenDetails: 'TRAP WARNING: The system administrator (Kabir) notes that the CCTV network draws timestamps from un-synchronized local clock crystals with varying drifts.',
    tags: ['CCTV', 'Timeline', 'Phase 3'],
    connectedClueIds: ['ev-3', 'ev-5', 'ev-7', 'ev-10', 'ev-11'],
    leadsToClue: 'ev-10',
    contradictsSuspect: 'meera',
    significance: 'Creates the core mystery contradiction: Meera is logged in the kitchen at 12:03 AM while Audio Sensor #2 logs Sen rasping at 12:05 AM.'
  },
  {
    id: 'ev-7',
    title: 'Evidence 07: Mainframe Power Relay Audit Log',
    round: 3,
    type: 'log',
    timestamp: '12:13:02 AM (Relay Trip)',
    content: `BREAKER EVENT ID #4092:
SOURCE: Basement Mainframe Substation Relay 4
STATUS: MANUAL CIRCUIT BREAKER OVERLOAD INITIATED
USER: ROOT_ADMIN (Kabir Varma Fob #0441)
COMMENT: Total blackout triggered. CCTV loop recording arrested for 240 seconds.`,
    hiddenDetails: 'Proves the blackout was not a storm accident, but an intentional sabotage by Kabir to clear security cameras.',
    tags: ['Server', 'Blackout', 'Phase 3'],
    connectedClueIds: ['ev-5', 'ev-6', 'ev-8'],
    leadsToClue: 'ev-8',
    contradictsSuspect: 'kabir',
    significance: 'Breaks Kabir\'s alibi: he deliberately cut power to hide his theft of server transaction drives.'
  },
  {
    id: 'ev-8',
    title: 'Evidence 08: Reading Room Acoustical Sweep',
    round: 3,
    type: 'document',
    timestamp: '11:52 PM (RF Sweep)',
    content: `RADIO FREQUENCY TELEMETRY:
433.92 MHz carrier detected emanating from Reading Room window frame.
AUDIO SIGNATURE: High-gain directional microphone aimed at Study 17-B wall vent.
EQUIPMENT OWNER: Riya Sharma (Press Credential #912).`,
    hiddenDetails: 'Riya was wiretapping Sen\'s study. She overheard the 11:47 PM struggle and knew Meera struck Sen, but fled instead of calling help.',
    tags: ['Wiretap', 'Surveillance', 'Phase 3'],
    connectedClueIds: ['ev-4', 'ev-5', 'ev-10'],
    leadsToClue: 'ev-10',
    contradictsSuspect: 'riya',
    significance: 'Breaks Riya\'s alibi: exposes her illegal audio bugging of the murder room.'
  },
  {
    id: 'ev-9',
    title: 'Evidence 09: Manor Architectural Blueprints (1894)',
    round: 4,
    type: 'document',
    timestamp: 'Recovered from Basement Vault',
    content: `EAST WING SERVICE CORRIDOR BLUEPRINT:
Study 17-B features a concealed servant passage behind the walnut bookcase.
PASSAGE ACCESS: Unlocks exclusively via caretaker master skeleton key from the maintenance tunnel.
BYPASSES: External hallway lock, CCTV field of view, and study electronic deadbolt.`,
    hiddenDetails: 'Only caretaker Devraj Negi possessed the skeleton key and intimate knowledge of this hidden tunnel.',
    tags: ['Architecture', 'Hidden Route', 'Phase 4'],
    connectedClueIds: ['ev-3', 'ev-5', 'ev-6', 'ev-11', 'ev-12'],
    leadsToClue: 'ev-12',
    contradictsSuspect: 'dev',
    significance: 'Reveals how Devraj Negi entered the locked study completely undetected during Kabir\'s blackout.'
  },
  {
    id: 'ev-10',
    title: 'Evidence 10: Study Antechamber Audio Sensor #2',
    round: 3,
    type: 'audio',
    timestamp: '12:05:14 AM (Audio Timestamp)',
    content: `MICROPHONE TRANSCRIPTION:
[12:05:14 AM]: (Weak, laboured rasping of Professor Vikram Sen)
"Meera... you shouldn't have come... what did you... do..."
(Sound of glass shatters, heavy breathing, hurried footfalls retreating).`,
    hiddenDetails: 'This creates the lethal contradiction: CCTV logged Meera in the kitchen at 12:03, yet Sen is speaking to her or referring to her attack at 12:05! Why does the AI report say timeline is consistent?',
    tags: ['Audio', 'Contradiction', 'Phase 3'],
    connectedClueIds: ['ev-4', 'ev-6', 'ev-11'],
    leadsToClue: 'ev-11',
    contradictsSuspect: 'meera',
    significance: 'Crucial contradiction linking Meera to the study despite the kitchen camera recording.'
  },
  {
    id: 'ev-11',
    title: "Evidence 11: Professor Sen's Final Recording",
    round: 4,
    type: 'video',
    timestamp: '12:03:00 - 12:03:17 AM',
    content: `TERMINAL VIDEO PLAYBACK (SEN_FINAL_1203.mp4):
Professor Sen is seated slumped in his high-back leather chair. Blood trickles from his left temple. He looks with wild eyes directly into the webcam:
"If you're watching this... one of them killed me. But that's not what you should be looking for. The person who killed me isn't the person you're going to suspect."
He looks over his shoulder at the wall clock: 12:03 AM.
VIDEO FEED CUTS OUT AT 12:03:17 AM.`,
    hiddenDetails: 'Notice: Sen was attacked and bleeding, but he was ALIVE at 12:03 AM! Therefore, the 11:47 confrontation was an ASSAULT, not the moment of death!',
    tags: ['Video', 'Fatal Trap', 'Phase 4'],
    connectedClueIds: ['ev-2', 'ev-6', 'ev-9', 'ev-10', 'ev-12'],
    leadsToClue: 'ev-12',
    contradictsSuspect: 'meera',
    significance: 'THE CRITICAL REVELATION: Sen survived Meera\'s 11:47 assault! He was killed later during the 12:13–12:15 blackout.'
  },
  {
    id: 'ev-secret',
    title: 'UNCLASSIFIED: YOU_WERE_NOT_SUPPOSED_TO_FIND_THIS.mp4',
    round: 4,
    type: 'video',
    timestamp: '11:47:12 PM (Hidden Pinhole Camera)',
    content: `RESTRICTED FOOTAGE (7 SECONDS):
Pinhole camera hidden behind the bookshelf. A dark figure in a winter coat enters Study 17-B. The wall clock behind them reads 11:47 PM. A violent physical struggle erupts off-screen; a dull brass thud echoes. The figure flees. Sen collapses onto the desk.`,
    hiddenDetails: 'The assailant struck Sen at 11:47 PM and fled, believing he was dead. But Sen regained consciousness at 12:00 AM and made his recording at 12:03 AM!',
    tags: ['Hidden File', 'Breakthrough', 'Phase 4'],
    connectedClueIds: ['ev-1', 'ev-2', 'ev-11'],
    leadsToClue: 'ev-11',
    contradictsSuspect: 'meera',
    significance: 'Visual confirmation that Meera struck Sen at 11:47 PM, but left him alive on the desk.'
  },
  {
    id: 'ev-12',
    title: 'Evidence 12: Network Thermal Printer Buffer Log',
    round: 5,
    type: 'log',
    timestamp: '11:41:22 PM (SPOOL TIMESTAMP)',
    content: `PRINTER SPOOL CACHE (HP-LASER-STUDY):
JOB #00984 - "MEERA_PATEL_INCIDENTS_SUMMARY.pdf"
PRINT TIME: 11:41:22 PM
PAGES: 4
DESTINATION TRAY: Study Secret File Cabinet
CONTENT: Fabricated dossier detailing Meera's alleged embezzlement and murder threats against Sen.`,
    hiddenDetails: 'SMOKING GUN: This document framing Meera was printed at 11:41 PM—six minutes BEFORE Meera even entered the study at 11:47 PM! Someone orchestrated the crime scene in advance!',
    tags: ['Printer Log', 'Pre-Crime', 'Phase 5'],
    connectedClueIds: ['ev-5', 'ev-9', 'ev-11', 'ev-13'],
    leadsToClue: 'ev-13',
    contradictsSuspect: 'dev',
    significance: 'THE SMOKING GUN: Document indicting Meera was spooled at 11:41 PM before the crime! Proves premeditated framing.'
  },
  {
    id: 'ev-13',
    title: 'Evidence 13: The Blackwood Master Log & Indexer',
    round: 6,
    type: 'document',
    timestamp: 'ARCHIVE VAULT (MASTER_LOG.dat)',
    content: `CIPHER INDICES RECOVERED:
[11 : 47] → "THE CLOCK"
[12 : 03] → "DID NOT LIE."
[12 : 13] → "SOMEONE MADE IT"
[12 : 17] → "TELL THE TRUTH TOO LATE."

COMBINED DECODED TRUTH:
"THE CLOCK DID NOT LIE. SOMEONE MADE IT TELL THE TRUTH TOO LATE."`,
    hiddenDetails: 'The Study clock was delayed by 16 minutes to create an artificial window of murder during the blackout, masking Devraj Negi’s silent entrance through the caretaker passage.',
    tags: ['Master Log', 'Cipher', 'Phase 6'],
    connectedClueIds: ['ev-2', 'ev-3', 'ev-9', 'ev-12'],
    significance: 'Decodes the complete Blackwood conspiracy: Devraj Negi smothered Sen during the 12:13 blackout through the hidden tunnel.'
  }
];
