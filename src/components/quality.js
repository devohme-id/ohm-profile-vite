// src/components/quality.js

export function renderQuality(data) {

  // Helper function untuk membuat HTML satu kartu
  const createCardHTML = (item) => `
    
    <a href="/kualitas-detail.html?id=${item.id}" 
       class="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group h-full">

      <div class="h-48 w-full overflow-hidden">
        <img 
          src="${item.imageUrl}" 
          alt="${item.title}" 
          class="w-full h-full object-scale-down" 
        >
      </div>
      
      <div class="p-6 flex flex-col grow">
        <div class="mb-4">
          ${item.icon}
        </div>
        <h3 class="text-xl font-bold text-slate-900 mb-2">${item.title}</h3>
        <p class_class="text-slate-600 leading-relaxed grow">${item.description}</p>
        
        <span class="mt-4 font-semibold text-pink-600 group-hover:text-pink-700 transition-colors">
          Lihat Dokumen &rarr; </span>
      </div>
    </a>
  `;

  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="max-w-3xl mx-auto text-center mb-16">
        <span class="block text-sm font-semibold text-pink-600 uppercase tracking-wide">${data.eyebrow}</span>
        <h2 class="mt-2 text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">${data.heading}</h2>
        <p class="mt-4 text-lg text-slate-600 leading-relaxed">${data.subheading}</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        
        <div class="lg:col-span-2 flex justify-center">
          <div class="w-full lg:w-2/3 xl:w-1j/2">
            ${createCardHTML(data.items[0])}
          </div>
        </div>

        <div class="w-full">
          ${createCardHTML(data.items[1])}
        </div>

        <div class="w-full">
          ${createCardHTML(data.items[2])}
        </div>

      </div>
    </div>
  `;
}