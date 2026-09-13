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
    tags: ['Hallway', 'Visual', 'Round 1']
  },
  {
    id: 'ev-2',
    title: 'Evidence 02: Grandfather Clock Close-up',
    round: 1,
    type: 'photo',
    timestamp: '11:47:00 (Fixed Face)',
    content: 'Macro photograph of the antique German brass grandfather clock in the East Hallway. Roman numerals. The hour hand points between XI and XII, minute hand precisely at 47 minutes.',
    hiddenDetails: 'The escapement wheel has a thin sliver of graphite jammed between the teeth. The clock was intentionally halted at 11:47 PM hours before the incident.',
    tags: ['Clock', 'Critical', 'Round 1']
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
    tags: ['Notebook', 'Cipher Key', 'Round 1']
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
    tags: ['Audio', 'Forensic', 'Round 1']
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
    tags: ['Statements', 'Alibis', 'Round 1']
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
    tags: ['CCTV', 'Timeline', 'Round 3']
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
    tags: ['Audio', 'Contradiction', 'Round 3']
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
    tags: ['Video', 'Fatal Trap', 'Round 4']
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
    tags: ['Hidden File', 'Breakthrough', 'Round 4']
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
    tags: ['Printer Log', 'Pre-Crime', 'Round 5']
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
    tags: ['Master Log', 'Cipher', 'Round 6']
  }
];
