import React, { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import LoveLetter from './LoveLetter';

export default function EnvelopeLetter({ isOpen, onOpen, onClose }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleEnvelopeClick = () => {
    if (isOpen || isOpening) return;
    setIsOpening(true);
    // Smooth timing for realistic unfold: 1.2s flap, then reveal letter
    setTimeout(() => {
      setIsOpening(false);
      onOpen();
    }, 1200);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center my-6 sm:my-8">
      {!isOpen ? (
        <div className="relative flex flex-col items-center">
          {/* Prompt above envelope */}
          <div className="mb-4 text-center select-none">
            <h3 className="font-script text-2xl sm:text-3xl text-warmGold-700 font-bold tracking-wide">
              Para mi niña Tamara 💛
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-warmGold-600/90 mt-0.5 flex items-center justify-center gap-1.5 animate-pulse">
              <span>Haz clic para abrir</span>
              <span>💌</span>
            </p>
          </div>

          {/* Interactive 3D Envelope Container */}
          <div
            onClick={handleEnvelopeClick}
            className={`relative cursor-pointer transition-transform duration-300 ${
              isOpening ? 'scale-105' : 'hover:scale-105 active:scale-95'
            } group select-none`}
            title="¡Haz clic para abrir la carta! 💌"
          >
            {/* Soft shadow under envelope */}
            <div className="absolute -bottom-4 left-4 right-4 h-6 bg-warmGold-700/15 rounded-full blur-md" />

            {/* Envelope Box */}
            <div className="relative w-[280px] sm:w-[340px] h-48 sm:h-56 bg-cream-200 rounded-xl overflow-hidden border-2 border-yellowPastel-300 shadow-xl flex items-center justify-center">
              
              {/* Inside letter preview tip poking out slightly */}
              <div
                className={`absolute top-4 w-[240px] sm:w-[290px] h-32 bg-white rounded-t-lg border border-yellowPastel-200 transition-all duration-700 ${
                  isOpening ? '-translate-y-20 scale-105' : 'translate-y-0'
                }`}
              >
                <div className="pt-2 text-center text-warmGold-500 font-script text-sm opacity-60">
                  Para mi niña Tamara 💛
                </div>
              </div>

              {/* Envelope Body Flaps (Left & Right folded triangles) */}
              <div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                  clipPath: 'polygon(0% 0%, 50% 50%, 0% 100%)',
                  background: 'linear-gradient(135deg, #FAF6EB 0%, #F5EFE0 100%)',
                  borderRight: '1px solid #E8DEC7',
                }}
              />
              <div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                  clipPath: 'polygon(100% 0%, 50% 50%, 100% 100%)',
                  background: 'linear-gradient(-135deg, #FAF6EB 0%, #F5EFE0 100%)',
                  borderLeft: '1px solid #E8DEC7',
                }}
              />

              {/* Bottom Triangle Flap */}
              <div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                  clipPath: 'polygon(0% 100%, 50% 45%, 100% 100%)',
                  background: 'linear-gradient(to top, #F7F1E1 0%, #EFE5CE 100%)',
                  borderTop: '1px solid #E8DEC7',
                }}
              />

              {/* Top Flap (Triangular Lid that folds open 180 degrees) */}
              <div
                className={`absolute top-0 left-0 right-0 h-28 z-20 origin-top transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1) ${
                  isOpening ? '-rotate-x-180 -z-0 opacity-40' : 'rotate-x-0'
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                  clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
                  background: 'linear-gradient(to bottom, #FAF6EB 0%, #EFE5CE 100%)',
                  borderBottom: '1px solid #E0D3B8',
                }}
              />

              {/* Wax Seal Heart in Center */}
              <div
                className={`absolute z-30 transition-all duration-500 ${
                  isOpening ? 'scale-150 opacity-0' : 'scale-100 opacity-100'
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 via-amber-500 to-amber-600 flex items-center justify-center shadow-lg border-2 border-yellow-200">
                  <Heart className="w-6 h-6 text-white fill-white drop-shadow" />
                </div>
              </div>

              {/* Decorative Corner Flowers on Envelope */}
              <span className="absolute bottom-2 left-2 z-20 text-xs opacity-70">🌼</span>
              <span className="absolute bottom-2 right-2 z-20 text-xs opacity-70">🌼</span>
            </div>

            {/* Sparkles erupting when clicked */}
            {isOpening && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-40">
                <span className="text-3xl animate-ping">✨</span>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* The Unfolded Love Letter */
        <LoveLetter onClose={onClose} />
      )}
    </div>
  );
}
