import React, { useMemo } from 'react';

export default function Petals({ count = 15 }) {
  // Generate deterministic gentle petal properties
  const petals = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: `${(i * 6.8 + 3) % 96}%`,
      delay: `${(i * 1.3) % 9}s`,
      duration: `${10 + (i % 7) * 1.5}s`,
      size: 14 + (i % 5) * 4,
      driftX: `${(i % 2 === 0 ? 1 : -1) * (40 + (i % 4) * 20)}px`,
      spin: `${(i % 2 === 0 ? 1 : -1) * (200 + (i % 3) * 120)}deg`,
      opacity: 0.55 + (i % 4) * 0.1,
      variant: i % 3, // 0: bright yellow, 1: warm gold, 2: soft pastel
    }));
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute -top-10 animate-falling-petal"
          style={{
            left: petal.left,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
            '--drift-x': petal.driftX,
            '--spin': petal.spin,
            opacity: petal.opacity,
          }}
        >
          <svg
            width={petal.size}
            height={petal.size * 1.5}
            viewBox="0 0 20 30"
            className="filter drop-shadow-sm"
          >
            <path
              d="M 10 0 C 1 10, 0 22, 10 30 C 20 22, 19 10, 10 0 Z"
              fill={
                petal.variant === 0
                  ? '#FDE047'
                  : petal.variant === 1
                  ? '#F59E0B'
                  : '#FEF08A'
              }
            />
            {/* Subtle petal spine */}
            <path
              d="M 10 3 L 10 26"
              stroke="#EAB308"
              strokeWidth="0.8"
              opacity="0.4"
              strokeLinecap="round"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
