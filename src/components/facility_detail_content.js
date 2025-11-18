// src/components/facility_detail_content.js

// 1. TAMBAHKAN 'categoryId' SEBAGAI ARGUMEN
export function renderFacilityDetail(machine, categoryEyebrow, categoryId) {
  const specsHTML = machine.specs
    .map(
      (spec) => `
      <li class="flex justify-between border-b border-slate-200 py-3">
        <span class="font-medium text-slate-600">${spec.label}</span>
        <span class="font-semibold text-slate-900 text-right">${spec.value}</span>
      </li>
    `
    )
    .join("");

  return `
      <div class="bg-slate-100 pt-32 pb-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <a href="/fasilitas-katalog.html?category=${categoryId}" class="text-sm font-semibold text-slate-600 hover:text-ohm-red transition-colors mb-4 inline-block">
            &larr; Kembali ke Katalog Fasilitas
          </a>
  
          <span class="text-sm font-semibold text-ohm-red uppercase tracking-wide">${categoryEyebrow}</span>
          <h1 class="mt-2 text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">${machine.name}</h1>
        </div>
      </div>
  
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div>
            <img 
              src="${machine.imageUrl}" 
              alt="Fasilitas ${machine.name}" 
              class="w-full h-auto object-cover rounded-lg shadow-md border border-slate-200"
            >
          </div>
  
          <div>
            <h2 class="text-3xl font-bold text-slate-900 mb-4">Deskripsi Mesin</h2>
            <p class="text-lg text-slate-600 leading-relaxed mb-8">
              ${machine.description}
            </p>
  
            <h3 class="text-2xl font-bold text-slate-900 mb-4">Spesifikasi Teknis</h3>
            <ul class="mb-8 bg-slate-50 border border-slate-200 rounded-lg p-6">
              ${specsHTML}
            </ul>
          </div>
          
        </div>
      </div>
    `;
}
