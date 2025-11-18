// src/api/data.js

// --- Ikon SVG ---
const ICONS = {
  cpu: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-pink-600"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-7.5-6h7.5" /></svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-pink-600"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`,
  qc: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-pink-600"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" /></svg>`,
  shipping: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-pink-600"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5h10.5m-10.5-4.5V6.375c0-.621.504-1.125 1.125-1.125h14.25c.621 0 1.125.504 1.125 1.125v7.875m-17.25 4.5h-2.25m0 0A2.25 2.25 0 0 1 3 16.5V6.375m18 10.125V6.375m0 0A2.25 2.25 0 0 0 18.75 4.5H5.25A2.25 2.25 0 0 0 3 6.375m18 10.125h-2.25" /></svg>`,
  iso: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-pink-600"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068M15.75 21H9.625A2.625 2.625 0 0 1 7 18.375V10.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`,
  rohs: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-pink-600"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.09A2.25 2.25 0 0 1 18 20.501h-5.25a2.25 2.25 0 0 1-2.25-2.25v-4.09m5.56-1.313a2.625 2.625 0 1 0-5.25 0 2.625 2.625 0 0 0 5.25 0ZM21 15.085A2.25 2.25 0 0 1 18.75 13.5h-1.5a2.25 2.25 0 0 1-2.25-1.615m5.56-1.313A2.625 2.625 0 1 0 15.75 8.25m5.25 0A2.625 2.625 0 1 0 15.75 8.25" /></svg>`,
  policy: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-pink-600"><path stroke-linecap="round" stroke-linejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" /></svg>`,
  machine: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-pink-600"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h12A2.25 2.25 0 0 0 20.25 14.25V3m-16.5 0h16.5m-16.5 0H3.75m16.5 0H20.25m0 0V3m0 0h-.375m-13.125 0h.375m13.125 0h.375M3.75 6h16.5v3.75H3.75V6Z" /></svg>`,
  capacity: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-pink-600"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" /></svg>`,
  inspection: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-pink-600"><path stroke-linecap="round" stroke-linejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`,
  layers: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-pink-600"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M2.25 12l8.954 8.955c.44.439 1.152-.439 1.591 0L21.75 12M2.25 12l8.954 8.955c.44.439 1.152-.439 1.591 0L21.75 12M2.25 12 12 2.25 21.75 12" /></svg>`,
  assembly: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-pink-600"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h12A2.25 2.25 0 0 0 20.25 14.25V3m-16.5 0h16.5m-16.5 0H3.75m16.5 0H20.25m0 0V3m0 0h-.375m-13.125 0h.375m13.125 0h.375M3.75 6h16.5v3.75H3.75V6Zm0 3.75h16.5m-16.5 0v3.75m0-3.75H3.75m16.5 0h.375m-16.875 0h16.875" /></svg>`,
  tv: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-pink-600"><path stroke-linecap="round" stroke-linejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3H19.875a1.125 1.125 0 0 1 1.125 1.125V18a1.125 1.125 0 0 1-1.125 1.125H4.125A1.125 1.125 0 0 1 3 18v-2.625A1.125 1.125 0 0 1 4.125 14.25Z" /></svg>`,
  signage: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-pink-600"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 11.25 3l-6 3.75m0 0v10.5m0-10.5L12 3m0 0 5.25 3.75M12 3v10.5m0 0-5.25 3.75m5.25-3.75 5.25 3.75m-5.25 3.75v3.75m0-3.75L6.75 18m5.25 3.75L17.25 18" /></svg>`,
  power: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-pink-600"><path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" /></svg>`,
  system: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-pink-600"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5 3 11.25l3.75 3.75M17.25 7.5 21 11.25l-3.75 3.75M14.25 3.75 9.75 20.25" /></svg>`,
  inventory: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-pink-600"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" /></svg>`,
  rfid: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-pink-600"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.5v15a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25V4.5M3.75 4.5h16.5M3.75 4.5 12 12m0 0 8.25-7.5M12 12V2.25" /></svg>`,
};
// --- Akhir Ikon SVG ---

export const companyData = {
  // --- Teks Navigasi ---
  navigation: [
    { href: "#home", text: "Beranda" },
    { href: "#about", text: "Tentang Kami" },
    { href: "#clients", text: "Mitra" },
    { href: "#milestones", text: "Milestones" },
    { href: "#services", text: "Layanan" },
    { href: "#products", text: "Produk" },
    { href: "#systems", text: "Sistem" },
    { href: "#quality", text: "Kualitas" },
    { href: "#facilities", text: "Fasilitas" },
    { href: "#contact", text: "Kontak" },
  ],

  // --- Hero Slider ---
  hero: [
    {
      title: "PT. OHM ELECTRONICS INDONESIA",
      tagline: "Mitra Produksi PCB Assembly SMT Terpercaya Anda",
      buttonText: "Hubungi Kami",
      imageUrl: "/images/hero/factory.png",
      textUrl: "contact",
    },
    {
      title: "Presisi & Kualitas Teruji",
      tagline: "Dipercaya oleh Mitra Global untuk Menghadirkan Inovasi",
      buttonText: "Lihat Layanan Kami",
      imageUrl: "/images/hero/factory-2.png",
      textUrl: "products",
    },
    {
      title: "Smart Factory",
      tagline: "Didukung Penuh oleh Sistem MES 4.0 Terintegrasi",
      buttonText: "Pelajari Sistem Kami",
      imageUrl: "/images/hero/factory-4.png",
      textUrl: "systems",
    },
  ],

  // --- Tentang Kami ---
  about: {
    eyebrow: "Tentang Kami",
    heading: "Partner Produksi SMT Pilihan Anda",
    subheading:
      "Sejak 2020, kami mendedikasikan diri untuk menjadi yang terdepan dalam manufaktur PCB Assembly, menghadirkan presisi, kualitas, dan keandalan di setiap komponen.",
    mission: {
      title: "Misi Kami",
      text: "Memberikan solusi manufaktur elektronik terbaik melalui teknologi mutakhir, tim profesional yang kompeten, dan komitmen penuh pada kesuksesan mitra kami.",
    },
    info: {
      name: "PT. OHM ELECTRONICS INDONESIA",
      category: "Manufaktur Perakitan PCB",
      phone: "021 8932 8362",
      location: "JL. Jababeka IV Blok C1 A,B, Cikarang Utara, Bekasi",
      factory: "Luas Tanah 7,081㎡ / Luas Bangunan 5,029㎡",
    },
  },

  // --- Mitra ---
  clients: {
    eyebrow: "Dipercaya oleh Mitra Industri Terkemuka",
    heading: "Mitra Kami",
    items: [
      {
        name: "Mitra 1",
        logoUrl: "/images/clients/client_3.png",
      },
      {
        name: "LG Electronics",
        logoUrl: "/images/clients/client_lg.png",
      },
      {
        name: "Mitra 3",
        logoUrl: "/images/clients/client_4.png",
      },
      {
        name: "Panasonic",
        logoUrl: "/images/clients/client_panasonic.png",
      },
      {
        name: "Mitra 5",
        logoUrl: "/images/clients/client_5.png",
      },
    ],
  },

  // --- Milestones ---
  milestones: {
    eyebrow: "Perjalanan Kami",
    heading: "Inovasi & Kemitraan yang Terus Tumbuh",
    subheading:
      "Setiap pencapaian adalah bukti komitmen kami terhadap kualitas dan kepercayaan yang diberikan oleh para mitra kami.",
    years: [
      {
        label: "2020",
        events: [
          "Feb: PT OHM Electronics Indonesia resmi berdiri.",
          "Ags: Peresmian lini SMT pertama kami, memulai era produksi presisi.",
        ],
      },
      {
        label: "2021",
        events: [
          "Apr: Memulai kemitraan strategis dengan LGERC untuk Proyek Pengembangan Display.",
          "Nov: Mencapai rekor 130 Juta titik *mounting* untuk produk display LGEIN.",
        ],
      },
      {
        label: "2022",
        events: [
          "Jul: Melampaui rekor 250 Juta titik *mounting*, membuktikan skalabilitas produksi kami.",
        ],
      },
      {
        label: "2023",
        events: [
          "Mei: Meraih penghargaan bergengsi '23Y Supplier BP Competition Silver Prize' dari LGEIN.",
        ],
      },
      {
        label: "2024",
        events: [
          "Feb: Diakui sebagai '23Y Best Supplier Silver Prize' (LGEIN), membuktikan konsistensi & keandalan kami.",
        ],
      },
    ],
  },

  // --- Layanan ---
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

  // --- Produk ---
  products: {
    eyebrow: "Portofolio Produk",
    heading: "Fokus Kami: Perakitan PCB Assembly",
    subheading:
      "Keahlian inti kami adalah perakitan PCB (PCB Assembly) presisi tinggi, khususnya untuk Main Board dan Power Supply (PSU) di industri TV & Display.",
    buttonText: "Lihat Detail Katalog",
    items: [
      {
        id: "prod-tv-main",
        icon: ICONS.tv,
        title: "Perakitan PCB Main Board TV",
        description:
          "Layanan perakitan *high-speed* untuk Main Board PCB TV & Monitor kompleks, menggunakan material dari mitra kami.",
        imageUrl: "/images/product_tv_main.png",
      },
      {
        id: "prod-signage",
        icon: ICONS.signage,
        title: "Perakitan PCB Digital Signage",
        description:
          "Solusi perakitan PCB yang andal dan tahan lama untuk kebutuhan *commercial display* dan *digital signage* industri.",
        imageUrl: "/images/product_signage.png",
      },
      {
        id: "prod-psu",
        icon: ICONS.power,
        title: "Perakitan PCB PSU TV & Monitor",
        description:
          "Manufaktur Unit Power Supply (PSU) yang stabil dan efisien, dirakit dengan standar ketat untuk performa tahan lama.",
        imageUrl: "/images/product_psu.png",
      },
    ],
  },

  // --- Sistem ---
  systems: {
    eyebrow: "Smart Factory",
    heading: "Manufaktur Terintegrasi Berbasis Data",
    subheading:
      "Efisiensi, akurasi, dan kualitas kami bukan kebetulan. Semuanya didukung oleh ekosistem sistem manajemen pabrik yang modern dan terpadu.",
    items: [
      {
        id: "sys-mes",
        icon: ICONS.system,
        title: "Sistem MES 4.0",
        description:
          "Pemantauan produksi *real-time* untuk optimalisasi alur kerja, mencegah *bottleneck*, dan memastikan ketepatan data.",
        imageUrl: "/images/systems/system_mes.png",
        colorClass: "text-pink-600",
      },
      {
        id: "sys-material",
        icon: ICONS.inventory,
        title: "Manajemen Material Cerdas",
        description:
          "Sistem pelacakan material berbasis QR code via aplikasi, menjamin akurasi stok dari penerimaan hingga produksi.",
        imageUrl: "/images/systems/system_qr.png",
        colorClass: "text-blue-600",
      },
      {
        id: "sys-3r",
        icon: ICONS.rfid,
        title: "Sistem Admin 3R (RFID)",
        description:
          "Manajemen Rework, Repair & Remain terintegrasi RFID, memastikan 100% produk lolos OQC (Outgoing Quality Control).",
        imageUrl: "/images/systems/system_rfid.png",
        colorClass: "text-green-600",
      },
      {
        id: "sys-inventory",
        icon: ICONS.check,
        title: "Sistem Inventori Terintegrasi",
        description:
          "Sistem inventori kustom yang terhubung langsung dengan proses *shipping*, *receiving*, dan pelaporan bea cukai.",
        imageUrl: "/images/system_inventory.png",
        colorClass: "text-yellow-500",
      },
    ],
  },

  // --- Kualitas ---
  quality: {
    eyebrow: "Standar Kami",
    heading: "Kualitas adalah DNA Kami",
    subheading:
      "Kami tidak hanya mengklaim kualitas, kami membuktikannya. Proses kami telah divalidasi dan disertifikasi untuk memenuhi standar global terketat.",
    items: [
      {
        icon: ICONS.iso,
        title: "ISO 9001 & 14001",
        description:
          "Sistem manajemen mutu (ISO 9001) dan lingkungan (ISO 14001) kami telah tersertifikasi, menjamin konsistensi proses dan kepatuhan.",
        imageUrl: "/images/quality_iso.png" // (Nama file sugesti)
      },
      {
        icon: ICONS.rohs,
        title: "Kepatuhan RoHS",
        description:
          "Semua proses perakitan kami mematuhi arahan RoHS (Restriction of Hazardous Substances), memastikan komponen yang aman dan ramah lingkungan.",
        imageUrl: "/images/quality_rohs.png" // (Nama file sugesti)
      },
      {
        icon: ICONS.policy,
        title: "Komitmen Mutu",
        description:
          "Kebijakan 'Zero Defect' kami didukung oleh inspeksi AOI 3D dan pengujian fungsional berlapis untuk menjamin kesempurnaan produk.",
        imageUrl: "/images/quality_check.png" // (Nama file sugesti)
      },
    ],
  },

  // --- Fasilitas ---
  facilities: {
    homepage: {
      eyebrow: "Teknologi Kami",
      heading: "Kapabilitas Teknis & Fasilitas",
      subheading:
        "Spesifikasi teknis detail dari lini produksi kami. Pastikan kami adalah mitra yang tepat untuk kebutuhan presisi Anda.",
    },
    categories: [
      {
        id: "smt-assembly",
        title: "Kapabilitas Perakitan SMT",
        description:
          "Lini produksi kami ditenagai oleh mesin SMT high-speed Panasonic® untuk menjamin akurasi dan efisiensi.",
        imageUrl: "/images/facility_smt.png",
        machines: [
          {
            id: "panasonic-npm-w2",
            name: "Panasonic NPM-W2",
            description:
              "Mesin SMT Mounter presisi tinggi untuk penanaman komponen 0201 dan BGA/uBGA.",
            imageUrl: "/images/machine_npm_w2.png",
            specs: [
              { label: "Tipe Mesin", value: "High-Speed Mounter" },
              { label: "Akurasi Penempatan", value: "±0.035mm" },
              { label: "Komponen (Min)", value: "0201 / 01005" },
              { label: "Fitur", value: "BGA/uBGA, Fine Pitch" },
            ],
          },
          {
            id: "heller-reflow-oven",
            name: "Heller Reflow Oven",
            description:
              "Oven reflow dengan 10 zona pemanasan untuk profil termal yang sempurna dan proses Lead-Free (RoHS).",
            imageUrl: "/images/machine_heller_oven.png",
            specs: [
              { label: "Tipe Mesin", value: "Reflow Oven" },
              { label: "Jumlah Zona", value: "10 Zona (Pemanas/Pendingin)" },
              { label: "Proses", value: "Lead-Free / RoHS Compliant" },
              { label: "Kontrol", value: "Monitoring Profil Termal" },
            ],
          },
        ],
      },
      {
        id: "inspection-qc",
        title: "Kapabilitas Inspeksi & QC",
        description:
          "Sistem inspeksi berlapis kami memastikan 'Zero Defect' dan kepatuhan standar kualitas tertinggi.",
        imageUrl: "/images/facility_aoi.png",
        machines: [
          {
            id: "kohyoung-spi-3d",
            name: "Koh Young 3D SPI",
            description:
              "Inspeksi Solder Paste 3D penuh untuk mendeteksi volume, area, dan ketinggian paste sebelum penanaman komponen.",
            imageUrl: "/images/machine_spi_3d.png",
            specs: [
              { label: "Tipe Mesin", value: "3D Solder Paste Inspection" },
              { label: "Inspeksi", value: "Volume, Area, Tinggi, Bridge" },
              { label: "Akurasi", value: "Tinggi (Micron level)" },
              { label: "Fitur", value: "Closed-loop feedback ke Printer" },
            ],
          },
          {
            id: "pemtron-aoi-3d",
            name: "Pemtron 3D AOI",
            description:
              "Inspeksi optik 3D otomatis pasca-reflow untuk memeriksa posisi komponen, kualitas solder, dan *bridging*.",
            imageUrl: "/images/machine_aoi_3d.png",
            specs: [
              { label: "Tipe Mesin", value: "3D Automated Optical Inspection" },
              { label: "Inspeksi", value: "Posisi, Tombstone, Solder Joint" },
              { label: "Kamera", value: "High-speed 8-projection" },
              { label: "Fitur", value: "Deteksi *defect* dini" },
            ],
          },
        ],
      },
      {
        id: "capacity-lines",
        title: "Kapasitas & Lini Produksi",
        description:
          "Dirancang untuk skalabilitas, dari prototipe cepat hingga produksi massal bervolume tinggi.",
        imageUrl: "/images/facility_lines.png",
        machines: [],
        specs: [
          { label: "Total Lini SMT", value: "5 Lini High-Speed" },
          { label: "Kapasitas (CPH)", value: "500,000 (Total)" },
          { label: "Ukuran PCB (Maks)", value: "510mm x 460mm" },
          { label: "Sistem", value: "MES 4.0 Integrated" },
          { label: "Standar", value: "ISO 9001 & 14001" }, 
        ],
      },
    ],
  },

  // --- Kontak ---
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
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.8079172652415!2d107.13859607560701!3d-6.288959993700034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699bc85a1e9d31%3A0x78e96b0c47c94be9!2sPT.%20OHM%20Electronics%20Indonesia!5e0!3m2!1sen!2sid!4v1763013596668!5m2!1sen!2sid",
    },
    form: {
      name: "Nama Anda",
      email: "Email Anda",
      message: "Pesan Anda",
      button: "Kirim Pesan",
    },
  },

  // --- Katalog Produk ---
  catalogPage: {
    hero: {
      eyebrow: "Portofolio & Kapabilitas",
      heading: "Katalog Produk & Kapabilitas Teknis",
      subheading:
        "Bukti nyata komitmen kami terhadap presisi. Lihat detail produk yang telah kami rakit dan kapabilitas teknis yang kami miliki.",
    },
    specs: {
      heading: "Kapabilitas Teknis Utama",
      items: [
        {
          icon: ICONS.machine,
          title: "Mesin SMT High-Speed",
          description:
            "Jalur produksi ditenagai mesin Panasonic®, mampu menangani komponen 0201, BGA/uBGA, dan fine pitch dengan presisi tinggi.",
        },
        {
          icon: ICONS.inspection,
          title: "Inspeksi 3D AOI & SPI",
          description:
            "Inspeksi Solder Paste (SPI) dan Optical Inspection (AOI) 3D penuh untuk menjamin 'Zero Defect' pada penanaman komponen.",
        },
        {
          icon: ICONS.capacity,
          title: "Kapasitas Skala Besar",
          description:
            "Beberapa lini SMT otomatis dengan total kapasitas CPH (Components Per Hour) tinggi, siap untuk produksi massal.",
        },
        {
          icon: ICONS.iso,
          title: "Sertifikasi ISO 9001 & 14001",
          description:
            "Manajemen mutu (ISO 9001) dan lingkungan (ISO 14001) terstandar internasional untuk proses yang konsisten.",
        },
        {
          icon: ICONS.rohs,
          title: "Kepatuhan RoHS",
          description:
            "Kami memastikan semua komponen dan proses perakitan 100% mematuhi arahan RoHS (bebas timbal dan bahan berbahaya).",
        },
      ],
    },
    gallery: {
      heading: "Galeri Produk Rakitan",
      items: [
        {
          id: "tv-main-board",
          imageUrl: "/images/product_tv_main.png",
          title: "Perakitan PCB Main Board TV",
          description:
            "Contoh perakitan PCB Main Board kompleks untuk TV OLED. Fokus pada presisi penanaman BGA dan chipset.",
          detail: { 
            description_long:
              "Kami adalah spesialis dalam perakitan SMT presisi untuk Main Board PCB TV & Monitor multi-layer. Menggunakan material dari mitra, kami menjamin penempatan BGA, uBGA, dan komponen 0201 yang sempurna. Setiap board melewati inspeksi AOI 3D dan uji fungsional penuh.",
            pdfUrl: "/pdf/datasheet-tv-main.pdf", 
            specs: [
              { label: "Tipe PCB", value: "Multi-layer (6-12L)" },
              { label: "Komponen Terkecil", value: "0201" },
              { label: "Fitur", value: "BGA/uBGA Placement" },
              { label: "Inspeksi", value: "3D AOI, X-Ray, ICT" },
            ],
            galleryImages: [
              "/images/product_tv_main.png",
              "/images/product_psu.png", 
              "/images/product_signage.png", 
            ],
          },
        },
        {
          id: "tv-psu-board",
          imageUrl: "/images/product_psu.png",
          title: "Perakitan PCB PSU TV & Monitor",
          description:
            "Layanan perakitan Power Supply Unit (PSU) board dengan standar keamanan tinggi dan kualitas soldering komponen high-voltage.",
          detail: { 
            description_long:
              "Perakitan Power Supply Unit (PSU) kami fokus pada keandalan dan keamanan. Kami menangani perakitan komponen *through-hole* (IMT) dan SMT untuk PSU, dengan pengujian *burn-in* dan *hi-pot* yang ketat.",
            pdfUrl: "/pdf/datasheet-psu.pdf",
            specs: [
              { label: "Tipe Perakitan", value: "SMT & Through-Hole (IMT)" },
              { label: "Komponen", value: "Kapasitor, Transformer" },
              { label: "Fitur", value: "High-Voltage Soldering" },
              { label: "Pengujian", value: "Burn-in Test, Hi-Pot Test" },
            ],
            galleryImages: [
              "/images/product_psu.png", 
              "/images/product_tv_main.png", 
            ],
          },
        },
        {
          id: "cskd-module",
          imageUrl: "/images/product_signage.png",
          title: "Layanan Perakitan Kustom (CSKD)",
          description:
            "Layanan perakitan kustom untuk mitra non-LG (CSKD), dari prototipe hingga produksi massal.",
          detail: {
            description_long:
              "Selain mitra utama kami, kami melayani perakitan kustom untuk klien CSKD (Completely Semi Knocked Down). Bawa desain Anda, kami akan tangani perakitan presisi, QC, dan pengemasannya.",
            pdfUrl: "/pdf/datasheet-cskd.pdf",
            specs: [
              { label: "Tipe Layanan", value: "Custom Assembly (OEM)" },
              {
                label: "Fleksibilitas",
                value: "Low-Volume hingga High-Volume",
              },
              { label: "Proses", value: "Full Turnkey Assembly" },
              { label: "Kerahasiaan", value: "NDA Protected" },
            ],
            galleryImages: [
              "/images/product_cskd.png",
            ],
          },
        },
      ],
    },
  },

  // --- Kontak CS ---
  contactCS: {
    whatsappUrl: "https://wa.me/628562160039",
  },
};