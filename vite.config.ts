import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from 'path';

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        // Daftarkan semua 5 halaman
        main: resolve(__dirname, 'index.html'),
        katalog: resolve(__dirname, 'katalog.html'),
        produkDetail: resolve(__dirname, 'produk-detail.html'),
        fasilitasKatalog: resolve(__dirname, 'fasilitas-katalog.html'),
        fasilitasDetail: resolve(__dirname, 'fasilitas-detail.html')
      }
    }
  }
});