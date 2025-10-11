/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#b89649',
          dark: '#a27e2d',
          light: '#d4b679',
          secondary: 'rgb(194, 168, 120)', // From Cheryl website
        },
        black: '#111111',
        gray: {
          light: '#f9f9f9',
          DEFAULT: '#e5e5e5',
          dark: '#666666',
        },
        white: '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
