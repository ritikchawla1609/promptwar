/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        horror: {
          darkest: '#050505',
          dark: '#0a0a0c',
          panel: '#121217',
          border: '#2a1a1f',
          red: '#8b0000',
          blood: '#e50914',
          brightRed: '#ff2a2a',
          amber: '#d97706',
          cyan: '#06b6d4',
          dim: '#6b7280',
          paper: '#e2d9cc',
          ink: '#1c1917'
        }
      },
      fontFamily: {
        mono: ['"Courier New"', 'Courier', 'monospace', 'ui-monospace'],
        serif: ['Georgia', 'Cambria', 'serif']
      },
      animation: {
        'flicker': 'flicker 0.15s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glitch': 'glitch 0.3s ease-in-out infinite'
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' }
        }
      }
    },
  },
  plugins: [],
}
