/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'globalbg': '#f3f4f6',
      },
    },
  },
  variants: {},
  plugins: [],
};
