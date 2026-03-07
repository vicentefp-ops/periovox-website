/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#081321',
        brand: '#00AAC3',
        sky: '#00B2EB',
        mint: '#00E2AE',
        mist: '#F3FAFB',
      },
      fontFamily: {
        sans: ['Avenir Next', 'SF Pro Text', 'Segoe UI', 'sans-serif'],
        display: ['SF Pro Display', 'Avenir Next', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 28px 72px -34px rgba(8, 19, 33, 0.22)',
        premium: '0 44px 110px -48px rgba(8, 19, 33, 0.52)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        wave: {
          '0%, 100%': { transform: 'scaleY(0.35)' },
          '50%': { transform: 'scaleY(1)' },
        },
        scan: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(180%)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.75', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        wave: 'wave 1.6s ease-in-out infinite',
        scan: 'scan 5s linear infinite',
        'pulse-soft': 'pulseSoft 2.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
