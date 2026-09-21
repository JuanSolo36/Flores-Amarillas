/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFEFA',
          100: '#FFFDF5',
          200: '#FAF6EB',
          300: '#F5EFE0',
          400: '#E8DEC7',
        },
        yellowPastel: {
          50: '#FEFCE8',
          100: '#FEF9C3',
          200: '#FEF08A',
          300: '#FDE047',
          400: '#FACC15',
          500: '#EAB308',
        },
        warmGold: {
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
        },
        softPink: {
          100: '#FCE7F3',
          200: '#FBCFE8',
          400: '#F472B6',
          500: '#EC4899',
        },
        leafGreen: {
          400: '#A3E635',
          500: '#84CC16',
          600: '#65A30D',
          700: '#4D7C0F',
        },
        charcoal: {
          700: '#44403C',
          800: '#292524',
          900: '#1C1917',
        }
      },
      fontFamily: {
        script: ['"Dancing Script"', 'cursive'],
        hand: ['"Caveat"', 'cursive'],
        serif: ['"Lora"', 'serif'],
        sans: ['"Quicksand"', 'sans-serif'],
      },
      animation: {
        'float-slow': 'floatSlow 4s ease-in-out infinite',
        'sway': 'sway 3s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2.5s ease-in-out infinite',
        'sparkle': 'sparkle 1.8s ease-in-out infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.85', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.15)' },
        }
      }
    },
  },
  plugins: [],
};
