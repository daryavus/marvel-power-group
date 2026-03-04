/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'marvel-yellow': '#F6D330',
        'marvel-black': '#000000',
      },
      fontFamily: {
        'alata': ['Alata', 'sans-serif'],
        'sofia': ['Montserrat', 'sans-serif'],
      },
      screens: {
        'sm': '375px',
        'md': '768px',
        'lg': '1200px',
      },
    },
  },
  plugins: [],
}

