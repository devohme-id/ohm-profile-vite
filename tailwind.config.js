/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Daftarkan semua 5 halaman
    "./index.html",
    "./katalog.html",
    "./produk-detail.html",
    "./fasilitas-katalog.html",
    "./fasilitas-detail.html",
    
    "./src/**/*.{js,ts}" // Pindai file JS
  ],
  theme: {
    extend: {
      colors: {
        // Menggunakan pink-600 bawaan Tailwind
        // Jika ingin warna kustom:
        // 'ohm-red': '#DB2777',
        // 'ohm-red-dark': '#be185d',
      },
    },
  },
  plugins: [],
}