/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        'custom-orange': 'rgba(149, 111, 0, 1)',
        'custom-orange1': 'rgba(255, 235, 213, 1)',
        'custom-orange2':'rgba(255, 200, 121, 1)',
        'custom-orange3':'#FFFDF7',
        'bg1':'#FF9898',
        'bg2':'#571010',
        'bg3':'#FFEAEA',

      }
    },
  },
  plugins: [],
}

