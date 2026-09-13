import { Suspect } from '../types/game';

export const SUSPECTS: Record<string, Suspect> = {
  aarav: {
    id: 'aarav',
    name: 'Aarav Mehta',
    role: 'Graduate Research Fellow',
    avatarIcon: 'UserCheck',
    statement: "I entered the East Hallway at 11:47 PM to retrieve reference manuals. I never went near Professor Sen's private study.",
    cctvTimestamp: '11:47 PM',
    cctvAction: 'Enters East Hallway carrying leather satchel',
    clockSource: 'East Corridor Digital Terminal (Clock Delta: +0m, synced to Grandfather Clock)',
    twoTruths: [
      'Entered the hallway at 11:47 PM exactly.',
      'Did not enter the study through the front door.'
    ],
    realCrime: "Stole Professor Blackwood's confidential 20-year-old experiment logbook from the archive drawer.",
    lockQuestion: 'What physical asset did Aarav remove from the East Wing, and what clock generated his 11:47 timestamp?',
    lockAnswer: 'research notebook',
    lockHint: 'Look closely at his satchel and the grandfather clock reference in the notebook.'
  },
  riya: {
    id: 'riya',
    name: 'Riya Sharma',
    role: 'Journalist & PhD Candidate',
    avatarIcon: 'Radio',
    statement: "I was reviewing thesis records in the reading room. I heard footsteps around 11:50, but stayed put until the lights went dark.",
    cctvTimestamp: '11:52 PM',
    cctvAction: 'Seen adjusting concealed lapel recorder outside Study antechamber',
    clockSource: 'Reading Room Analog Wall Clock (-3m drift)',
    twoTruths: [
      'Was recording audio in the perimeter of the study.',
      'Heard voices arguing inside the study prior to midnight.'
    ],
    realCrime: 'Planted illegal directional microphones to record Sen admitting to historical academic fraud.',
    lockQuestion: 'What illicit equipment was Riya operating outside the Study, and what was her target?',
    lockAnswer: 'audio recording',
    lockHint: 'Inspect her lapel in the CCTV feed and the audio device frequency log.'
  },
  kabir: {
    id: 'kabir',
    name: 'Kabir Varma',
    role: 'Infrastructure & Security Admin',
    avatarIcon: 'Terminal',
    statement: "The building network suffered a packet flood at 11:55 PM. I was trapped in the server bunker restoring breaker relays until 12:20 AM.",
    cctvTimestamp: '11:58 PM',
    cctvAction: 'Enters Basement Server Hub using emergency maintenance master fob',
    clockSource: 'Network Time Protocol (NTP) Mainframe Server',
    twoTruths: [
      'Accessed the security mainframe terminal directly at 11:58 PM.',
      'Triggered the complete building circuit trip at 12:13 AM.'
    ],
    realCrime: 'Deliberately overloaded the transformer to trigger the 12:13 AM blackout so he could wipe CCTV logs.',
    lockQuestion: 'What event did Kabir trigger at 12:13 AM, and what was his primary objective?',
    lockAnswer: 'blackout',
    lockHint: 'Look at the power breaker grid and his override command at 12:13 AM.'
  },
  meera: {
    id: 'meera',
    name: 'Dr. Meera Patel',
    role: 'Senior Associate Researcher',
    avatarIcon: 'FileWarning',
    statement: "I was in the kitchen brewing herbal tea from 11:40 PM until after midnight. Ask anyone—I had zero reason to confront Vikram tonight.",
    cctvTimestamp: '12:03 AM',
    cctvAction: 'Paces kitchen hallway in agitated state, holding crumpled parchment',
    clockSource: 'Kitchen Industrial Timer (+16m manual offset)',
    twoTruths: [
      'Was physically inside the kitchen at 12:03 AM.',
      'Engaged in a violent confrontation with Vikram Sen at 11:47 PM.'
    ],
    realCrime: 'Attacked Professor Sen in a rage at 11:47 PM, striking him with a heavy brass paperweight, believing she had killed him.',
    lockQuestion: 'What did Meera falsely claim was her unbroken alibi between 11:40 PM and 12:10 AM?',
    lockAnswer: 'kitchen',
    lockHint: 'Check the contradiction between her statement and Study Audio Evidence 10.'
  },
  dev: {
    id: 'dev',
    name: 'Devraj "Dev" Negi',
    role: 'Chief Groundskeeper & Caretaker (28 yrs)',
    avatarIcon: 'Key',
    statement: "I'm just the caretaker. I sweep floors, lock external gates, and stoke the boiler. I was in the basement maintenance bay all night.",
    cctvTimestamp: '12:08 AM',
    cctvAction: 'Descends into lower maintenance tunnel with heavy iron wrench and master skeleton key',
    clockSource: 'Mechanical Boiler Pressure Clock',
    twoTruths: [
      'Knows every unmonitored blind spot and hidden servant passageway in Blackwood House.',
      'Entered the study during the 12:13 AM blackout when Sen was still breathing.'
    ],
    realCrime: 'First-degree murder. Smothered Professor Sen during the 12:13 AM blackout to avenge his child killed 20 years ago.',
    lockQuestion: 'What hidden route did Dev use to enter the study undetected during the blackout?',
    lockAnswer: 'hidden passage',
    lockHint: 'Dev knows the house better than anyone. Notice the architectural blueprint servant tunnel.'
  }
};
