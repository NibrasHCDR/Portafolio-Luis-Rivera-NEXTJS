/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://wallpaperaccess.com/full/1267600.jpg')",
        'footer-texture': "url('https://3.bp.blogspot.com/-jA9bZKFspdY/UYFrX0OCnTI/AAAAAAAAKKQ/tAPK5NotKbQ/s1600/website_background_by_modsoft-d3302jz1.png')",
      }
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
