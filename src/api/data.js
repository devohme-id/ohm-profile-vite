// src/api/data.js

export const companyData = {
  navigation: [
    { href: "#home", text: "Beranda" },
    { href: "#about", text: "Tentang Kami" },
    { href: "#workflow", text: "Alur Kerja" },
    { href: "#products", text: "Produk" },
    { href: "#milestones", text: "Jejak Langkah" },
    { href: "#clients", text: "Klien" },
    { href: "#contact", text: "Kontak" },
  ],

  hero: [
    {
      title: "Solusi Manufaktur Elektronik Terdepan",
      tagline: "Spesialis PCB Assembly (SMT) dengan standar kualitas Zero Defect.",
      buttonText: "Hubungi Tim Sales",
      imageUrl: "/images/hero/factory.jpeg",
      textUrl: "#contact",
    },
    {
      title: "Kapasitas Produksi Skala Besar",
      tagline: "5 Lini High-Speed Panasonic® siap menangani volume produksi tinggi dengan presisi.",
      buttonText: "Lihat Kapasitas",
      imageUrl: "/images/hero/factory-2.jpeg",
      textUrl: "#products",
    },
    {
      title: "Sistem Pabrik Pintar 4.0",
      tagline: "Pantau produksi secara real-time dengan integrasi MES dan transparansi total.",
      buttonText: "Pelajari Teknologi",
      imageUrl: "/images/hero/factory-3.jpeg",
      textUrl: "#workflow",
    },
  ],

  about: {
    eyebrow: "Mengapa Memilih Kami?",
    heading: "Mitra Strategis untuk Inovasi Elektronik Anda",
    subheading:
      "Berdiri sejak 2020, PT. OHM Electronics Indonesia menggabungkan teknologi SMT mutakhir dengan manajemen profesional untuk memberikan hasil perakitan yang presisi, cepat, dan efisien.",
    mission: {
      title: "Misi Kami",
      text: "Menjadi manufaktur elektronik kelas dunia yang memprioritaskan kepuasan klien melalui kualitas tanpa kompromi dan pengiriman tepat waktu.",
    },
    info: {
      name: "PT. OHM ELECTRONICS INDONESIA",
      category: "PCB Assembly (PCBA) Manufacturing",
      phone: "(021) 8932 8362",
      location: "Kawasan Industri Jababeka IV, Cikarang - Indonesia",
      factory: "Luas Area: 7,081 m² | Kapasitas: High-Volume Production",
    },
    organization: {
      heading: "Struktur Manajemen Profesional",
      tree: [
        {
          role: "CEO",
          name: "Top Management",
          children: [
            {
              role: "Director (COO)",
              name: "Operasional",
              children: [
                { role: "General Manager", dept: "ISE" },
                { role: "Engineering", dept: "Teknis" },
                { role: "Production", dept: "Manufaktur" },
                { role: "PPIC", dept: "Perencanaan" },
              ],
            },
            {
              role: "Director (CFO)",
              name: "Keuangan & Support",
              children: [
                { role: "HR & GA", dept: "Umum" },
                { role: "Quality Control", dept: "Mutu" },
                { role: "Accounting", dept: "Keuangan" },
                { role: "Exim", dept: "Logistik" },
              ],
            },
          ],
        },
      ],
    },
  },

  clients: {
    eyebrow: "Kepercayaan Global",
    heading: "Dipercaya oleh Pemimpin Industri",
    items: [
      { name: "LG Electronics", logoUrl: "/images/clients/client_lg.png" },
      { name: "Panasonic", logoUrl: "/images/clients/client_panasonic.png" },
      { name: "Mitra 3", logoUrl: "/images/clients/client.png" },
      { name: "Mitra 4", logoUrl: "/images/clients/client_lg.png" }, 
      { name: "Mitra 5", logoUrl: "/images/clients/client_panasonic.png" },
    ],
  },

  milestones: {
    eyebrow: "Rekam Jejak",
    heading: "Pertumbuhan & Pencapaian",
    subheading:
      "Bukti konsistensi kami dalam menjaga kualitas dan kepercayaan mitra.",
    years: [
      {
        label: "2020",
        events: [
          "Pendirian PT OHM Electronics Indonesia.",
          "Instalasi Lini SMT Pertama.",
        ],
      },
      {
        label: "2021",
        events: [
          "Kemitraan Strategis dengan LG Electronics.",
          "Pencapaian 130 Juta Point Mounting.",
        ],
      },
      {
        label: "2022",
        events: [
          "Ekspansi Kapasitas (Total 5 Lini).",
          "Rekor Produksi 250 Juta Point.",
        ],
      },
      {
        label: "2023",
        events: [
          "Penghargaan 'Best Supplier Silver Prize'.",
          "Implementasi Sistem MES Full.",
        ],
      },
      {
        label: "2024",
        events: [
          "Sertifikasi ISO Lanjutan.",
          "Ekspansi ke Produk Otomotif & IoT.",
        ],
      },
    ],
  },

  workflow: {
    eyebrow: "Sistem Terintegrasi",
    heading: "Alur Kerja Presisi Tinggi",
    subheading:
      "Setiap tahap produksi dikontrol ketat oleh sistem digital untuk meminimalisir human error.",
    steps: [
      {
        id: "wf-planning",
        icon: "calendar",
        title: "1. Perencanaan",
        description: "Analisis pesanan dan jadwal produksi yang akurat.",
        subItems: [
          { title: "Terima Order", dept: "Sales" },
          { title: "Jadwal Produksi", dept: "PPIC" },
          { title: "Pembelian Material", dept: "Procurement" },
        ],
        system: {
          title: "Sistem Inventori",
          text: "Sinkronisasi stok material dan jadwal secara real-time.",
          link: "sistem-detail.html?id=sys-inventory",
        },
      },
      {
        id: "wf-material",
        icon: "box",
        title: "2. Material Masuk",
        description: "Pemeriksaan kualitas komponen sebelum masuk lini.",
        subItems: [
          { title: "Cek Spesifikasi", dept: "IQC" },
          { title: "Penyimpanan", dept: "Gudang" },
          { title: "Persiapan Kit", dept: "Produksi" },
        ],
        system: {
          title: "QR Code Tracking",
          text: "Mencegah kesalahan pengambilan komponen dengan scan QR.",
          link: "sistem-detail.html?id=sys-material",
        },
      },
      {
        id: "wf-production",
        icon: "cpu",
        title: "3. Produksi SMT",
        description: "Proses mounting komponen kecepatan tinggi.",
        subItems: [
          { title: "Solder Paste", dept: "SMT" },
          { title: "Mounting", dept: "SMT" },
          { title: "Reflow Oven", dept: "SMT" },
          { title: "AOI Check", dept: "QC" },
        ],
        system: {
          title: "Sistem MES 4.0",
          text: "Monitoring output dan efisiensi mesin detik-per-detik.",
          link: "sistem-detail.html?id=sys-mes",
        },
      },
      {
        id: "wf-quality",
        icon: "check-circle",
        title: "4. Quality Control",
        description: "Validasi fungsi dan fisik produk jadi.",
        subItems: [
          { title: "Uji Fungsi", dept: "QC" },
          { title: "Visual Check", dept: "QC" },
          { title: "Aging Test", dept: "QC" },
        ],
        system: {
          title: "Sistem RFID 3R",
          text: "Memisahkan produk OK dan NG secara otomatis.",
          link: "sistem-detail.html?id=sys-3r",
        },
      },
      {
        id: "wf-delivery",
        icon: "truck",
        title: "5. Pengiriman",
        description: "Packing aman dan pengiriman tepat waktu.",
        subItems: [
          { title: "Packing Akhir", dept: "Logistik" },
          { title: "Dokumen Jalan", dept: "Admin" },
          { title: "Pengiriman", dept: "Ekspedisi" },
        ],
        system: {
          title: "Jaminan Mutu",
          text: "Produk dikirim dengan sertifikasi lolos uji mutu.",
          link: "kualitas-detail.html?id=komitmen-mutu",
        },
      },
    ],
  },

  products: {
    eyebrow: "Kapabilitas Produksi",
    heading: "Portofolio Produk Unggulan",
    subheading:
      "Kami berpengalaman menangani perakitan PCB untuk berbagai kebutuhan industri elektronik.",
    buttonText: "Lihat Detail Teknis",
    items: [
      {
        id: "prod-tv-main",
        icon: "monitor",
        title: "Main Board TV & Display",
        description:
          "Perakitan PCB kompleks dengan kepadatan komponen tinggi untuk LED/OLED TV.",
        imageUrl: "/images/products/product_tv_main.jpeg",
      },
      {
        id: "prod-signage",
        icon: "layers",
        title: "Commercial Signage",
        description: "Solusi PCB tahan lama untuk layar informasi publik yang menyala 24/7.",
        imageUrl: "/images/products/product_signage.jpeg",
      },
      {
        id: "prod-psu",
        icon: "zap",
        title: "Power Supply Unit (PSU)",
        description:
          "Perakitan komponen daya dengan standar keamanan kelistrikan yang ketat.",
        imageUrl: "/images/products/product_psu.jpeg",
      },
    ],
  },

  systems: {
    eyebrow: "Teknologi Pendukung",
    heading: "Ekosistem Smart Factory",
    subheading: "Infrastruktur IT kami menjamin transparansi dan akurasi data produksi.",
    items: [
      {
        id: "sys-mes",
        icon: "server",
        title: "Manufacturing Execution System (MES)",
        description:
          "Jantung digital pabrik yang merekam setiap aktivitas produksi untuk traceability penuh.",
        imageUrl: "/images/systems/system_mes.png",
        attachments: [
            { title: "Fitur Dashboard MES", pdfUrl: "#" },
            { title: "Alur Data Integrasi", pdfUrl: "#" }
        ]
      },
      {
        id: "sys-material",
        icon: "smartphone",
        title: "Mobile Material Control",
        description: "Aplikasi seluler untuk scan QR Code material, mencegah kesalahan input manusia.",
        imageUrl: "/images/systems/system_qr.png",
        attachments: [
            { title: "Panduan Mobile Scanner", pdfUrl: "#" }
        ]
      },
      {
        id: "sys-3r",
        icon: "wifi",
        title: "RFID Quality Tracking",
        description:
          "Pelacakan status perbaikan (Repair/Rework) menggunakan tag RFID.",
        imageUrl: "/images/systems/system_rfid.png",
        attachments: [
            { title: "Prosedur 3R", pdfUrl: "#" },
        ]
      },
      {
        id: "sys-inventory",
        icon: "database",
        title: "Smart Inventory",
        description:
          "Manajemen stok gudang yang terhubung langsung dengan rencana produksi.",
        imageUrl: "/images/systems/system_inventory.png",
        attachments: [
            { title: "Laporan Stok Real-time", pdfUrl: "#" }
        ]
      },
    ],
  },

  quality: {
    eyebrow: "Standar Internasional",
    heading: "Jaminan Kualitas Tanpa Kompromi",
    subheading: "Kami mematuhi standar global untuk memastikan produk aman dan andal.",
    items: [
      {
        id: "sertifikasi-iso",
        icon: "award",
        title: "Sertifikasi ISO",
        description: "ISO 9001 (Mutu) & ISO 14001 (Lingkungan).",
        imageUrl: "/images/quality/quality_iso.png",
        attachments: [
          { title: "Sertifikat ISO 9001:2015", pdfUrl: "#" },
          { title: "Sertifikat ISO 14001:2015", pdfUrl: "#" },
        ],
      },
      {
        id: "kepatuhan-rohs",
        icon: "shield",
        title: "RoHS Compliant",
        description: "Bebas bahan berbahaya (Timbal, Merkuri, dll).",
        imageUrl: "/images/quality/quality_rohs.png",
        attachments: [
          { title: "Deklarasi RoHS", pdfUrl: "#" },
        ],
      },
      {
        id: "komitmen-mutu",
        icon: "check-square",
        title: "Kebijakan Mutu",
        description: "Target Zero Defect dengan inspeksi 3D AOI & SPI.",
        imageUrl: "/images/quality/quality_check.png",
        attachments: [
          { title: "Dokumen Kebijakan Mutu", pdfUrl: "#" },
        ],
      },
    ],
  },

  facilities: {
    homepage: {
      eyebrow: "Infrastruktur",
      heading: "Fasilitas Produksi Canggih",
      subheading: "Investasi teknologi terbaik untuk hasil terbaik.",
    },
    categories: [
      {
        id: "smt-assembly",
        title: "Lini SMT High-Speed",
        description:
          "Kombinasi mesin Panasonic NPM-W2 & CM-602 untuk throughput tinggi.",
        imageUrl: "/images/facility/facility_smt.jpeg",
        machines: [
          {
            id: "panasonic-npm-w2",
            name: "Panasonic NPM-W2",
            description: "Mesin mounter modular dengan akurasi tinggi dan fleksibilitas nozzle.",
            imageUrl: "/images/facility/facility_lines.jpeg",
            specs: [
              { label: "Kecepatan", value: "77,000 CPH" },
              { label: "Akurasi", value: "±0.035mm" },
              { label: "Ukuran PCB Max", value: "750 x 550 mm" },
            ],
          },
        ],
      },
      {
        id: "inspection-qc",
        title: "Teknologi Inspeksi",
        description: "Mesin inspeksi optik (AOI) dan pasta solder (SPI) 3 Dimensi.",
        imageUrl: "/images/facility/facility_aoi.jpeg",
        machines: [
          {
            id: "kohyoung-spi-3d",
            name: "Koh Young 3D SPI",
            description: "Mendeteksi volume pasta solder presisi untuk mencegah defect soldering.",
            imageUrl: "/images/facility/facility_aoi.jpeg",
            specs: [
              { label: "Teknologi", value: "Moire Interferometry" },
              { label: "Resolusi", value: "15 µm" },
            ],
          },
        ],
      },
      {
        id: "capacity-lines",
        title: "Kapasitas Pabrik",
        description: "Siap menangani lonjakan permintaan produksi (Peak Season).",
        imageUrl: "/images/facility/facility_lines.jpeg",
        machines: [],
        specs: [
          { label: "Total Area", value: "7,081 m²" },
          { label: "Jumlah Lini", value: "5 Line SMT" },
          { label: "Total Kapasitas", value: "± 15 Juta Point/Hari" },
        ],
      },
    ],
  },

  contact: {
    eyebrow: "Hubungi Kami",
    heading: "Siap Memulai Proyek?",
    subheading: "Diskusikan kebutuhan manufaktur Anda dengan tim ahli kami.",
    info: {
      address: "JL. Jababeka IV Blok C1 A,B, Kawasan Industri Jababeka 1, Cikarang, Bekasi",
      phone: "(021) 8932 8362",
      website: "www.ohme.kr",
      emails: [
        { type: "Marketing", email: "sales@ohme.kr" },
        { type: "Support", email: "cs@ohme.kr" },
      ],
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=...",
    },
    form: {
      name: "Nama Lengkap",
      email: "Alamat Email",
      message: "Detail Kebutuhan Produksi...",
      button: "Kirim Penawaran",
    },
  },

  contactCS: {
    whatsappUrl: "https://wa.me/628562160039",
  },

  catalogPage: {
    hero: {
      eyebrow: "Katalog Layanan",
      heading: "Solusi Manufaktur End-to-End",
      subheading: "Spesifikasi teknis dan kemampuan produksi kami.",
    },
    specs: {
      heading: "Mengapa Kami Unggul?",
      items: [
        {
          icon: "zap",
          title: "Kecepatan Tinggi",
          description: "Kapasitas jutaan point per hari.",
        },
        {
          icon: "maximize",
          title: "Presisi Mikro",
          description: "Mampu memasang chip 0201 & BGA.",
        },
        {
          icon: "check-circle",
          title: "Jaminan Kualitas",
          description: "Inspeksi AOI & SPI 100%.",
        },
        {
          icon: "truck",
          title: "Tepat Waktu",
          description: "Sistem logistik terintegrasi.",
        },
        {
          icon: "users",
          title: "Tim Ahli",
          description: "Engineer bersertifikasi.",
        },
      ],
    },
    gallery: {
      heading: "Galeri & Studi Kasus",
      items: [
        {
          id: "tv-main-board",
          imageUrl: "/images/products/product_tv_main.jpeg",
          title: "Main Board LED TV",
          description: "Perakitan PCB utama untuk Smart TV 4K/8K.",
          detail: {
            description_long: "Kami memproduksi main board untuk berbagai merek TV global. Proses mencakup pemasangan BGA, konektor presisi, dan coating pelindung.",
            pdfUrl: "#",
            specs: [
                { label: "Komponen", value: "BGA, QFP, SOP" },
                { label: "Ukuran PCB", value: "Max 400x500mm" },
                { label: "Surface Finish", value: "ENIG / OSP" }
            ],
            galleryImages: ["/images/products/product_tv_main.jpeg"],
          },
        },
      ],
    },
  },
};