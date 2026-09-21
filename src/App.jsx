import React, { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero';
import EnvelopeLetter from './components/EnvelopeLetter';
import FinalSection from './components/FinalSection';
import Petals from './components/Petals';
import FlowerBackground from './components/FlowerBackground';
import MusicPlayer from './components/MusicPlayer';
import EasterEggs from './components/EasterEggs';
import { useAudio } from './hooks/useAudio';

export default function App() {
  // Cinematic entrance step (0 to 6)
  const [cinematicStep, setCinematicStep] = useState(0);
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [particleTrigger, setParticleTrigger] = useState(null);
  const envelopeRef = useRef(null);
  
  // Audio controller
  const { isPlaying, togglePlay } = useAudio();

  // Run cinematic entrance on initial load
  useEffect(() => {
    const timers = [
      setTimeout(() => setCinematicStep(1), 500),  // 0.5s: petals
      setTimeout(() => setCinematicStep(2), 1000), // 1.0s: kitten
      setTimeout(() => setCinematicStep(3), 1400), // 1.4s: bouquet shine
      setTimeout(() => setCinematicStep(4), 1800), // 1.8s: title
      setTimeout(() => setCinematicStep(5), 2300), // 2.3s: subtitle
      setTimeout(() => setCinematicStep(6), 2800), // 2.8s: envelope
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  // Handle letter open
  const handleOpenLetter = () => {
    setIsLetterOpen(true);
    // Smooth scroll down to letter for pleasant reading
    setTimeout(() => {
      envelopeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 400);
  };

  // Handle letter close
  const handleCloseLetter = () => {
    setIsLetterOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle restart experience from final section
  const handleRestart = () => {
    setIsLetterOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Easter egg triggers on clicks
  const triggerEasterEgg = (e) => {
    setParticleTrigger({
      x: e.clientX,
      y: e.clientY,
      timestamp: Date.now(),
    });
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden flex flex-col justify-between">
      {/* 1. Background Layers */}
      <FlowerBackground onFlowerClick={triggerEasterEgg} />
      
      {cinematicStep >= 1 && <Petals count={16} />}

      {/* 2. Floating Discreet Music Button */}
      <MusicPlayer isPlaying={isPlaying} onToggle={togglePlay} />

      {/* 3. Interactive Click Particles & Sweet Whispers */}
      <EasterEggs triggerEffect={particleTrigger} />

      {/* 4. Main Romantic Journey */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-start pb-12">
        {/* Welcome & Kitten Section */}
        <Hero
          step={cinematicStep}
          onBouquetClick={triggerEasterEgg}
        />

        {/* 2.8s: Envelope & Love Letter Section */}
        <div
          ref={envelopeRef}
          className={`w-full max-w-4xl px-4 transition-all duration-1000 transform ${
            cinematicStep >= 6
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-12 scale-95 pointer-events-none'
          }`}
        >
          <EnvelopeLetter
            isOpen={isLetterOpen}
            onOpen={handleOpenLetter}
            onClose={handleCloseLetter}
          />
        </div>

        {/* 5. Final Closure Section (visible when letter is open) */}
        {isLetterOpen && (
          <div className="w-full animate-fade-in">
            <FinalSection onRestart={handleRestart} />
          </div>
        )}
      </main>
    </div>
  );
}
