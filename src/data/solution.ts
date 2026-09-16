import { FinalBossSubmission } from '../types/game';

export interface TimelineEvent {
  time: string;
  actor: string;
  action: string;
  significance: string;
  isDeception: boolean;
}

export const MASTER_TIMELINE: TimelineEvent[] = [
  {
    time: '11:41 PM',
    actor: 'The Conspirator',
    action: 'False evidence incriminating Meera is printed from the HP LaserJet in Study',
    significance: 'Proof of premeditated framing before the physical altercation even occurred.',
    isDeception: true
  },
  {
    time: '11:47 PM',
    actor: 'Dr. Meera Patel',
    action: 'Confronts Vikram Sen over stolen research; strikes him with brass paperweight',
    significance: 'The INITIAL ATTACK. Sen is concussed and bleeding, but survives.',
    isDeception: false
  },
  {
    time: '11:52 PM',
    actor: 'Riya Sharma',
    action: 'Activates concealed audio wiretap outside the Study corridor',
    significance: 'Commits espionage to blackmail Sen over past academic misconduct.',
    isDeception: true
  },
  {
    time: '11:58 PM',
    actor: 'Kabir Varma',
    action: 'Overrides server security logs to prepare circuit breaker trip',
    significance: 'Wiping audit trails; prepares transformer overload.',
    isDeception: true
  },
  {
    time: '12:03 AM',
    actor: 'Professor Vikram Sen',
    action: 'Gains consciousness, stumbles to desk, and records SEN_FINAL_1203.mp4',
    significance: 'PROOF OF LIFE at 12:03 AM. States killer is not the person suspected.',
    isDeception: false
  },
  {
    time: '12:05 AM',
    actor: 'Professor Vikram Sen',
    action: 'Speaks feebly on Antechamber Mic #2 ("Meera... you shouldn\'t have come")',
    significance: 'Confirms he was attacked by Meera earlier, but is currently alive.',
    isDeception: false
  },
  {
    time: '12:08 AM',
    actor: 'Devraj Negi',
    action: 'Checks maintenance corridor; realizes Sen is still alive in the study',
    significance: 'Decides to seize the opportunity to avenge his child.',
    isDeception: false
  },
  {
    time: '12:13 AM',
    actor: 'Kabir Varma',
    action: 'Executes transformer overload command; building plunges into total blackout',
    significance: 'Provides 4-minute darkness window for the true assassin.',
    isDeception: true
  },
  {
    time: '12:14 AM',
    actor: 'Devraj Negi',
    action: 'Slips through the unmonitored servant passage into locked Study 17-B',
    significance: 'The only person with physical access bypassing the locked front door.',
    isDeception: false
  },
  {
    time: '12:15 AM',
    actor: 'Devraj Negi',
    action: 'Smothers Professor Sen with velvet study cushion',
    significance: 'TRUE TIME OF DEATH. Dev commits the actual murder.',
    isDeception: false
  },
  {
    time: '12:17 AM',
    actor: 'Auxiliary System',
    action: 'Emergency backup generator ignites; corridor lighting restored',
    significance: 'Blackout concludes. Dev has already exited via boiler shaft.',
    isDeception: false
  },
  {
    time: '12:18 AM',
    actor: 'Investigation Team',
    action: 'Front study door forced open; Sen discovered dead',
    significance: 'DISCOVERY TIME. The room appears locked from the inside.',
    isDeception: false
  }
];

export function evaluateFinalBossSubmission(submission: Partial<FinalBossSubmission>): {
  score: number;
  maxScore: number;
  feedback: string[];
  passed: boolean;
} {
  const feedback: string[] = [];
  let score = 0;
  const maxScore = 100;

  // 1. Attacker (Meera) - 20 pts
  const attackerText = (submission.attacker || '').toLowerCase();
  if (attackerText.includes('meera')) {
    score += 20;
    feedback.push('✓ Attacker identified: Dr. Meera Patel assaulted Sen at 11:47 PM (+20 pts)');
  } else {
    feedback.push('✗ Attacker incorrect: You failed to distinguish who initiated the 11:47 PM assault.');
  }

  // 2. Murderer (Dev) - 25 pts
  const murdererText = (submission.murderer || '').toLowerCase();
  if (murdererText.includes('dev')) {
    score += 25;
    feedback.push('✓ Murderer identified: Devraj "Dev" Negi committed the actual murder at 12:15 AM (+25 pts)');
  } else {
    feedback.push('✗ Murderer incorrect: Dev took advantage of the blackout to deliver the fatal blow.');
  }

  // 3. Blackout Operator (Kabir) - 15 pts
  const blackoutText = (submission.blackoutCauser || '').toLowerCase();
  if (blackoutText.includes('kabir')) {
    score += 15;
    feedback.push('✓ Blackout Operator identified: Kabir Varma tripped the transformers at 12:13 AM (+15 pts)');
  } else {
    feedback.push('✗ Blackout Operator incorrect: Kabir caused the blackout, not the murderer.');
  }

  // 4. Timeline Dissection - 20 pts
  const deathText = (submission.trueDeathTime || '').toLowerCase();
  const attackText = (submission.attackTime || '').toLowerCase();
  const preCrimeText = (submission.falseEvidenceTime || '').toLowerCase();

  const isDeathAccurate = deathText.includes('12:15') || (deathText.includes('12:14') || deathText.includes('blackout'));
  const isAttackAccurate = attackText.includes('11:47');
  const isPreCrimeAccurate = preCrimeText.includes('11:41');

  if (isDeathAccurate && isAttackAccurate) {
    score += 15;
    feedback.push('✓ Timeline Breakdown: Correctly separated Attack Time (11:47 PM) from Death Time (12:15 AM) (+15 pts)');
  } else {
    feedback.push('✗ Timeline Breakdown: Conflated the initial 11:47 PM assault with the 12:15 AM death.');
  }

  if (isPreCrimeAccurate) {
    score += 5;
    feedback.push('✓ Pre-Crime Evidence Log: Noticed the 11:41 PM printer log preceding the attack (+5 pts)');
  } else {
    feedback.push('! Pre-Crime Alert: Check the printer spool timestamp (11:41 PM) showing premeditated framing.');
  }

  // 5. The AI Vulnerability / Assumption Error - 20 pts
  const errorText = (submission.aiBiggestError || '').toLowerCase();
  const hasAssumptionMatch = 
    errorText.includes('synchroniz') || 
    errorText.includes('clock') || 
    errorText.includes('assum') || 
    errorText.includes('frame') || 
    errorText.includes('attacker') || 
    errorText.includes('conflat');

  if (hasAssumptionMatch) {
    score += 20;
    feedback.push('✓ AI Flaw Exposed: Recognized that the AI blindly assumed all CCTV clocks were synchronized and conflated suspicious framing with fatal culpability (+20 pts)');
  } else {
    feedback.push('✗ AI Flaw Missed: The AI equated evidence fabrication and assault with the actual fatal moment.');
  }

  const passed = score >= 75;
  return { score, maxScore, feedback, passed };
}
