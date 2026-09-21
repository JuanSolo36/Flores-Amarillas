import React from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function MusicPlayer({ isPlaying, onToggle }) {
  return (
    <div className="fixed top-4 right-4 z-50 select-none">
      <button
        onClick={onToggle}
        aria-label={isPlaying ? 'Silenciar música' : 'Activar música romántica'}
        className={`flex items-center gap-2 px-3.5 py-2 rounded-full border transition-all duration-300 backdrop-blur-md shadow-md active:scale-95 ${
          isPlaying
            ? 'bg-yellowPastel-200/90 border-warmGold-400 text-warmGold-800 shadow-yellowPastel-300/50'
            : 'bg-white/80 border-yellowPastel-200 text-charcoal-700 hover:bg-yellowPastel-100/90'
        }`}
        title={isPlaying ? 'Música activada 🎵 (Toca para silenciar)' : 'Música desactivada 🔇 (Toca para escuchar)'}
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-4 h-4 text-warmGold-600 animate-pulse" />
            <span className="text-xs font-semibold text-warmGold-800">
              Música sonando 🎶
            </span>
            <span className="flex gap-0.5 items-end h-3 ml-0.5">
              <span className="w-0.5 h-2.5 bg-warmGold-600 animate-pulse" />
              <span className="w-0.5 h-3.5 bg-warmGold-600 animate-pulse delay-100" />
              <span className="w-0.5 h-2 bg-warmGold-600 animate-pulse delay-200" />
            </span>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-charcoal-500" />
            <span className="text-xs font-semibold text-charcoal-600">
              Música 🔇
            </span>
          </>
        )}
      </button>
    </div>
  );
}
