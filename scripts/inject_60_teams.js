// Smoke Test Script: Injects 60 realistic competition teams into Prompt War Round 1 Arena
// Teams have 2-4 members, varied states (Drafting, First Locked, Evolved, Scored)

const API_BASE = 'http://127.0.0.1:5001';

const SQUAD_NAMES = [
  'CYBER_SYNAPSE', 'NEURAL_PULSE', 'QUANTUM_DRIFT', 'TITAN_CORE', 'VECTOR_ZERO',
  'PHANTOM_NET', 'ECHO_BYTE', 'APEX_LOGIC', 'HYDRA_SYNAPSE', 'SOLAR_MATRIX',
  'AURA_NODE', 'BLACK_LOTUS', 'OMEGA_POINT', 'VORTEX_PRIME', 'STEALTH_FORGE',
  'CHANDIGARH_TITANS', 'PUNJAB_BYTE', 'KRYPTON_DEV', 'NEXUS_CHORD', 'CYBER_VIPER',
  'ZENITH_ALPHA', 'BINARY_BEASTS', 'STRATA_GEN', 'HYPER_THREAD', 'SYNAPSE_ONE',
  'SPECTRE_LABS', 'TURBO_PROMPT', 'DEEP_SYNTH', 'PULSE_CORP', 'ALGO_WARRIORS',
  'CODE_SAMURAI', 'NEO_COGNITION', 'SIGMA_SEVEN', 'AETHER_PULSE', 'TITAN_PULSE',
  'GENESIS_NODE', 'ORION_FORGE', 'INFERNO_CORE', 'FALCON_AI', 'LOGIC_FORGE',
  'DARK_MATTER', 'VELOCITY_X', 'RADICAL_SYNTH', 'CYBER_WOLVES', 'AURORA_BYTE',
  'QUANTUM_TITANS', 'PROMPT_NINJAS', 'ECLIPSE_LABS', 'SHADOW_SYNTH', 'ZEN_NODE',
  'VERTEX_CLUSTERS', 'SYNTAX_TITANS', 'GRID_RUNNERS', 'ZERO_DAY_SQUAD', 'VOID_RUNNERS',
  'CHRONOS_NODE', 'NANO_CIRCUIT', 'PHOENIX_PROMPT', 'VALIANT_CORE', 'INVICTUS_AI'
];

const FIRST_NAMES = ['Aarav', 'Vivaan', 'Aditya', 'Vihaan', 'Arjun', 'Sai', 'Reyansh', 'Ayaan', 'Krishna', 'Ishaan', 'Shaurya', 'Atharva', 'Kabir', 'Rudra', 'Aryan', 'Dhruv', 'Ananya', 'Diya', 'Gauri', 'Aadhya', 'Pari', 'Saanvi', 'Myra', 'Ira', 'Avani', 'Rhea', 'Anika', 'Meera', 'Tara', 'Kavya'];
const LAST_NAMES = ['Sharma', 'Verma', 'Patel', 'Singh', 'Chawla', 'Kapoor', 'Gupta', 'Bhatia', 'Malhotra', 'Mehta', 'Reddy', 'Joshi', 'Chopra', 'Gill', 'Sandhu', 'Dhillon', 'Kaur', 'Soni', 'Bansal', 'Saxena'];

const SAMPLE_OUTPUTS = [
  "### STRATEGY MATRIX: TIERED GUERRILLA ACTIVATION\n1. Deploy 25 society leads with cash bounties based on link referrals.\n2. Leverage Instagram Story countdown stickers and student showcase reels.\n3. Department leaderboard showing live branch signups.\n4. Targeted SMS countdown blast for incomplete checkouts 6h before deadline.",
  "### ALGORITHMIC FOMO FUNNEL\n- High-voltage mystery drops revealing 1 celebrity speaker every 48 hours.\n- Early-bird micro-tickets expiring in rolling 30-minute waves.\n- WhatsApp community gamification: fastest 50 shares get backstage VIP passes.",
  "### PEER VIRALITY ENGINE\n- Inter-hostel competition: hostel with highest registration gets sponsored Red Bull study lounge.\n- Campus radio flash announcements during lunch hours.\n- Referral code unlocking exclusive AI prompt cheat-sheet.",
  "### GUERRILLA AMBASSADOR ASSAULT\n- 40 departmental coordinators equipped with custom QR badges.\n- Free merchandise for first 100 registrations from each block.\n- Live digital kiosks in student centers with instant spin-the-wheel rewards."
];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomMembers(count) {
  const members = [];
  for (let i = 0; i < count; i++) {
    members.push(`${getRandomItem(FIRST_NAMES)} ${getRandomItem(LAST_NAMES)}`);
  }
  return members;
}

async function inject60Teams() {
  console.log('🚀 Starting injection of 60 competition teams into Prompt War Round 1...');

  let successCount = 0;

  for (let i = 0; i < SQUAD_NAMES.length; i++) {
    const teamName = SQUAD_NAMES[i];
    const memberCount = Math.floor(2 + Math.random() * 3); // 2, 3, or 4 members
    const members = getRandomMembers(memberCount);
    const leaderName = members[0];
    const leaderContact = `+91 ${Math.floor(9000000000 + Math.random() * 999999999)}`;
    const teamCode = `PW-${String(1000 + i + 1).padStart(4, '0')}`;

    // Status distribution:
    // Teams 0-35: First Form locked
    // Teams 36-50: Evolved Final Form locked
    // Teams 51-59: Drafting in external AI
    let round1Data = { status: 'NOT_STARTED', score: 0 };

    if (i < 36) {
      round1Data = {
        status: 'FIRST_LOCKED',
        firstPrompt: `Act as a viral campaign strategist for a national engineering hackathon. Scenario: ${teamName} activation...`,
        firstOutput: getRandomItem(SAMPLE_OUTPUTS),
        firstSubmittedAt: new Date(Date.now() - Math.floor(Math.random() * 300000)).toISOString(),
        score: Math.floor(65 + Math.random() * 30),
      };
    } else if (i < 52) {
      round1Data = {
        status: 'COMPLETED',
        firstPrompt: `Act as a viral campaign strategist for a national engineering hackathon. Scenario: ${teamName} activation...`,
        firstOutput: getRandomItem(SAMPLE_OUTPUTS),
        mutationNotes: 'Incorporated opponent ambassador tiered structure and student lounge bounty.',
        finalPrompt: `Act as an elite viral CMO. Synthesizing guerrilla campus ambassadors with real-time gamified hostel leaderboards...`,
        finalOutput: `### SYNTHESIZED EVOLVED MATRIX: MULTI-TIER VIRAL DOMINANCE\n1. Combined hostel incentives with automated WhatsApp bot triggers.\n2. Deployed micro-influencers with tiered milestone prizes.\n3. Frictionless 1-click verification via university student portal.`,
        firstSubmittedAt: new Date(Date.now() - 600000).toISOString(),
        finalSubmittedAt: new Date(Date.now() - 60000).toISOString(),
        score: Math.floor(75 + Math.random() * 25),
        isQualifiedR2: i % 2 === 0,
      };
    } else {
      round1Data = {
        status: 'DRAFTING',
        score: 0,
      };
    }

    const payload = {
      teamCode,
      teamName,
      leaderName,
      leaderContact,
      college: 'Chandigarh University',
      memberCount,
      members,
      round1: round1Data,
    };

    try {
      const res = await fetch(`${API_BASE}/api/teams/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        // Also sync submission if locked
        if (round1Data.firstOutput) {
          await fetch(`${API_BASE}/api/submissions`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              submissionId: `sub_${teamCode}`,
              teamCode,
              teamName,
              leaderName,
              college: 'Chandigarh University',
              round: 'round-1',
              firstPrompt: round1Data.firstPrompt || '',
              firstOutput: round1Data.firstOutput || '',
              finalPrompt: round1Data.finalPrompt || '',
              finalOutput: round1Data.finalOutput || '',
              mutationNotes: round1Data.mutationNotes || '',
              status: round1Data.status,
              score: round1Data.score || 0,
            }),
          });
        }
        successCount++;
        process.stdout.write(`\r✅ Injected: ${successCount} / 60 teams (${teamCode} - ${teamName})`);
      }
    } catch (err) {
      console.error(`\n❌ Failed to inject ${teamName}:`, err.message);
    }
  }

  console.log(`\n\n🎉 Successfully injected ${successCount} competition teams!`);

  // Activate round 1 in CREATE phase so the live projector countdown & radar display active state!
  try {
    await fetch(`${API_BASE}/api/arena/state`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        isRoundStarted: true,
        activePhase: 'CREATE',
      }),
    });
    console.log('📡 Arena State set to: ACTIVE // PHASE: CREATE (10:00 Countdown Live)');
  } catch (err) {
    console.warn('Could not set arena state:', err.message);
  }
}

inject60Teams();
