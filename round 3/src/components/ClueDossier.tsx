import React, { useState, useMemo } from 'react';
import { EvidenceItem } from '../types/game';
import { sound } from '../utils/audioEngine';
import { 
  FileText, 
  Camera, 
  Volume2, 
  Film, 
  Terminal, 
  Eye, 
  Sparkles, 
  Play, 
  RotateCcw,
  AlertTriangle,
  Lock,
  Search,
  CheckCircle2,
  Sliders,
  Filter
} from 'lucide-react';

interface ClueDossierProps {
  evidenceList: EvidenceItem[];
  currentRound: number;
  audioSpeed: number;
  onSetAudioSpeed: (speed: number) => void;
  audioRevealedSecret: boolean;
  onAudioRevealedSecret: () => void;
  compact?: boolean;
}

type EvidenceCategory = 'all' | 'audio' | 'cctv' | 'document' | 'photo';

export const ClueDossier: React.FC<ClueDossierProps> = ({
  evidenceList,
  currentRound,
  audioSpeed,
  onSetAudioSpeed,
  audioRevealedSecret,
  onAudioRevealedSecret,
  compact = false
}) => {
  const [selectedItem, setSelectedItem] = useState<EvidenceItem | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [inspectingHidden, setInspectingHidden] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<EvidenceCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getEvidenceIcon = (type: string) => {
    switch (type) {
      case 'photo': return <Camera className="w-3.5 h-3.5 text-cyan-400 shrink-0" />;
      case 'audio': return <Volume2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />;
      case 'video': return <Film className="w-3.5 h-3.5 text-purple-400 shrink-0" />;
      case 'cctv': return <Terminal className="w-3.5 h-3.5 text-emerald-400 shrink-0" />;
      case 'log': return <Terminal className="w-3.5 h-3.5 text-red-400 shrink-0" />;
      default: return <FileText className="w-3.5 h-3.5 text-gray-400 shrink-0" />;
    }
  };

  const handlePlayTape = (speedOverride?: number) => {
    const speed = speedOverride !== undefined ? speedOverride : audioSpeed;
    if (speedOverride !== undefined) {
      onSetAudioSpeed(speedOverride);
    }
    setIsPlayingAudio(true);
    sound.playGlitchStatic(0.3);

    if (speed === 1.0) {
      sound.speakDistorted("When the house stopped... someone started.", () => {
        setIsPlayingAudio(false);
      });
    } else {
      // 0.5x Slowdown reveals the true sinister line
      sound.playTick(true);
      sound.speakDistorted("Someone started before the house stopped.", () => {
        setIsPlayingAudio(false);
        if (!audioRevealedSecret) {
          onAudioRevealedSecret();
          sound.playHorrorStinger();
        }
      });
    }
  };

  // Filter evidence by category and search
  const filteredEvidence = useMemo(() => {
    return evidenceList.filter((item) => {
      // Category match
      let matchCat = true;
      if (activeCategory === 'audio') matchCat = item.type === 'audio';
      else if (activeCategory === 'photo') matchCat = item.type === 'photo';
      else if (activeCategory === 'cctv') matchCat = item.type === 'cctv' || item.type === 'log' || item.type === 'video';
      else if (activeCategory === 'document') matchCat = item.type === 'document';

      if (!matchCat) return false;

      // Search match
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        item.title.toLowerCase().includes(q) ||
        item.content.toLowerCase().includes(q) ||
        (item.timestamp && item.timestamp.toLowerCase().includes(q)) ||
        (item.tags && item.tags.some(t => t.toLowerCase().includes(q)))
      );
    });
  }, [evidenceList, activeCategory, searchQuery]);

  // Counts for category badges
  const categoryCounts = useMemo(() => {
    const counts = { all: evidenceList.length, audio: 0, cctv: 0, document: 0, photo: 0 };
    evidenceList.forEach((it) => {
      if (it.type === 'audio') counts.audio++;
      else if (it.type === 'photo') counts.photo++;
      else if (it.type === 'cctv' || it.type === 'log' || it.type === 'video') counts.cctv++;
      else counts.document++;
    });
    return counts;
  }, [evidenceList]);

  return (
    <div className="w-full tactical-frame tactical-corners rounded-lg p-4 sm:p-5 font-mono text-gray-200">
      {/* Corner indicators */}
      <span className="corner-tl text-red-500" />
      <span className="corner-tr text-red-500" />
      <span className="corner-bl text-red-500" />
      <span className="corner-br text-red-500" />

      {/* Frame Telemetry Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-gray-800/80 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full bg-red-500 hud-pulse-red" />
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-red-500" />
            <h2 className="text-xs sm:text-sm font-bold text-gray-100 tracking-wider uppercase">
              TACTICAL INTEL & EVIDENCE VAULT
            </h2>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-red-950/60 border border-red-900/60 text-red-300 font-bold">
            CASE 17-B
          </span>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-gray-400">
          <span className="text-emerald-400 font-semibold">
            {evidenceList.filter(e => e.round <= currentRound).length}/{evidenceList.length} FILES UNLOCKED
          </span>
          <span className="text-gray-600 hidden sm:inline">•</span>
          <span className="text-gray-500 hidden sm:inline">ROUND {currentRound} CLEARANCE</span>
        </div>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 mb-4">
        {/* Search input */}
        <div className="relative flex-1 min-w-[200px]">
          <Search className="w-3.5 h-3.5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search dossier by keyword, suspect, timestamp..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 bg-black/60 border border-gray-800 rounded text-xs text-gray-200 placeholder-gray-600 focus:outline-none focus:border-red-500 transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-gray-500 hover:text-gray-300"
            >
              ✕
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
          <button
            onClick={() => { setActiveCategory('all'); sound.playTick(false); }}
            className={`px-2.5 py-1 text-[10px] font-bold rounded transition whitespace-nowrap cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-red-900/80 border border-red-500 text-white'
                : 'bg-black/50 border border-gray-800/80 text-gray-400 hover:text-gray-200'
            }`}
          >
            ALL ({categoryCounts.all})
          </button>
          <button
            onClick={() => { setActiveCategory('audio'); sound.playTick(false); }}
            className={`px-2.5 py-1 text-[10px] font-bold rounded transition whitespace-nowrap flex items-center gap-1 cursor-pointer ${
              activeCategory === 'audio'
                ? 'bg-amber-900/80 border border-amber-500 text-amber-200'
                : 'bg-black/50 border border-gray-800/80 text-gray-400 hover:text-amber-300'
            }`}
          >
            <Volume2 className="w-3 h-3 text-amber-400" />
            <span>AUDIO ({categoryCounts.audio})</span>
          </button>
          <button
            onClick={() => { setActiveCategory('cctv'); sound.playTick(false); }}
            className={`px-2.5 py-1 text-[10px] font-bold rounded transition whitespace-nowrap flex items-center gap-1 cursor-pointer ${
              activeCategory === 'cctv'
                ? 'bg-emerald-900/80 border border-emerald-500 text-emerald-200'
                : 'bg-black/50 border border-gray-800/80 text-gray-400 hover:text-emerald-300'
            }`}
          >
            <Terminal className="w-3 h-3 text-emerald-400" />
            <span>CCTV & LOGS ({categoryCounts.cctv})</span>
          </button>
          <button
            onClick={() => { setActiveCategory('document'); sound.playTick(false); }}
            className={`px-2.5 py-1 text-[10px] font-bold rounded transition whitespace-nowrap flex items-center gap-1 cursor-pointer ${
              activeCategory === 'document'
                ? 'bg-purple-900/80 border border-purple-500 text-purple-200'
                : 'bg-black/50 border border-gray-800/80 text-gray-400 hover:text-purple-300'
            }`}
          >
            <FileText className="w-3 h-3 text-purple-400" />
            <span>DOCS ({categoryCounts.document})</span>
          </button>
          <button
            onClick={() => { setActiveCategory('photo'); sound.playTick(false); }}
            className={`px-2.5 py-1 text-[10px] font-bold rounded transition whitespace-nowrap flex items-center gap-1 cursor-pointer ${
              activeCategory === 'photo'
                ? 'bg-cyan-900/80 border border-cyan-500 text-cyan-200'
                : 'bg-black/50 border border-gray-800/80 text-gray-400 hover:text-cyan-300'
            }`}
          >
            <Camera className="w-3 h-3 text-cyan-400" />
            <span>PHOTOS ({categoryCounts.photo})</span>
          </button>
        </div>
      </div>

      {/* Quick Audio Reel Deck (when Tape #4 is unlocked) */}
      {evidenceList.some(e => e.id === 'ev-4' && e.round <= currentRound) && (
        <div className="mb-4 p-3 bg-gradient-to-r from-amber-950/30 to-black/60 border border-amber-900/60 rounded-lg flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded bg-amber-900/40 border border-amber-600 flex items-center justify-center text-amber-400">
              <Volume2 className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-amber-200 tracking-wider">
                  #EV-04 CASSETTE PLAYBACK
                </span>
                {audioRevealedSecret && (
                  <span className="text-[9px] px-1.5 py-0.2 bg-red-950 text-red-300 border border-red-700 rounded font-bold">
                    SUB-BASS DECODED
                  </span>
                )}
              </div>
              <p className="text-[10px] text-gray-400">
                {audioRevealedSecret 
                  ? 'Key finding: "Someone started BEFORE the house stopped"' 
                  : 'Auditory anomaly requires 0.5x sub-bass inspection'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handlePlayTape(1.0)}
              disabled={isPlayingAudio}
              className="px-2.5 py-1 text-xs rounded bg-black/50 border border-amber-800/70 hover:border-amber-500 text-amber-300 font-bold transition flex items-center gap-1 cursor-pointer disabled:opacity-50"
            >
              <Play className="w-3 h-3" />
              <span>1.0x (Normal)</span>
            </button>
            <button
              onClick={() => handlePlayTape(0.5)}
              disabled={isPlayingAudio}
              className="px-2.5 py-1 text-xs rounded bg-amber-900/60 border border-amber-500 hover:bg-amber-800 text-white font-bold transition flex items-center gap-1 cursor-pointer disabled:opacity-50 shadow-[0_0_10px_rgba(245,158,11,0.3)]"
            >
              <Play className="w-3 h-3" />
              <span>0.5x (Decode Secret)</span>
            </button>
          </div>
        </div>
      )}

      {/* Grid or List of Evidence Cards */}
      <div 
        className={`grid gap-2.5 ${
          compact 
            ? 'grid-cols-1 max-h-[700px] overflow-y-auto pr-1' 
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}
      >
        {filteredEvidence.length === 0 ? (
          <div className="col-span-full p-8 text-center text-gray-500 text-xs italic border border-gray-900 rounded bg-black/30">
            No intelligence files matching "{searchQuery}" in category "{activeCategory}".
          </div>
        ) : (
          filteredEvidence.map((item, idx) => {
            const isUnlocked = item.round <= currentRound;
            const evidenceNum = item.id.replace('ev-', '').padStart(2, '0');

            if (!isUnlocked) {
              return (
                <div
                  key={item.id}
                  className="p-3 sm:p-4 rounded border border-gray-900 bg-black/40 text-gray-700 flex flex-col justify-between min-h-[90px] select-none"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider text-gray-700 font-bold">
                      #EV-{evidenceNum} // CLASSIFIED
                    </span>
                    <Lock className="w-3.5 h-3.5 text-gray-800" />
                  </div>
                  <p className="text-[11px] text-gray-600 italic">
                    Requires Round {item.round} Clearance
                  </p>
                </div>
              );
            }

            const isAudioTape = item.id === 'ev-4';
            const isPrinterLog = item.id === 'ev-12';
            const isCctvLog = item.id === 'ev-6';

            return (
              <div
                key={item.id}
                onClick={() => {
                  setSelectedItem(item);
                  setInspectingHidden(false);
                  sound.playTick(false);
                }}
                className={`p-3 rounded border transition cursor-pointer flex flex-col justify-between group ${
                  isPrinterLog 
                    ? 'bg-red-950/20 border-red-800 hover:border-red-500' 
                    : isAudioTape && audioRevealedSecret
                    ? 'bg-amber-950/20 border-amber-700 hover:border-amber-500'
                    : isCctvLog
                    ? 'bg-emerald-950/15 border-emerald-800/80 hover:border-emerald-500'
                    : 'bg-black/60 border-gray-800 hover:border-gray-600'
                } ${compact ? 'min-h-[95px]' : 'min-h-[130px]'}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-1.5 text-xs text-gray-200">
                      {getEvidenceIcon(item.type)}
                      <span className="truncate font-bold text-xs">{item.title}</span>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <span className="text-[9px] px-1 py-0.2 rounded bg-red-950/80 text-red-300 font-mono font-bold border border-red-900/50">
                        #EV-{evidenceNum}
                      </span>
                      <span className="text-[9px] px-1 py-0.2 rounded bg-gray-900 text-gray-400 border border-gray-800">
                        R{item.round}
                      </span>
                    </div>
                  </div>

                  {item.timestamp && (
                    <p className="text-[10px] text-amber-400/90 font-mono font-bold mb-1">
                      [{item.timestamp}]
                    </p>
                  )}

                  <p className={`text-[11px] text-gray-400 ${compact ? 'line-clamp-2' : 'line-clamp-3'} leading-snug`}>
                    {item.content}
                  </p>
                </div>

                <div className="mt-2 pt-1.5 border-t border-gray-900/80 flex items-center justify-between text-[10px] text-gray-500 group-hover:text-gray-300">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3 h-3 text-red-500" />
                    <span>INSPECT FULL INTEL</span>
                  </span>
                  {item.hiddenDetails && (
                    <span className="text-red-400 font-bold text-[9px] flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5" />
                      <span>FORENSIC LOG AVAILABLE</span>
                    </span>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Selected Item Modal / Forensic Inspector */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-2xl bg-[#0a0a0f] border border-red-900/80 rounded-lg p-6 shadow-[0_0_50px_rgba(0,0,0,0.9)] max-h-[90vh] overflow-y-auto crt-overlay tactical-corners">
            <span className="corner-tl text-red-500" />
            <span className="corner-tr text-red-500" />
            <span className="corner-bl text-red-500" />
            <span className="corner-br text-red-500" />

            <div className="flex items-center justify-between pb-3 border-b border-gray-800 mb-4">
              <div className="flex items-center gap-2">
                {getEvidenceIcon(selectedItem.type)}
                <h3 className="text-base font-bold text-gray-100">
                  {selectedItem.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="px-3 py-1 rounded bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white text-xs font-mono font-bold cursor-pointer border border-gray-700"
              >
                CLOSE [ESC]
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-2 py-0.5 bg-red-950/60 border border-red-900 rounded text-red-300 text-xs font-mono font-bold">
                EVIDENCE IDENTIFIER: #{selectedItem.id.toUpperCase()}
              </span>
              {selectedItem.timestamp && (
                <span className="px-2 py-0.5 bg-amber-950/50 border border-amber-900/80 rounded text-amber-300 text-xs font-mono font-bold">
                  TIMESTAMP: {selectedItem.timestamp}
                </span>
              )}
              <span className="px-2 py-0.5 bg-gray-900 border border-gray-800 rounded text-gray-400 text-xs font-mono">
                SECURITY CLEARANCE: ROUND {selectedItem.round}+
              </span>
            </div>

            {/* Evidence Content */}
            <div className="p-4 rounded border border-gray-800 bg-black/60 text-sm text-gray-200 whitespace-pre-wrap leading-relaxed mb-4 font-mono">
              {selectedItem.content}
            </div>

            {/* Interactive Audio Tape Player for Evidence 04 */}
            {selectedItem.id === 'ev-4' && (
              <div className="p-4 rounded border border-amber-900/60 bg-amber-950/20 mb-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-amber-300 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Volume2 className="w-4 h-4" />
                    MAGNETIC CASSETTE TAPE PLAYBACK ENGINE
                  </span>
                  <span className="text-xs text-amber-400">
                    Speed: {audioSpeed}x
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => handlePlayTape()}
                    disabled={isPlayingAudio}
                    className="flex items-center gap-2 px-4 py-2 bg-amber-700 hover:bg-amber-600 disabled:opacity-50 text-white font-bold text-xs rounded transition cursor-pointer"
                  >
                    <Play className="w-4 h-4" />
                    {isPlayingAudio ? 'PLAYING AUDIO...' : 'PLAY CASSETTE REEL'}
                  </button>

                  <div className="flex items-center gap-1 border border-amber-900/60 rounded p-1 bg-black/40">
                    <button
                      onClick={() => {
                        onSetAudioSpeed(1.0);
                        sound.playTick();
                      }}
                      className={`px-3 py-1 text-xs rounded transition cursor-pointer ${
                        audioSpeed === 1.0 ? 'bg-amber-600 text-white font-bold' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      1.0x (Normal)
                    </button>
                    <button
                      onClick={() => {
                        onSetAudioSpeed(0.5);
                        sound.playTick(true);
                      }}
                      className={`px-3 py-1 text-xs rounded transition cursor-pointer ${
                        audioSpeed === 0.5 ? 'bg-amber-600 text-white font-bold' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      0.5x (Sub-Bass Slowdown)
                    </button>
                  </div>
                </div>

                {audioRevealedSecret && (
                  <div className="p-3 bg-red-950/50 border-l-4 border-red-600 text-red-200 text-xs rounded">
                    <p className="font-bold flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-red-400" />
                      CRITICAL AUDITORY ANOMALY REVEALED:
                    </p>
                    <p className="italic mt-1 text-red-100">
                      "Someone started BEFORE the house stopped." — The attack occurred prior to the 12:13 AM blackout!
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Forensic Detail Inspection Toggle */}
            {selectedItem.hiddenDetails && (
              <div className="space-y-2">
                <button
                  onClick={() => {
                    setInspectingHidden(!inspectingHidden);
                    sound.playTick(false);
                  }}
                  className="flex items-center gap-1.5 text-xs text-red-400 hover:text-red-300 transition font-bold cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  {inspectingHidden ? 'HIDE FORENSIC SPECTRAL AUDIT' : 'REVEAL FORENSIC SPECTRAL AUDIT'}
                </button>

                {inspectingHidden && (
                  <div className="p-4 rounded border border-red-900/70 bg-red-950/30 text-xs text-red-200 leading-relaxed animate-fade-in">
                    <div className="flex items-center gap-1.5 font-bold text-red-400 uppercase tracking-wider mb-1">
                      <AlertTriangle className="w-4 h-4" />
                      CONFIDENTIAL FORENSIC LOG:
                    </div>
                    {selectedItem.hiddenDetails}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

