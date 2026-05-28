/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cosmos: {
          950: '#05060f',
          900: '#0a0e27',
          800: '#0f1438',
          700: '#161c4a',
          600: '#1e2660'
        },
        gold: {
          50: '#fff9e6',
          100: '#fdebb0',
          200: '#fadc75',
          300: '#f4c430',
          400: '#e0ac1c',
          500: '#d4a437',
          600: '#b8860b',
          700: '#8b6508'
        },
        ember: {
          500: '#e74c3c',
          600: '#c0392b',
          700: '#962919'
        },
        saffron: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706'
        }
      },
      fontFamily: {
        marathi: ['"Tiro Devanagari Marathi"', 'serif'],
        sans: ['"Noto Sans Devanagari"', 'system-ui', 'sans-serif'],
        display: ['"Cinzel"', 'serif']
      },
      boxShadow: {
        'gold-glow': '0 0 20px rgba(244, 196, 48, 0.35), 0 0 40px rgba(244, 196, 48, 0.15)',
        'gold-glow-lg': '0 0 32px rgba(244, 196, 48, 0.5), 0 0 64px rgba(244, 196, 48, 0.2)',
        'ember-glow': '0 8px 24px rgba(192, 57, 43, 0.45), 0 0 32px rgba(231, 76, 60, 0.25)',
        'whatsapp-glow': '0 8px 24px rgba(37, 211, 102, 0.45), 0 0 32px rgba(37, 211, 102, 0.3)',
        'press': 'inset 0 2px 6px rgba(0,0,0,0.4)'
      },
      backgroundImage: {
        'cosmos-radial': 'radial-gradient(ellipse at top, #1e2660 0%, #0a0e27 45%, #05060f 100%)',
        'gold-gradient': 'linear-gradient(135deg, #f4c430 0%, #d4a437 50%, #b8860b 100%)',
        'ember-gradient': 'linear-gradient(135deg, #f59e0b 0%, #e74c3c 60%, #962919 100%)',
        'parchment': 'linear-gradient(135deg, #2a1f0e 0%, #1a1305 100%)'
      },
      keyframes: {
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(244, 196, 48, 0.3), 0 0 40px rgba(244, 196, 48, 0.1)' },
          '50%': { boxShadow: '0 0 30px rgba(244, 196, 48, 0.6), 0 0 60px rgba(244, 196, 48, 0.3)' }
        },
        'twinkle': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      },
      animation: {
        'spin-slow': 'spin-slow 80s linear infinite',
        'pulse-glow': 'pulse-glow 2.5s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'float': 'float 5s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite'
      }
    }
  },
  plugins: []
}
