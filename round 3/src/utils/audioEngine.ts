class HorrorAudioEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;

  private getContext(): AudioContext {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (muted && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  // Vintage mechanical clock tick
  public playTick(isHeavy = false) {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(isHeavy ? 450 : 1200, now);
      filter.Q.setValueAtTime(12, now);

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(isHeavy ? 180 : 380, now);
      osc.frequency.exponentialRampToValueAtTime(40, now + 0.04);

      gain.gain.setValueAtTime(0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.05);
    } catch {
      // AudioContext fallback
    }
  }

  // Procedural Creaking Wood Footstep for 3D Movement
  public playFootstep() {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;

      // Wood creak resonance
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      const pitchMod = 0.85 + Math.random() * 0.3;
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(95 * pitchMod, now);
      osc.frequency.exponentialRampToValueAtTime(35 * pitchMod, now + 0.12);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, now);

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.15);

      // Subtle footstep friction click
      if (Math.random() > 0.4) {
        this.playGlitchStatic(0.04);
      }
    } catch {
      // ignore
    }
  }

  // Wet Blood Splatter & Droplet Squelch
  public playBloodSplatter() {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;

      // Viscous squelch FM
      const osc = ctx.createOscillator();
      const mod = ctx.createOscillator();
      const modGain = ctx.createGain();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(350, now);
      osc.frequency.exponentialRampToValueAtTime(60, now + 0.28);

      mod.type = 'sine';
      mod.frequency.setValueAtTime(45, now);
      modGain.gain.setValueAtTime(120, now);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(600, now);
      filter.Q.setValueAtTime(4, now);

      gain.gain.setValueAtTime(0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.32);

      mod.connect(modGain);
      modGain.connect(osc.frequency);
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      mod.start(now);
      osc.start(now);
      mod.stop(now + 0.35);
      osc.stop(now + 0.35);

      // Liquid droplet splash
      setTimeout(() => {
        try {
          const dropOsc = ctx.createOscillator();
          const dropGain = ctx.createGain();
          dropOsc.type = 'sine';
          dropOsc.frequency.setValueAtTime(900, ctx.currentTime);
          dropOsc.frequency.exponentialRampToValueAtTime(1600, ctx.currentTime + 0.08);
          dropGain.gain.setValueAtTime(0.2, ctx.currentTime);
          dropGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
          dropOsc.connect(dropGain);
          dropGain.connect(ctx.destination);
          dropOsc.start();
          dropOsc.stop(ctx.currentTime + 0.1);
        } catch {
          // ignore
        }
      }, 70);
    } catch {
      // ignore
    }
  }

  // Blood-Curdling Human Scream (Multi-Formant Vocal Synthesis)
  public playTerrifyingScream() {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;
      const duration = 1.6;

      // Vocal Tract Formant Frequencies for human shriek
      const formants = [750, 1200, 2600, 3400];
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.01, now);
      masterGain.gain.linearRampToValueAtTime(0.7, now + 0.08); // explosive attack
      masterGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      // Pitch Vibrato LFO (panic vocal chord oscillation)
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.frequency.setValueAtTime(8.5, now); // 8.5 Hz panic vibrato
      lfoGain.gain.setValueAtTime(45, now);
      lfo.connect(lfoGain);

      formants.forEach((f, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = idx === 0 ? 'sawtooth' : 'triangle';
        osc.frequency.setValueAtTime(f, now);
        // Desperate pitch sweep upward then falling off
        osc.frequency.linearRampToValueAtTime(f * 1.35, now + 0.25);
        osc.frequency.exponentialRampToValueAtTime(f * 0.7, now + duration);

        lfoGain.connect(osc.frequency);

        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(f, now);
        filter.Q.setValueAtTime(5, now);

        gain.gain.setValueAtTime(0.3 / (idx + 1), now);
        osc.connect(filter);
        filter.connect(gain);
        gain.connect(masterGain);

        osc.start(now);
        osc.stop(now + duration);
      });

      // Breathy vocal noise burst
      const bufferSize = ctx.sampleRate * duration;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      const noiseSource = ctx.createBufferSource();
      noiseSource.buffer = noiseBuffer;
      const noiseFilter = ctx.createBiquadFilter();
      noiseFilter.type = 'bandpass';
      noiseFilter.frequency.setValueAtTime(2800, now);
      noiseFilter.Q.setValueAtTime(3, now);
      noiseSource.connect(noiseFilter);
      noiseFilter.connect(masterGain);
      noiseSource.start(now);
      noiseSource.stop(now + duration);

      lfo.start(now);
      lfo.stop(now + duration);

      masterGain.connect(ctx.destination);

      // Trigger thunder & blood impact in background
      setTimeout(() => this.playBloodSplatter(), 120);
    } catch {
      // ignore
    }
  }

  // Psycho / Horror Violin Dissonant Shriek
  public playViolinShriek() {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;
      const freqs = [1975.5, 2093.0, 2793.8, 3136.0]; // Intense minor second & tritone cluster

      freqs.forEach((freq) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, now);
        osc.frequency.linearRampToValueAtTime(freq * 1.04, now + 0.35);

        gain.gain.setValueAtTime(0.01, now);
        gain.gain.linearRampToValueAtTime(0.2, now + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.75);
      });
    } catch {
      // ignore
    }
  }

  // Eerie 3D Binaural Ghostly Whisper
  public playBinauralWhisper(phrase: string, panDirection = 0.8) {
    if (this.isMuted || !('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(phrase);
      utterance.pitch = 0.2; // deep spectral rasp
      utterance.rate = 0.7;  // very slow, chilling cadence
      utterance.volume = 0.85;

      const voices = window.speechSynthesis.getVoices();
      const whisperVoice = voices.find((v) => v.lang.startsWith('en') && (v.name.includes('Whisper') || v.name.includes('Daniel') || v.name.includes('Male')));
      if (whisperVoice) utterance.voice = whisperVoice;

      window.speechSynthesis.speak(utterance);
      this.playGlitchStatic(0.12);
    } catch {
      // ignore
    }
  }

  // EKG Heart Monitor (Panic BPM into sudden flatline)
  public playHeartMonitor(flatline = false) {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;

      if (!flatline) {
        // High pitched hospital EKG blip
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(980, now);
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.09);
      } else {
        // Flatline tone
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(980, now);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.linearRampToValueAtTime(0.3, now + 1.8);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 2.2);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 2.3);
      }
    } catch {
      // ignore
    }
  }

  // Explosive Thunder Clap & Room Shaking Wave
  public playThunderClap() {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;

      // Lightning crack shockwave
      const crack = ctx.createOscillator();
      const crackGain = ctx.createGain();
      crack.type = 'sawtooth';
      crack.frequency.setValueAtTime(220, now);
      crack.frequency.exponentialRampToValueAtTime(40, now + 0.15);
      crackGain.gain.setValueAtTime(0.7, now);
      crackGain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
      crack.connect(crackGain);
      crackGain.connect(ctx.destination);
      crack.start(now);
      crack.stop(now + 0.22);

      this.playThunder();
    } catch {
      // ignore
    }
  }

  // Terrifying Jump-Scare Shriek & Sub-Bass Impact
  public playJumpScare() {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;

      // Sub-bass heavy impact thud
      const subOsc = ctx.createOscillator();
      const subGain = ctx.createGain();
      subOsc.type = 'sine';
      subOsc.frequency.setValueAtTime(120, now);
      subOsc.frequency.exponentialRampToValueAtTime(25, now + 0.8);
      subGain.gain.setValueAtTime(0.8, now);
      subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.85);
      subOsc.connect(subGain);
      subGain.connect(ctx.destination);
      subOsc.start(now);
      subOsc.stop(now + 0.9);

      // Dissonant shrieking cluster
      const screechFreqs = [880, 932.3, 1244.5, 1318.5, 1760];
      screechFreqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, now);
        osc.frequency.linearRampToValueAtTime(freq * 1.15, now + 0.6);

        gain.gain.setValueAtTime(0.15 / (idx + 1), now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.75);
      });

      this.playGlitchStatic(0.5);
    } catch {
      // ignore
    }
  }

  // Distant Low Rolling Thunder Rumble
  public playThunder() {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;
      const duration = 2.5;

      const bufferSize = ctx.sampleRate * duration;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(110, now);
      filter.frequency.exponentialRampToValueAtTime(45, now + duration);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.35, now + 0.4);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noise.start(now);
    } catch {
      // ignore
    }
  }

  // Locked Wooden Door Rattle & Stress
  public playDoorRattle() {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;

      [0, 0.08, 0.17].forEach((offset) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(80, now + offset);
        osc.frequency.exponentialRampToValueAtTime(30, now + offset + 0.06);

        gain.gain.setValueAtTime(0.3, now + offset);
        gain.gain.exponentialRampToValueAtTime(0.001, now + offset + 0.07);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + offset);
        osc.stop(now + offset + 0.08);
      });
    } catch {
      // ignore
    }
  }

  // Low frequency panic heartbeat
  public playHeartbeat() {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;

      // Double thump (lub-dub)
      [0, 0.18].forEach((offset) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(75, now + offset);
        osc.frequency.exponentialRampToValueAtTime(30, now + offset + 0.12);

        gain.gain.setValueAtTime(0.5, now + offset);
        gain.gain.exponentialRampToValueAtTime(0.001, now + offset + 0.14);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + offset);
        osc.stop(now + offset + 0.15);
      });
    } catch {
      // ignore
    }
  }

  // Analog radio static glitch
  public playGlitchStatic(duration = 0.2) {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      const bufferSize = ctx.sampleRate * duration;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);

      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(2400, ctx.currentTime);
      filter.Q.setValueAtTime(2.5, ctx.currentTime);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.25, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noise.start();
    } catch {
      // ignore
    }
  }

  // Electrical blackout / grid failure sound
  public playBlackout() {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(120, now);
      osc.frequency.exponentialRampToValueAtTime(20, now + 0.6);

      gain.gain.setValueAtTime(0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.65);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.7);

      this.playGlitchStatic(0.4);
    } catch {
      // ignore
    }
  }

  // Menacing revelation horror chord
  public playHorrorStinger() {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;
      const freqs = [110, 116.54, 155.56, 220]; // Dissonant minor second / tritone

      freqs.forEach((f) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(f, now);

        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 1.8);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 1.9);
      });
    } catch {
      // ignore
    }
  }

  // Call of Duty Style Crisp Tactical Hitmarker Click
  public playHitmarker() {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(2400, now);
      osc.frequency.exponentialRampToValueAtTime(1400, now + 0.035);

      gain.gain.setValueAtTime(0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.045);
    } catch {
      // ignore
    }
  }

  // Tactical Military Radio Keying Chirp
  public playRadioChirp() {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;

      // Two rapid sine beeps
      [0, 0.04].forEach((offset, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(idx === 0 ? 1750 : 2100, now + offset);

        gain.gain.setValueAtTime(0.18, now + offset);
        gain.gain.exponentialRampToValueAtTime(0.001, now + offset + 0.03);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + offset);
        osc.stop(now + offset + 0.035);
      });

      // Subtle squelch noise burst
      this.playGlitchStatic(0.06);
    } catch {
      // ignore
    }
  }

  // Call of Duty Style Objective Completed Boom & Chime
  public playObjectiveComplete() {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;

      // Deep sub boom
      const subOsc = ctx.createOscillator();
      const subGain = ctx.createGain();
      subOsc.type = 'sine';
      subOsc.frequency.setValueAtTime(120, now);
      subOsc.frequency.exponentialRampToValueAtTime(32, now + 0.6);
      subGain.gain.setValueAtTime(0.65, now);
      subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
      subOsc.connect(subGain);
      subGain.connect(ctx.destination);
      subOsc.start(now);
      subOsc.stop(now + 0.75);

      // High triumphant brass chord
      [587.33, 739.99, 880.00].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + 0.08);

        gain.gain.setValueAtTime(0.25 / (idx + 1), now + 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.9);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + 0.08);
        osc.stop(now + 0.95);
      });
    } catch {
      // ignore
    }
  }

  // Tactical Night-Vision / UV Goggles Capacitor Whine Toggle
  public playNightVisionToggle() {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;

      // Mechanical switch click
      this.playTick(true);

      // Rising capacitor whine (high-pitch buzz)
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(3200, now + 0.02);
      osc.frequency.exponentialRampToValueAtTime(8500, now + 0.28);

      gain.gain.setValueAtTime(0.12, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + 0.02);
      osc.stop(now + 0.36);
    } catch {
      // ignore
    }
  }

  // Synthetic distorted horror voice using SpeechSynthesis with guaranteed fallback
  public speakDistorted(text: string, onEnd?: () => void) {
    let hasEnded = false;
    const safeEnd = () => {
      if (!hasEnded) {
        hasEnded = true;
        if (onEnd) onEnd();
      }
    };

    if (this.isMuted || !('speechSynthesis' in window)) {
      setTimeout(safeEnd, 1500);
      return;
    }

    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.pitch = 0.45; // Deep distorted tone
      utterance.rate = 0.75;  // Slow, deliberate cadence
      utterance.volume = 0.9;

      // Pick a low or natural English voice if available
      const voices = window.speechSynthesis.getVoices();
      const deepVoice = voices.find((v) => v.lang.startsWith('en') && (v.name.includes('Male') || v.name.includes('Natural')));
      if (deepVoice) {
        utterance.voice = deepVoice;
      }

      // Safeguard timeout: guarantee callback fires even if browser speech queue hangs
      const wordsCount = text.split(/\s+/).length;
      const estimatedDurationMs = Math.max(3000, (wordsCount / 1.5) * 1000 + 1500);
      const fallbackTimer = setTimeout(safeEnd, estimatedDurationMs);

      utterance.onend = () => {
        clearTimeout(fallbackTimer);
        safeEnd();
      };
      utterance.onerror = () => {
        clearTimeout(fallbackTimer);
        safeEnd();
      };

      window.speechSynthesis.speak(utterance);
      this.playGlitchStatic(0.15);
    } catch {
      setTimeout(safeEnd, 1500);
    }
  }
}

export const sound = new HorrorAudioEngine();
