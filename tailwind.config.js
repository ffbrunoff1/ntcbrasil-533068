/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#5DACD2',
        'brand-white': '#FFFFFF',
        'brand-dark': '#0A3D62',
        'brand-light-gray': '#F0F4F8',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 25px rgba(93, 172, 210, 0.4)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #5DACD2 0%, #3E88B7 100%)',
      },
    },
  },
  plugins: [],
};
