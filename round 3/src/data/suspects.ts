import { Suspect } from '../types/game';

export const SUSPECTS: Record<string, Suspect> = {
  aarav: {
    id: 'aarav',
    name: 'Aarav Mehta',
    role: 'Graduate Research Fellow',
    avatarIcon: 'UserCheck',
    relationshipWithVictim: 'Senior protégé whose PhD dissertation credit was allegedly being withheld by Professor Sen.',
    motiveLevel: 'HIGH',
    motiveDescription: 'Desperate to secure independent credit for the 20-year Blackwood Memory Protocol before Sen published it under his sole name.',
    alibiStatus: 'QUESTIONABLE',
    alibiDescription: 'Claims he entered the East Hallway at 11:47 PM strictly to retrieve reference manuals and never approached Study 17-B.',
    statement: "I entered the East Hallway at 11:47 PM to retrieve reference manuals. I never went near Professor Sen's private study.",
    cctvTimestamp: '11:47 PM',
    cctvAction: 'Enters East Hallway carrying leather satchel',
    clockSource: 'East Corridor Digital Terminal (Clock Delta: +0m, synced to Grandfather Clock)',
    twoTruths: [
      'Entered the hallway at 11:47 PM exactly.',
      'Did not enter the study through the front door.'
    ],
    realCrime: "Stole Professor Blackwood's confidential 20-year-old experiment logbook from the archive drawer.",
    contradictionNotes: 'CCTV timestamps match the halted 11:47 clock, but an archive drawer lock was found picked with graphite dust matching the clock escapement.',
    connectedEvidenceIds: ['ev-1', 'ev-2', 'ev-3', 'ev-5', 'ev-6'],
    lockQuestion: 'What physical asset did Aarav remove from the East Wing, and what clock generated his 11:47 timestamp?',
    lockAnswer: 'research notebook',
    lockHint: 'Look closely at his satchel and the grandfather clock reference in the notebook.'
  },
  riya: {
    id: 'riya',
    name: 'Riya Sharma',
    role: 'Investigative Journalist & PhD Candidate',
    avatarIcon: 'Radio',
    relationshipWithVictim: 'Former student investigating allegations of unethical human cognitive trials directed by Professor Sen.',
    motiveLevel: 'MEDIUM',
    motiveDescription: 'Seeking documentary proof of medical malpractice and falsified trial data to publish an exposé.',
    alibiStatus: 'QUESTIONABLE',
    alibiDescription: 'Claims she was peacefully reviewing journals in the Reading Room from 11:50 PM until the complete blackout.',
    statement: "I was reviewing thesis records in the reading room. I heard footsteps around 11:50, but stayed put until the lights went dark.",
    cctvTimestamp: '11:52 PM',
    cctvAction: 'Seen adjusting concealed lapel recorder outside Study antechamber',
    clockSource: 'Reading Room Analog Wall Clock (-3m drift)',
    twoTruths: [
      'Was recording audio in the perimeter of the study.',
      'Heard voices arguing inside the study prior to midnight.'
    ],
    realCrime: 'Planted illegal directional microphones to record Sen admitting to historical academic fraud.',
    contradictionNotes: 'Audio Sensor #2 logged directional audio feedback loops consistent with a transmitter worn within 2 meters of the study vent.',
    connectedEvidenceIds: ['ev-4', 'ev-5', 'ev-6', 'ev-10'],
    lockQuestion: 'What illicit equipment was Riya operating outside the Study, and what was her target?',
    lockAnswer: 'audio recording',
    lockHint: 'Inspect her lapel in the CCTV feed and the audio device frequency log.'
  },
  kabir: {
    id: 'kabir',
    name: 'Kabir Varma',
    role: 'Infrastructure & Systems Administrator',
    avatarIcon: 'Terminal',
    relationshipWithVictim: 'Facilities technician whom Sen threatened with immediate termination over missing server logs.',
    motiveLevel: 'HIGH',
    motiveDescription: 'Facing imminent criminal indictment and ruin if the forensic server audit revealed internal tampering.',
    alibiStatus: 'FABRICATED',
    alibiDescription: 'Claims he was trapped in the server bunker performing routine packet-flood mitigation between 11:55 PM and 12:20 AM.',
    statement: "The building network suffered a packet flood at 11:55 PM. I was trapped in the server bunker restoring breaker relays until 12:20 AM.",
    cctvTimestamp: '11:58 PM',
    cctvAction: 'Enters Basement Server Hub using emergency maintenance master fob',
    clockSource: 'Network Time Protocol (NTP) Mainframe Server',
    twoTruths: [
      'Accessed the security mainframe terminal directly at 11:58 PM.',
      'Triggered the complete building circuit trip at 12:13 AM.'
    ],
    realCrime: 'Deliberately overloaded the transformer to trigger the 12:13 AM blackout so he could wipe CCTV logs.',
    contradictionNotes: 'Mainframe audit logs confirm the 12:13 AM blackout was not an electrical failure, but an intentional command sent from his terminal session.',
    connectedEvidenceIds: ['ev-5', 'ev-6', 'ev-7', 'ev-8'],
    lockQuestion: 'What event did Kabir trigger at 12:13 AM, and what was his primary objective?',
    lockAnswer: 'blackout',
    lockHint: 'Look at the power breaker grid and his override command at 12:13 AM.'
  },
  meera: {
    id: 'meera',
    name: 'Dr. Meera Patel',
    role: 'Senior Associate Researcher & Co-Author',
    avatarIcon: 'FileWarning',
    relationshipWithVictim: 'Decade-long research collaborator and confidante of Professor Vikram Sen.',
    motiveLevel: 'EXTREME',
    motiveDescription: 'Fierce personal betrayal after learning Sen had patented their joint neural dampener technology entirely in his own name.',
    alibiStatus: 'FABRICATED',
    alibiDescription: 'Claims continuous, unbroken presence in the kitchen brewing herbal tea from 11:40 PM until 12:10 AM.',
    statement: "I was in the kitchen brewing herbal tea from 11:40 PM until after midnight. Ask anyone—I had zero reason to confront Vikram tonight.",
    cctvTimestamp: '12:03 AM',
    cctvAction: 'Paces kitchen hallway in agitated state, holding crumpled parchment',
    clockSource: 'Kitchen Industrial Timer (+16m manual offset)',
    twoTruths: [
      'Was physically inside the kitchen at 12:03 AM.',
      'Engaged in a violent confrontation with Vikram Sen at 11:47 PM.'
    ],
    realCrime: 'Attacked Professor Sen in a rage at 11:47 PM, striking him with a heavy brass paperweight, believing she had killed him.',
    contradictionNotes: 'Kitchen camera timer was running 16 minutes fast. She entered the study at 11:47 PM, struck Sen, then fled to the kitchen to establish an alibi.',
    connectedEvidenceIds: ['ev-1', 'ev-5', 'ev-6', 'ev-10', 'ev-11'],
    lockQuestion: 'What did Meera falsely claim was her unbroken alibi between 11:40 PM and 12:10 AM?',
    lockAnswer: 'kitchen',
    lockHint: 'Check the contradiction between her statement and Study Audio Evidence 10.'
  },
  dev: {
    id: 'dev',
    name: 'Devraj "Dev" Negi',
    role: 'Chief Groundskeeper & Manor Caretaker (28 yrs)',
    avatarIcon: 'Key',
    relationshipWithVictim: 'Longtime estate servant who blamed Professor Sen and Blackwood for his daughter\'s disappearance in 2004.',
    motiveLevel: 'CRITICAL',
    motiveDescription: 'Cold, calculated vengeance for a 20-year-old family tragedy covered up under the guise of an experimental trial.',
    alibiStatus: 'COLLAPSED',
    alibiDescription: 'Claims routine boiler maintenance in the lowest sub-basement during the entire duration of the storm.',
    statement: "I'm just the caretaker. I sweep floors, lock external gates, and stoke the boiler. I was in the basement maintenance bay all night.",
    cctvTimestamp: '12:08 AM',
    cctvAction: 'Descends into lower maintenance tunnel with heavy iron wrench and master skeleton key',
    clockSource: 'Mechanical Boiler Pressure Clock',
    twoTruths: [
      'Knows every unmonitored blind spot and hidden servant passageway in Blackwood House.',
      'Entered the study during the 12:13 AM blackout when Sen was still breathing.'
    ],
    realCrime: 'First-degree murder. Smothered Professor Sen during the 12:13 AM blackout to avenge his child killed 20 years ago.',
    contradictionNotes: 'Sub-basement boiler logs show zero coal feed during the storm, while the wall service door adjacent to Study 17-B was unlocked from the inside.',
    connectedEvidenceIds: ['ev-3', 'ev-5', 'ev-6', 'ev-9', 'ev-11', 'ev-12'],
    lockQuestion: 'What hidden route did Dev use to enter the study undetected during the blackout?',
    lockAnswer: 'hidden passage',
    lockHint: 'Dev knows the house better than anyone. Notice the architectural blueprint servant tunnel.'
  }
};
