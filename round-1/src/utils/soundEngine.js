// Advanced Cyberpunk Game Show Sound & Voice Synthesis Engine
// Powered by Web Audio API & Speech Synthesis API (100% native, zero external asset lag)

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.ambientGain = null;
    this.isAmbientPlaying = false;
    this.heartbeatTimer = null;
    this.heartbeatBpm = 75;
    this.speechAvailable = typeof window !== 'undefined' && 'speechSynthesis' in window;
    this.synthVoice = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    if (this.speechAvailable && !this.synthVoice) {
      this.loadVoice();
    }
  }

  loadVoice() {
    try {
      const voices = window.speechSynthesis.getVoices();
      // Look for a robotic / English voice
      this.synthVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Google') || v.name.includes('Alex') || v.name.includes('Daniel') || v.name.includes('Natural'))) || voices[0];
    } catch (e) {
      console.warn('Voice load error', e);
    }
  }

  // AI Game Master Robotic Voice Announcer
  speak(text, options = {}) {
    if (this.isMuted || !this.speechAvailable) return;
    try {
      window.speechSynthesis.cancel(); // Stop any pending speech
      const utterance = new SpeechSynthesisUtterance(text);
      if (this.synthVoice) utterance.voice = this.synthVoice;
      utterance.pitch = options.pitch || 0.85; // slightly deep/robotic
      utterance.rate = options.rate || 1.05; // sharp, authoritative
      utterance.volume = options.volume || 0.9;
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn('Speech error', e);
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.ambientGain && this.ctx) {
      this.ambientGain.gain.setValueAtTime(this.isMuted ? 0 : 0.04, this.ctx.currentTime);
    }
    if (this.isMuted && this.speechAvailable) {
      window.speechSynthesis.cancel();
    }
    return this.isMuted;
  }

  // Heartbeat loop that accelerates with tension
  startHeartbeat(initialBpm = 75) {
    this.stopHeartbeat();
    this.heartbeatBpm = initialBpm;

    const tick = () => {
      if (!this.isMuted) {
        this.playHeartbeatThump();
      }
      const intervalMs = (60 / this.heartbeatBpm) * 1000;
      this.heartbeatTimer = setTimeout(tick, intervalMs);
    };

    tick();
  }

  setHeartbeatBpm(bpm) {
    this.heartbeatBpm = bpm;
  }

  stopHeartbeat() {
    if (this.heartbeatTimer) {
      clearTimeout(this.heartbeatTimer);
      this.heartbeatTimer = null;
    }
  }

  // Deep Sub-Bass 808 Heartbeat Thump
  playHeartbeatThump() {
    this.init();
    if (!this.ctx || this.isMuted) return;

    const now = this.ctx.currentTime;
    
    // Lub
    const osc1 = this.ctx.createOscillator();
    const gain1 = this.ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(80, now);
    osc1.frequency.exponentialRampToValueAtTime(35, now + 0.12);
    gain1.gain.setValueAtTime(0.3, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
    osc1.connect(gain1);
    gain1.connect(this.ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.15);

    // Dub (0.12s later)
    const osc2 = this.ctx.createOscillator();
    const gain2 = this.ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(65, now + 0.12);
    osc2.frequency.exponentialRampToValueAtTime(30, now + 0.26);
    gain2.gain.setValueAtTime(0.22, now + 0.12);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
    osc2.connect(gain2);
    gain2.connect(this.ctx.destination);
    osc2.start(now + 0.12);
    osc2.stop(now + 0.3);
  }

  // Soft digital UI click
  playClick() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(1400, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(500, this.ctx.currentTime + 0.035);

    gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.035);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.04);
  }

  // CRAZY MOLTEN LASER SLICING SOUND: Crackling plasma swoosh with laser beam
  playSlice() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;

    // 1. Noise burst (molten crackle)
    const bufferSize = this.ctx.sampleRate * 0.2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(4500, now);
    filter.frequency.exponentialRampToValueAtTime(400, now + 0.18);
    filter.Q.setValueAtTime(5, now);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.4, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(this.ctx.destination);

    // 2. High-energy laser zap
    const laser = this.ctx.createOscillator();
    laser.type = 'sawtooth';
    laser.frequency.setValueAtTime(3200, now);
    laser.frequency.exponentialRampToValueAtTime(150, now + 0.15);

    const laserGain = this.ctx.createGain();
    laserGain.gain.setValueAtTime(0.2, now);
    laserGain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);

    laser.connect(laserGain);
    laserGain.connect(this.ctx.destination);

    // 3. Sub impact punch
    const sub = this.ctx.createOscillator();
    sub.type = 'sine';
    sub.frequency.setValueAtTime(160, now);
    sub.frequency.exponentialRampToValueAtTime(40, now + 0.15);

    const subGain = this.ctx.createGain();
    subGain.gain.setValueAtTime(0.3, now);
    subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

    sub.connect(subGain);
    subGain.connect(this.ctx.destination);

    noise.start(now);
    laser.start(now);
    sub.start(now);
    noise.stop(now + 0.22);
    laser.stop(now + 0.2);
    sub.stop(now + 0.2);
  }

  // CRAZY HEX SHIELD LOCK: Crystal resonance with harmonic shimmer
  playLock() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const chords = [523.25, 783.99, 1046.50, 1567.98];

    chords.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.03);

      gain.gain.setValueAtTime(0, now + idx * 0.03);
      gain.gain.linearRampToValueAtTime(0.12, now + idx * 0.03 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.03 + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + idx * 0.03);
      osc.stop(now + idx * 0.03 + 0.4);
    });
  }

  // COUNTDOWN EMERGENCY BEEP
  playCountdownBeep(isCritical = false) {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = isCritical ? 'sawtooth' : 'square';
    osc.frequency.setValueAtTime(isCritical ? 1900 : 950, now);
    if (isCritical) {
      osc.frequency.linearRampToValueAtTime(2400, now + 0.08);
    }

    gain.gain.setValueAtTime(isCritical ? 0.25 : 0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + (isCritical ? 0.14 : 0.08));

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.15);
  }

  // DIGITAL GLITCH MALFUNCTION
  playGlitch() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(120, now);
    osc.frequency.setValueAtTime(980, now + 0.03);
    osc.frequency.setValueAtTime(320, now + 0.07);
    osc.frequency.setValueAtTime(1600, now + 0.11);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.26);
  }

  // SUB DROP IMPACT BOOM
  playSubDrop() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(150, now);
    osc.frequency.exponentialRampToValueAtTime(28, now + 0.8);

    gain.gain.setValueAtTime(0.45, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.9);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.95);
  }

  // SCORE TICK
  playScoreTick() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(700 + Math.random() * 500, this.ctx.currentTime);

    gain.gain.setValueAtTime(0.07, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.03);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.035);
  }

  // VICTORY ARPEGGIO & SYNTH CELEBRATION
  playVictory() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    this.playSubDrop();

    const chords = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98];
    const now = this.ctx.currentTime;

    chords.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);

      gain.gain.setValueAtTime(0, now + idx * 0.08);
      gain.gain.linearRampToValueAtTime(0.15, now + idx * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.6);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.65);
    });
  }

  // AMBIENT CYBERPUNK DRONE
  startAmbientDrone() {
    if (this.isAmbientPlaying || !window.AudioContext) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc1.type = 'sawtooth';
      osc1.frequency.setValueAtTime(55, this.ctx.currentTime); // A1 note

      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(110, this.ctx.currentTime); // A2 note

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(160, this.ctx.currentTime);

      gain.gain.setValueAtTime(this.isMuted ? 0 : 0.035, this.ctx.currentTime);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc1.start();
      osc2.start();

      this.ambientGain = gain;
      this.isAmbientPlaying = true;
    } catch (e) {
      console.warn("Ambient audio error", e);
    }
  }
}

export const soundEngine = new SoundEngine();
