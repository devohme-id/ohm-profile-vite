// src/components/facility_category_content.js

export function renderFacilityCategory(categoryData) {

    let machinesGridHTML = '';
  
    // Cek apakah kategori ini punya mesin individual
    if (categoryData.machines && categoryData.machines.length > 0) {
      
      // Buat grid kartu untuk setiap mesin
      machinesGridHTML = categoryData.machines.map(machine => `
        <a href="/fasilitas-detail.html?id=${machine.id}" 
           class="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
          
          <div class="h-48 w-full overflow-hidden">
            <img src="${machine.imageUrl}" alt="${machine.name}" class="w-full h-full object-cover">
          </div>
          
          <div class="p-6 flex flex-col grow">
            <h3 class="text-xl font-bold text-slate-900 mb-2">${machine.name}</h3>
            <p class="text-slate-600 leading-relaxed mb-6 grow">${machine.description}</p>
            <span class="mt-4 font-semibold text-slate-500 group-hover:text-slate-700 transition-colors">
              Lihat Spesifikasi Teknis &rarr;
            </span>
          </div>
        </a>
      `).join('');
  
    } else if (categoryData.specs && categoryData.specs.length > 0) {
      
      // Jika tidak ada mesin, tampilkan daftar spesifikasi (kasus "Kapasitas & Lini Produksi")
      machinesGridHTML = `
        <div class="lg:col-span-2 bg-white p-8 rounded-lg border border-slate-200 shadow-sm">
          <h3 class="text-2xl font-bold text-slate-900 mb-6">Spesifikasi Detail</h3>
          <ul class="space-y-3">
            ${categoryData.specs.map(spec => `
              <li class="flex justify-between items-center text-lg border-b border-slate-100 pb-3">
                <span class="text-slate-600">${spec.label}</span>
                <span class="font-semibold text-slate-800 text-right">${spec.value}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      `;
    }
  
    return `
      <div class="bg-slate-800 pt-32 pb-16 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <a href="/#facilities" class="text-sm font-semibold text-slate-300 hover:text-ohm-red transition-colors mb-4 inline-block">
            &larr; Kembali ke Beranda
          </a>
  
          <span class="block text-sm font-semibold text-ohm-red uppercase tracking-wide">Katalog Fasilitas</span>
          <h1 class="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight">${categoryData.title}</h1>
          <p class="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">${categoryData.description}</p>
        </div>
      </div>
  
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${machinesGridHTML}
        </div>
      </div>
    `;
  }