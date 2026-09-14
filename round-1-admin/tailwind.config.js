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
        // Official PROMPT WAR Logo Dual-Core Palette
        cyan: {
          DEFAULT: '#00f0ff',
          glow: 'rgba(0, 240, 255, 0.35)',
          dark: '#0099cc',
          light: '#70f7ff',
        },
        crimson: {
          DEFAULT: '#ff2a5f',
          glow: 'rgba(255, 42, 95, 0.35)',
          bright: '#ff0055',
          dark: '#881337',
          light: '#ff668a',
        },
        // Alias acid.lime to the Logo Electric Cyan for total unified branding
        acid: {
          lime: '#00f0ff',
          dark: '#00b4d8',
          muted: '#0077b6',
          glow: 'rgba(0, 240, 255, 0.25)',
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
