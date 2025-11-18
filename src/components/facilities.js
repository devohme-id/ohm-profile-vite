// src/components/facilities.js

export function renderFacilities(data) {
  // Loop 'data.categories' (dari data.js baru)
  const itemsHTML = data.categories
    .map(
      (category) => `
    
    <a href="/fasilitas-katalog.html?category=${category.id}" 
       class="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">

      <div class="h-48 w-full overflow-hidden">
        <img
          src="${category.imageUrl}"
          alt="Fasilitas ${category.title}"
          class="w-full h-full object-cover"
        >
      </div>

      <div class="p-6 flex flex-col grow">
        <h3 class="text-2xl font-bold text-slate-900 mb-3">${category.title}</h3>
        <p class="text-slate-600 leading-relaxed mb-6 grow">${category.description}</p>
        
        <span class="mt-4 font-semibold text-slate-500 group-hover:text-slate-700 transition-colors">
          Lihat Detail Kategori &rarr;
        </span>
      </div>

    </a>
  `
    )
    .join("");

  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="max-w-3xl mx-auto text-center mb-16">
        <span class="block text-sm font-semibold text-ohm-red uppercase tracking-wide">${data.homepage.eyebrow}</span>
        <h2 class="mt-2 text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">${data.homepage.heading}</h2>
        <p class="mt-4 text-lg text-slate-600 leading-relaxed">${data.homepage.subheading}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        ${itemsHTML}
      </div>
    </div>
  `;
}
