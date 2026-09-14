// Real-Time Live Arena State & Multi-Tab Synchronization Engine
import { useState, useEffect } from 'react';
import { MOCK_LEADERBOARD } from '../data/dalgonaChallengeData';

const STORAGE_KEYS = {
  LEADERBOARD: 'prompt_war_live_leaderboard',
  EVENTS: 'prompt_war_live_events',
  STATS: 'prompt_war_live_stats',
  PLAYER_NAME: 'prompt_war_player_name',
  TIMER_START: 'prompt_war_timer_start',
};

const CHANNEL_NAME = 'prompt_war_arena_broadcast_channel';

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
      events: initialEvents,
      stats: {
        activeParticipants: 146,
        totalSubmissions: leaderboard.length,
        avgPurity: 74.5,
        trapsTriggered: 29,
        serverLatencyMs: 14,
      },
      playerName,
      timerStart,
      timeRemainingSeconds: this.calcRemainingSeconds(timerStart),
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
  submitPlayerRun({ score, title, cuts, promptScore, scenarioTitle, promptText }) {
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
      // Overwrite player's previous entry
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
      totalSubmissions: updatedList.length,
      activeParticipants: Math.max(140, this.state.stats.activeParticipants + 1),
    };

    this.state = {
      ...this.state,
      leaderboard: updatedList,
      events: newEvents,
      stats: newStats,
    };

    this.saveLeaderboard(updatedList);
    this.broadcast('SYNC_STATE', {
      leaderboard: updatedList,
      events: newEvents,
      stats: newStats,
    });
    this.notify();

    return { rank: playerRank, entry: newEntry };
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
  const [arenaState, setArenaState] = useState(() => liveArenaEngine.getState());

  useEffect(() => {
    // Initial sync
    setArenaState(liveArenaEngine.getState());

    // Subscribe to engine changes
    const unsubscribe = liveArenaEngine.subscribe((nextState) => {
      setArenaState({ ...nextState });
    });

    return unsubscribe;
  }, []);

  const formatTimer = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return {
    leaderboard: arenaState.leaderboard,
    events: arenaState.events,
    stats: arenaState.stats,
    playerName: arenaState.playerName,
    timeRemainingSeconds: arenaState.timeRemainingSeconds,
    formattedTimer: formatTimer(arenaState.timeRemainingSeconds),
    submitPlayerRun: (runData) => liveArenaEngine.submitPlayerRun(runData),
    setPlayerName: (name) => liveArenaEngine.setPlayerName(name),
    pushEvent: (ev) => liveArenaEngine.pushEvent(ev),
  };
}
