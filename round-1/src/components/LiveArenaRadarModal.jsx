import React, { useState } from 'react';
import { useLiveArena } from '../utils/liveArenaEngine';
import {
  X,
  Activity,
  Terminal,
  Trophy,
  Users,
  Clock,
  ShieldAlert,
  Zap,
  Filter,
  CheckCircle2,
  TrendingUp,
  TrendingDown,
  User,
} from 'lucide-react';

export default function LiveArenaRadarModal({ isOpen, onClose }) {
  const { leaderboard, events, stats, formattedTimer, playerName, setPlayerName } = useLiveArena();
  const [activeTab, setActiveTab] = useState('feed'); // 'feed' | 'leaderboard' | 'vitals'
  const [nameInput, setNameInput] = useState(playerName);
  const [nameSaved, setNameSaved] = useState(false);
  const [filterType, setFilterType] = useState('all');

  if (!isOpen) return null;

  const handleSaveName = (e) => {
    e.preventDefault();
    if (nameInput.trim()) {
      setPlayerName(nameInput.trim());
      setNameSaved(true);
      setTimeout(() => setNameSaved(false), 2000);
    }
  };

  const filteredEvents = events.filter((ev) => {
    if (filterType === 'all') return true;
    if (filterType === 'traps') return ev.type === 'trap';
    if (filterType === 'submissions') return ev.type === 'submission';
    if (filterType === 'player') return ev.isPlayer;
    return true;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-2xl animate-fadeIn select-none">
      <div className="relative w-full max-w-4xl h-[85vh] max-h-[720px] rounded-3xl luxury-card bg-zinc-950/95 border border-amber-500/40 shadow-[0_0_80px_rgba(245,158,11,0.25)] flex flex-col overflow-hidden animate-scaleUp">
        {/* MODAL HEADER */}
        <div className="p-4 sm:p-5 border-b border-white/[0.08] flex items-center justify-between bg-black/60 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-500/20 to-pink-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.3)]">
              <Activity className="w-5 h-5 animate-pulse text-cyan-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-black uppercase tracking-[0.25em] text-pink-500">
                  ARENA ZERO // LIVE TELEMETRY RADAR
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-[9px] font-mono font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>SYNCED</span>
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-display font-black text-white uppercase tracking-tight">
                REAL-TIME EVENT STREAM &amp; STANDINGS
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Quick Timer Pill */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black border border-white/[0.1] text-amber-300 font-mono text-xs font-bold">
              <Clock className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>ROUND 1: {formattedTimer}</span>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/[0.1] hover:border-white/[0.3] flex items-center justify-center text-zinc-400 hover:text-white transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* TAB CONTROLS & PLAYER HANDLE EDIT */}
        <div className="p-3 border-b border-white/[0.08] bg-black/40 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          {/* Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-900/90 border border-white/[0.06]">
            <button
              onClick={() => setActiveTab('feed')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold uppercase transition-all ${
                activeTab === 'feed'
                  ? 'bg-gradient-to-r from-pink-600 to-amber-500 text-white shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>LIVE FEED ({events.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('leaderboard')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold uppercase transition-all ${
                activeTab === 'leaderboard'
                  ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-black font-black shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Trophy className="w-3.5 h-3.5" />
              <span>LIVE LEADERBOARD</span>
            </button>

            <button
              onClick={() => setActiveTab('vitals')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold uppercase transition-all ${
                activeTab === 'vitals'
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-black shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>ARENA VITALS</span>
            </button>
          </div>

          {/* Quick Player Handle Input */}
          <form onSubmit={handleSaveName} className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-zinc-900 border border-white/[0.1]">
              <User className="w-3.5 h-3.5 text-zinc-400" />
              <input
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                placeholder="Enter Your Handle / Team"
                maxLength={24}
                className="bg-transparent text-white font-mono text-xs focus:outline-none w-36 sm:w-44"
              />
            </div>
            <button
              type="submit"
              className="px-3 py-1 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/50 text-amber-300 font-bold transition-all text-[11px]"
            >
              {nameSaved ? 'SAVED ✓' : 'SET HANDLE'}
            </button>
          </form>
        </div>

        {/* TAB 1: REAL-TIME BROADCAST FEED STREAM */}
        {activeTab === 'feed' && (
          <div className="flex-1 flex flex-col p-4 overflow-hidden font-mono text-xs">
            {/* Feed Filters */}
            <div className="flex items-center justify-between mb-3 text-[11px] text-zinc-400 pb-2 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <Filter className="w-3.5 h-3.5 text-zinc-500" />
                <span>FILTER:</span>
                {['all', 'submissions', 'traps', 'player'].map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilterType(f)}
                    className={`px-2 py-0.5 rounded uppercase font-bold transition-all ${
                      filterType === f
                        ? 'bg-white/10 text-white border border-white/20'
                        : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
              <span className="text-[10px] text-zinc-500">AUTO-REFRESHING IN REAL-TIME</span>
            </div>

            {/* Event List */}
            <div className="flex-1 overflow-y-auto space-y-2 pr-1">
              {filteredEvents.map((ev) => (
                <div
                  key={ev.id}
                  className={`p-3 rounded-xl border transition-all flex items-start justify-between gap-3 ${
                    ev.isPlayer
                      ? 'bg-amber-500/10 border-amber-500/40 text-white shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                      : ev.type === 'trap'
                      ? 'bg-red-950/40 border-red-500/30 text-red-200'
                      : ev.type === 'submission'
                      ? 'bg-cyan-950/30 border-cyan-500/30 text-cyan-100'
                      : 'bg-zinc-950/60 border-white/[0.06] text-zinc-300'
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    <span className="text-base shrink-0 mt-0.5">{ev.icon || '⚡'}</span>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[10px] text-zinc-500 font-bold">{ev.time}</span>
                        <span
                          className={`text-[9px] px-1.5 py-0.2 rounded font-black uppercase ${
                            ev.type === 'trap'
                              ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                              : ev.type === 'submission'
                              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                              : 'bg-white/[0.06] text-zinc-400'
                          }`}
                        >
                          {ev.type}
                        </span>
                        {ev.isPlayer && (
                          <span className="text-[9px] px-1.5 py-0.2 rounded font-black uppercase bg-amber-500/30 text-amber-300 border border-amber-500/50">
                            YOU
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-[13px] leading-relaxed">{ev.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: LIVE LEADERBOARD WITH REAL-TIME SHIFTS */}
        {activeTab === 'leaderboard' && (
          <div className="flex-1 flex flex-col p-4 overflow-hidden font-mono text-xs">
            <div className="flex items-center justify-between mb-3 text-[11px] text-zinc-400 pb-2 border-b border-white/[0.06]">
              <span>LIVE STANDINGS // ROUND 1: DALGONA PROMPT</span>
              <span className="text-amber-300 font-bold">{leaderboard.length} TEAMS REGISTERED</span>
            </div>

            <div className="flex-1 overflow-y-auto space-y-2 pr-1">
              {leaderboard.map((item) => {
                const rankDelta = (item.prevRank || item.rank) - item.rank;
                return (
                  <div
                    key={item.id || item.name}
                    className={`flex items-center justify-between p-3.5 rounded-2xl transition-all ${
                      item.isPlayer
                        ? 'luxury-card bg-gradient-to-r from-amber-500/25 via-pink-600/25 to-amber-500/25 border-2 border-amber-400 text-white font-black shadow-[0_0_25px_rgba(245,158,11,0.4)] scale-[1.01]'
                        : item.isNew
                        ? 'bg-cyan-950/40 border border-cyan-400 text-white animate-pulse'
                        : 'luxury-card bg-zinc-950/60 border border-white/[0.06] text-zinc-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Rank Number */}
                      <span
                        className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs ${
                          item.rank === 1
                            ? 'bg-gradient-to-tr from-amber-400 to-yellow-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.5)]'
                            : item.rank === 2
                            ? 'bg-gradient-to-tr from-slate-200 to-zinc-400 text-black shadow-[0_0_10px_rgba(255,255,255,0.3)]'
                            : item.rank === 3
                            ? 'bg-gradient-to-tr from-amber-700 to-orange-600 text-white shadow-[0_0_10px_rgba(217,119,6,0.3)]'
                            : 'bg-white/[0.04] border border-white/[0.08] text-zinc-400'
                        }`}
                      >
                        #{item.rank}
                      </span>

                      {/* Rank Shift Indicator */}
                      <div className="w-5 text-center text-[10px] font-black">
                        {rankDelta > 0 ? (
                          <span className="text-emerald-400 flex items-center gap-0.5">
                            <TrendingUp className="w-3 h-3" />+{rankDelta}
                          </span>
                        ) : rankDelta < 0 ? (
                          <span className="text-red-400 flex items-center gap-0.5">
                            <TrendingDown className="w-3 h-3" />
                            {rankDelta}
                          </span>
                        ) : (
                          <span className="text-zinc-600">-</span>
                        )}
                      </div>

                      {/* Handle & Title */}
                      <div>
                        <div className="flex items-center gap-2 font-bold text-sm">
                          <span className={item.isPlayer ? 'text-amber-200 font-black' : 'text-white'}>
                            {item.name}
                          </span>
                          {item.isPlayer && (
                            <span className="px-1.5 py-0.2 rounded text-[9px] bg-amber-400 text-black font-black uppercase">
                              YOU
                            </span>
                          )}
                        </div>
                        <div className="text-[10px] text-zinc-400 mt-0.5">{item.title}</div>
                      </div>
                    </div>

                    {/* Score */}
                    <div className="text-right">
                      <div className="text-base sm:text-lg font-black font-display text-white">
                        {item.score}{' '}
                        <span className="text-[10px] font-mono text-zinc-500 font-normal">PTS</span>
                      </div>
                      <div className="text-[10px] text-zinc-400 font-mono">
                        {item.cuts || 8} Signals Enclosed
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: ARENA VITALS & TELEMETRY */}
        {activeTab === 'vitals' && (
          <div className="flex-1 p-6 overflow-y-auto font-mono text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="p-4 rounded-2xl luxury-card bg-zinc-950/70 border border-cyan-500/30 text-left">
                <div className="text-[10px] text-cyan-400 font-black uppercase tracking-widest mb-1 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" />
                  <span>ACTIVE HACKERS</span>
                </div>
                <div className="text-3xl font-black font-display text-white mt-1">
                  {stats.activeParticipants}
                </div>
                <div className="text-[10px] text-zinc-400 mt-1">Live terminals connected</div>
              </div>

              <div className="p-4 rounded-2xl luxury-card bg-zinc-950/70 border border-amber-500/30 text-left">
                <div className="text-[10px] text-amber-400 font-black uppercase tracking-widest mb-1 flex items-center gap-1.5">
                  <Trophy className="w-3.5 h-3.5" />
                  <span>SUBMISSIONS</span>
                </div>
                <div className="text-3xl font-black font-display text-white mt-1">
                  {stats.totalSubmissions}
                </div>
                <div className="text-[10px] text-zinc-400 mt-1">Verified evaluations</div>
              </div>

              <div className="p-4 rounded-2xl luxury-card bg-zinc-950/70 border border-pink-500/30 text-left">
                <div className="text-[10px] text-pink-400 font-black uppercase tracking-widest mb-1 flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>TRAPS DETONATED</span>
                </div>
                <div className="text-3xl font-black font-display text-white mt-1">
                  {stats.trapsTriggered}
                </div>
                <div className="text-[10px] text-zinc-400 mt-1">Strategic failures logged</div>
              </div>

              <div className="p-4 rounded-2xl luxury-card bg-zinc-950/70 border border-emerald-500/30 text-left">
                <div className="text-[10px] text-emerald-400 font-black uppercase tracking-widest mb-1 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" />
                  <span>AVERAGE PURITY</span>
                </div>
                <div className="text-3xl font-black font-display text-white mt-1">
                  {stats.avgPurity}%
                </div>
                <div className="text-[10px] text-zinc-400 mt-1">Signal vs noise ratio</div>
              </div>
            </div>

            {/* Architecture Overview */}
            <div className="p-5 rounded-2xl luxury-card bg-black/70 border border-white/[0.08] text-left leading-relaxed">
              <h3 className="font-display font-black text-white text-sm uppercase tracking-wider mb-2">
                DETERMINISTIC EVALUATION &amp; LIVE ARENA PROTOCOL
              </h3>
              <p className="text-zinc-400 text-xs mb-3">
                All prompt submissions are evaluated locally and synchronized in real-time across terminals using the
                Prompt War Broadcast Channel. Scoring criteria is deterministic and mathematically auditable:
              </p>
              <ul className="space-y-2 text-zinc-300 text-xs">
                <li>• <strong>Context Precision (40 pts):</strong> +5 per signal, -10 per trap, -2 per noise fragment.</li>
                <li>• <strong>Prompt Engineering Rigor (35 pts):</strong> Directive verb (+8), Role (+7), Clue synthesis (+8), Constraints (+6), Format (+6).</li>
                <li>• <strong>AI Viability (25 pts):</strong> 25 baseline, minus trap sabotage and unprompted raw dump penalties.</li>
              </ul>
            </div>
          </div>
        )}

        {/* MODAL FOOTER */}
        <div className="p-4 border-t border-white/[0.08] bg-black/60 flex items-center justify-between text-[11px] font-mono text-zinc-400">
          <span>BROADCAST CHANNEL: <strong className="text-emerald-400">ACTIVE (MULTI-TAB SYNC)</strong></span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold transition-all border border-white/[0.1]"
          >
            CLOSE RADAR
          </button>
        </div>
      </div>
    </div>
  );
}
