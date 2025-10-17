/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-gentle': 'float-gentle 4s ease-in-out infinite',
        'bounce-soft': 'bounce-soft 3s ease-in-out infinite',
        'swing': 'swing 5s ease-in-out infinite',
        'pulse-float': 'pulse-float 3.5s ease-in-out infinite',
        'rotate-float': 'rotate-float 8s linear infinite',
        'wave-motion': 'wave-motion 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'spin-reverse': 'spin-reverse 15s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-gentle': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(2deg)' },
        },
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '25%': { transform: 'translateY(-8px) scale(1.02)' },
          '50%': { transform: 'translateY(-12px) scale(1.05)' },
          '75%': { transform: 'translateY(-4px) scale(1.02)' },
        },
        swing: {
          '0%, 100%': { transform: 'rotate(0deg) translateY(0px)' },
          '25%': { transform: 'rotate(5deg) translateY(-5px)' },
          '50%': { transform: 'rotate(0deg) translateY(-10px)' },
          '75%': { transform: 'rotate(-5deg) translateY(-5px)' },
        },
        'pulse-float': {
          '0%, 100%': { transform: 'translateY(0px) scale(1)', opacity: '1' },
          '50%': { transform: 'translateY(-20px) scale(1.1)', opacity: '0.9' },
        },
        'rotate-float': {
          '0%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-10px) rotate(90deg)' },
          '50%': { transform: 'translateY(-15px) rotate(180deg)' },
          '75%': { transform: 'translateY(-10px) rotate(270deg)' },
          '100%': { transform: 'translateY(0px) rotate(360deg)' },
        },
        'wave-motion': {
          '0%': { transform: 'translateY(0px) translateX(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-12px) translateX(8px) rotate(5deg)' },
          '50%': { transform: 'translateY(-8px) translateX(0px) rotate(0deg)' },
          '75%': { transform: 'translateY(-12px) translateX(-8px) rotate(-5deg)' },
          '100%': { transform: 'translateY(0px) translateX(0px) rotate(0deg)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'spin-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
