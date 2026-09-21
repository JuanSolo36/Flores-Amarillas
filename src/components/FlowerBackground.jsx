import React from 'react';

export default function FlowerBackground({ onFlowerClick }) {
  // Delicate decorative flowers stationed softly across the background
  const decorativeFlowers = [
    { top: '8%', left: '6%', size: 36, rotation: 15, delay: '0s' },
    { top: '15%', right: '8%', size: 42, rotation: -20, delay: '1s' },
    { top: '45%', left: '4%', size: 32, rotation: 40, delay: '2s' },
    { top: '65%', right: '5%', size: 38, rotation: -10, delay: '1.5s' },
    { top: '85%', left: '8%', size: 40, rotation: 25, delay: '0.5s' },
    { top: '90%', right: '9%', size: 34, rotation: -35, delay: '2.2s' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Soft warm radial ambient glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-yellowPastel-200/40 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-yellowPastel-300/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 left-1/4 w-[32rem] h-[32rem] bg-yellowPastel-100/50 rounded-full blur-3xl" />

      {/* Subtle Floating Yellow Flowers (Clickable for easter egg) */}
      {decorativeFlowers.map((flower, idx) => (
        <div
          key={idx}
          onClick={(e) => {
            if (onFlowerClick) {
              e.stopPropagation();
              onFlowerClick(e);
            }
          }}
          className="absolute pointer-events-auto cursor-pointer transition-transform hover:scale-125 duration-300 opacity-60 hover:opacity-100"
          style={{
            top: flower.top,
            left: flower.left,
            right: flower.right,
            transform: `rotate(${flower.rotation}deg)`,
            animation: `floatSlow 5s ease-in-out infinite ${flower.delay}`,
          }}
          title="🌼 ¡Tócame!"
        >
          <svg
            width={flower.size}
            height={flower.size}
            viewBox="0 0 60 60"
            className="filter drop-shadow-sm"
          >
            <g transform="translate(30, 30)">
              {/* 8 Yellow Petals */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((ang) => (
                <ellipse
                  key={ang}
                  cx="0"
                  cy="-15"
                  rx="6"
                  ry="12"
                  fill="#FDE047"
                  stroke="#EAB308"
                  strokeWidth="1.2"
                  transform={`rotate(${ang})`}
                />
              ))}
              {/* Flower Core */}
              <circle cx="0" cy="0" r="8" fill="#F59E0B" stroke="#B45309" strokeWidth="1.5" />
            </g>
          </svg>
        </div>
      ))}

      {/* Delicate Golden Sparkles */}
      <div className="absolute top-[12%] left-[22%] animate-sparkle" style={{ animationDelay: '0.4s' }}>
        <span className="text-yellow-400 text-xs opacity-70">✦</span>
      </div>
      <div className="absolute top-[28%] right-[18%] animate-sparkle" style={{ animationDelay: '1.2s' }}>
        <span className="text-amber-400 text-sm opacity-80">✨</span>
      </div>
      <div className="absolute top-[55%] left-[12%] animate-sparkle" style={{ animationDelay: '2.1s' }}>
        <span className="text-yellow-300 text-xs opacity-70">✦</span>
      </div>
      <div className="absolute top-[75%] right-[24%] animate-sparkle" style={{ animationDelay: '0.8s' }}>
        <span className="text-amber-300 text-sm opacity-80">✨</span>
      </div>
    </div>
  );
}
