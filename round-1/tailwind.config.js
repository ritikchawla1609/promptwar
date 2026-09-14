/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: '#0a0a0c',
        charcoal: {
          950: '#0c0c0e',
          900: '#121216',
          850: '#16161b',
          800: '#1c1c23',
          700: '#262630',
          600: '#383846',
        },
        bone: {
          50: '#faf9f6',
          100: '#f4f1ea',
          200: '#e6e3da',
          300: '#d5d1c5',
          400: '#a8a499',
          500: '#757268',
        },
        acid: {
          lime: '#d4ff00',
          dark: '#9ec400',
          muted: '#80990a',
          glow: 'rgba(212, 255, 0, 0.2)',
        },
        crimson: {
          DEFAULT: '#8b1e1e',
          bright: '#e03131',
          dark: '#521010',
          glow: 'rgba(224, 49, 49, 0.2)',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
        display: ['"Space Grotesk"', '"Inter"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        tightest: '-.05em',
        mega: '.35em',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'node-drift': 'nodeDrift 20s linear infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '0.4' },
        },
      }
    },
  },
  plugins: [],
};
