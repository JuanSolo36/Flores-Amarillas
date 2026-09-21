import React from 'react';
import KittenWithBouquet from './KittenWithBouquet';

export default function Hero({ step, onBouquetClick }) {
  // step tracks the cinematic reveal (0 to 6)
  return (
    <header className="relative w-full max-w-2xl mx-auto pt-8 sm:pt-12 pb-4 px-4 flex flex-col items-center text-center select-none">
      
      {/* 1.0s: Kitten with Bouquet Entrance */}
      <div
        className={`transition-all duration-1000 transform ${
          step >= 2
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-8 scale-90 pointer-events-none'
        }`}
      >
        <KittenWithBouquet onBouquetClick={onBouquetClick} />
      </div>

      {/* 1.8s: Main Title */}
      <div
        className={`mt-4 sm:mt-6 transition-all duration-1000 transform ${
          step >= 4
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="inline-flex items-center justify-center gap-2 mb-1">
          <span className="text-xl sm:text-2xl animate-spin-slow">🌼</span>
          <span className="text-xs sm:text-sm uppercase tracking-widest font-bold text-warmGold-600 bg-yellowPastel-200/80 px-3 py-1 rounded-full border border-yellowPastel-300">
            Día de las Flores Amarillas
          </span>
          <span className="text-xl sm:text-2xl animate-spin-slow">🌼</span>
        </div>

        <h1 className="font-script text-3xl sm:text-5xl md:text-6xl text-warmGold-800 font-bold tracking-tight drop-shadow-sm leading-tight mt-2">
          Feliz día, mi niña <br className="sm:hidden" />
          <span className="text-warmGold-600 underline decoration-yellowPastel-400 decoration-wavy decoration-2">
            Prindi Tamara
          </span>{' '}
          🌼💛
        </h1>
      </div>

      {/* 2.3s: Warm subtitle */}
      <div
        className={`mt-3 max-w-md transition-all duration-1000 transform ${
          step >= 5
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4'
        }`}
      >
        <p className="font-serif italic text-base sm:text-xl text-charcoal-700 leading-relaxed">
          "Te hice algo pequeñito, pero con muchísimo amor..."
        </p>

        {/* Little scroll/open prompt */}
        <div className="mt-4 flex items-center justify-center gap-1.5 text-xs sm:text-sm font-semibold text-warmGold-600/90">
          <span>Abre tu regalito</span>
          <span className="text-base animate-bounce">💌</span>
        </div>
      </div>
    </header>
  );
}
