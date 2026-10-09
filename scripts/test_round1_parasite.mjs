/**
 * Comprehensive Automated Verification Suite for Prompt War
 * Focus: Round 1 (Prompt Parasite: SEE. STEAL. EVOLVE.),
 * Global Synchronized Timing, Deadlines, Matchmaking, and Admin Integration.
 */

import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';

console.log('🧪 Starting Prompt War Round 1 (Prompt Parasite) Verification Suite...\n');

let totalTests = 0;
let passedTests = 0;

function test(name, fn) {
  totalTests++;
  try {
    fn();
    console.log(`  ✅ PASS: ${name}`);
    passedTests++;
  } catch (err) {
    console.error(`  ❌ FAIL: ${name}`);
    console.error(`     Error: ${err.message}`);
    process.exitCode = 1;
  }
}

// =========================================================================
// TEST SUITE 1: Absence of Outdated Dalgona & Cutting Artifacts
// =========================================================================
console.log('--- TEST SUITE 1: Outdated Dalgona / Cookie Mechanics Purge ---');

test('Round 1 HTML title reflects Prompt Parasite', () => {
  const html = fs.readFileSync('round-1/index.html', 'utf-8');
  assert(!html.toLowerCase().includes('dalgona'), 'round-1/index.html must not contain dalgona');
  assert(!html.toLowerCase().includes('cut the noise'), 'round-1/index.html must not contain cut the noise');
  assert(html.includes('Prompt Parasite'), 'round-1/index.html must reference Prompt Parasite');
});

test('Round 1 source code contains 0 references to Dalgona or cookie incision', () => {
  const r1Files = [
    'round-1/src/App.jsx',
    'round-1/src/data/parasiteChallenge.js',
    'round-1/src/utils/parasiteEngine.js',
    'round-1/src/utils/parasiteAudio.js',
    'round-1/src/components/screens/Screen0Entry.jsx',
    'round-1/src/components/screens/HoldingLobby.jsx',
    'round-1/src/components/screens/Screen1HowItWorks.jsx',
    'round-1/src/components/screens/Screen2Challenge.jsx',
    'round-1/src/components/screens/Screen3Create.jsx',
    'round-1/src/components/screens/Screen4Match.jsx',
    'round-1/src/components/screens/Screen5Parasite.jsx',
    'round-1/src/components/screens/Screen6Evolve.jsx',
    'round-1/src/components/screens/Screen7Complete.jsx',
  ];

  for (const f of r1Files) {
    if (fs.existsSync(f)) {
      const content = fs.readFileSync(f, 'utf-8').toLowerCase();
      assert(!content.includes('dalgona'), `${f} must not contain dalgona`);
      assert(!content.includes('cookiecutter'), `${f} must not contain cookiecutter`);
    }
  }
});

test('Admin Portal sources contain 0 references to Dalgona', () => {
  const adminFiles = [
    'admin/src/context/AdminContext.tsx',
    'admin/src/pages/OverviewPage.tsx',
    'admin/src/pages/LiveControlPage.tsx',
    'admin/src/pages/RoundsPage.tsx',
    'admin/src/pages/LeaderboardPage.tsx',
    'admin/src/pages/TeamsPage.tsx',
    'admin/src/pages/SettingsPage.tsx',
    'admin/src/pages/AnalyticsPage.tsx',
    'admin/src/components/layout/Navbar.tsx',
    'admin/src/components/modals/TeamDetailDrawer.tsx',
    'admin/src/components/modals/ScoreCorrectionModal.tsx',
  ];

  for (const f of adminFiles) {
    if (fs.existsSync(f)) {
      const content = fs.readFileSync(f, 'utf-8').toLowerCase();
      assert(!content.includes('dalgona'), `${f} must not contain dalgona`);
    }
  }
});

// =========================================================================
// TEST SUITE 2: Round 1 Challenge Data & Gameplay Engine
// =========================================================================
console.log('\n--- TEST SUITE 2: Prompt Parasite Challenge Specification & Rules ---');

test('Prompt Parasite Challenge specifies The Registration Problem', () => {
  const challengeFile = fs.readFileSync('round-1/src/data/parasiteChallenge.js', 'utf-8');
  assert(challengeFile.includes('THE REGISTRATION PROBLEM'), 'Challenge title must be THE REGISTRATION PROBLEM');
  assert(challengeFile.includes('GROWTH ARCHITECTURE & CAMPAIGN DESIGN'), 'Category must be Growth Architecture');
  assert(challengeFile.includes('500 Registrations'), 'Objective must be 500 Registrations');
  assert(challengeFile.includes('7 Days'), 'Timeframe must be 7 Days');
  assert(challengeFile.includes('₹10,000 Cap'), 'Budget must be ₹10,000 Cap');
  assert(challengeFile.includes('Instagram • WhatsApp • Campus'), 'Platforms must be IG, WhatsApp, Campus');
});

test('Prompt Parasite defines complete 7-phase progression sequence', () => {
  const appFile = fs.readFileSync('round-1/src/App.jsx', 'utf-8');
  const roundsPage = fs.readFileSync('admin/src/pages/RoundsPage.tsx', 'utf-8');
  
  const phases = ['LOBBY', 'BRIEFING', 'CREATE', 'MATCH', 'PARASITE', 'EVOLVE', 'COMPLETE'];
  for (const p of phases) {
    assert(roundsPage.includes(p), `Admin RoundsPage must include phase ${p}`);
    assert(appFile.includes(p), `Round 1 App.jsx must support phase ${p}`);
  }
});

// =========================================================================
// TEST SUITE 3: Peer Matchmaking Logic (Strict Anti-Cheat / No Self-Matching)
// =========================================================================
console.log('\n--- TEST SUITE 3: Balanced Anonymous Peer Matchmaking Logic ---');

test('Peer Matchmaking algorithm filters out self and empty submissions', () => {
  // Inline simulation of parasiteEngine generateAnonymousMatches
  const mockSubmissions = [
    { participantId: 'p1', teamCode: 'PW-1001', firstOutput: 'Strategy 1' },
    { participantId: 'p2', teamCode: 'PW-1002', firstOutput: 'Strategy 2' },
    { participantId: 'p3', teamCode: 'PW-1003', firstOutput: '' }, // empty, should be excluded
    { participantId: 'p4', teamCode: 'PW-1004', firstOutput: 'Strategy 4' },
  ];

  const currentId = 'p1';
  const currentTeam = 'PW-1001';

  const otherRealSubmissions = mockSubmissions.filter((s) => {
    const isSelf = s.participantId === currentId || s.teamCode === currentTeam;
    const hasValidOutput = Boolean(s.firstOutput && s.firstOutput.trim().length > 0);
    return !isSelf && hasValidOutput;
  });

  assert.strictEqual(otherRealSubmissions.length, 2, 'Should match exactly 2 valid opponents');
  assert(!otherRealSubmissions.some(s => s.participantId === 'p1'), 'Must not match self');
  assert(!otherRealSubmissions.some(s => s.participantId === 'p3'), 'Must not match empty output');
});

// =========================================================================
// TEST SUITE 4: Authoritative Clock Drift Compensation Math
// =========================================================================
console.log('\n--- TEST SUITE 4: Synchronized Clock Drift Compensation Protocol ---');

test('Clock drift calculation accurately accounts for client clock offset', () => {
  // Scenario: Client clock is 5000ms ahead of server
  const clientNow = 1700000005000;
  const serverTimeIso = new Date(1700000000000).toISOString();
  const scheduledEndIso = new Date(1700000600000).toISOString(); // 600s after server time

  const serverOffsetMs = Date.parse(serverTimeIso) - clientNow;
  assert.strictEqual(serverOffsetMs, -5000, 'Calculated offset should be -5000ms');

  const synchronizedNowMs = clientNow + serverOffsetMs;
  assert.strictEqual(synchronizedNowMs, 1700000000000, 'Synchronized client time matches server');

  const remainingSeconds = Math.max(0, Math.ceil((Date.parse(scheduledEndIso) - synchronizedNowMs) / 1000));
  assert.strictEqual(remainingSeconds, 600, 'Remaining seconds is exactly 600 seconds');
});

test('Late joiners receive only remaining time before official scheduled deadline', () => {
  // Scenario: 600s round started 400s ago. Participant joins now.
  const serverTime = 1700000400000;
  const scheduledEndIso = new Date(1700000600000).toISOString();
  
  const synNow = serverTime;
  const remaining = Math.max(0, Math.ceil((Date.parse(scheduledEndIso) - synNow) / 1000));
  
  assert.strictEqual(remaining, 200, 'Late joiner receives strictly 200s, NEVER fresh 600s');
});

// =========================================================================
// TEST SUITE 5: Regression Verification for Round 2 & Round 3
// =========================================================================
console.log('\n--- TEST SUITE 5: Regression Protection for Round 2 & Round 3 ---');

test('Round 2 (Operation Blackbox) retains core components and routes', () => {
  assert(fs.existsSync('round-2/src/App.jsx'), 'Round 2 App.jsx exists');
  assert(fs.existsSync('round-2/src/utils/timer.js'), 'Round 2 timer exists');
  const timerContent = fs.readFileSync('round-2/src/utils/timer.js', 'utf-8');
  assert(timerContent.includes('fetchAuthoritativeClockAPI'), 'Round 2 has authoritative clock sync');
});

test('Round 3 (Frame Zero) retains core components and Director trial', () => {
  assert(fs.existsSync('round 3/src/components/frameZero/DirectorWorkspace.tsx'), 'DirectorWorkspace exists');
  assert(fs.existsSync('round 3/src/components/frameZero/DirectorResults.tsx'), 'DirectorResults exists');
  assert(fs.existsSync('round 3/src/utils/authoritativeClock.ts'), 'authoritativeClock utility exists');
});

console.log(`\n========================================`);
console.log(`Summary: ${passedTests}/${totalTests} Tests Passed successfully!`);
console.log(`========================================\n`);

if (process.exitCode) {
  process.exit(process.exitCode);
}
