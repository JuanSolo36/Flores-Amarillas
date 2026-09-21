import React, { useState, useEffect } from 'react';

export default function EasterEggs({ triggerEffect }) {
  const [activeWhisper, setActiveWhisper] = useState('');
  const [showWhisper, setShowWhisper] = useState(false);
  const [floatingParticles, setFloatingParticles] = useState([]);

  // Romantic occasional whispers
  const whispers = [
    "Te quiero mucho 💛",
    "Gracias por estar conmigo 🌼",
    "Mi niña bonita :3",
    "Eres mi persona favorita en el mundo ✨",
    "Flores amarillas para la más hermosa 🌻",
  ];

  // Random occasional gentle whisper (every ~35 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      const randomText = whispers[Math.floor(Math.random() * whispers.length)];
      setActiveWhisper(randomText);
      setShowWhisper(true);
      setTimeout(() => setShowWhisper(false), 4500);
    }, 32000);

    return () => clearInterval(interval);
  }, []);

  // Listen to external click triggers (e.g., flowers, bouquet)
  useEffect(() => {
    if (triggerEffect) {
      const newParticle = {
        id: Date.now() + Math.random(),
        x: triggerEffect.x || window.innerWidth / 2,
        y: triggerEffect.y || window.innerHeight / 2,
        icon: ['💛', '🌼', '✨', '🌻', '💖'][Math.floor(Math.random() * 5)],
      };
      setFloatingParticles((prev) => [...prev.slice(-8), newParticle]);

      // Also trigger a random whisper if user interacted
      if (!showWhisper && Math.random() > 0.4) {
        const randomText = whispers[Math.floor(Math.random() * whispers.length)];
        setActiveWhisper(randomText);
        setShowWhisper(true);
        setTimeout(() => setShowWhisper(false), 3800);
      }
    }
  }, [triggerEffect]);

  // Clean up floating particles after animation
  useEffect(() => {
    if (floatingParticles.length > 0) {
      const timer = setTimeout(() => {
        setFloatingParticles((prev) => prev.filter((p) => Date.now() - p.id < 1500));
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [floatingParticles]);

  return (
    <>
      {/* Click Particles (Spawns at tap/click location) */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {floatingParticles.map((p) => (
          <span
            key={p.id}
            className="absolute text-2xl animate-ping select-none"
            style={{
              left: `${p.x}px`,
              top: `${p.y}px`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {p.icon}
          </span>
        ))}
      </div>

      {/* Occasional Sweet Love Whisper Toast */}
      {showWhisper && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none transition-all duration-700 animate-bubble">
          <div className="bg-white/95 backdrop-blur-md border border-yellowPastel-300 text-warmGold-800 px-5 py-2 rounded-full shadow-lg text-sm sm:text-base font-hand font-bold tracking-wide flex items-center gap-2">
            <span>✨</span>
            <span>{activeWhisper}</span>
            <span>💛</span>
          </div>
        </div>
      )}
    </>
  );
}
