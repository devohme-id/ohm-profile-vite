/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./katalog.html",
    "./produk-detail.html",
    "./fasilitas-katalog.html",
    "./fasilitas-detail.html",
    "./kualitas-detail.html",
    "./src/**/*.{js,ts}"
  ],
  theme: {
    extend: {
      // Menambahkan Font Family Custom agar bisa dipanggil via class font-sans / font-headline
      fontFamily: {
        sans: ['MyFontText', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        headline: ['MyFontHeadline', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      // DEFINISI WARNA DARI "BASIC KODE WARNA.md"
      colors: {
        ohm: {
          // Background & Text Utama
          bg: '#F0F2F5',        // BACKGROUND
          text: '#535353',      // TEXT
          grey: '#879CA7',      // GREY-OHM
          
          // Variasi Merah (Aksen Utama)
          red: {
            DEFAULT: '#c51a50', // AKSEN MERAH UTAMA
            light: '#FD312E',   // Active Red (Lebih terang)
            dark: '#A50034',    // Heritage Red (Lebih gelap, cocok untuk Hover)
          },

          // Variasi Biru (ERP / Tombol)
          blue: {
            DEFAULT: '#0b57d0', // BUTTON
            hover: '#185ABC',   // BUTTON HOVER
            light: '#ebf3fc',   // Background biru muda
          },

          // Variasi Hijau
          green: {
            DEFAULT: '#54FEBD', // GREEN (Bright)
            panel: '#37CB46',   // PANEL GREEN
            soft: '#D5F0DA',    // Soft Green
          },
          
          // Variasi Pesan Error/Warning
          warning: '#F8BA0F',   // ERR MESSAGE
        }
      },
    },
  },
  plugins: [],
}