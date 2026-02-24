/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        abyss: '#0b0f19',
        charcoal: '#111827',
        neon: '#22d3ee',
        glow: '#f97316',
        orange: {
          500: '#f97316'
        }
      },
      boxShadow: {
        soft: '0 8px 30px rgba(34, 211, 238, 0.15)'
      },
      animation: {
        fadeIn: 'fadeIn 300ms ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(6px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: []
};
