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
    <div className="w-full bg-[#08080c] border border-red-950/80 rounded-lg p-5 font-mono space-y-5 shadow-[0_0_30px_rgba(0,0,0,0.8)] relative overflow-hidden">
      {/* Tactical HUD Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-red-950/90 gap-2">
        <div className="flex items-center gap-2.5">
          <Film className="w-5 h-5 text-red-500 animate-pulse" />
          <h2 className="text-sm md:text-base font-black text-gray-100 tracking-wider uppercase">
            ROUND 4: THE DEAD MAN'S MESSAGE // FORENSIC TIMELINE
          </h2>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-red-400 font-bold bg-red-950/40 px-2.5 py-1 rounded border border-red-900/60">
          <Activity className="w-3 h-3 animate-spin" />
          <span>CHRONO TRIAD: ASYNC DETECTED</span>
        </div>
      </div>

      {/* 3D Visual Holographic Timeline Map */}
      <div className="p-3.5 bg-black/80 rounded border border-gray-800 space-y-2">
        <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold block">
          TACTICAL TIMELINE RADAR // CHRONOLOGICAL NODES
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-[10px]">
          <div className="p-2 rounded bg-amber-950/30 border border-amber-800/80">
            <div className="text-amber-400 font-black">11:47 PM</div>
            <div className="text-gray-300 font-bold truncate">ASSAULT STRIKE</div>
            <div className="text-[9px] text-gray-400">Meera strikes Sen</div>
          </div>
          <div className="p-2 rounded bg-cyan-950/30 border border-cyan-800/80">
            <div className="text-cyan-400 font-black">12:03 AM</div>
            <div className="text-gray-300 font-bold truncate">ALIVE & BREATHING</div>
            <div className="text-[9px] text-gray-400">Sen records video</div>
          </div>
          <div className="p-2 rounded bg-purple-950/30 border border-purple-800/80">
            <div className="text-purple-400 font-black">12:13 AM</div>
            <div className="text-gray-300 font-bold truncate">BLACKOUT SABOTAGE</div>
            <div className="text-[9px] text-gray-400">Kabir trips power</div>
          </div>
          <div className="p-2 rounded bg-red-950/60 border border-red-700 font-bold shadow-[0_0_10px_rgba(239,68,68,0.3)]">
            <div className="text-red-400 font-black">12:15 AM</div>
            <div className="text-white font-black truncate">FATAL SMOTHERING</div>
            <div className="text-[9px] text-red-200">Dev suffocates Sen</div>
          </div>
          <div className="p-2 rounded bg-emerald-950/30 border border-emerald-800/80 col-span-2 sm:col-span-1">
            <div className="text-emerald-400 font-black">12:18 AM</div>
            <div className="text-gray-300 font-bold truncate">LOCKED DISCOVERY</div>
            <div className="text-[9px] text-gray-400">Door breached</div>
          </div>
        </div>
      </div>

      {/* Video Screens Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Terminal Video 1: SEN_FINAL_1203.mp4 */}
        <div className="p-4 rounded border border-gray-800 bg-black/90 flex flex-col justify-between space-y-3">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-gray-900 mb-2">
              <span className="text-xs text-red-400 font-black uppercase flex items-center gap-1.5">
                <Film className="w-3.5 h-3.5" />
                EVIDENCE 11: SEN_FINAL_1203.mp4
              </span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-red-950 text-red-400 border border-red-900 font-bold">
                12:03:00 AM (17 SEC)
              </span>
            </div>

            {/* CRT Video Monitor */}
            <div className="relative w-full h-44 bg-[#040407] rounded border border-gray-800 flex flex-col items-center justify-center p-3 text-center overflow-hidden crt-overlay">
              <div className="absolute top-2 left-2 text-[9px] text-red-500 font-bold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
                REC 4K 60FPS
              </div>
              <div className="absolute top-2 right-2 text-[9px] text-gray-500 font-mono">
                OPTIC: STUDY_MON_01
              </div>

              {videoPlaybackStep === 0 && (
                <div className="space-y-2">
                  <p className="text-[11px] text-gray-400 font-mono">PROFESSOR SEN'S FINAL RECORDING</p>
                  <button
                    onClick={handlePlaySenVideo}
                    disabled={isPlayingVideo}
                    className="px-4 py-2 bg-red-800 hover:bg-red-700 text-white text-xs font-black rounded flex items-center gap-2 mx-auto transition active:scale-95 cursor-pointer shadow-[0_0_15px_rgba(239,68,68,0.4)]"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    EXECUTE PLAYBACK
                  </button>
                </div>
              )}

              {videoPlaybackStep === 1 && (
                <div className="space-y-2 animate-fade-in px-3">
                  <div className="text-red-500 text-xs font-black animate-pulse">
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
                <div className="space-y-1 text-red-500 font-black font-mono">
                  <p className="text-base tracking-widest animate-glitch">
                    STREAM TERMINATED
                  </p>
                  <p className="text-[10px] text-gray-400">
                    FEED TIMESTAMP: 12:03:17 AM
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="p-2.5 bg-[#090b12] rounded border border-gray-800 text-[11px] text-gray-300 flex items-center justify-between">
            <span>🎯 CRITICAL FACT:</span>
            <span className="text-emerald-400 font-bold">Sen was alive & speaking at 12:03 AM</span>
          </div>
        </div>

        {/* Hidden File: YOU_WERE_NOT_SUPPOSED_TO_FIND_THIS.mp4 */}
        <div className={`p-4 rounded border flex flex-col justify-between space-y-3 transition ${
          hiddenVideoUnlocked 
            ? 'border-red-900/80 bg-black/90' 
            : 'border-gray-900 bg-black/40 opacity-70'
        }`}>
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-gray-900 mb-2">
              <span className="text-xs text-red-500 font-black uppercase flex items-center gap-1.5">
                <FileWarning className="w-3.5 h-3.5" />
                RESTRICTED: PINHOLE_1147.mp4
              </span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-red-950/80 text-red-300 border border-red-900 font-bold">
                11:47:00 PM (7 SEC)
              </span>
            </div>

            {/* Monitor */}
            <div className="relative w-full h-44 bg-[#040407] rounded border border-red-950 flex flex-col items-center justify-center p-3 text-center overflow-hidden crt-overlay">
              {!hiddenVideoUnlocked ? (
                <div className="space-y-1.5">
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">
                    RESTRICTED ARCHIVE ENCRYPTED
                  </p>
                  <p className="text-[10px] text-gray-600">
                    Decrypts after playing Sen's video or verifying chronology
                  </p>
                </div>
              ) : isPlayingHidden ? (
                <div className="space-y-2 animate-fade-in px-3">
                  <div className="text-xs text-red-500 font-black animate-pulse">
                    ● PINHOLE RECONSTRUCTION (11:47 PM)
                  </div>
                  <p className="text-xs text-gray-200">
                    [00:03]: Dark figure enters Study. Wall clock reads 11:47 PM.
                  </p>
                  <p className="text-xs text-red-400 font-bold">
                    [00:06]: Violent confrontation. Heavy brass thud. Figure flees!
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  <p className="text-[11px] text-red-400 font-black uppercase tracking-wider">
                    7-SECOND PINHOLE CLIP READY
                  </p>
                  <button
                    onClick={handlePlayHiddenVideo}
                    className="px-4 py-2 bg-red-800 hover:bg-red-700 text-white text-xs font-black rounded flex items-center gap-2 mx-auto transition active:scale-95 cursor-pointer shadow-[0_0_15px_rgba(239,68,68,0.4)]"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    PLAY 11:47 ASSAULT FOOTAGE
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="p-2.5 bg-red-950/30 rounded border border-red-900/60 text-[11px] text-red-200 flex items-center justify-between">
            <span>⚡ THE REVELATION:</span>
            <span className="font-bold">Meera assaulted him at 11:47 PM, but did NOT kill him!</span>
          </div>
        </div>
      </div>

      {/* Forensic Dissection Sliders / Input with 1-Click Chips */}
      <div className="p-4 rounded border border-gray-800 bg-black/90 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-800 pb-2">
          <div className="flex items-center gap-2 text-xs text-amber-400 font-black uppercase tracking-wider">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>FORENSIC TIME TRIAD DIFFERENTIATION</span>
          </div>
          <button
            type="button"
            onClick={handleAutoSync}
            className="px-3 py-1 bg-amber-950/70 hover:bg-amber-900 border border-amber-600 rounded text-amber-300 text-[11px] font-black transition flex items-center gap-1.5 shadow-sm active:scale-95 cursor-pointer self-start sm:self-center"
          >
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>⚡ 1-CLICK AUTO-SYNC CHRONOLOGY</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          {/* Attack Time */}
          <div className="p-3 bg-[#090b12] rounded border border-gray-800 space-y-2">
            <label className="text-gray-400 font-bold block uppercase text-[11px]">
              1. PHYSICAL ATTACK TIME:
            </label>
            <input
              type="text"
              value={sliderDistinction.attackTime}
              onChange={(e) => onChangeDistinction('attackTime', e.target.value)}
              placeholder="e.g. 11:47 PM"
              className="w-full bg-black border border-gray-800 focus:border-red-600 rounded px-2.5 py-1.5 text-gray-100 outline-none text-xs"
            />
            <button
              type="button"
              onClick={() => {
                sound.playHitmarker();
                onChangeDistinction('attackTime', '11:47 PM');
              }}
              className="w-full py-1 bg-gray-900 hover:bg-gray-800 text-gray-300 text-[10px] font-bold rounded border border-gray-700 transition cursor-pointer"
            >
              [ ⚡ 11:47 PM (Brass Strike) ]
            </button>
          </div>

          {/* Death Time */}
          <div className="p-3 bg-[#090b12] rounded border border-red-900/60 space-y-2">
            <label className="text-red-400 font-bold block uppercase text-[11px]">
              2. TRUE DEATH TIME:
            </label>
            <input
              type="text"
              value={sliderDistinction.deathTime}
              onChange={(e) => onChangeDistinction('deathTime', e.target.value)}
              placeholder="e.g. 12:15 AM (Blackout)"
              className="w-full bg-black border border-red-900 focus:border-red-600 rounded px-2.5 py-1.5 text-red-200 outline-none font-bold text-xs"
            />
            <button
              type="button"
              onClick={() => {
                sound.playHitmarker();
                onChangeDistinction('deathTime', '12:15 AM (Blackout)');
              }}
              className="w-full py-1 bg-red-950/60 hover:bg-red-900 text-red-300 text-[10px] font-bold rounded border border-red-800 transition cursor-pointer"
            >
              [ ⚡ 12:15 AM (Blackout Smothering) ]
            </button>
          </div>

          {/* Discovery Time */}
          <div className="p-3 bg-[#090b12] rounded border border-gray-800 space-y-2">
            <label className="text-gray-400 font-bold block uppercase text-[11px]">
              3. DISCOVERY TIME:
            </label>
            <input
              type="text"
              value={sliderDistinction.discoveryTime}
              onChange={(e) => onChangeDistinction('discoveryTime', e.target.value)}
              placeholder="e.g. 12:18 AM"
              className="w-full bg-black border border-gray-800 focus:border-red-600 rounded px-2.5 py-1.5 text-gray-100 outline-none text-xs"
            />
            <button
              type="button"
              onClick={() => {
                sound.playHitmarker();
                onChangeDistinction('discoveryTime', '12:18 AM');
              }}
              className="w-full py-1 bg-gray-900 hover:bg-gray-800 text-gray-300 text-[10px] font-bold rounded border border-gray-700 transition cursor-pointer"
            >
              [ ⚡ 12:18 AM (Door Breached) ]
            </button>
          </div>
        </div>

        {/* Validation Button and Feedback */}
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
            className="w-full sm:w-auto px-6 py-2.5 bg-red-800 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider rounded transition flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(229,9,20,0.5)] cursor-pointer active:scale-95"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>VERIFY CHRONOLOGY TRIAD</span>
          </button>

          {hiddenVideoUnlocked && (
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-bold bg-emerald-950/60 px-3 py-1.5 rounded border border-emerald-800 animate-pulse">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>TRIAD VERIFIED (+200 XP): Attack (11:47) ≠ Smothering (12:15) ≠ Discovery (12:18)</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
