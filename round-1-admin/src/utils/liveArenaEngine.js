// Real-Time Live Arena State & Multi-Tab Synchronization Engine
import { useState, useEffect } from 'react';
import { MOCK_LEADERBOARD } from '../data/dalgonaChallengeData';

const STORAGE_KEYS = {
  LEADERBOARD: 'prompt_war_live_leaderboard',
  EVENTS: 'prompt_war_live_events',
  STATS: 'prompt_war_live_stats',
  PLAYER_NAME: 'prompt_war_player_name',
  TIMER_START: 'prompt_war_timer_start',
  SUBMISSIONS: 'prompt_war_admin_submissions',
};

const CHANNEL_NAME = 'prompt_war_arena_broadcast_channel';

// Default Demo Submissions for Admin Evaluation
const SEED_SUBMISSIONS = [
  {
    id: 'sub_seed_1',
    teamName: 'Team CipherForge',
    scenarioId: 'techfest',
    scenarioTitle: 'Campus Techfest Launch',
    totalScore: 94,
    baseScore: 94,
    scoreAdjustment: 0,
    adjustmentReason: '',
    title: 'DALGONA MASTER',
    cuts: 8,
    trapCount: 0,
    noiseCount: 0,
    scores: {
      cookieCut: 40,
      prompt: 31,
      aiExecution: 23,
      signalsScore: 40,
      trapPenalty: 0,
      noisePenalty: 0,
    },
    promptText: `Act as a senior growth marketing strategist specializing in collegiate digital campaigns.
Develop a rigorous 7-day tactical execution schedule to drive paid student ticket registrations for our annual engineering festival.

Core Constraints:
- Total Budget Cap: Strictly capped at ₹10,000.
- Primary Audience: 4,000 undergraduate engineering students across 8 academic blocks.
- Conversion Funnel: Focus primarily on peer WhatsApp group announcements (82% open rate) paired with daily Instagram carousel teasers.

Deliverable Structure:
Provide a day-by-day executable runbook (Day 1 through Day 7) detailing morning broadcast copy, evening conversion pushes, and allocated budget per day.`,
    wordCount: 88,
    originalWordCount: 52,
    isRawDataDump: false,
    hasDirectiveVerb: true,
    survivingFragments: [
      { id: 'tf_1', text: 'Audience: 4,000 College Students', isRelevant: true, isMisleading: false },
      { id: 'tf_2', text: 'Budget: ₹10,000 Total Ad Spend', isRelevant: true, isMisleading: false },
      { id: 'tf_3', text: 'Channel: Instagram Story Teasers', isRelevant: true, isMisleading: false },
      { id: 'tf_5', text: 'Platform: WhatsApp Community Broadcast', isRelevant: true, isMisleading: false },
      { id: 'tf_6', text: 'Timeline: 7-Day Sprint Plan', isRelevant: true, isMisleading: false },
      { id: 'tf_7', text: 'Goal: Maximize Verified Registrations', isRelevant: true, isMisleading: false },
      { id: 'tf_8', text: 'Format: Day-Wise Actionable Guide', isRelevant: true, isMisleading: false },
    ],
    aiOutput: `### 🚀 7-DAY CAMPUS TECHFEST SPRINT
* **Day 1 (₹1,000):** WhatsApp ambassador broadcast teaser.
* **Day 2–3 (₹3,000):** Instagram speaker reveals with early-bird discount code.
* **Day 4–5 (₹3,500):** WhatsApp group flash competitions & departmental ambassador blitz.
* **Day 6–7 (₹2,500):** Final countdown urgency blast: "Only 40 passes remaining".
* **Projected Registrations:** 740 verified students (Cost per Registration: ₹13.50).`,
    isContaminated: false,
    contaminationReasons: [],
    status: 'approved_r2',
    judgeNotes: 'Flawless prompt framing. Balanced constraints and concrete day-by-day table structure.',
    timestamp: Date.now() - 360000,
    formattedTime: '11:15:20 AM',
  },
  {
    id: 'sub_seed_2',
    teamName: 'ByteCrafters',
    scenarioId: 'startup',
    scenarioTitle: 'Silicon Valley VC Seed Pitch',
    totalScore: 89,
    baseScore: 89,
    scoreAdjustment: 0,
    adjustmentReason: '',
    title: 'DALGONA MASTER',
    cuts: 8,
    trapCount: 0,
    noiseCount: 0,
    scores: {
      cookieCut: 40,
      prompt: 27,
      aiExecution: 22,
      signalsScore: 40,
      trapPenalty: 0,
      noisePenalty: 0,
    },
    promptText: `Act as a venture-backed founder pitching a Tier-1 institutional seed syndicate.
Synthesize a 10-slide investor deck structure requesting a $2M Seed Round at an $8M post-money valuation.

Constraints & Market Reality:
- TAM: $4.2B global enterprise compliance automation market.
- Competitive Landscape: Acknowledge incumbents (UiPath, Microsoft Copilot) and highlight our proprietary workflow API moat.
- Deliverable: Slide-by-slide outline with investor talking points.`,
    wordCount: 65,
    originalWordCount: 40,
    isRawDataDump: false,
    hasDirectiveVerb: true,
    survivingFragments: [],
    aiOutput: `### 📈 10-SLIDE SEED PITCH ARCHITECTURE
* Slide 1: The Enterprise Compliance Chokepoint
* Slide 2: Proprietary Workflow Moat vs Legacy RPA
* Slide 3: Unit Economics ($280k ARR growing 22% MoM)
* Slide 4: Use of Proceeds ($2M Seed Round)`,
    isContaminated: false,
    contaminationReasons: [],
    status: 'approved_r2',
    judgeNotes: 'Clean competitive differentiation without deceptive 0% risk claims.',
    timestamp: Date.now() - 280000,
    formattedTime: '11:18:45 AM',
  },
  {
    id: 'sub_seed_3',
    teamName: 'SiliconViper',
    scenarioId: 'techfest',
    scenarioTitle: 'Campus Techfest Launch',
    totalScore: 64,
    baseScore: 64,
    scoreAdjustment: 0,
    adjustmentReason: '',
    title: 'CONTEXT CUTTER',
    cuts: 7,
    trapCount: 1,
    noiseCount: 1,
    scores: {
      cookieCut: 23,
      prompt: 26,
      aiExecution: 15,
      signalsScore: 35,
      trapPenalty: 10,
      noisePenalty: 2,
    },
    promptText: `Create a marketing campaign for our campus event. We need to build a native mobile app for iOS and Android so students can scan tickets, and post Instagram reels with our ₹10,000 budget.`,
    wordCount: 35,
    originalWordCount: 22,
    isRawDataDump: false,
    hasDirectiveVerb: true,
    survivingFragments: [
      { id: 'tf_12', text: 'Strategy: Native Mobile Scanner App', isRelevant: false, isMisleading: true },
    ],
    aiOutput: `### ⚠️ PROJECT MANAGEMENT SCOPE CREEP DETONATION
* **The Error:** Directing resources toward full native iOS/Android ticket scanner app development.
* **Budget Reality:** ₹350k required; only ₹10,000 available. Campaign derailed.`,
    isContaminated: true,
    contaminationReasons: ['Scope Creep Trap: Attempted 6-month mobile app build with ₹10k budget.'],
    status: 'submitted',
    judgeNotes: 'Enclosed the mobile app trap. AI accurately diagnosed fatal scope creep.',
    timestamp: Date.now() - 190000,
    formattedTime: '11:21:10 AM',
  },
  {
    id: 'sub_seed_4',
    teamName: 'PromptClicker_07',
    scenarioId: 'techfest',
    scenarioTitle: 'Campus Techfest Launch',
    totalScore: 24,
    baseScore: 24,
    scoreAdjustment: 0,
    adjustmentReason: '',
    title: 'UNPROMPTED DATA DUMP',
    cuts: 6,
    trapCount: 0,
    noiseCount: 0,
    scores: {
      cookieCut: 30,
      prompt: 3,
      aiExecution: 3,
      signalsScore: 30,
      trapPenalty: 0,
      noisePenalty: 0,
    },
    promptText: `- Audience: 4,000 College Students
- Budget: ₹10,000 Total Ad Spend
- Channel: Instagram Story Teasers
- Platform: WhatsApp Community Broadcast
- Timeline: 7-Day Sprint Plan`,
    wordCount: 22,
    originalWordCount: 0,
    isRawDataDump: true,
    hasDirectiveVerb: false,
    survivingFragments: [],
    aiOutput: `### ⚠️ AI MODEL EXECUTION HALTED (NO OPERATIONAL DIRECTIVE)
* **The Error:** The participant pasted raw context fragments into the workstation without writing prompt instructions or assigning a role.
* **LLM Ingestion Failure:** An LLM requires explicit directive action verbs. Output halted.`,
    isContaminated: true,
    contaminationReasons: ['Execution Failure: Unprompted clue list. No actionable directive verb, role, or structure.'],
    status: 'flagged',
    judgeNotes: 'Zero prompt engineering. Just clicked "Add Clue" and submitted raw data fragments. Penalized to 24 pts as mandated.',
    timestamp: Date.now() - 95000,
    formattedTime: '11:24:30 AM',
  },
];

// Default Competitor Names for Live Stream Simulation
const COMPETITOR_NAMES = [
  'Team NeuroHack',
  'ByteCrafters',
  'QuantumPrompt',
  'ApexSynthesizer',
  'SiliconViper',
  'PromptNinja_99',
  'ModelWhisperer',
  'CipherForge',
  'ZeroHallucination',
  'MetaSynthesizer',
  'AeroStrategist',
  'MatrixDrifter',
  'OmniPrompt',
  'VanguardAI',
  'TuringRebels',
];

const TRAP_EVENTS = [
  { text: 'detonated Trap: Scope Creep! (-16 pts)', icon: '⚠️', type: 'trap' },
  { text: 'fell for Vanity Metric Trap: 24k video views! (-18 pts)', icon: '📉', type: 'trap' },
  { text: 'triggered Physical Paper Friction Trap! (-15 pts)', icon: '📄', type: 'trap' },
  { text: 'detonated Zero-Competition Delusion Trap! (-20 pts)', icon: '🚫', type: 'trap' },
  { text: 'triggered Sudden-Death Mechanic: Room Collapsed!', icon: '⛔', type: 'trap' },
];

const ARENA_ANNOUNCEMENTS = [
  '⚡ High Purity Alert: 4 contestants have carved >90% signal contours!',
  '📢 Official Notice: Round 1 will lock all cuts in under 15 minutes.',
  '🛰️ Central Scorer: Academic Deterministic Evaluation engine online.',
  '🔥 Surge Alert: 14 new contestants joined Arena Zero from Hall B!',
  '⚡ Prompt Forge warning: LLM Execution viability strictly audited.',
];

// Initialize timer: 20 minutes countdown (1200 seconds)
const INITIAL_ROUND_DURATION = 1200;

class LiveArenaEngine {
  constructor() {
    this.listeners = new Set();
    this.channel = null;

    // Load or initialize state
    this.state = this.loadInitialState();

    // Setup Multi-tab broadcast channel
    this.initBroadcastChannel();

    // Start Real-Time Simulation & Timer Loops
    this.startTimerLoop();
    this.startCompetitorSimulation();

    // Check MongoDB backend health & sync remote state
    this.checkMongoHealth();
  }

  loadInitialState() {
    let leaderboard = [];
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.LEADERBOARD);
      if (stored) {
        leaderboard = JSON.parse(stored);
      }
    } catch (e) {}

    if (!leaderboard || leaderboard.length === 0) {
      leaderboard = MOCK_LEADERBOARD.map((item, idx) => ({
        ...item,
        id: `mock_${idx}`,
        rank: idx + 1,
        prevRank: idx + 1,
        isPlayer: false,
        timestamp: Date.now() - (idx + 1) * 60000,
      }));
    }

    let submissions = [];
    try {
      const storedSubs = localStorage.getItem(STORAGE_KEYS.SUBMISSIONS);
      if (storedSubs) {
        submissions = JSON.parse(storedSubs);
      }
    } catch (e) {}

    if (!submissions || submissions.length === 0) {
      submissions = [...SEED_SUBMISSIONS];
      try {
        localStorage.setItem(STORAGE_KEYS.SUBMISSIONS, JSON.stringify(submissions));
      } catch (e) {}
    }

    let playerName = 'YOU (Player #01)';
    try {
      const storedName = localStorage.getItem(STORAGE_KEYS.PLAYER_NAME);
      if (storedName) playerName = storedName;
    } catch (e) {}

    // Initial Live Event Feed
    const initialEvents = [
      {
        id: 'ev_init_1',
        time: this.formatTime(Date.now() - 45000),
        type: 'announcement',
        icon: '⚡',
        text: 'Arena Zero Round 01: Dalgona Challenge is LIVE across all terminals!',
      },
      {
        id: 'ev_init_2',
        time: this.formatTime(Date.now() - 32000),
        type: 'submission',
        icon: '🏆',
        text: 'Participant #42 secured Rank #1 with 94 PTS (8 Signals / 0 Traps)!',
      },
      {
        id: 'ev_init_3',
        time: this.formatTime(Date.now() - 18000),
        type: 'cut',
        icon: '✂️',
        text: 'ByteCrafters extracted 8 core signals with 100% wafer stability!',
      },
    ];

    let timerStart = Date.now();
    try {
      const storedStart = localStorage.getItem(STORAGE_KEYS.TIMER_START);
      if (storedStart) {
        timerStart = parseInt(storedStart, 10);
      } else {
        localStorage.setItem(STORAGE_KEYS.TIMER_START, timerStart.toString());
      }
    } catch (e) {}

    return {
      leaderboard,
      submissions,
      events: initialEvents,
      stats: {
        activeParticipants: 146,
        totalSubmissions: Math.max(leaderboard.length, submissions.length),
        avgPurity: 74.5,
        trapsTriggered: 29,
        serverLatencyMs: 14,
        isFrozen: false,
      },
      playerName,
      timerStart,
      timeRemainingSeconds: this.calcRemainingSeconds(timerStart),
      mongoStatus: {
        isOnline: false,
        isConnected: false,
        hasConfiguredUri: false,
      },
    };
  }

  calcRemainingSeconds(timerStart) {
    const elapsed = Math.floor((Date.now() - timerStart) / 1000);
    const rem = INITIAL_ROUND_DURATION - (elapsed % INITIAL_ROUND_DURATION);
    return Math.max(0, rem);
  }

  formatTime(ts = Date.now()) {
    const d = new Date(ts);
    return d.toTimeString().split(' ')[0];
  }

  initBroadcastChannel() {
    if (typeof window !== 'undefined' && window.BroadcastChannel) {
      try {
        this.channel = new BroadcastChannel(CHANNEL_NAME);
        this.channel.onmessage = (msg) => {
          if (msg.data && msg.data.type === 'SYNC_STATE') {
            this.handleRemoteSync(msg.data.payload);
          }
        };
      } catch (e) {
        console.warn('BroadcastChannel unavailable', e);
      }
    }

    // Storage event fallback for cross-tab sync
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', (e) => {
        if (e.key === STORAGE_KEYS.LEADERBOARD && e.newValue) {
          try {
            const updatedLb = JSON.parse(e.newValue);
            this.state = { ...this.state, leaderboard: updatedLb };
            this.notify();
          } catch (err) {}
        }
      });
    }
  }

  broadcast(type, payload) {
    if (this.channel) {
      try {
        this.channel.postMessage({ type, payload });
      } catch (e) {}
    }
  }

  handleRemoteSync(payload) {
    if (!payload) return;
    this.state = {
      ...this.state,
      ...payload,
      leaderboard: payload.leaderboard || this.state.leaderboard,
      events: payload.events || this.state.events,
      stats: payload.stats || this.state.stats,
    };
    this.notify();
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.listeners.forEach((fn) => {
      try {
        fn(this.state);
      } catch (e) {
        console.error('Error in arena engine listener', e);
      }
    });
  }

  getState() {
    return this.state;
  }

  // Set & persist player handle
  setPlayerName(name) {
    if (!name || !name.trim()) return;
    const cleanName = name.trim();
    this.state = { ...this.state, playerName: cleanName };
    try {
      localStorage.setItem(STORAGE_KEYS.PLAYER_NAME, cleanName);
    } catch (e) {}

    // Update existing player entry in leaderboard if present
    const updatedLb = this.state.leaderboard.map((item) => {
      if (item.isPlayer) {
        return { ...item, name: cleanName };
      }
      return item;
    });

    this.state.leaderboard = updatedLb;
    this.saveLeaderboard(updatedLb);
    this.notify();
  }

  saveLeaderboard(leaderboard) {
    try {
      localStorage.setItem(STORAGE_KEYS.LEADERBOARD, JSON.stringify(leaderboard));
    } catch (e) {}
  }

  // Register an official Player Run Submission
  saveSubmissions(submissions) {
    try {
      localStorage.setItem(STORAGE_KEYS.SUBMISSIONS, JSON.stringify(submissions));
    } catch (e) {}
  }

  // MongoDB Backend Synchronization & Health
  getApiBase() {
    if (typeof window === 'undefined') return 'http://127.0.0.1:5001';
    const host = window.location.hostname || '127.0.0.1';
    return `${window.location.protocol}//${host}:5001`;
  }

  async checkMongoHealth() {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 1200);
      const res = await fetch(`${this.getApiBase()}/api/health`, { signal: controller.signal });
      clearTimeout(timer);

      if (res.ok) {
        const data = await res.json();
        this.state = {
          ...this.state,
          mongoStatus: {
            isOnline: true,
            isConnected: Boolean(data.mongoConnected),
            hasConfiguredUri: Boolean(data.hasConfiguredUri),
          },
        };
        this.notify();

        if (data.mongoConnected) {
          this.loadSubmissionsFromMongo();
        }
      }
    } catch (e) {
      this.state = {
        ...this.state,
        mongoStatus: { isOnline: false, isConnected: false, hasConfiguredUri: false },
      };
      this.notify();
    }
  }

  async loadSubmissionsFromMongo() {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 1500);
      const res = await fetch(`${this.getApiBase()}/api/submissions?round=round-1`, { signal: controller.signal });
      clearTimeout(timer);

      if (res.ok) {
        const data = await res.json();
        if (data.submissions && data.submissions.length > 0) {
          const mongoSubs = data.submissions.map((s) => ({
            ...s,
            id: s.submissionId || s.id,
          }));
          this.state = {
            ...this.state,
            submissions: mongoSubs,
          };
          this.saveSubmissions(mongoSubs);
          this.notify();
        }
      }
    } catch (e) {}
  }

  async syncToMongo(submission) {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 1500);
      await fetch(`${this.getApiBase()}/api/submissions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...submission, round: 'round-1' }),
        signal: controller.signal,
      });
      clearTimeout(timer);
    } catch (e) {}
  }

  async updateMongoSubmission(id, updates) {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 1500);
      await fetch(`${this.getApiBase()}/api/submissions/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
        signal: controller.signal,
      });
      clearTimeout(timer);
    } catch (e) {}
  }

  async deleteMongoSubmission(id) {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 1500);
      await fetch(`${this.getApiBase()}/api/submissions/${id}`, {
        method: 'DELETE',
        signal: controller.signal,
      });
      clearTimeout(timer);
    } catch (e) {}
  }

  async clearMongoSubmissions() {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 1500);
      await fetch(`${this.getApiBase()}/api/submissions?round=round-1`, {
        method: 'DELETE',
        signal: controller.signal,
      });
      clearTimeout(timer);
    } catch (e) {}
  }

  // Register an official Player Run Submission & Full Dossier
  submitPlayerRun(params) {
    const {
      score,
      title,
      cuts,
      promptScore,
      scenarioTitle,
      scenarioId,
      promptText,
      scores,
      counts,
      survivingFragments,
      aiOutput,
      isContaminated,
      contaminationReasons,
    } = params;

    const existingIndex = this.state.leaderboard.findIndex((x) => x.isPlayer);
    const newEntry = {
      id: 'player_run_' + Date.now(),
      name: this.state.playerName || 'YOU (Player #01)',
      score,
      title,
      cuts: cuts || 8,
      promptScore: promptScore || 20,
      isPlayer: true,
      scenario: scenarioTitle || 'Techfest Launch',
      timestamp: Date.now(),
    };

    let updatedList = [...this.state.leaderboard];
    if (existingIndex >= 0) {
      updatedList[existingIndex] = newEntry;
    } else {
      updatedList.push(newEntry);
    }

    // Sort descending by score, then cuts
    updatedList.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return (b.cuts || 0) - (a.cuts || 0);
    });

    // Recalculate rank positions & rank shifts
    updatedList = updatedList.map((item, idx) => ({
      ...item,
      prevRank: item.rank || idx + 1,
      rank: idx + 1,
    }));

    const playerRank = updatedList.find((x) => x.isPlayer)?.rank || 1;

    // Create Complete Admin Submission Record
    const newSubmission = {
      id: 'sub_' + Date.now(),
      teamName: this.state.playerName || 'YOU (Player #01)',
      scenarioId: scenarioId || 'techfest',
      scenarioTitle: scenarioTitle || 'Campus Techfest Launch',
      totalScore: score,
      baseScore: score,
      scoreAdjustment: 0,
      adjustmentReason: '',
      title,
      cuts: cuts || 8,
      trapCount: counts?.trapCount || 0,
      noiseCount: counts?.noiseCount || 0,
      scores: scores || { cookieCut: 40, prompt: promptScore || 20, aiExecution: 20 },
      promptText: promptText || '',
      wordCount: counts?.wordCount || (promptText ? promptText.split(/\s+/).length : 0),
      originalWordCount: counts?.originalWordCount || 0,
      isRawDataDump: counts?.isRawDataDump || false,
      hasDirectiveVerb: true,
      survivingFragments: survivingFragments || [],
      aiOutput: aiOutput || '',
      isContaminated: isContaminated || false,
      contaminationReasons: contaminationReasons || [],
      status: score >= 75 ? 'approved_r2' : 'submitted',
      judgeNotes: '',
      timestamp: Date.now(),
      formattedTime: this.formatTime(),
    };

    // Filter out previous player submission if any, and prepend new submission
    const updatedSubmissions = [
      newSubmission,
      ...this.state.submissions.filter((s) => s.teamName !== newSubmission.teamName),
    ];

    // Push high-visibility live event
    const newEvent = {
      id: 'ev_user_' + Date.now(),
      time: this.formatTime(),
      type: 'submission',
      icon: '⚡',
      badge: 'VERIFIED',
      isPlayer: true,
      text: `${newEntry.name} just posted ${score} PTS (${title})! Claimed Rank #${playerRank}!`,
    };

    const newEvents = [newEvent, ...this.state.events].slice(0, 40);

    // Update Stats
    const newStats = {
      ...this.state.stats,
      totalSubmissions: Math.max(updatedList.length, updatedSubmissions.length),
      activeParticipants: Math.max(140, this.state.stats.activeParticipants + 1),
    };

    this.state = {
      ...this.state,
      leaderboard: updatedList,
      submissions: updatedSubmissions,
      events: newEvents,
      stats: newStats,
    };

    this.saveLeaderboard(updatedList);
    this.saveSubmissions(updatedSubmissions);
    this.broadcast('SYNC_STATE', {
      leaderboard: updatedList,
      submissions: updatedSubmissions,
      events: newEvents,
      stats: newStats,
    });
    this.notify();

    // Async sync to MongoDB Atlas
    this.syncToMongo(newSubmission);

    return { rank: playerRank, entry: newEntry, submission: newSubmission };
  }

  // Admin: Update Submission Status / Adjust Score / Add Judge Notes
  updateSubmission(id, updates) {
    const updated = this.state.submissions.map((sub) => {
      if (sub.id === id) {
        const merged = { ...sub, ...updates };
        if (updates.scoreAdjustment !== undefined) {
          merged.totalScore = Math.max(0, Math.min(100, merged.baseScore + (Number(updates.scoreAdjustment) || 0)));
        }
        return merged;
      }
      return sub;
    });

    this.state = { ...this.state, submissions: updated };
    this.saveSubmissions(updated);
    this.broadcast('SYNC_STATE', { submissions: updated });
    this.notify();

    // Async update to MongoDB Atlas
    this.updateMongoSubmission(id, updates);

    return updated;
  }

  // Admin: Delete Submission
  deleteSubmission(id) {
    const updated = this.state.submissions.filter((s) => s.id !== id);
    this.state = { ...this.state, submissions: updated };
    this.saveSubmissions(updated);
    this.broadcast('SYNC_STATE', { submissions: updated });
    this.notify();

    // Async delete in MongoDB Atlas
    this.deleteMongoSubmission(id);

    return updated;
  }

  // Admin: Clear All Submissions
  clearAllSubmissions() {
    this.state = { ...this.state, submissions: [] };
    this.saveSubmissions([]);
    this.broadcast('SYNC_STATE', { submissions: [] });
    this.notify();

    // Async clear in MongoDB Atlas
    this.clearMongoSubmissions();
  }

  // Admin: Seed / Re-populate Demo Submissions
  seedDemoSubmissions() {
    this.state = { ...this.state, submissions: [...SEED_SUBMISSIONS] };
    this.saveSubmissions(this.state.submissions);
    this.broadcast('SYNC_STATE', { submissions: this.state.submissions });
    this.notify();
  }

  // Admin: Freeze Arena Submissions Toggle
  toggleFreezeArena() {
    const isFrozen = !this.state.stats.isFrozen;
    const newStats = { ...this.state.stats, isFrozen };
    this.state = { ...this.state, stats: newStats };
    this.broadcast('SYNC_STATE', { stats: newStats });
    this.notify();
    return isFrozen;
  }

  // Push arbitrary live event
  pushEvent({ text, icon = '⚡', type = 'general', badge }) {
    const ev = {
      id: 'ev_' + Date.now() + '_' + Math.floor(Math.random() * 1000),
      time: this.formatTime(),
      type,
      icon,
      badge,
      text,
    };

    const newEvents = [ev, ...this.state.events].slice(0, 40);
    this.state = { ...this.state, events: newEvents };
    this.broadcast('SYNC_STATE', { events: newEvents });
    this.notify();
  }

  // Real-time Countdown Timer Loop
  startTimerLoop() {
    setInterval(() => {
      const remaining = this.calcRemainingSeconds(this.state.timerStart);
      if (remaining !== this.state.timeRemainingSeconds) {
        this.state = { ...this.state, timeRemainingSeconds: remaining };
        this.notify();
      }
    }, 1000);
  }

  // Real-time Competitor Simulation Loop
  startCompetitorSimulation() {
    // Interval between 7 and 14 seconds for realistic event stream
    const scheduleNext = () => {
      const delay = 7000 + Math.random() * 7000;
      setTimeout(() => {
        this.generateSimulatedTick();
        scheduleNext();
      }, delay);
    };

    scheduleNext();
  }

  generateSimulatedTick() {
    const roll = Math.random();

    if (roll < 0.4) {
      // 1. New Competitor Submission lands on leaderboard!
      const randomName = COMPETITOR_NAMES[Math.floor(Math.random() * COMPETITOR_NAMES.length)];
      const randScore = 52 + Math.floor(Math.random() * 44); // 52 to 95
      const cuts = randScore > 85 ? 8 : randScore > 70 ? 7 : 6;
      const titles = [
        'DALGONA MASTER',
        'PRECISION PLAYER',
        'CONTEXT CUTTER',
        'ROUGH CUT',
      ];
      const title =
        randScore >= 88 ? titles[0] : randScore >= 70 ? titles[1] : randScore >= 55 ? titles[2] : titles[3];

      const competitorEntry = {
        id: 'comp_' + Date.now(),
        name: `${randomName} (#${Math.floor(Math.random() * 80) + 10})`,
        score: randScore,
        title,
        cuts,
        promptScore: Math.floor(randScore * 0.35),
        isPlayer: false,
        isNew: true,
        timestamp: Date.now(),
      };

      let updated = [...this.state.leaderboard, competitorEntry];
      updated.sort((a, b) => b.score - a.score);
      // Keep top 20
      updated = updated.slice(0, 20).map((item, idx) => ({
        ...item,
        prevRank: item.rank || idx + 1,
        rank: idx + 1,
      }));

      const newRank = updated.find((x) => x.id === competitorEntry.id)?.rank || 12;

      const ev = {
        id: 'ev_' + Date.now(),
        time: this.formatTime(),
        type: 'submission',
        icon: '🏆',
        text: `${competitorEntry.name} submitted: ${randScore} PTS! Climbed to Rank #${newRank}!`,
      };

      const newEvents = [ev, ...this.state.events].slice(0, 40);
      const newStats = {
        ...this.state.stats,
        totalSubmissions: this.state.stats.totalSubmissions + 1,
        activeParticipants: Math.max(
          135,
          Math.min(165, this.state.stats.activeParticipants + (Math.random() > 0.5 ? 1 : -1))
        ),
      };

      this.state = {
        ...this.state,
        leaderboard: updated,
        events: newEvents,
        stats: newStats,
      };

      this.saveLeaderboard(updated);
      this.broadcast('SYNC_STATE', {
        leaderboard: updated,
        events: newEvents,
        stats: newStats,
      });
      this.notify();
    } else if (roll < 0.7) {
      // 2. Trap Detonation or Contour Cut Event
      const comp = COMPETITOR_NAMES[Math.floor(Math.random() * COMPETITOR_NAMES.length)];
      const trap = TRAP_EVENTS[Math.floor(Math.random() * TRAP_EVENTS.length)];

      const ev = {
        id: 'ev_' + Date.now(),
        time: this.formatTime(),
        type: trap.type,
        icon: trap.icon,
        text: `${comp} ${trap.text}`,
      };

      const newEvents = [ev, ...this.state.events].slice(0, 40);
      const newStats = {
        ...this.state.stats,
        trapsTriggered: this.state.stats.trapsTriggered + 1,
      };

      this.state = {
        ...this.state,
        events: newEvents,
        stats: newStats,
      };

      this.broadcast('SYNC_STATE', { events: newEvents, stats: newStats });
      this.notify();
    } else {
      // 3. System Arena Broadcast Announcement
      const ann = ARENA_ANNOUNCEMENTS[Math.floor(Math.random() * ARENA_ANNOUNCEMENTS.length)];
      const ev = {
        id: 'ev_' + Date.now(),
        time: this.formatTime(),
        type: 'announcement',
        icon: '📢',
        text: ann,
      };

      const newEvents = [ev, ...this.state.events].slice(0, 40);
      this.state = { ...this.state, events: newEvents };
      this.broadcast('SYNC_STATE', { events: newEvents });
      this.notify();
    }
  }
}

// Global Singleton Engine
export const liveArenaEngine = new LiveArenaEngine();

// React Custom Hook for Real-Time Dynamic Arena Subscriptions
export function useLiveArena() {
  const [arenaState, setArenaState] = useState(() => liveArenaEngine.getState() || {});

  useEffect(() => {
    // Initial sync
    const current = liveArenaEngine.getState();
    if (current) setArenaState(current);

    // Subscribe to engine changes
    const unsubscribe = liveArenaEngine.subscribe((nextState) => {
      if (nextState) setArenaState({ ...nextState });
    });

    return unsubscribe;
  }, []);

  const formatTimer = (seconds) => {
    const s = Math.max(0, Number(seconds) || 0);
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const s = arenaState || liveArenaEngine.getState() || {};
  const stats = s.stats || {
    activeParticipants: 146,
    totalSubmissions: 24,
    avgPurity: 74.5,
    trapsTriggered: 29,
    serverLatencyMs: 14,
    isFrozen: false,
  };

  return {
    leaderboard: Array.isArray(s.leaderboard) ? s.leaderboard : [],
    submissions: Array.isArray(s.submissions) ? s.submissions : [],
    events: Array.isArray(s.events) ? s.events : [],
    stats,
    playerName: s.playerName || 'YOU (Player #01)',
    timeRemainingSeconds: s.timeRemainingSeconds ?? 1200,
    formattedTimer: formatTimer(s.timeRemainingSeconds ?? 1200),
    isFrozen: Boolean(stats.isFrozen),
    mongoStatus: s.mongoStatus || {
      isOnline: false,
      isConnected: false,
      hasConfiguredUri: false,
    },
    refreshMongo: () => liveArenaEngine.checkMongoHealth(),
    submitPlayerRun: (runData) => liveArenaEngine.submitPlayerRun(runData),
    setPlayerName: (name) => liveArenaEngine.setPlayerName(name),
    pushEvent: (ev) => liveArenaEngine.pushEvent(ev),
    updateSubmission: (id, patch) => liveArenaEngine.updateSubmission(id, patch),
    deleteSubmission: (id) => liveArenaEngine.deleteSubmission(id),
    clearAllSubmissions: () => liveArenaEngine.clearAllSubmissions(),
    seedDemoSubmissions: () => liveArenaEngine.seedDemoSubmissions(),
    toggleFreezeArena: () => liveArenaEngine.toggleFreezeArena(),
  };
}
