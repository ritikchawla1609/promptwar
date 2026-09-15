import React, { useState } from 'react';
import { sound } from '../utils/audioEngine';
import { 
  Film, 
  Play, 
  AlertCircle, 
  Clock, 
  FileWarning, 
  Unlock, 
  Sparkles, 
  CheckCircle2,
  Zap,
  Radio,
  Activity,
  Maximize2
} from 'lucide-react';

interface Round4DeadManProps {
  hiddenVideoUnlocked: boolean;
  onUnlockHiddenVideo: () => void;
  sliderDistinction: {
    attackTime: string;
    deathTime: string;
    discoveryTime: string;
  };
  onChangeDistinction: (field: 'attackTime' | 'deathTime' | 'discoveryTime', val: string) => void;
}

export const Round4DeadMan: React.FC<Round4DeadManProps> = ({
  hiddenVideoUnlocked,
  onUnlockHiddenVideo,
  sliderDistinction,
  onChangeDistinction
}) => {
  const [isPlayingVideo, setIsPlayingVideo] = useState<boolean>(false);
  const [videoPlaybackStep, setVideoPlaybackStep] = useState<number>(0);
  const [isPlayingHidden, setIsPlayingHidden] = useState<boolean>(false);

  const handlePlaySenVideo = () => {
    setIsPlayingVideo(true);
    setVideoPlaybackStep(1);
    sound.playHitmarker();
    sound.playGlitchStatic(0.4);

    setTimeout(() => {
      sound.speakDistorted("If you're watching this, one of them killed me. But that's not what you should be looking for. The person who killed me isn't the person you're going to suspect.", () => {
        setVideoPlaybackStep(2); // Cuts at 12:03:17
        sound.playGlitchStatic(0.5);

        setTimeout(() => {
          setIsPlayingVideo(false);
          if (!hiddenVideoUnlocked) {
            onUnlockHiddenVideo();
            sound.playHorrorStinger();
          }
        }, 1200);
      });
    }, 1000);
  };

  const handlePlayHiddenVideo = () => {
    setIsPlayingHidden(true);
    sound.playHitmarker();
    sound.playGlitchStatic(0.6);
    sound.playTick(true);

    setTimeout(() => {
      setIsPlayingHidden(false);
    }, 7000);
  };

  const handleAutoSync = () => {
    sound.playHitmarker();
    sound.playRadioChirp();
    onChangeDistinction('attackTime', '11:47 PM');
    onChangeDistinction('deathTime', '12:15 AM (Blackout)');
    onChangeDistinction('discoveryTime', '12:18 AM');
    
    setTimeout(() => {
      if (!hiddenVideoUnlocked) {
        onUnlockHiddenVideo();
      }
      sound.playObjectiveComplete();
    }, 400);
  };

  return (
    <div className="w-full glass-panel p-5 sm:p-6 space-y-5 text-gray-200 font-sans shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-800/80 gap-2">
        <div className="flex items-center gap-2.5">
          <Film className="w-4 h-4 text-red-400" />
          <h2 className="text-sm md:text-base font-semibold text-gray-100 tracking-wider uppercase">
            Phase 4: The Dead Man's Message // Forensics
          </h2>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-red-400 font-mono bg-red-950/30 px-2.5 py-1 rounded border border-red-900/40">
          <Activity className="w-3 h-3" />
          <span>CHRONO TRIAD DIFFERENTIATION</span>
        </div>
      </div>

      {/* Holographic Timeline Map */}
      <div className="p-3.5 bg-black/40 rounded-lg border border-gray-800/80 space-y-2">
        <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold font-mono block">
          TIMELINE RADAR // CHRONOLOGICAL NODES
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-[10px]">
          <div className="p-2 rounded-md bg-amber-950/20 border border-amber-800/50">
            <div className="text-amber-400 font-semibold font-mono">11:47 PM</div>
            <div className="text-gray-300 font-medium truncate">Assault Strike</div>
            <div className="text-[9px] text-gray-400">Meera strikes Sen</div>
          </div>
          <div className="p-2 rounded-md bg-cyan-950/20 border border-cyan-800/50">
            <div className="text-cyan-400 font-semibold font-mono">12:03 AM</div>
            <div className="text-gray-300 font-medium truncate">Alive & Breathing</div>
            <div className="text-[9px] text-gray-400">Sen records video</div>
          </div>
          <div className="p-2 rounded-md bg-purple-950/20 border border-purple-800/50">
            <div className="text-purple-400 font-semibold font-mono">12:13 AM</div>
            <div className="text-gray-300 font-medium truncate">Blackout Sabotage</div>
            <div className="text-[9px] text-gray-400">Kabir trips power</div>
          </div>
          <div className="p-2 rounded-md bg-red-950/40 border border-red-800/60 font-medium">
            <div className="text-red-400 font-semibold font-mono">12:15 AM</div>
            <div className="text-white font-semibold truncate">Fatal Smothering</div>
            <div className="text-[9px] text-red-200">Dev suffocates Sen</div>
          </div>
          <div className="p-2 rounded-md bg-emerald-950/20 border border-emerald-800/50 col-span-2 sm:col-span-1">
            <div className="text-emerald-400 font-semibold font-mono">12:18 AM</div>
            <div className="text-gray-300 font-medium truncate">Locked Discovery</div>
            <div className="text-[9px] text-gray-400">Door breached</div>
          </div>
        </div>
      </div>

      {/* Video Screens Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Terminal Video 1: SEN_FINAL_1203.mp4 */}
        <div className="p-4 rounded-lg border border-gray-800/80 bg-black/40 flex flex-col justify-between space-y-3">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-gray-800/80 mb-2">
              <span className="text-xs text-red-400 font-semibold uppercase flex items-center gap-1.5 font-mono">
                <Film className="w-3.5 h-3.5" />
                EVIDENCE 11: SEN_FINAL_1203.mp4
              </span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-red-950/50 text-red-400 border border-red-900/50 font-mono">
                12:03:00 AM (17s)
              </span>
            </div>

            {/* CRT Video Monitor */}
            <div className="relative w-full h-44 bg-[#040407] rounded-lg border border-gray-800 flex flex-col items-center justify-center p-3 text-center overflow-hidden crt-overlay">
              <div className="absolute top-2.5 left-2.5 text-[9px] text-red-400 font-mono font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                REC 4K 60FPS
              </div>
              <div className="absolute top-2.5 right-2.5 text-[9px] text-gray-500 font-mono">
                STUDY_MON_01
              </div>

              {videoPlaybackStep === 0 && (
                <div className="space-y-2">
                  <p className="text-[11px] text-gray-400 font-mono">PROFESSOR SEN'S FINAL RECORDING</p>
                  <button
                    onClick={handlePlaySenVideo}
                    disabled={isPlayingVideo}
                    className="px-3.5 py-1.5 bg-red-900 hover:bg-red-800 text-white text-xs font-medium rounded-md flex items-center gap-2 mx-auto transition cursor-pointer border border-red-800/60"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    Play Recording
                  </button>
                </div>
              )}

              {videoPlaybackStep === 1 && (
                <div className="space-y-2 animate-fade-in px-3">
                  <div className="text-red-400 text-xs font-mono font-medium">
                    ● BUFFER PLAYBACK [12:03:00 AM]
                  </div>
                  <p className="text-xs text-gray-200 italic font-serif leading-relaxed">
                    "If you're watching this... one of them killed me. But the person who killed me isn't the person you're going to suspect."
                  </p>
                  <p className="text-[10px] text-gray-400 font-mono">
                    (Sen turns toward wall clock: reads 12:03 AM)
                  </p>
                </div>
              )}

              {videoPlaybackStep === 2 && (
                <div className="space-y-1 text-red-400 font-mono">
                  <p className="text-sm tracking-widest">
                    STREAM TERMINATED
                  </p>
                  <p className="text-[10px] text-gray-500">
                    FEED TIMESTAMP: 12:03:17 AM
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="p-2.5 bg-black/50 rounded-md border border-gray-800/80 text-[11px] text-gray-300 flex items-center justify-between font-mono">
            <span>KEY FORENSIC FACT:</span>
            <span className="text-emerald-400 font-medium">Sen was alive at 12:03 AM</span>
          </div>
        </div>

        {/* Hidden File: PINHOLE_1147.mp4 */}
        <div className={`p-4 rounded-lg border flex flex-col justify-between space-y-3 transition ${
          hiddenVideoUnlocked 
            ? 'border-red-900/60 bg-black/40' 
            : 'border-gray-800/50 bg-black/20 opacity-60'
        }`}>
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-gray-800/80 mb-2">
              <span className="text-xs text-red-400 font-semibold uppercase flex items-center gap-1.5 font-mono">
                <FileWarning className="w-3.5 h-3.5" />
                RESTRICTED: PINHOLE_1147.mp4
              </span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-red-950/60 text-red-300 border border-red-900/60 font-mono">
                11:47:00 PM (7s)
              </span>
            </div>

            {/* Monitor */}
            <div className="relative w-full h-44 bg-[#040407] rounded-lg border border-red-950/60 flex flex-col items-center justify-center p-3 text-center overflow-hidden crt-overlay">
              {!hiddenVideoUnlocked ? (
                <div className="space-y-1.5 font-mono">
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                    ARCHIVE RESTRICTED
                  </p>
                  <p className="text-[10px] text-gray-600">
                    Decrypts after playing Sen's video or verifying chronology
                  </p>
                </div>
              ) : isPlayingHidden ? (
                <div className="space-y-2 animate-fade-in px-3 font-sans">
                  <div className="text-xs text-red-400 font-mono font-medium">
                    ● PINHOLE RECONSTRUCTION (11:47 PM)
                  </div>
                  <p className="text-xs text-gray-200">
                    [00:03]: Dark figure enters Study. Wall clock reads 11:47 PM.
                  </p>
                  <p className="text-xs text-red-400 font-medium">
                    [00:06]: Violent confrontation. Heavy brass thud. Figure flees!
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  <p className="text-[11px] text-red-400 uppercase tracking-wider font-mono">
                    7-SECOND PINHOLE CLIP READY
                  </p>
                  <button
                    onClick={handlePlayHiddenVideo}
                    className="px-3.5 py-1.5 bg-red-900 hover:bg-red-800 text-white text-xs font-medium rounded-md flex items-center gap-2 mx-auto transition cursor-pointer border border-red-800/60"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    Play Assault Footage
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="p-2.5 bg-red-950/20 rounded-md border border-red-900/40 text-[11px] text-red-200 flex items-center justify-between">
            <span className="font-mono text-red-400">REVELATION:</span>
            <span>Meera assaulted him at 11:47 PM, but did NOT kill him.</span>
          </div>
        </div>
      </div>

      {/* Forensic Dissection Sliders / Input */}
      <div className="p-4 rounded-lg border border-gray-800/80 bg-black/40 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-800/80 pb-2">
          <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold uppercase tracking-wider font-mono">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>Forensic Chronology Triad Differentiation</span>
          </div>
          <button
            type="button"
            onClick={handleAutoSync}
            className="px-2.5 py-1 bg-amber-950/40 hover:bg-amber-900/60 border border-amber-800/60 rounded text-amber-300 text-[11px] font-medium transition flex items-center gap-1.5 cursor-pointer self-start sm:self-center font-mono"
          >
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Auto-Sync Chronology</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          {/* Attack Time */}
          <div className="p-3 bg-black/50 rounded-lg border border-gray-800/80 space-y-2">
            <label className="text-gray-400 font-semibold block uppercase text-[11px] font-mono">
              1. Physical Attack Time:
            </label>
            <input
              type="text"
              value={sliderDistinction.attackTime}
              onChange={(e) => onChangeDistinction('attackTime', e.target.value)}
              placeholder="e.g. 11:47 PM"
              className="w-full bg-[#0a0a0f] border border-gray-800 focus:border-red-700 rounded-md px-2.5 py-1.5 text-gray-100 outline-none text-xs font-mono"
            />
            <button
              type="button"
              onClick={() => {
                sound.playHitmarker();
                onChangeDistinction('attackTime', '11:47 PM');
              }}
              className="w-full py-1 bg-gray-900 hover:bg-gray-800 text-gray-300 text-[10px] rounded border border-gray-700 transition cursor-pointer font-mono"
            >
              [ 11:47 PM (Brass Strike) ]
            </button>
          </div>

          {/* Death Time */}
          <div className="p-3 bg-black/50 rounded-lg border border-red-900/40 space-y-2">
            <label className="text-red-400 font-semibold block uppercase text-[11px] font-mono">
              2. True Death Time:
            </label>
            <input
              type="text"
              value={sliderDistinction.deathTime}
              onChange={(e) => onChangeDistinction('deathTime', e.target.value)}
              placeholder="e.g. 12:15 AM (Blackout)"
              className="w-full bg-[#0a0a0f] border border-red-900/60 focus:border-red-700 rounded-md px-2.5 py-1.5 text-red-200 outline-none font-medium text-xs font-mono"
            />
            <button
              type="button"
              onClick={() => {
                sound.playHitmarker();
                onChangeDistinction('deathTime', '12:15 AM (Blackout)');
              }}
              className="w-full py-1 bg-red-950/40 hover:bg-red-900/60 text-red-300 text-[10px] rounded border border-red-800/60 transition cursor-pointer font-mono"
            >
              [ 12:15 AM (Blackout Smothering) ]
            </button>
          </div>

          {/* Discovery Time */}
          <div className="p-3 bg-black/50 rounded-lg border border-gray-800/80 space-y-2">
            <label className="text-gray-400 font-semibold block uppercase text-[11px] font-mono">
              3. Discovery Time:
            </label>
            <input
              type="text"
              value={sliderDistinction.discoveryTime}
              onChange={(e) => onChangeDistinction('discoveryTime', e.target.value)}
              placeholder="e.g. 12:18 AM"
              className="w-full bg-[#0a0a0f] border border-gray-800 focus:border-red-700 rounded-md px-2.5 py-1.5 text-gray-100 outline-none text-xs font-mono"
            />
            <button
              type="button"
              onClick={() => {
                sound.playHitmarker();
                onChangeDistinction('discoveryTime', '12:18 AM');
              }}
              className="w-full py-1 bg-gray-900 hover:bg-gray-800 text-gray-300 text-[10px] rounded border border-gray-700 transition cursor-pointer font-mono"
            >
              [ 12:18 AM (Door Breached) ]
            </button>
          </div>
        </div>

        {/* Validation Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => {
              const a = sliderDistinction.attackTime.toLowerCase();
              const d = sliderDistinction.deathTime.toLowerCase();
              const disc = sliderDistinction.discoveryTime.toLowerCase();

              const aValid = a.includes('11:47') || a.includes('11.47');
              const dValid = d.includes('12:15') || d.includes('12.15') || d.includes('blackout');
              const discValid = disc.includes('12:18') || disc.includes('12.18');

              if (aValid && dValid && discValid) {
                sound.playObjectiveComplete();
                if (!hiddenVideoUnlocked) {
                  onUnlockHiddenVideo();
                }
              } else {
                sound.playGlitchStatic(0.3);
              }
            }}
            className="w-full sm:w-auto px-5 py-2 bg-red-900 hover:bg-red-800 text-white font-medium text-xs uppercase tracking-wider rounded-md transition flex items-center justify-center gap-2 cursor-pointer border border-red-800/60"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Verify Chronology Triad</span>
          </button>

          {hiddenVideoUnlocked && (
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono bg-emerald-950/40 px-3 py-1.5 rounded-md border border-emerald-800/60">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Triad Verified: Attack (11:47) ≠ Death (12:15) ≠ Discovery (12:18)</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
