// src/api/data.js

// --- Ikon SVG (Tidak berubah) ---
const ICONS = {
  cpu: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-ohm-red"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-7.5-6h7.5" /></svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-ohm-red"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`,
  qc: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-ohm-red"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" /></svg>`,
  shipping: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-ohm-red"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5h10.5m-10.5-4.5V6.375c0-.621.504-1.125 1.125-1.125h14.25c.621 0 1.125.504 1.125 1.125v7.875m-17.25 4.5h-2.25m0 0A2.25 2.25 0 0 1 3 16.5V6.375m18 10.125V6.375m0 0A2.25 2.25 0 0 0 18.75 4.5H5.25A2.25 2.25 0 0 0 3 6.375m18 10.125h-2.25" /></svg>`,
  layers: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-ohm-red"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M2.25 12l8.954 8.955c.44.439 1.152-.439 1.591 0L21.75 12M2.25 12l8.954 8.955c.44.439 1.152-.439 1.591 0L21.75 12M2.25 12 12 2.25 21.75 12" /></svg>`,
  assembly: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-ohm-red"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h12A2.25 2.25 0 0 0 20.25 14.25V3m-16.5 0h16.5m-16.5 0H3.75m16.5 0H20.25m0 0V3m0 0h-.375m-13.125 0h.375m13.125 0h.375M3.75 6h16.5v3.75H3.75V6Zm0 3.75h16.5m-16.5 0v3.75m0-3.75H3.75m16.5 0h.375m-16.875 0h16.875" /></svg>`,
  tv: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-ohm-red"><path stroke-linecap="round" stroke-linejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3H19.875a1.125 1.125 0 0 1 1.125 1.125V18a1.125 1.125 0 0 1-1.125 1.125H4.125A1.125 1.125 0 0 1 3 18v-2.625A1.125 1.125 0 0 1 4.125 14.25Z" /></svg>`,
  signage: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-ohm-red"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 11.25 3l-6 3.75m0 0v10.5m0-10.5L12 3m0 0 5.25 3.75M12 3v10.5m0 0-5.25 3.75m5.25-3.75 5.25 3.75m-5.25 3.75v3.75m0-3.75L6.75 18m5.25 3.75L17.25 18" /></svg>`,
  power: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-ohm-red"><path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" /></svg>`,
  system: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-ohm-red"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5 3 11.25l3.75 3.75M17.25 7.5 21 11.25l-3.75 3.75M14.25 3.75 9.75 20.25" /></svg>`,
  inventory: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-ohm-red"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" /></svg>`,
  rfid: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-ohm-red"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.5v15a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25V4.5M3.75 4.5h16.5M3.75 4.5 12 12m0 0 8.25-7.5M12 12V2.25" /></svg>`,
  // --- TAMBAHKAN 3 IKON BARU INI ---
  iso: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-ohm-red"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068M15.75 21H9.625A2.625 2.625 0 0 1 7 18.375V10.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`,
  rohs: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-ohm-red"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.09A2.25 2.25 0 0 1 18 20.501h-5.25a2.25 2.25 0 0 1-2.25-2.25v-4.09m5.56-1.313a2.625 2.625 0 1 0-5.25 0 2.625 2.625 0 0 0 5.25 0ZM21 15.085A2.25 2.25 0 0 1 18.75 13.5h-1.5a2.25 2.25 0 0 1-2.25-1.615m5.56-1.313A2.625 2.625 0 1 0 15.75 8.25m5.25 0A2.625 2.625 0 1 0 15.75 8.25" /></svg>`,
  policy: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-ohm-red"><path stroke-linecap="round" stroke-linejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" /></svg>`,
  // --- BATAS IKON BARU ---
};
// --- Akhir Ikon SVG ---

export const companyData = {
  // --- Teks Navigasi (Sudah OK) ---
  navigation: [
    { href: "#home", text: "Beranda" },
    { href: "#about", text: "Tentang Kami" },
    { href: "#clients", text: "Mitra" }, // <-- TAMBAHKAN INI
    { href: "#milestones", text: "Milestones" },
    { href: "#services", text: "Layanan" },
    { href: "#products", text: "Produk" },
    { href: "#systems", text: "Sistem" },
    { href: "#quality", text: "Kualitas" }, // <-- TAMBAHKAN INI
    { href: "#contact", text: "Kontak" },
  ],

  // --- REVISI MARKETING ---
  // Data untuk Hero Section (DIUBAH JADI ARRAY)
  hero: [
    {
      title: "PT. OHM ELECTRONICS INDONESIA",
      tagline: "Mitra Produksi PCB Assy SMT Terpercaya Anda",
      buttonText: "Hubungi Kami",
      imageUrl: "/images/factory.png",
    },
    {
      title: "Presisi & Kualitas Teruji",
      tagline: "Dipercaya oleh Mitra Global untuk Menghadirkan Inovasi",
      buttonText: "Lihat Layanan Kami",
      imageUrl: "/images/factory-2.png", // Pastikan gambar ini ada di /public/images/
    },
    {
      title: "Pabrik Cerdas (Smart Factory)",
      tagline: "Didukung Penuh oleh Sistem MES 4.0 Terintegrasi",
      buttonText: "Pelajari Sistem Kami",
      imageUrl: "/images/factory-3.png", // Pastikan gambar ini ada di /public/images/
    },
  ],

  // Data untuk About Section
  about: {
    eyebrow: "Tentang Kami",
    heading: "Partner Produksi SMT Pilihan Anda",
    subheading:
      "Sejak 2020, kami mendedikasikan diri untuk menjadi yang terdepan dalam manufaktur PCB Assy, menghadirkan presisi, kualitas, dan keandalan di setiap komponen.",
    mission: {
      title: "Misi Kami",
      text: "Memberikan solusi manufaktur elektronik terbaik melalui teknologi mutakhir, tim profesional yang kompeten, dan komitmen penuh pada kesuksesan mitra kami.",
    },
    info: {
      name: "PT. OHM ELECTRONICS INDONESIA",
      category: "Manufaktur Perakitan PCB", // Disederhanakan
      phone: "021 8932 8362",
      location: "JL. Jababeka IV Blok C1 A,B, Cikarang Utara, Bekasi",
      factory: "Luas Tanah 7,081㎡ / Luas Bangunan 5,029㎡",
    },
  },

  // --- TAMBAHKAN OBJEK BARU INI ---
  clients: {
    heading: "Dipercaya oleh Mitra Industri Terkemuka",
    items: [
      {
        name: "LG Electronics",
        logoUrl: "/images/client_lg.png", // (Pastikan Anda upload logo ini)
      },
      {
        name: "Panasonic",
        logoUrl: "/images/client_panasonic.png", // (Contoh)
      },
      {
        name: "Mitra 3",
        logoUrl: "/images/client_3.png", // (Contoh)
      },
      {
        name: "Mitra 4",
        logoUrl: "/images/client_4.png", // (Contoh)
      },
      {
        name: "Mitra 5",
        logoUrl: "/images/client_5.png", // (Contoh)
      },
    ],
  },
  // --- BATAS OBJEK BARU ---

  // Data untuk Milestones Section
  milestones: {
    eyebrow: "Perjalanan Kami",
    heading: "Inovasi & Kemitraan yang Terus Tumbuh",
    subheading:
      "Setiap pencapaian adalah bukti komitmen kami terhadap kualitas dan kepercayaan yang diberikan oleh para mitra kami.",
    items: [
      {
        date: "Februari 2020",
        event: "PT OHM Electronics Indonesia Resmi Didirikan.",
      },
      {
        date: "April 2021",
        event:
          "Memulai kemitraan strategis dengan LGERC untuk Proyek Pengembangan Display.",
      },
      {
        date: "Mei 2023",
        event:
          "Meraih Penghargaan '23Y Supplier BP Competition Silver Prize' (LGEIN).",
      },
      {
        date: "Februari 2024",
        event:
          "Diakui sebagai '23Y Best Supplier Silver Prize' (LGEIN), membuktikan konsistensi kami.",
      },
    ],
  },

  // Data untuk Services/Processes (Sudah OK, tidak diubah)
  services: {
    eyebrow: "Keahlian Kami",
    heading: "Presisi di Setiap Tahap Produksi",
    subheading:
      "Kami mengawasi seluruh alur produksi—mulai dari komponen awal hingga produk jadi—dengan presisi dan efisiensi tanpa kompromi.",
    items: [
      {
        icon: ICONS.cpu,
        title: "Perakitan PCB Presisi (SMT & IMT)",
        description:
          "Dengan teknologi SMT & IMT canggih, kami menanam setiap komponen, dari yang terkecil hingga terkompleks, dengan akurasi dan kecepatan optimal.",
        imageUrl: "/images/process_smt.png",
      },
      {
        icon: ICONS.check,
        title: "Perakitan & Uji Fungsional",
        description:
          "Produk Anda dirakit dengan sempurna (DMS & PSU), lalu wajib lolos Uji Fungsi Digital (DFT) yang ketat. Kami memastikan 100% fungsionalitas.",
        imageUrl: "/images/process_testing.png",
      },
      {
        icon: ICONS.qc,
        title: "Inspeksi Kualitas Menyeluruh",
        description:
          "Tidak ada yang terlewat. Tim QC kami melakukan inspeksi berlapis—baik visual maupun fungsional—untuk menjamin *zero defect* sebelum pengemasan.",
        imageUrl: "/images/process_qc.png",
      },
      {
        icon: ICONS.shipping,
        title: "Pengemasan & Logistik Aman",
        description:
          "Produk Anda dikemas dengan standar keamanan tinggi dan diserahkan ke sistem logistik kami yang terkoordinasi, menjamin pengiriman aman dan tepat waktu.",
        imageUrl: "/images/process_shipping.png",
      },
    ],
  },

  // --- REVISI MARKETING ---
  products: {
    eyebrow: "Portofolio Produk",
    heading: "Memberi Tenaga pada Teknologi Masa Depan",
    subheading:
      "Kami memproduksi papan sirkuit (PCB) vital yang menjadi inti dari berbagai perangkat elektronik konsumen dan komersial terkemuka.",
    items: [
      {
        icon: ICONS.tv,
        title: "TV & Monitor Main Board",
        description:
          "Papan sirkuit utama (Main Board) berperforma tinggi untuk berbagai model TV dan Monitor, termasuk panel OLED dan UHD.",
        imageUrl: "/images/product_tv_main.png", // <-- TAMBAHKAN INI
      },
      {
        icon: ICONS.signage,
        title: "Digital Signage",
        description:
          "Solusi PCB Assy yang andal dan tahan lama untuk kebutuhan *commercial display* dan *digital signage* industri.",
        imageUrl: "/images/product_signage.png", // <-- TAMBAHKAN INI
      },
      {
        icon: ICONS.power,
        title: "TV & Monitor PSU",
        description:
          "Unit Power Supply (PSU) yang stabil dan efisien, dirancang untuk performa perangkat yang optimal dan awet.",
        imageUrl: "/images/product_psu.png", // <-- TAMBAHKAN INI
      },
    ],
  },

  // --- REVISI MARKETING ---
  // --- REVISI: Tambahkan imageUrl ---
  systems: {
    eyebrow: "Pabrik Cerdas (Smart Factory)",
    heading: "Manufaktur Terintegrasi Berbasis Data",
    subheading:
      "Efisiensi, akurasi, dan kualitas kami bukan kebetulan. Semuanya didukung oleh ekosistem sistem manajemen pabrik yang modern dan terpadu.",
    items: [
      {
        icon: ICONS.system,
        title: "Sistem MES 4.0",
        description:
          "Pemantauan produksi *real-time* untuk optimalisasi alur kerja, mencegah *bottleneck*, dan memastikan ketepatan data.",
        imageUrl: "/images/system_mes.png", // <-- TAMBAHKAN INI
      },
      {
        icon: ICONS.inventory,
        title: "Manajemen Material Cerdas",
        description:
          "Sistem pelacakan material berbasis QR code via aplikasi, menjamin akurasi stok dari penerimaan hingga produksi.",
        imageUrl: "/images/system_qr.png", // <-- TAMBAHKAN INI
      },
      {
        icon: ICONS.rfid,
        title: "Sistem Admin 3R (RFID)",
        description:
          "Manajemen Rework, Repair & Remain terintegrasi RFID, memastikan 100% produk lolos OQC (Outgoing Quality Control).",
        imageUrl: "/images/system_rfid.png", // <-- TAMBAHKAN INI
      },
      {
        icon: ICONS.check,
        title: "Sistem Inventori Terintegrasi",
        description:
          "Sistem inventori kustom yang terhubung langsung dengan proses *shipping*, *receiving*, dan pelaporan bea cukai.",
        imageUrl: "/images/system_inventory.png", // <-- TAMBAHKAN INI
      },
    ],
  },

  // --- TAMBAHKAN OBJEK BARU INI ---
  quality: {
    eyebrow: "Standar Kami",
    heading: "Kualitas adalah DNA Kami",
    subheading:
      "Kami tidak hanya mengklaim kualitas, kami membuktikannya. Proses kami telah divalidasi dan disertifikasi untuk memenuhi standar global terketat.",
    items: [
      {
        icon: ICONS.iso,
        title: "ISO 9001:2015",
        description:
          "Sistem manajemen mutu kami telah tersertifikasi ISO 9001, menjamin konsistensi dan perbaikan berkelanjutan di setiap proses.",
      },
      {
        icon: ICONS.rohs,
        title: "Kepatuhan RoHS",
        description:
          "Semua produk kami mematuhi arahan RoHS (Restriction of Hazardous Substances), memastikan komponen yang aman dan ramah lingkungan.",
      },
      {
        icon: ICONS.policy,
        title: "Komitmen Mutu",
        description:
          "Kebijakan 'Zero Defect' kami didukung oleh inspeksi AOI 3D dan pengujian fungsional berlapis untuk menjamin kesempurnaan produk.",
      },
    ],
  },
  // --- BATAS OBJEK BARU ---

  // --- REVISI MARKETING ---
  // Data untuk Contact
  contact: {
    eyebrow: "Hubungi Kami",
    heading: "Mari Wujudkan Proyek Anda",
    subheading:
      "Siap mendiskusikan kebutuhan manufaktur Anda? Tim ahli kami siap memberikan solusi terbaik untuk Anda.",
    info: {
      address:
        "JL. Jababeka IV Blok C1 A,B Kawasan Industri Cikarang<br>Desa Pasir Gombong, Kec. Cikarang Utara<br>Kabupaten Bekasi 17530",
      phone: "021 8932 8362 / +62 2189831548",
      website: "www.ohme.kr",
      emails: [
        { type: "FSE", email: "kimheetae@ohme.kr" },
        { type: "Local", email: "iwan@ohme.kr" },
      ],
    },
    form: {
      name: "Nama Anda",
      email: "Email Anda",
      message: "Pesan Anda",
      button: "Kirim Pesan",
    },
  },
};
