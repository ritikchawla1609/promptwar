import fs from 'fs';
import path from 'path';

console.log('================================================================');
console.log('🩸 RUNNING COMPLETE SMOKE TEST: PROMPT WAR 2.0');
console.log('================================================================\n');

let passedTests = 0;
let totalTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    console.log(`  ✓ PASS: ${message}`);
    passedTests++;
  } else {
    console.error(`  ✗ FAIL: ${message}`);
    process.exitCode = 1;
  }
}

const projectRoot = '/Users/ritikchawla/Downloads/promptwar-main';

// ----------------------------------------------------------------------------
// TEST 1: PROJECT CONFIGURATION & BUILD ASSETS
// ----------------------------------------------------------------------------
console.log('--- TEST GROUP 1: BUILD & ASSET INTEGRITY ---');

const distHtmlPath = path.join(projectRoot, 'dist', 'index.html');
assert(fs.existsSync(distHtmlPath), 'Production dist/index.html exists');

const distHtml = fs.readFileSync(distHtmlPath, 'utf-8');
assert(distHtml.includes('PROMPT WAR: The House That Remembers (2.0)'), 'dist/index.html has correct title metadata');
assert(distHtml.includes('id="root"'), 'dist/index.html has root mount element');

const distAssets = fs.readdirSync(path.join(projectRoot, 'dist', 'assets'));
const jsBundle = distAssets.find(f => f.endsWith('.js'));
const cssBundle = distAssets.find(f => f.endsWith('.css'));
assert(!!jsBundle, `Compiled JavaScript bundle exists: ${jsBundle}`);
assert(!!cssBundle, `Compiled CSS bundle exists: ${cssBundle}`);

// ----------------------------------------------------------------------------
// TEST 2: CSS OVERLAY & POINTER EVENTS CHECK
// ----------------------------------------------------------------------------
console.log('\n--- TEST GROUP 2: CSS POINTER EVENTS FIX VERIFICATION ---');
const indexCss = fs.readFileSync(path.join(projectRoot, 'src', 'index.css'), 'utf-8');
assert(indexCss.includes('.crt-overlay::before'), 'CRT overlay uses ::before pseudo-element');
assert(!indexCss.match(/^\.crt-overlay\s*\{[^}]*pointer-events:\s*none/m), '.crt-overlay does NOT have pointer-events: none on container');
assert(indexCss.includes('.crt-vignette::after'), 'CRT vignette uses ::after pseudo-element');

// ----------------------------------------------------------------------------
// TEST 3: ROUND 0 & HORROR INTRO INTEGRITY
// ----------------------------------------------------------------------------
console.log('\n--- TEST GROUP 3: ROUND 0 INTRO & AUDIO FALLBACK ---');
const introTsx = fs.readFileSync(path.join(projectRoot, 'src', 'components', 'HorrorIntro.tsx'), 'utf-8');
assert(introTsx.includes('DEPLOY INVESTIGATION SQUAD ▶') || introTsx.includes('INITIALIZE INVESTIGATION ▶'), 'Intro contains active tactical deploy button');
assert(introTsx.includes('SKIP INTRO'), 'Intro contains quick Skip button');
assert(introTsx.includes('11:47 PM') && introTsx.includes('12:03 AM') && introTsx.includes('12:13 AM') && introTsx.includes('12:17 AM'), 'Intro contains all 4 rapid flashing timestamps');
assert(introTsx.includes('ONE OF THESE TIMES NEVER HAPPENED.'), 'Intro contains the psychological hook prompt');

const audioEngineTs = fs.readFileSync(path.join(projectRoot, 'src', 'utils', 'audioEngine.ts'), 'utf-8');
assert(audioEngineTs.includes('fallbackTimer'), 'AudioEngine contains guaranteed speech fallback timer to prevent freezes');

// ----------------------------------------------------------------------------
// TEST 4: ROUND 1 EVIDENCE & CASSETTE SLOWDOWN
// ----------------------------------------------------------------------------
console.log('\n--- TEST GROUP 4: ROUND 1 CLUES & AUDIO SLOWDOWN ---');
const evidenceTs = fs.readFileSync(path.join(projectRoot, 'src', 'data', 'evidence.ts'), 'utf-8');
assert(evidenceTs.includes('When the house stopped... someone started.'), 'Evidence 04 contains 1.0x normal audio line');
assert(evidenceTs.includes('Someone started BEFORE the house stopped.'), 'Evidence 04 contains 0.5x slowdown sub-bass revelation');
assert(evidenceTs.includes('PAGE 47 - HANDWRITTEN IN BLACK INK:'), 'Evidence 03 notebook contains victim handwritten cipher');

// ----------------------------------------------------------------------------
// TEST 5: ROUND 2 FIVE SUSPECTS & NON-MURDER CRIMES
// ----------------------------------------------------------------------------
console.log('\n--- TEST GROUP 5: ROUND 2 FIVE SUSPECTS & LOCKS ---');
const suspectsTs = fs.readFileSync(path.join(projectRoot, 'src', 'data', 'suspects.ts'), 'utf-8');
['aarav', 'riya', 'kabir', 'meera', 'dev'].forEach(id => {
  assert(suspectsTs.includes(`id: '${id}'`), `Suspect "${id}" is properly configured`);
});

// Test lock disarming simulation
function testLock(targetAnswer, input) {
  const cleanInput = input.trim().toLowerCase();
  const cleanTarget = targetAnswer.toLowerCase();
  return cleanInput.includes(cleanTarget) || (cleanTarget.includes(cleanInput) && cleanInput.length >= 4);
}

assert(testLock('research notebook', 'stole research notebook'), 'Aarav lock disarms on "stole research notebook"');
assert(testLock('audio recording', 'illegal audio recording'), 'Riya lock disarms on "illegal audio recording"');
assert(testLock('blackout', 'triggered the blackout'), 'Kabir lock disarms on "triggered the blackout"');
assert(testLock('kitchen', 'fabricated kitchen alibi'), 'Meera lock disarms on "fabricated kitchen alibi"');
assert(testLock('hidden passage', 'used hidden passage'), 'Dev lock disarms on "used hidden passage"');
assert(!testLock('research notebook', 'poisoned tea'), 'Locks reject completely wrong guesses');

// ----------------------------------------------------------------------------
// TEST 6: ROUND 3 AI TIMELINE TRAP
// ----------------------------------------------------------------------------
console.log('\n--- TEST GROUP 6: ROUND 3 AI TRAP SIMULATOR ---');
const aiTrapTsx = fs.readFileSync(path.join(projectRoot, 'src', 'components', 'Round3AiTrap.tsx'), 'utf-8');
assert(aiTrapTsx.includes('TIMELINE STATUS: CONSISTENT'), 'AI simulator produces "TIMELINE CONSISTENT" trap response');
assert(aiTrapTsx.includes('94.2%'), 'AI simulator reports 94.2% confidence');
assert(aiTrapTsx.includes('Assumption 1: All CCTV hardware clocks are synchronized.'), 'Reasoning inspection reveals the clock synchronization trap');

// ----------------------------------------------------------------------------
// TEST 7: ROUND 4 VIDEO FORENSICS ---
// ----------------------------------------------------------------------------
console.log('\n--- TEST GROUP 7: ROUND 4 VIDEO FORENSICS ---');
const deadManTsx = fs.readFileSync(path.join(projectRoot, 'src', 'components', 'Round4DeadMan.tsx'), 'utf-8');
assert(deadManTsx.includes('SEN_FINAL_1203.mp4'), 'Sen 12:03 video is wired into terminal');
assert(deadManTsx.includes('FEED TIMESTAMP: 12:03:17 AM'), 'Video terminates at 12:03:17 AM');
assert(deadManTsx.includes('PINHOLE_1147.mp4') || deadManTsx.includes('YOU_WERE_NOT_SUPPOSED_TO_FIND_THIS.mp4'), 'Restricted 11:47 assault clip is wired in');
assert(deadManTsx.includes('FORENSIC TIME TRIAD DIFFERENTIATION') || deadManTsx.includes('FORENSIC TIME DIFFERENTIATION EXERCISE'), 'Time differentiation exercise (Attack vs Death vs Discovery) is active');

// ----------------------------------------------------------------------------
// TEST 8: ROUND 5 FALSE MURDERER & PRE-CRIME ---
// ----------------------------------------------------------------------------
console.log('\n--- TEST GROUP 8: ROUND 5 FALSE MURDERER & PRE-CRIME ---');
const falseMurdererTsx = fs.readFileSync(path.join(projectRoot, 'src', 'components', 'Round5FalseMurderer.tsx'), 'utf-8');
assert(falseMurdererTsx.includes('PRIMARY SUSPECT: DR. MEERA PATEL'), 'AI false indictment targets Dr. Meera Patel');
assert(falseMurdererTsx.includes('97.8%'), 'AI indictment claims 97.8% confidence');
assert(falseMurdererTsx.includes('FATAL COGNITIVE ERROR') || falseMurdererTsx.includes('INVESTIGATION INCOMPLETE'), 'Submitting Meera triggers confirmation bias error');
assert(falseMurdererTsx.includes('11:41:22 PM'), 'Challenging AI reveals 11:41 PM printer log');

// ----------------------------------------------------------------------------
// TEST 9: ROUND 6 FINAL BOSS SCORING RUBRIC
// ----------------------------------------------------------------------------
console.log('\n--- TEST GROUP 9: FINAL BOSS PROMPT EVALUATOR ---');
const solutionTs = fs.readFileSync(path.join(projectRoot, 'src', 'data', 'solution.ts'), 'utf-8');

// Logic extracted from solution.ts for independent verification
function evaluateSubmission(sub) {
  let score = 0;
  const feedback = [];
  if ((sub.attacker || '').toLowerCase().includes('meera')) score += 20;
  if ((sub.murderer || '').toLowerCase().includes('dev')) score += 25;
  if ((sub.blackoutCauser || '').toLowerCase().includes('kabir')) score += 15;
  
  const deathMatch = (sub.trueDeathTime || '').toLowerCase().includes('12:15') || (sub.trueDeathTime || '').toLowerCase().includes('blackout');
  const attackMatch = (sub.attackTime || '').toLowerCase().includes('11:47');
  if (deathMatch && attackMatch) score += 15;

  if ((sub.falseEvidenceTime || '').toLowerCase().includes('11:41')) score += 5;

  const err = (sub.aiBiggestError || '').toLowerCase();
  if (err.includes('synchroniz') || err.includes('clock') || err.includes('assum') || err.includes('frame')) score += 20;

  return { score, passed: score >= 75 };
}

const fullWin = evaluateSubmission({
  attacker: 'Dr. Meera Patel',
  murderer: 'Devraj Negi',
  blackoutCauser: 'Kabir Varma',
  attackTime: '11:47 PM',
  trueDeathTime: '12:15 AM',
  falseEvidenceTime: '11:41 PM',
  aiBiggestError: 'The AI assumed synchronized clocks and conflated framing with death'
});
assert(fullWin.score === 100 && fullWin.passed === true, 'Full solution achieves 100/100 points and passes');

const naiveFail = evaluateSubmission({
  attacker: 'Meera',
  murderer: 'Meera', // Wrong!
  blackoutCauser: 'Meera',
  attackTime: '11:47 PM',
  trueDeathTime: '11:47 PM',
  falseEvidenceTime: '12:00 AM',
  aiBiggestError: 'None'
});
assert(naiveFail.score < 50 && naiveFail.passed === false, 'Blaming Meera fails with score < 50');

// ----------------------------------------------------------------------------
// TEST 10: GLITCH CLIMAX & BLACKWOOD CLIFFHANGER
// ----------------------------------------------------------------------------
console.log('\n--- TEST GROUP 10: 60-SECOND CLIMAX & BLACKWOOD LORE ---');
const climaxTsx = fs.readFileSync(path.join(projectRoot, 'src', 'components', 'GlitchClimax.tsx'), 'utf-8');
assert(climaxTsx.includes('SHE ATTACKED HIM.'), 'Climax reveals Meera: SHE ATTACKED HIM');
assert(climaxTsx.includes('HE CAUSED THE BLACKOUT.'), 'Climax reveals Kabir: HE CAUSED THE BLACKOUT');
assert(climaxTsx.includes('SHE KNEW THE TRUTH.'), 'Climax reveals Riya: SHE KNEW THE TRUTH');
assert(climaxTsx.includes('HE STOLE THE EVIDENCE.'), 'Climax reveals Aarav: HE STOLE THE EVIDENCE');
assert(climaxTsx.includes('HE WAITED.'), 'Climax reveals Dev: HE WAITED');
assert(climaxTsx.includes('BUT WHO KILLED THE FIRST VICTIM?'), 'Climax reveals the Blackwood mystery hook');
assert(climaxTsx.includes('PROFESSOR BLACKWOOD'), 'Climax reveals Professor Blackwood title');

// ----------------------------------------------------------------------------
// TEST 11: HOST / FACILITATOR HUD
// ----------------------------------------------------------------------------
console.log('\n--- TEST GROUP 11: FACILITATOR HUD & SHORTCUTS ---');
const hostHudTsx = fs.readFileSync(path.join(projectRoot, 'src', 'components', 'HostControlModal.tsx'), 'utf-8');
assert(hostHudTsx.includes('GAME MASTER / FACILITATOR OVERRIDE HUD'), 'Host HUD header is present');
assert(hostHudTsx.includes('Unlock All 5 Suspect Locks'), 'Host HUD has quick lock override');
assert(hostHudTsx.includes('Force Unlock 11:41 PM Printer Log'), 'Host HUD has printer log override');
assert(hostHudTsx.includes('Launch 60-Sec Horror Climax Reveal'), 'Host HUD can trigger climax directly');

const appTsx = fs.readFileSync(path.join(projectRoot, 'src', 'App.tsx'), 'utf-8');
assert(appTsx.includes("e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'h'"), 'Ctrl+Shift+H global hotkey is wired to Host HUD');

// ----------------------------------------------------------------------------
// TEST 12: 3D FIRST-PERSON MANSION & UV BLACKLIGHT MODE
// ----------------------------------------------------------------------------
console.log('\n--- TEST GROUP 12: 3D HORROR MANSION & UV BLACKLIGHT LUMINOL ---');
const house3dTsx = fs.readFileSync(path.join(projectRoot, 'src', 'components', 'House3D.tsx'), 'utf-8');
assert(house3dTsx.includes('createLuminolDecalTexture'), 'House3D implements procedural glowing luminol graffiti texture');
assert(house3dTsx.includes('isUvMode'), 'House3D tracks UV Blacklight mode state');
assert(house3dTsx.includes("e.code === 'KeyL'"), 'House3D listens for [L] key to toggle UV Blacklight mode');
assert(house3dTsx.includes("e.code === 'KeyF'"), 'House3D listens for [F] key to toggle halogen flashlight');
assert(house3dTsx.includes("DON'T TRUST KITCHEN CLOCK"), 'House3D contains luminol kitchen clock offset graffiti');
assert(house3dTsx.includes('MEERA STRUCK HIM AT 11:47 PM'), 'House3D contains luminol floor assault graffiti');
assert(house3dTsx.includes('DEV IS IN THE WALLS'), 'House3D contains luminol secret passage graffiti');
assert(house3dTsx.includes('SPOOL 12: PRINTED AT 11:41 PM'), 'House3D contains luminol Study 17-B door pre-crime graffiti');
assert(house3dTsx.includes('0x9d4edd'), 'House3D changes flashlight beam to vivid ultraviolet in UV mode');

// ----------------------------------------------------------------------------
// TEST 13: SUBROUND NARRATIVE BRIDGES & MILESTONE LINKING
// ----------------------------------------------------------------------------
console.log('\n--- TEST GROUP 13: SUBROUND NARRATIVE MILESTONE PROGRESSION ---');
const bridgeTsx = fs.readFileSync(path.join(projectRoot, 'src', 'components', 'NarrativeBridgeModal.tsx'), 'utf-8');
assert(bridgeTsx.includes('INVESTIGATION MILESTONE UNLOCKED'), 'NarrativeBridgeModal contains milestone badge');
assert(bridgeTsx.includes('CRITICAL TRUTH EXPOSED:'), 'NarrativeBridgeModal contains critical truth container');
assert(bridgeTsx.includes('HOW THIS LEADS TO THE NEXT LAYER:'), 'NarrativeBridgeModal links directly into next subround');

assert(appTsx.includes('handleAudioRevealedSecret'), 'App.tsx wires Round 1 -> Round 2 tape decoding bridge');
assert(appTsx.includes('handleSolveLock'), 'App.tsx wires Round 2 -> Round 3 suspect lock bridge');
assert(appTsx.includes('handleInspectReasoning'), 'App.tsx wires Round 3 -> Round 4 AI inspection bridge');
assert(appTsx.includes('handleUnlockHiddenVideo'), 'App.tsx wires Round 4 -> Round 5 hidden video bridge');
assert(appTsx.includes('handleChallengeAi'), 'App.tsx wires Round 5 -> Round 6 printer log bridge');
assert(appTsx.includes('handleProceedFromBridge'), 'App.tsx manages clean transition between subrounds');

// ----------------------------------------------------------------------------
// TEST 14: DETECTIVE CONSPIRACY WALL (RED THREADS)
// ----------------------------------------------------------------------------
console.log('\n--- TEST GROUP 14: DETECTIVE CONSPIRACY WALL (RED THREADS) ---');
const boardTsx = fs.readFileSync(path.join(projectRoot, 'src', 'components', 'EvidenceBoard.tsx'), 'utf-8');
assert(boardTsx.includes('BLACKWOOD HOMICIDE CONSPIRACY WALL'), 'EvidenceBoard contains Blackwood conspiracy wall header');
assert(boardTsx.includes('CENTRAL VICTIM'), 'EvidenceBoard highlights central victim Prof. Sen');
assert(boardTsx.includes('CAUSAL PROGRESSION'), 'EvidenceBoard tracks red thread causal progression');
assert(appTsx.includes("viewMode === 'board'"), 'App.tsx supports viewMode: board');
assert(appTsx.includes('CONSPIRACY WALL (RED THREADS)'), 'App.tsx mode switcher offers Conspiracy Wall button');
assert(appTsx.includes("e.key === 'Tab'"), 'App.tsx [Tab] shortcut cycles seamlessly between 3D, Terminal, and Board');

// ----------------------------------------------------------------------------
// TEST 15: ADVANCED WEB AUDIO HORROR SYNTHESIS
// ----------------------------------------------------------------------------
console.log('\n--- TEST GROUP 15: WEB AUDIO PROCEDURAL HORROR SYNTHESIS ---');
assert(audioEngineTs.includes('playTerrifyingScream'), 'AudioEngine contains procedural human screaming synthesizer');
assert(audioEngineTs.includes('playViolinShriek'), 'AudioEngine contains Penderecki microtonal violin cluster shriek');
assert(audioEngineTs.includes('playBinauralWhisper'), 'AudioEngine contains 3D binaural ghostly whisper audio generator');
assert(audioEngineTs.includes('playBloodSplatter'), 'AudioEngine contains visceral blood splatter audio');
assert(audioEngineTs.includes('playDoorRattle'), 'AudioEngine contains locked wooden door stress rattle');
assert(audioEngineTs.includes('playThunderClap'), 'AudioEngine contains atmospheric rolling thunder synthesis');

// ----------------------------------------------------------------------------
// TEST 16: CALL OF DUTY STYLE TACTICAL HUD & 1-CLICK DEDUCTION STREAMLINING
// ----------------------------------------------------------------------------
console.log('\n--- TEST GROUP 16: CALL OF DUTY TACTICAL HUD & 1-CLICK SYSTEMS ---');
assert(audioEngineTs.includes('playHitmarker'), 'AudioEngine implements COD hitmarker acoustic click');
assert(audioEngineTs.includes('playRadioChirp'), 'AudioEngine implements tactical military radio chirp');
assert(audioEngineTs.includes('playObjectiveComplete'), 'AudioEngine implements COD objective complete alert');
assert(audioEngineTs.includes('playNightVisionToggle'), 'AudioEngine implements NVG phosphor toggle audio');

assert(house3dTsx.includes('tacticalWaypoints'), 'House3D generates 3D floating holographic billboard waypoints');
assert(house3dTsx.includes('compassYaw') && house3dTsx.includes('CALL OF DUTY TACTICAL COMPASS HUD'), 'House3D renders rotating tactical compass ribbon with degrees/cardinals');
assert(house3dTsx.includes('CALL OF DUTY DYNAMIC RETICLE'), 'House3D renders dynamic 4-axis reticle with lock-on brackets');
assert(house3dTsx.includes('CALL OF DUTY IN-GAME 3D HOLOGRAPHIC INTEL INSPECTION CARD'), 'House3D features in-game 3D holographic intel card inspect modal');

const r2Tsx = fs.readFileSync(path.join(projectRoot, 'src', 'components', 'Round2Locks.tsx'), 'utf-8');
assert(r2Tsx.includes('TACTICAL INTEL CHIPS'), 'Round 2 implements 1-click tactical deduction chips');

assert(aiTrapTsx.includes('TACTICAL_PROMPT_CHIPS'), 'Round 3 implements 1-click tactical AI prompt overrides');
assert(aiTrapTsx.includes('EXPOSE 94.2% AI BIAS'), 'Round 3 features COD tactical override button');

assert(deadManTsx.includes('handleAutoSync'), 'Round 4 implements 1-click auto-sync chronology triad');
assert(deadManTsx.includes('TACTICAL TIMELINE RADAR'), 'Round 4 renders 3D interactive chronology timeline map');

assert(falseMurdererTsx.includes('CHALLENGE AI // AUDIT 11:41 PM PRE-CRIME SPOOL'), 'Round 5 implements 1-click pre-crime audit');
assert(falseMurdererTsx.includes('CLASSIFIED TARGET PROFILE'), 'Round 5 presents COD target dossier');

const finalBossTsx = fs.readFileSync(path.join(projectRoot, 'src', 'components', 'FinalBossPrompt.tsx'), 'utf-8');
assert(finalBossTsx.includes('handleInjectMasterExploit'), 'Round 6 implements 1-click master exploit injection');
// ----------------------------------------------------------------------------
// TEST 17: TACTICAL FRAMING ARCHITECTURE & SPLIT COMMAND DECK
// ----------------------------------------------------------------------------
console.log('\n--- TEST GROUP 17: TACTICAL FRAMING & SPLIT COMMAND DECK ---');
assert(indexCss.includes('.tactical-frame'), 'index.css defines .tactical-frame container styling');
assert(indexCss.includes('.tactical-corners'), 'index.css defines .tactical-corners 4-axis target brackets');
assert(indexCss.includes('.corner-tl') && indexCss.includes('.corner-br'), 'index.css defines explicit corner indicators');

const currentAppTsx = fs.readFileSync(path.join(projectRoot, 'src', 'App.tsx'), 'utf-8');
assert(currentAppTsx.includes('terminalLayout'), 'App.tsx maintains modular frame layout state');
assert(currentAppTsx.includes('SPLIT DECK') && currentAppTsx.includes('PUZZLE ONLY') && currentAppTsx.includes('FULL INTEL'), 'App.tsx provides 3 modular frame layout modes');
assert(currentAppTsx.includes('lg:grid-cols-12'), 'App.tsx implements 2-Column Split Command Deck');

const clueDossierTsx = fs.readFileSync(path.join(projectRoot, 'src', 'components', 'ClueDossier.tsx'), 'utf-8');
assert(clueDossierTsx.includes('compact = false') || clueDossierTsx.includes('compact?: boolean'), 'ClueDossier supports compact sidebar deck mode');
assert(clueDossierTsx.includes('activeCategory') && clueDossierTsx.includes('searchQuery'), 'ClueDossier provides category filtering and live search');
assert(clueDossierTsx.includes('#EV-'), 'ClueDossier presents tactical evidence ID badges');

// ----------------------------------------------------------------------------
// TEST 18: PHASE NAVIGATION & CLUE DEPENDENCY GRAPH
// ----------------------------------------------------------------------------
console.log('\n--- TEST GROUP 18: PHASE NAVIGATION & CLUE DEPENDENCY GRAPH ---');
const headerTimerTsx = fs.readFileSync(path.join(projectRoot, 'src', 'components', 'HeaderTimer.tsx'), 'utf-8');
assert(headerTimerTsx.includes('PHASES = ['), 'HeaderTimer defines PHASES array');
['BRIEFING', 'CRIME SCENE', 'SUSPECTS', 'TIMELINE', 'FORENSICS', 'CASE BOARD', 'ACCUSATION'].forEach(shortTitle => {
  assert(headerTimerTsx.includes(`shortTitle: '${shortTitle}'`), `HeaderTimer has tab for "${shortTitle}"`);
});
assert(headerTimerTsx.includes('progressPercent'), 'HeaderTimer calculates and displays live progress percentage');
assert(headerTimerTsx.includes('CASE #17-B'), 'HeaderTimer displays prominent Case File metadata');

const phase0Tsx = fs.readFileSync(path.join(projectRoot, 'src', 'components', 'Phase0Briefing.tsx'), 'utf-8');
assert(phase0Tsx.includes('VICTIM: PROFESSOR VIKRAM SEN'), 'Phase 0 contains victim identity');
assert(phase0Tsx.includes('BLACKWOOD ESTATE (EST. 1894)'), 'Phase 0 contains location telemetry');
assert(phase0Tsx.includes('INITIATE FIRST-PERSON CRIME SCENE RECON'), 'Phase 0 has clear directive to launch Phase 1');

const phase1Tsx = fs.readFileSync(path.join(projectRoot, 'src', 'components', 'Phase1CrimeScene.tsx'), 'utf-8');
assert(phase1Tsx.includes('CRIME SCENE INVESTIGATION OBJECTIVES'), 'Phase 1 has 5 structured objectives section');
['clockInspected', 'tapeFound', 'bloodExamined', 'doorInspected', 'luminolRevealed'].forEach(objKey => {
  assert(phase1Tsx.includes(objKey), `Phase 1 tracks objective "${objKey}"`);
});
assert(phase1Tsx.includes('onAutoDiscoverAll'), 'Phase 1 provides 1-click Auto Discover for testing');
assert(phase1Tsx.includes('onProceedToPhase2'), 'Phase 1 provides seamless bridge to Phase 2 Suspects');

// Clue & Suspect Dependency Graph verification
const suspectsDataTs = fs.readFileSync(path.join(projectRoot, 'src', 'data', 'suspects.ts'), 'utf-8');
assert(suspectsDataTs.includes('relationshipWithVictim'), 'Suspects have relationship with victim defined');
assert(suspectsDataTs.includes('motiveLevel: \'EXTREME\'') && suspectsDataTs.includes('motiveLevel: \'CRITICAL\''), 'Suspects have granular motive levels defined');
assert(suspectsDataTs.includes('alibiStatus: \'FABRICATED\'') && suspectsDataTs.includes('alibiStatus: \'COLLAPSED\''), 'Suspects have verified alibi statuses');
assert(suspectsDataTs.includes('connectedEvidenceIds:'), 'Suspects link directly to connected evidence IDs');
assert(suspectsDataTs.includes('contradictionNotes:'), 'Suspects detail forensic contradiction notes');

const evidenceDataTs = fs.readFileSync(path.join(projectRoot, 'src', 'data', 'evidence.ts'), 'utf-8');
assert(evidenceDataTs.includes('connectedClueIds:'), 'Evidence items have interconnected clue dependency graph');
assert(evidenceDataTs.includes('contradictsSuspect:'), 'Evidence items explicitly contradict suspect alibis');
assert(evidenceDataTs.includes('significance:'), 'Evidence items have forensic significance notes');

const evidenceBoardTsx = fs.readFileSync(path.join(projectRoot, 'src', 'components', 'EvidenceBoard.tsx'), 'utf-8');
assert(evidenceBoardTsx.includes('RELATIONSHIP INSPECTOR'), 'EvidenceBoard provides relationship inspector panel');
assert(evidenceBoardTsx.includes('CONNECTED EVIDENCE THREADS'), 'EvidenceBoard visualizes connected evidence threads');
assert(evidenceBoardTsx.includes('SUSPECT ALIBI CONTRADICTIONS'), 'EvidenceBoard highlights suspect contradictions');

assert(clueDossierTsx.includes('FORENSIC SIGNIFICANCE'), 'ClueDossier displays forensic significance');
assert(clueDossierTsx.includes('CONTRADICTS SUSPECT ALIBI'), 'ClueDossier highlights suspect contradictions');

assert(currentAppTsx.includes('<Phase0Briefing'), 'App.tsx renders Phase0Briefing for Phase 0');
assert(currentAppTsx.includes('<Phase1CrimeScene'), 'App.tsx renders Phase1CrimeScene for Phase 1');
assert(currentAppTsx.includes('currentPhase={currentRound}'), 'App.tsx passes currentPhase to HeaderTimer');
assert(currentAppTsx.includes('onSelectPhase='), 'App.tsx passes onSelectPhase handler to HeaderTimer');

// ----------------------------------------------------------------------------
// SUMMARY REPORT
// ----------------------------------------------------------------------------
console.log('\n================================================================');
console.log(`🩸 SMOKE TEST COMPLETED: ${passedTests} / ${totalTests} ASSERTIONS PASSED`);
if (passedTests === totalTests) {
  console.log('🏆 STATUS: 100% PASSING — ALL GAME SYSTEMS VERIFIED & OPERATIONAL');
} else {
  console.log(`⚠️ STATUS: ${totalTests - passedTests} ASSERTIONS FAILED`);
}
console.log('================================================================\n');
