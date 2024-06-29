/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateY(-25%)' },
          '50%': { transform: 'translateY(-50%)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out',
      },
      colors: {
        primary: '#1E6CEF',
        secondary: '#1E6CEF1A',
      },
    },
  },
  plugins: [],
};
