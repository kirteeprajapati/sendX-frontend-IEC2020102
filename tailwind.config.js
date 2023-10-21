/** @type {import('tailwindcss').Config} */
export default{
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'blue': '#203a8a',
        'hoverblue': '#335ad380',
        'lightblue': '#4a98f8',
        'select': '#60a5fa',
        'font': '#141922',
        'green': '#0fba81',
        'greenDark': '#216d53',
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
        'primary': "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
};
