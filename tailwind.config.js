/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        admin: {
          bg: '#0a0f18',
          panel: '#111827',
          surface: '#1a2332',
          blue: '#3b82f6',
          red: '#ef4444',
          orange: '#f97316',
          uv: '#a855f7',
          green: '#10b981',
          cyan: '#06b6d4',
        },
        horror: {
          darkest: '#0a0f18',
          dark: '#111827',
          panel: '#1a2332',
          border: '#374151',
          red: '#ef4444',
          blood: '#ef4444',
          brightRed: '#f87171',
          amber: '#f97316',
          cyan: '#3b82f6',
          dim: '#9ca3af',
          paper: '#f8fafc',
          ink: '#0f172a'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'Cascadia Code', 'Consolas', 'monospace'],
        serif: ['Georgia', 'Cambria', 'serif']
      },
      animation: {
        'flicker': 'flicker 0.15s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        }
      }
    },
  },
  plugins: [],
}
