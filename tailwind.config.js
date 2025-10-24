/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        // Ini warna kustom Anda
        'ohm-red': '#DB2777',
        'ohm-red-dark': '#be185d', // Ini versi lebih gelapnya untuk hover
      },
      backgroundImage: {
        'hero-factory': "url('/images/factory.jpg')",
      }
    },
  },
  plugins: [],
}