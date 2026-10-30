// Web Audio API Procedural Sound Synthesizer (Zero external dependencies)
class SoundEffects {
    constructor() {
        this.ctx = null;
        this.muted = false;
    }

    _initContext() {
        try {
            if (!this.ctx) {
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                if (AudioContext) {
                    this.ctx = new AudioContext();
                }
            }
            if (this.ctx && this.ctx.state === 'suspended') {
                this.ctx.resume().catch(() => {});
            }
        } catch (e) {
            // Audio context not allowed or unsupported
        }
    }

    toggleMute() {
        this.muted = !this.muted;
        return this.muted;
    }

    // High energetic chime on correct sector catch
    playSuccess(streak = 1) {
        if (this.muted) return;
        try {
            this._initContext();
            if (!this.ctx) return;

            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            const baseFreq = 523.25; // C5
            const streakBonus = Math.min(streak * 45, 360);
            osc.type = streak >= 5 ? 'sine' : 'triangle';
            osc.frequency.setValueAtTime(baseFreq + streakBonus, now);
            osc.frequency.exponentialRampToValueAtTime((baseFreq + streakBonus) * 1.6, now + 0.14);

            gain.gain.setValueAtTime(0.25, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now);
            osc.stop(now + 0.2);
        } catch (e) {}
    }

    // Special sound for Golden Bonus / Wildcard catch!
    playBonus() {
        if (this.muted) return;
        try {
            this._initContext();
            if (!this.ctx) return;

            const now = this.ctx.currentTime;
            [587.33, 739.99, 880, 1174.66].forEach((f, idx) => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                const time = now + (idx * 0.05);

                osc.type = 'triangle';
                osc.frequency.setValueAtTime(f, time);

                gain.gain.setValueAtTime(0.2, time);
                gain.gain.exponentialRampToValueAtTime(0.001, time + 0.25);

                osc.connect(gain);
                gain.connect(this.ctx.destination);

                osc.start(time);
                osc.stop(time + 0.25);
            });
        } catch (e) {}
    }

    // Soft error thud on wrong sector catch / life lost
    playError() {
        if (this.muted) return;
        try {
            this._initContext();
            if (!this.ctx) return;

            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(150, now);
            osc.frequency.exponentialRampToValueAtTime(60, now + 0.2);

            gain.gain.setValueAtTime(0.3, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now);
            osc.stop(now + 0.22);
        } catch (e) {}
    }

    // Subtle pop when new economic item spawns
    playSpawn() {
        if (this.muted) return;
        try {
            this._initContext();
            if (!this.ctx) return;

            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(320, now);
            osc.frequency.exponentialRampToValueAtTime(700, now + 0.08);

            gain.gain.setValueAtTime(0.12, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now);
            osc.stop(now + 0.08);
        } catch (e) {}
    }

    // UI Click sound
    playClick() {
        if (this.muted) return;
        try {
            this._initContext();
            if (!this.ctx) return;

            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(800, now);
            osc.frequency.exponentialRampToValueAtTime(400, now + 0.04);

            gain.gain.setValueAtTime(0.15, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now);
            osc.stop(now + 0.04);
        } catch (e) {}
    }

    // Celebration sequence for game completion
    playGameOver() {
        if (this.muted) return;
        try {
            this._initContext();
            if (!this.ctx) return;

            const notes = [440, 554.37, 659.25, 880, 1108.73];
            notes.forEach((freq, idx) => {
                const now = this.ctx.currentTime + idx * 0.08;
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();

                osc.type = 'triangle';
                osc.frequency.setValueAtTime(freq, now);

                gain.gain.setValueAtTime(0.2, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

                osc.connect(gain);
                gain.connect(this.ctx.destination);

                osc.start(now);
                osc.stop(now + 0.3);
            });
        } catch (e) {}
    }
}

const sounds = new SoundEffects();

if (typeof window !== 'undefined') {
    window.SoundEffects = SoundEffects;
    window.sounds = sounds;
}
