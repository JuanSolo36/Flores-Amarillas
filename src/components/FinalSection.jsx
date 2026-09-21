import React from 'react';
import { Heart, RotateCcw } from 'lucide-react';
import { letterData } from '../data/letter';

export default function FinalSection({ onRestart }) {
  return (
    <footer className="w-full max-w-md mx-auto mt-12 mb-16 px-4 text-center select-none">
      {/* Decorative Golden Garland */}
      <div className="flex items-center justify-center gap-3 text-2xl mb-4 animate-float-slow">
        <span>🌼</span>
        <span className="text-rose-500 animate-pulse">💛</span>
        <span>🌻</span>
        <span className="text-rose-500 animate-pulse">💛</span>
        <span>🌼</span>
      </div>

      {/* Tender Closing Words */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-yellowPastel-300 p-6 shadow-md">
        <h4 className="font-script text-3xl text-warmGold-700 font-bold mb-1">
          {letterData.finalBadge.title}
        </h4>
        
        <p className="font-hand text-2xl text-rose-600 font-bold mb-3 flex items-center justify-center gap-1">
          <span>{letterData.finalBadge.name}</span>
          <Heart className="w-5 h-5 fill-rose-500 text-rose-500 inline" />
        </p>

        <p className="font-sans text-sm sm:text-base font-semibold text-warmGold-800 tracking-wide mb-2">
          {letterData.finalBadge.promise}
        </p>

        <p className="font-hand text-lg text-charcoal-700/80 italic mb-5">
          "{letterData.finalBadge.footnote}"
        </p>

        {/* Replay / Back to Start Button */}
        <button
          onClick={onRestart}
          className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-yellowPastel-300 via-yellowPastel-400 to-warmGold-500 text-charcoal-900 font-bold text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 border border-yellowPastel-200"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Volver a ver mi regalito 🌼</span>
        </button>
      </div>

      <div className="mt-8 text-xs text-warmGold-600/70">
        Hecho con amor infinito para Tamara • 21 de Septiembre
      </div>
    </footer>
  );
}
