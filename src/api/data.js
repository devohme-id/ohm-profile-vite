// src/api/data.js

// --- Ikon SVG (Tidak berubah) ---
const ICONS = {
  cpu: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-ohm-red"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-7.5-6h7.5" /></svg>`,
  layers: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-ohm-red"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M2.25 12l8.954 8.955c.44.439 1.152-.439 1.591 0L21.75 12M2.25 12l8.954 8.955c.44.439 1.152-.439 1.591 0L21.75 12M2.25 12 12 2.25 21.75 12" /></svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-ohm-red"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`,
  assembly: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-ohm-red"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h12A2.25 2.25 0 0 0 20.25 14.25V3m-16.5 0h16.5m-16.5 0H3.75m16.5 0H20.25m0 0V3m0 0h-.375m-13.125 0h.375m13.125 0h.375M3.75 6h16.5v3.75H3.75V6Zm0 3.75h16.5m-16.5 0v3.75m0-3.75H3.75m16.5 0h.375m-16.875 0h16.875" /></svg>`,
  tv: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-ohm-red"><path stroke-linecap="round" stroke-linejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3H19.875a1.125 1.125 0 0 1 1.125 1.125V18a1.125 1.125 0 0 1-1.125 1.125H4.125A1.125 1.125 0 0 1 3 18v-2.625A1.125 1.125 0 0 1 4.125 14.25Z" /></svg>`,
  signage: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-ohm-red"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 11.25 3l-6 3.75m0 0v10.5m0-10.5L12 3m0 0 5.25 3.75M12 3v10.5m0 0-5.25 3.75m5.25-3.75 5.25 3.75m-5.25 3.75v3.75m0-3.75L6.75 18m5.25 3.75L17.25 18" /></svg>`,
  power: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-ohm-red"><path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" /></svg>`,
  system: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-ohm-red"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5 3 11.25l3.75 3.75M17.25 7.5 21 11.25l-3.75 3.75M14.25 3.75 9.75 20.25" /></svg>`,
  inventory: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-ohm-red"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" /></svg>`,
  rfid: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-ohm-red"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.5v15a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25V4.5M3.75 4.5h16.5M3.75 4.5 12 12m0 0 8.25-7.5M12 12V2.25" /></svg>`,
};
// --- Akhir Ikon SVG ---


export const companyData = {

  // --- BARU: Teks Navigasi ---
  navigation: [
    { href: "#home", text: "Beranda" },
    { href: "#about", text: "Tentang Kami" },
    { href: "#milestones", text: "Milestones" },
    { href: "#services", text: "Layanan" },
    { href: "#products", text: "Produk" },
    { href: "#systems", text: "Sistem" },
    { href: "#contact", text: "Kontak" }
  ],

  // Data untuk Hero Section
  hero: {
    name: "PT. OHM ELECTRONICS INDONESIA",
    tagline: "Manufaktur PCB Assy Presisi Tinggi untuk Era Digital",
    buttonText: "Pelajari Lebih Lanjut" // <-- BARU
  },

  // Data untuk About Section
  about: {
    eyebrow: "Tentang Kami",
    heading: "Partner Manufaktur Elektronik Terpercaya Anda",
    subheading: "Berdiri sejak 2020, PT. OHM Electronics Indonesia berdedikasi untuk menjadi yang terdepan dalam manufaktur PCB Assy, menghadirkan kualitas dan presisi di setiap komponen.",
    mission: {
      title: "Misi Kami",
      text: "Memberikan solusi manufaktur elektronik terbaik melalui teknologi canggih, sumber daya manusia yang kompeten, dan komitmen penuh terhadap kepuasan pelanggan."
    },
    info: {
      name: "PT. OHM ELECTRONICS INDONESIA",
      category: "PCB Assy Manufacturing",
      phone: "021 8932 8362",
      location: "JL. Jababeka IV Blok C1 A,B, Cikarang Utara, Bekasi",
      factory: "Luas Tanah 7,081㎡ / Luas Bangunan 5,029㎡"
    }
  },

  // Data untuk Milestones Section
  milestones: {
    eyebrow: "Perjalanan Kami",
    heading: "Langkah Menuju Kesuksesan",
    subheading: "Sejarah singkat pencapaian kami dalam membangun kemitraan dan inovasi.",
    items: [
      { date: "Februari 2020", event: "PT OHM Electronics Indonesia Resmi Didirikan" },
      { date: "April 2021", event: "Memulai kemitraan strategis dengan LGERC untuk Proyek Pengembangan Display" },
      { date: "Mei 2023", event: "Meraih '23Y Supplier BP Competition Silver Prize (LGEIN)" },
      { date: "Februari 2024", event: "Diakui sebagai '23Y Best Supplier Silver Prize (LGEIN)" }
    ]
  },

  // Data untuk Services/Processes
  services: {
    eyebrow: "Layanan Kami",
    heading: "Proses Produksi Terintegrasi",
    subheading: "Dari komponen mentah hingga produk jadi, kami mengelola setiap langkah dengan presisi.",
    items: [
      { icon: ICONS.cpu, title: "Produksi SMT", description: "Pemasangan komponen presisi ke permukaan PCB menggunakan teknologi Surface Mount (SMT) terdepan." },
      { icon: ICONS.layers, title: "Produksi IMT", description: "Penanaman komponen (Insert Mount) seperti jumpers, axial, dan radial dengan akurasi tinggi." },
      { icon: ICONS.check, title: "Uji Fungsi (DFT)", description: "Pengujian fungsional digital yang ketat untuk memastikan setiap unit bekerja sempurna sesuai spesifikasi." },
      { icon: ICONS.assembly, title: "Proses Perakitan", description: "Perakitan akhir (DMS & PSU) yang efisien, mengubah PCB fungsional menjadi produk siap pakai." }
    ]
  },

  // Data untuk Products
  products: {
    eyebrow: "Produk Kami",
    heading: "Menggerakkan Perangkat di Sekitar Anda",
    subheading: "Kami memproduksi papan sirkuit vital untuk berbagai perangkat elektronik konsumen terkemuka.",
    items: [
      { icon: ICONS.tv, title: "TV/Monitor MAIN", description: "Papan sirkuit utama (Main Board) untuk berbagai model TV dan Monitor, termasuk panel OLED dan UHD." },
      { icon: ICONS.signage, title: "Digital Signage", description: "Manufaktur PCB Assy yang andal untuk kebutuhan *commercial display* dan *digital signage*." },
      { icon: ICONS.power, title: "TV/Monitor PSU", description: "Unit Power Supply (PSU) yang stabil dan efisien untuk menjamin performa perangkat yang tahan lama." }
    ]
  },

  // Data untuk Systems
  systems: {
    eyebrow: "Pabrik Cerdas",
    heading: "Dikelola oleh Sistem Cerdas",
    subheading: "Efisiensi dan kualitas kami didukung oleh sistem manajemen pabrik yang modern dan terintegrasi.",
    items: [
      { icon: ICONS.system, title: "Sistem MES 4.0", description: "Memantau alur produksi secara *real-time* untuk mencegah *bottleneck* dan duplikasi data." },
      { icon: ICONS.inventory, title: "Manajemen Material", description: "Manajemen material berbasis QR code via aplikasi untuk pelacakan stok dan inventori yang akurat." },
      { icon: ICONS.rfid, title: "Sistem Admin 3R", description: "Sistem manajemen Rework, Repair & Remain berbasis RFID untuk memastikan 100% lolos OQC." },
      { icon: ICONS.check, title: "Sistem Inventori", description: "Sistem inventori kustom yang terintegrasi untuk kebutuhan *shipping*, *receiving*, dan pelaporan bea cukai." }
    ]
  },

  // Data untuk Contact
  contact: {
    eyebrow: "Hubungi Kami",
    heading: "Mulai Kemitraan Anda",
    subheading: "Siap untuk mendiskusikan proyek Anda? Tim kami siap membantu.",
    info: {
      address: "JL. Jababeka IV Blok C1 A,B Kawasan Industri Cikarang<br>Desa Pasir Gombong, Kec. Cikarang Utara<br>Kabupaten Bekasi 17530",
      phone: "021 8932 8362 / +62 2189831548",
      website: "www.ohme.kr",
      emails: [
        { type: "FSE", email: "kimheetae@ohme.kr" },
        { type: "Local", email: "iwan@ohme.kr" }
      ]
    },
    // --- BARU: Teks untuk Form ---
    form: {
      name: "Nama Anda",
      email: "Email Anda",
      message: "Pesan Anda",
      button: "Kirim Pesan"
    }
  }
};