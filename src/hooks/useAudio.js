import { useState, useRef, useEffect, useCallback } from 'react';

export function useAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const synthTimerRef = useRef(null);
  const audioContextRef = useRef(null);
  const isUsingSynthRef = useRef(false);

  // Initialize audio element for local musica.mp3
  useEffect(() => {
    const audio = new Audio('/musica.mp3');
    audio.loop = true;
    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (synthTimerRef.current) {
        clearInterval(synthTimerRef.current);
      }
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close();
      }
    };
  }, []);

  // Romantic acoustic music-box arpeggio using Web Audio API as fallback
  const startRomanticSynth = useCallback(() => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!audioContextRef.current || audioContextRef.current.state === 'closed') {
        audioContextRef.current = new AudioCtx();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Warm major 7th gentle notes (frequencies in Hz)
      // D4, F#4, A4, C#5, D5, F#5, A5, G4, B4, D5, E5
      const notes = [
        293.66, 369.99, 440.00, 554.37, 587.33, 440.00, 369.99,
        392.00, 493.88, 587.33, 659.25, 493.88, 392.00, 369.99
      ];
      let noteIndex = 0;

      const playPluck = (freq) => {
        if (!ctx || ctx.state === 'closed') return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Soft sine wave with a warm second harmonic for music-box feel
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        const now = ctx.currentTime;
        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.exponentialRampToValueAtTime(0.08, now + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 1.7);
      };

      // Play first note immediately
      playPluck(notes[0]);
      noteIndex = 1;

      // Play subsequent notes gently every 480ms
      synthTimerRef.current = setInterval(() => {
        playPluck(notes[noteIndex]);
        noteIndex = (noteIndex + 1) % notes.length;
      }, 480);

      isUsingSynthRef.current = true;
    } catch (err) {
      console.warn('Web Audio synthesis error:', err);
    }
  }, []);

  const stopRomanticSynth = useCallback(() => {
    if (synthTimerRef.current) {
      clearInterval(synthTimerRef.current);
      synthTimerRef.current = null;
    }
    isUsingSynthRef.current = false;
  }, []);

  const togglePlay = async () => {
    if (isPlaying) {
      // Mute/Stop
      if (audioRef.current) {
        audioRef.current.pause();
      }
      stopRomanticSynth();
      setIsPlaying(false);
    } else {
      // Unmute/Play
      if (audioRef.current) {
        try {
          const playPromise = audioRef.current.play();
          if (playPromise !== undefined) {
            await playPromise;
            setIsPlaying(true);
            return;
          }
        } catch (err) {
          // If /musica.mp3 is not found or fails to load, gracefully fallback to romantic synth
          console.info('No /musica.mp3 file found or playback prevented; playing ambient acoustic melody.');
        }
      }
      // Fallback to synthesized ambient music box
      startRomanticSynth();
      setIsPlaying(true);
    }
  };

  return { isPlaying, togglePlay };
}
