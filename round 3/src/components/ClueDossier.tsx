import React, { useState } from 'react';
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
  Lock
} from 'lucide-react';

interface ClueDossierProps {
  evidenceList: EvidenceItem[];
  currentRound: number;
  audioSpeed: number;
  onSetAudioSpeed: (speed: number) => void;
  audioRevealedSecret: boolean;
  onAudioRevealedSecret: () => void;
}

export const ClueDossier: React.FC<ClueDossierProps> = ({
  evidenceList,
  currentRound,
  audioSpeed,
  onSetAudioSpeed,
  audioRevealedSecret,
  onAudioRevealedSecret
}) => {
  const [selectedItem, setSelectedItem] = useState<EvidenceItem | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [inspectingHidden, setInspectingHidden] = useState<boolean>(false);

  const getEvidenceIcon = (type: string) => {
    switch (type) {
      case 'photo': return <Camera className="w-4 h-4 text-cyan-400" />;
      case 'audio': return <Volume2 className="w-4 h-4 text-amber-400" />;
      case 'video': return <Film className="w-4 h-4 text-purple-400" />;
      case 'cctv': return <Terminal className="w-4 h-4 text-emerald-400" />;
      case 'log': return <Terminal className="w-4 h-4 text-red-400" />;
      default: return <FileText className="w-4 h-4 text-gray-400" />;
    }
  };

  const handlePlayTape = () => {
    setIsPlayingAudio(true);
    sound.playGlitchStatic(0.3);

    if (audioSpeed === 1.0) {
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

  return (
    <div className="w-full bg-[#0d0d12] border border-gray-900 rounded-lg p-5 font-mono">
      <div className="flex items-center justify-between pb-3 border-b border-gray-800 mb-4">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-red-500" />
          <h2 className="text-base font-bold text-gray-100 tracking-wider uppercase">
            EVIDENCE DOSSIER — CASE FILE 17-B
          </h2>
        </div>
        <span className="text-xs text-gray-400">
          Showing unlocked items up to Round {currentRound}
        </span>
      </div>

      {/* Grid of Evidence Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {evidenceList.map((item) => {
          const isUnlocked = item.round <= currentRound;

          if (!isUnlocked) {
            return (
              <div
                key={item.id}
                className="p-4 rounded border border-gray-900 bg-black/40 text-gray-700 flex flex-col justify-between min-h-[120px] select-none"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider text-gray-700">
                    CLASSIFIED FILE
                  </span>
                  <Lock className="w-3.5 h-3.5 text-gray-800" />
                </div>
                <p className="text-xs text-gray-600 italic">
                  Unlocks in Round {item.round}
                </p>
              </div>
            );
          }

          const isAudioTape = item.id === 'ev-4';
          const isPrinterLog = item.id === 'ev-12';

          return (
            <div
              key={item.id}
              onClick={() => {
                setSelectedItem(item);
                setInspectingHidden(false);
                sound.playTick(false);
              }}
              className={`p-4 rounded border transition cursor-pointer flex flex-col justify-between min-h-[140px] group ${
                isPrinterLog 
                  ? 'bg-red-950/20 border-red-800 hover:border-red-500' 
                  : isAudioTape && audioRevealedSecret
                  ? 'bg-amber-950/20 border-amber-700 hover:border-amber-500'
                  : 'bg-black/60 border-gray-800 hover:border-gray-600'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-1.5 text-xs text-gray-300">
                    {getEvidenceIcon(item.type)}
                    <span className="truncate font-semibold">{item.title}</span>
                  </div>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gray-900 text-gray-400 border border-gray-800 shrink-0">
                    R{item.round}
                  </span>
                </div>

                {item.timestamp && (
                  <p className="text-[11px] text-red-400 font-bold mb-1">
                    [{item.timestamp}]
                  </p>
                )}

                <p className="text-xs text-gray-400 line-clamp-2">
                  {item.content}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-gray-900 flex items-center justify-between text-[10px] text-gray-500 group-hover:text-gray-300">
                <span>Click to inspect</span>
                <Eye className="w-3 h-3" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Item Modal / Inspector */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-2xl bg-[#0a0a0f] border border-red-900/80 rounded-lg p-6 shadow-[0_0_50px_rgba(0,0,0,0.9)] max-h-[90vh] overflow-y-auto crt-overlay">
            <div className="flex items-center justify-between pb-3 border-b border-gray-800 mb-4">
              <div className="flex items-center gap-2">
                {getEvidenceIcon(selectedItem.type)}
                <h3 className="text-base font-bold text-gray-100">
                  {selectedItem.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="px-2 py-1 rounded bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white text-xs"
              >
                CLOSE [ESC]
              </button>
            </div>

            {selectedItem.timestamp && (
              <div className="inline-block px-2 py-1 bg-red-950/50 border border-red-900/80 rounded text-red-300 text-xs font-bold mb-4">
                RECORDED TIMESTAMP: {selectedItem.timestamp}
              </div>
            )}

            {/* Evidence Content */}
            <div className="p-4 rounded border border-gray-800 bg-black/50 text-sm text-gray-200 whitespace-pre-wrap leading-relaxed mb-4">
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
                    onClick={handlePlayTape}
                    disabled={isPlayingAudio}
                    className="flex items-center gap-2 px-4 py-2 bg-amber-700 hover:bg-amber-600 disabled:opacity-50 text-white font-bold text-xs rounded transition"
                  >
                    <Play className="w-4 h-4" />
                    {isPlayingAudio ? 'PLAYING...' : 'PLAY CASSETTE REEL'}
                  </button>

                  <div className="flex items-center gap-1 border border-amber-900/60 rounded p-1 bg-black/40">
                    <button
                      onClick={() => {
                        onSetAudioSpeed(1.0);
                        sound.playTick();
                      }}
                      className={`px-3 py-1 text-xs rounded transition ${
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
                      className={`px-3 py-1 text-xs rounded transition ${
                        audioSpeed === 0.5 ? 'bg-amber-600 text-white font-bold' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      0.5x (Slowdown / Sub-Bass)
                    </button>
                  </div>
                </div>

                {audioRevealedSecret && (
                  <div className="p-3 bg-red-950/50 border-l-4 border-red-600 text-red-200 text-xs rounded">
                    <p className="font-bold">⚠️ CRITICAL AUDITORY ANOMALY REVEALED:</p>
                    <p className="italic mt-1">
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
                  className="flex items-center gap-1.5 text-xs text-red-400 hover:text-red-300 transition"
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
