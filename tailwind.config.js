/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#203a8a',
      'hoverblue':'#335ad380',
      'lightblue': '#4a98f8',
      'select': '#60a5fa',
      'font': '#141922',
      'green': '#0fba81',
      'body': '#f3f4f6',
      'white': '#fff',
      'white1': '#f3f4f6',
      'red': '#ff4141',
      'lightred': '#e96762',
      'gray': '#8492a6',
      'grayhover': '#b9c5d7',
      'graynav': '#4b5462',
      'graylight': '#e5e7eb',
      'graydark': '#3d3d3e',
      'graymedium': '#4b4b4b',
      'darkblue': '#4b4b4b',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#fdba74',
      'yellow': '#ffc82c',
      'black': '#000',
    },
    extend: {
      backgroundColor: {
        'globalbg': '#f3f4f6',
      },
    },
  },
  variants: {},
  plugins: [],
};
