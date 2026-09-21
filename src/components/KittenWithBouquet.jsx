import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

export default function KittenWithBouquet({ onBouquetClick }) {
  const [clickCount, setClickCount] = useState(0);
  const [isWiggling, setIsWiggling] = useState(false);
  const [hearts, setHearts] = useState([]);
  const [bubbleText, setBubbleText] = useState('');
  const [showBubble, setShowBubble] = useState(false);

  const handleKittenClick = (e) => {
    e.stopPropagation();
    const nextCount = clickCount + 1;
    setClickCount(nextCount);
    setIsWiggling(true);
    setTimeout(() => setIsWiggling(false), 600);

    // Progressive reaction speech bubble
    let text = '';
    if (nextCount === 1) text = ':3';
    else if (nextCount === 2) text = '¡Miau! 💛';
    else if (nextCount === 3) text = 'Te quiero miau-cho, Tamara 🌼';
    else text = '💕💕💕';

    setBubbleText(text);
    setShowBubble(true);

    // Spawn floating heart particles on click
    const newHeart = {
      id: Date.now() + Math.random(),
      x: (Math.random() - 0.5) * 60,
      y: -20 - Math.random() * 20,
    };
    setHearts((prev) => [...prev.slice(-6), newHeart]);
  };

  useEffect(() => {
    if (showBubble) {
      const timer = setTimeout(() => setShowBubble(false), 2400);
      return () => clearTimeout(timer);
    }
  }, [showBubble, clickCount]);

  useEffect(() => {
    if (hearts.length > 0) {
      const timer = setTimeout(() => {
        setHearts((prev) => prev.filter((h) => Date.now() - h.id < 1200));
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [hearts]);

  return (
    <div className="relative inline-flex flex-col items-center select-none cursor-pointer group">
      {/* Speech Bubble */}
      {showBubble && (
        <div className="absolute -top-12 sm:-top-14 z-20 animate-bubble bg-white/95 backdrop-blur-sm border-2 border-yellowPastel-400 text-warmGold-700 font-bold px-4 py-1.5 rounded-2xl shadow-lg text-sm sm:text-base flex items-center gap-1.5 transition-all">
          <span>{bubbleText}</span>
          <span className="text-xs">✨</span>
          {/* Bubble tail */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-yellowPastel-400" />
        </div>
      )}

      {/* Floating Hearts from clicks */}
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute z-30 pointer-events-none text-rose-500 animate-ping text-xl"
          style={{
            transform: `translate(${h.x}px, ${h.y}px)`,
            transition: 'all 1s ease-out',
          }}
        >
          💖
        </span>
      ))}

      {/* SVG Illustration of Cute Meme Kitty with Yellow Flower Bouquet */}
      <div 
        onClick={handleKittenClick}
        className={`transition-transform duration-300 ${
          isWiggling ? 'scale-110 rotate-3' : 'hover:scale-105 active:scale-95'
        }`}
        title="¡Haz clic en el gatito! 🐱💛"
      >
        <svg
          viewBox="0 0 320 280"
          className="w-56 h-48 sm:w-64 sm:h-56 md:w-72 md:h-64 filter drop-shadow-md overflow-visible"
        >
          <defs>
            {/* Sunflower Center Gradient */}
            <radialGradient id="sunflowerCore" cx="40%" cy="40%" r="60%">
              <stop offset="0%" stop-color="#92400e" />
              <stop offset="60%" stop-color="#78350f" />
              <stop offset="100%" stop-color="#451a03" />
            </radialGradient>
            
            {/* Golden Petal Gradient */}
            <linearGradient id="brightPetal" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#FEF08A" />
              <stop offset="60%" stop-color="#FDE047" />
              <stop offset="100%" stop-color="#F59E0B" />
            </linearGradient>

            {/* Soft Daisy Petal */}
            <linearGradient id="daisyPetal" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#FFFFFF" />
              <stop offset="100%" stop-color="#FEF08A" />
            </linearGradient>

            <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Gentle breathing group for body */}
          <g className="animate-pulse-soft" style={{ transformOrigin: '120px 180px' }}>
            {/* White Body Base with thick organic black stroke */}
            <path
              d="M 85 130 
                 C 75 140, 68 175, 78 215 
                 C 82 228, 98 232, 110 220 
                 C 118 212, 126 212, 134 220 
                 C 146 232, 162 228, 168 215 
                 C 176 185, 172 145, 155 130 
                 Z"
              fill="#FFFFFF"
              stroke="#1C1917"
              strokeWidth="5.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Little belly fluff mark */}
            <path
              d="M 115 185 L 123 189 M 123 185 L 115 189"
              stroke="#D6D3D1"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Left Hand/Arm (Waving or resting happily) */}
            <path
              d="M 78 158 C 60 156, 52 172, 68 178 C 76 181, 84 175, 86 168"
              fill="#FFFFFF"
              stroke="#1C1917"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Kitten Head Group */}
            <g>
              {/* Head Silhouette with Ears (organic meme style) */}
              <path
                d="M 72 108 
                   C 60 90, 52 58, 70 50 
                   C 82 45, 96 68, 108 80 
                   C 120 76, 142 76, 154 80 
                   C 166 68, 180 45, 192 50 
                   C 210 58, 202 90, 190 108 
                   C 205 125, 198 152, 182 158 
                   C 165 164, 98 164, 80 158 
                   C 64 152, 58 125, 72 108 
                   Z"
                fill="#FFFFFF"
                stroke="#1C1917"
                strokeWidth="5.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* 3 Grey Forehead Stripes (like the reference) */}
              <path d="M 120 84 L 120 102" stroke="#94A3B8" strokeWidth="4.5" strokeLinecap="round" />
              <path d="M 131 82 L 131 104" stroke="#94A3B8" strokeWidth="4.5" strokeLinecap="round" />
              <path d="M 142 84 L 142 102" stroke="#94A3B8" strokeWidth="4.5" strokeLinecap="round" />

              {/* Whiskers on Left */}
              <path d="M 46 118 L 62 119" stroke="#1C1917" strokeWidth="4" strokeLinecap="round" />
              <path d="M 48 128 L 64 126" stroke="#1C1917" strokeWidth="4" strokeLinecap="round" />

              {/* Whiskers on Right */}
              <path d="M 200 119 L 216 118" stroke="#1C1917" strokeWidth="4" strokeLinecap="round" />
              <path d="M 198 126 L 214 128" stroke="#1C1917" strokeWidth="4" strokeLinecap="round" />

              {/* Cute Blushing Cheeks */}
              <circle cx="82" cy="132" r="7.5" fill="#F472B6" opacity="0.8" />
              <circle cx="178" cy="132" r="7.5" fill="#F472B6" opacity="0.8" />

              {/* Black Dot Eyes (with cute blink reflection) */}
              <circle cx="98" cy="122" r="5" fill="#1C1917" />
              <circle cx="96.5" cy="120" r="1.6" fill="#FFFFFF" />
              
              <circle cx="162" cy="122" r="5" fill="#1C1917" />
              <circle cx="160.5" cy="120" r="1.6" fill="#FFFFFF" />

              {/* Cute Open Smiling Cat Mouth (:D / ^ヮ^ style with tongue) */}
              <path
                d="M 120 122 
                   C 123 128, 128 128, 131 124 
                   C 134 128, 139 128, 142 122"
                fill="none"
                stroke="#1C1917"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M 124 126 
                   C 124 138, 138 138, 138 126 
                   Z"
                fill="#F43F5E"
                stroke="#1C1917"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Little pink tongue */}
              <ellipse cx="131" cy="132" rx="4" ry="3" fill="#FDA4AF" />
            </g>

            {/* Right Arm holding the bouquet high and forward */}
            <path
              d="M 152 148 C 172 144, 192 138, 198 150 C 200 156, 185 168, 165 166"
              fill="#FFFFFF"
              stroke="#1C1917"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>

          {/* ==================================================== */}
          {/* THE PROMINENT YELLOW BOUQUET (Girasoles, margaritas, hojas) */}
          {/* ==================================================== */}
          <g
            className="cursor-pointer transition-transform hover:scale-105"
            onClick={(e) => {
              e.stopPropagation();
              onBouquetClick && onBouquetClick(e);
            }}
            style={{ transformOrigin: '230px 140px' }}
            title="¡Toca las flores amarillas! 🌼💛"
          >
            {/* Green Stems and Bouquet Wrap */}
            <g>
              {/* Green stems */}
              <path d="M 195 152 Q 205 185 215 210" stroke="#4D7C0F" strokeWidth="6" strokeLinecap="round" />
              <path d="M 200 152 Q 220 188 232 208" stroke="#65A30D" strokeWidth="5.5" strokeLinecap="round" />
              <path d="M 204 152 Q 195 182 190 205" stroke="#4D7C0F" strokeWidth="5" strokeLinecap="round" />

              {/* Tender Green Leaves */}
              <path
                d="M 185 168 C 165 170, 160 190, 182 188 C 190 186, 188 172, 185 168 Z"
                fill="#84CC16"
                stroke="#1C1917"
                strokeWidth="3.5"
              />
              <path
                d="M 225 175 C 248 178, 252 198, 230 196 C 222 195, 222 182, 225 175 Z"
                fill="#65A30D"
                stroke="#1C1917"
                strokeWidth="3.5"
              />

              {/* Golden Ribbon Bow */}
              <path
                d="M 195 165 C 182 155, 178 170, 192 172 C 196 172, 198 168, 195 165 Z"
                fill="#F59E0B"
                stroke="#1C1917"
                strokeWidth="3"
              />
              <path
                d="M 206 165 C 219 155, 223 170, 209 172 C 205 172, 203 168, 206 165 Z"
                fill="#F59E0B"
                stroke="#1C1917"
                strokeWidth="3"
              />
              <circle cx="201" cy="168" r="4.5" fill="#D97706" stroke="#1C1917" strokeWidth="2.5" />
            </g>

            {/* Little Yellow Buttercup / Daisy Left */}
            <g transform="translate(180, 105) scale(0.75)">
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <ellipse
                  key={angle}
                  cx="0"
                  cy="-18"
                  rx="6"
                  ry="12"
                  fill="url(#daisyPetal)"
                  stroke="#1C1917"
                  strokeWidth="2.5"
                  transform={`rotate(${angle})`}
                />
              ))}
              <circle cx="0" cy="0" r="9" fill="#FBBF24" stroke="#1C1917" strokeWidth="2.5" />
            </g>

            {/* Little Yellow Flower Top */}
            <g transform="translate(235, 75) scale(0.8)">
              {[0, 60, 120, 180, 240, 300].map((angle) => (
                <ellipse
                  key={angle}
                  cx="0"
                  cy="-16"
                  rx="7"
                  ry="11"
                  fill="#FEF08A"
                  stroke="#1C1917"
                  strokeWidth="2.5"
                  transform={`rotate(${angle})`}
                />
              ))}
              <circle cx="0" cy="0" r="8" fill="#F59E0B" stroke="#1C1917" strokeWidth="2.5" />
            </g>

            {/* Little Yellow Flower Right */}
            <g transform="translate(268, 120) scale(0.7)">
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <ellipse
                  key={angle}
                  cx="0"
                  cy="-16"
                  rx="5.5"
                  ry="11"
                  fill="#FDE047"
                  stroke="#1C1917"
                  strokeWidth="2.5"
                  transform={`rotate(${angle})`}
                />
              ))}
              <circle cx="0" cy="0" r="7.5" fill="#D97706" stroke="#1C1917" strokeWidth="2.5" />
            </g>

            {/* MAIN GLORIOUS SUNFLOWER (Center of the bouquet) */}
            <g transform="translate(225, 122) scale(1.15)">
              {/* Back Petals layer */}
              {[15, 45, 75, 105, 135, 165, 195, 225, 255, 285, 315, 345].map((angle) => (
                <path
                  key={`back-${angle}`}
                  d="M 0 0 C -7 -14, -6 -28, 0 -36 C 6 -28, 7 -14, 0 0 Z"
                  fill="#F59E0B"
                  stroke="#1C1917"
                  strokeWidth="2.5"
                  transform={`rotate(${angle})`}
                />
              ))}

              {/* Front Bright Golden Petals layer */}
              {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
                <path
                  key={`front-${angle}`}
                  d="M 0 0 C -7 -12, -7 -26, 0 -33 C 7 -26, 7 -12, 0 0 Z"
                  fill="url(#brightPetal)"
                  stroke="#1C1917"
                  strokeWidth="2.8"
                  transform={`rotate(${angle})`}
                />
              ))}

              {/* Rich textured sunflower core */}
              <circle cx="0" cy="0" r="15" fill="url(#sunflowerCore)" stroke="#1C1917" strokeWidth="3" />
              <circle cx="0" cy="0" r="11" fill="none" stroke="#D97706" strokeWidth="1.8" strokeDasharray="3 2" />

              {/* Adorable mini smile inside the sunflower */}
              <circle cx="-4" cy="-2" r="1.5" fill="#FEF08A" />
              <circle cx="4" cy="-2" r="1.5" fill="#FEF08A" />
              <path d="M -3 3 Q 0 6 3 3" stroke="#FEF08A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            </g>

            {/* Little Paw clutching the bouquet */}
            <path
              d="M 198 140 C 208 140, 212 154, 202 158 C 195 160, 190 152, 192 145"
              fill="#FFFFFF"
              stroke="#1C1917"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>

          {/* Sparkles around bouquet */}
          <g className="animate-sparkle pointer-events-none">
            <path d="M 270 70 L 273 78 L 281 81 L 273 84 L 270 92 L 267 84 L 259 81 L 267 78 Z" fill="#FACC15" />
            <path d="M 170 50 L 172 55 L 177 57 L 172 59 L 170 64 L 168 59 L 163 57 L 168 55 Z" fill="#FBBF24" />
            <path d="M 295 135 L 297 140 L 302 142 L 297 144 L 295 149 L 293 144 L 288 142 L 293 140 Z" fill="#FDE047" />
          </g>
        </svg>
      </div>

      {/* Subtle bottom hint */}
      <span className="text-[11px] sm:text-xs font-semibold text-warmGold-600/80 mt-1 tracking-wide">
        (Toca al gatito o las flores 🌼)
      </span>
    </div>
  );
}
