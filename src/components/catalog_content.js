// src/components/catalog_content.js

export function renderCatalogContent(data) {

    // 1. REVISI: "Spesifikasi Teknis" Sidebar
    // Dibuat lebih bersih dan sederhana (bukan kartu) agar Galeri lebih menonjol.
    const specsHTML = data.specs.items.map(item => `
      <li class="flex items-start gap-4">
        <div class="shrink-0 pt-1">
          ${item.icon.replace(/text-pink-600/g, 'text-pink-600')}
        </div>
        <div>
          <h4 class="text-lg font-semibold text-slate-900">${item.title}</h4>
          <p class="text-slate-600 text-sm leading-relaxed">${item.description}</p>
        </div>
      </li>
    `).join('');
  
    // 2. Galeri Produk (Tidak berubah, sudah bagus)
    const galleryHTML = data.gallery.items.map(item => `
      <a href="/produk-detail.html?id=${item.id}"
         class="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
  
        <img src="${item.imageUrl}" alt="${item.title}" class="w-full h-48 object-cover">
  
        <div class="p-5 flex flex-col grow">
          <h3 class="text-xl font-bold text-slate-900 mb-2">${item.title}</h3>
          <p class="text-slate-600 leading-relaxed grow">${item.description}</p>
  
          <span class="mt-4 font-semibold text-slate-500 group-hover:text-pink-600 transition-colors">
            Lihat Detail & Spek &rarr;
          </span>
        </div>
      </a>
    `).join('');
  
    // 3. REVISI: Mengembalikan Tata Letak 1/3 + 2/3
    return `
      <div class="bg-slate-800 pt-32 pb-16 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
  
          <a href="/" class="text-sm font-semibold text-slate-300 hover:text-pink-600 transition-colors mb-4 inline-block">
            &larr; Kembali ke Beranda
          </a>
          <span class="block text-sm font-semibold text-pink-600 uppercase tracking-wide">${data.hero.eyebrow}</span>
          <h1 class="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight">${data.hero.heading}</h1>
          <p class="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">${data.hero.subheading}</p>
        </div>
      </div>
  
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
  
          <div class="lg:col-span-1">
            <div class="bg-white p-6 rounded-lg border border-slate-200 shadow-sm sticky top-24">
              <h2 class="text-3xl font-bold text-slate-900 mb-6">${data.specs.heading}</h2>
              <ul class="space-y-6">
                ${specsHTML}
              </ul>
            </div>
          </div>
  
          <div class="lg:col-span-2">
            <h2 class="text-3xl font-bold text-slate-900 mb-6">${data.gallery.heading}</h2>
            <div class_class="grid grid-cols-1 md:grid-cols-2 gap-8">
              ${galleryHTML}
            </div>
          </div>
  
        </div>
      </div>
    `;
  }