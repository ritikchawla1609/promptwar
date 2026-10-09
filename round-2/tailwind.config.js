/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        archive: {
          950: '#080a0f', // deep base
          900: '#0c1017', // main surface
          850: '#111722', // elevated card
          800: '#161e2b', // active/hover surface
          700: '#222d3f', // border neutral
          600: '#324158', // subtle border
        },
        ivory: {
          50: '#ffffff',
          100: '#f8fafc', // primary text
          200: '#e2e8f0', // high emphasis
          300: '#cbd5e1', // normal text
          400: '#94a3b8', // muted secondary
          500: '#64748b', // tertiary graphite
        },
        amber: {
          DEFAULT: '#f59e0b',
          light: '#fbbf24',
          dark: '#d97706',
          burnt: '#ea580c',
          glow: 'rgba(245, 158, 11, 0.15)',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
        display: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
};
