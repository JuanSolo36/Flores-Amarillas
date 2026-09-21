import React from 'react';
import { letterData } from '../data/letter';
import { Heart, Sparkles } from 'lucide-react';

export default function LoveLetter({ onClose }) {
  return (
    <div className="w-full max-w-xl mx-auto px-4 py-6 animate-letter-emerge">
      {/* The Physical Parchment Card */}
      <div className="relative paper-texture letter-shadow rounded-2xl border-2 border-yellowPastel-300/80 p-6 sm:p-10 md:p-12 text-charcoal-800 transition-all">
        {/* Decorative corner flowers */}
        <div className="absolute top-3 left-3 text-xl select-none opacity-80">🌼</div>
        <div className="absolute top-3 right-3 text-xl select-none opacity-80">🌼</div>
        <div className="absolute bottom-3 left-3 text-xl select-none opacity-80">🌻</div>
        <div className="absolute bottom-3 right-3 text-xl select-none opacity-80">🌻</div>

        {/* Delicate golden accent line */}
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-warmGold-500 to-transparent mx-auto mb-6" />

        {/* Letter Title */}
        <div className="text-center mb-6">
          <h2 className="font-script text-3xl sm:text-4xl text-warmGold-700 tracking-wide font-bold">
            {letterData.recipient}
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2 text-warmGold-600 text-xs sm:text-sm">
            <span>✨ 21 de Septiembre ✨</span>
          </div>
        </div>

        {/* Salutation */}
        <div className="font-hand text-2xl sm:text-3xl text-warmGold-700 font-bold mb-4">
          {letterData.salutation}
        </div>

        {/* Letter Body - Animated Paragraphs */}
        <div className="space-y-4 font-serif text-charcoal-800 leading-relaxed text-base sm:text-lg">
          {letterData.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="animate-fade-in transition-opacity duration-700 leading-relaxed"
              style={{
                animationDelay: `${0.3 + index * 0.35}s`,
                animationFillMode: 'both',
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Letter Sign-off / Signature */}
        <div
          className="mt-8 pt-4 border-t border-yellowPastel-200/80 flex flex-col items-end text-right font-hand text-xl sm:text-2xl text-warmGold-700"
          style={{
            animation: 'fadeIn 0.8s ease-in forwards',
            animationDelay: '2.5s',
            animationFillMode: 'both',
          }}
        >
          <span className="text-sm font-sans text-charcoal-700/80 font-medium">
            {letterData.closing.att}
          </span>
          <span className="text-base text-charcoal-800">
            {letterData.closing.from}
          </span>
          <span className="font-bold text-2xl sm:text-3xl text-rose-600 mt-1 flex items-center gap-1.5 font-script">
            {letterData.closing.signature}
          </span>
        </div>

        {/* Bottom subtle fold/close helper */}
        {onClose && (
          <div className="mt-8 text-center">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellowPastel-100 hover:bg-yellowPastel-200 text-warmGold-700 text-xs sm:text-sm font-semibold transition-colors duration-200 border border-yellowPastel-300 shadow-sm active:scale-95"
            >
              <span>💌 Guardar y doblar la carta</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
