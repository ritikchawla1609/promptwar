export type VFXType = 
  | 'screen_shake' 
  | 'light_flicker' 
  | 'crt_glitch' 
  | 'evidence_focus' 
  | 'heartbeat_pulse' 
  | 'dust_motes' 
  | 'trauma_shock';

export interface VFXEvent {
  type: VFXType;
  intensity?: number; // 0.0 to 1.0
  durationMs?: number;
  message?: string;
}

type VFXListener = (event: VFXEvent) => void;

class VFXEngine {
  private listeners: Set<VFXListener> = new Set();
  private reduceMotion: boolean = false;
  private reduceFlashing: boolean = false;

  public subscribe(listener: VFXListener): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  public setReduceMotion(val: boolean) {
    this.reduceMotion = val;
  }

  public getReduceMotion(): boolean {
    return this.reduceMotion;
  }

  public setReduceFlashing(val: boolean) {
    this.reduceFlashing = val;
  }

  public getReduceFlashing(): boolean {
    return this.reduceFlashing;
  }

  public trigger(event: VFXEvent) {
    // If reduce motion is enabled, suppress screen shake
    if (this.reduceMotion && event.type === 'screen_shake') {
      return;
    }
    // If reduce flashing is enabled, soften or suppress light flickers and glithes
    if (this.reduceFlashing && (event.type === 'light_flicker' || event.type === 'crt_glitch')) {
      event = { ...event, intensity: (event.intensity || 0.5) * 0.25 };
    }

    this.listeners.forEach((listener) => {
      try {
        listener(event);
      } catch (err) {
        console.error('VFX listener error:', err);
      }
    });
  }

  // Quick convenience helpers
  public shake(intensity = 0.5, durationMs = 400) {
    this.trigger({ type: 'screen_shake', intensity, durationMs });
  }

  public flicker(intensity = 0.6, durationMs = 600) {
    this.trigger({ type: 'light_flicker', intensity, durationMs });
  }

  public glitch(intensity = 0.7, durationMs = 300) {
    this.trigger({ type: 'crt_glitch', intensity, durationMs });
  }

  public evidenceFocus(durationMs = 800) {
    this.trigger({ type: 'evidence_focus', intensity: 0.8, durationMs });
  }

  public heartbeat(durationMs = 1200) {
    this.trigger({ type: 'heartbeat_pulse', intensity: 0.6, durationMs });
  }

  public shock(durationMs = 1400) {
    this.trigger({ type: 'trauma_shock', intensity: 0.9, durationMs });
  }
}

export const vfx = new VFXEngine();
