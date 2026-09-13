/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: '#060608',
        charcoal: {
          900: '#0B0B10',
          800: '#111118',
          700: '#181822',
          600: '#232332',
        },
        neon: {
          pink: '#FF007F',
          pinkLight: '#FF3399',
          pinkGlow: 'rgba(255, 0, 127, 0.4)',
          cyan: '#00F0FF',
          cyanLight: '#33F3FF',
          cyanGlow: 'rgba(0, 240, 255, 0.4)',
          green: '#00FFA3',
          greenGlow: 'rgba(0, 255, 163, 0.4)',
          red: '#FF2A55',
          redGlow: 'rgba(255, 42, 85, 0.4)',
          amber: '#FFB800',
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
        display: ['"Space Grotesk"', '"Rajdhani"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'neon-pink': '0 0 20px rgba(255, 0, 127, 0.45)',
        'neon-cyan': '0 0 20px rgba(0, 240, 255, 0.45)',
        'neon-green': '0 0 20px rgba(0, 255, 163, 0.45)',
        'neon-red': '0 0 20px rgba(255, 42, 85, 0.45)',
        'inner-glow': 'inset 0 0 25px rgba(255, 0, 127, 0.15)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.7)',
      },
      animation: {
        'pulse-fast': 'pulse 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'slice-left': 'sliceLeft 0.5s ease-out forwards',
        'slice-right': 'sliceRight 0.5s ease-out forwards',
        'glitch': 'glitch 0.4s ease-in-out',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.02)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        sliceLeft: {
          '0%': { transform: 'translate(0, 0) rotate(0)', opacity: '1' },
          '100%': { transform: 'translate(-30px, 15px) rotate(-6deg)', opacity: '0' },
        },
        sliceRight: {
          '0%': { transform: 'translate(0, 0) rotate(0)', opacity: '1' },
          '100%': { transform: 'translate(30px, -15px) rotate(6deg)', opacity: '0' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-3px, 3px)' },
          '40%': { transform: 'translate(-3px, -3px)' },
          '60%': { transform: 'translate(3px, 3px)' },
          '80%': { transform: 'translate(3px, -3px)' },
          '100%': { transform: 'translate(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      }
    },
  },
  plugins: [],
};
