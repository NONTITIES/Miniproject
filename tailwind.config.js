/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#080B12',
        secondaryBg: '#101521',
        cardSurface: '#141B2A',
        cardSurfaceHover: '#1B2438',
        primaryText: '#F8FAFC',
        secondaryText: '#94A3B8',
        accentBlue: '#3B82F6',
        accentCyan: '#22D3EE',
        accentEmerald: '#10B981',
        glassBorder: 'rgba(255, 255, 255, 0.12)',
        glassBorderLight: 'rgba(255, 255, 255, 0.06)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-blue': '0 0 25px -5px rgba(59, 130, 246, 0.3)',
        'glow-cyan': '0 0 25px -5px rgba(34, 211, 238, 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'beam': 'beam 6s linear infinite',
      },
      keyframes: {
        beam: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
      },
    },
  },
  plugins: [],
};
