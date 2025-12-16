/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#7EB2DD',
        darkblue: '#03045E',
      },
    },
  },
  plugins: [],
};
