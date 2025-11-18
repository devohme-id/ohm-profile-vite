// src/components/services.js

export function renderServices(data) {
  // 1. Buat HTML untuk satu kartu layanan
  const itemsHTML = data.items
    .map(
      (service) => `
    
    <li class="shrink-0 mx-4 w-80"> 
      
      <div class="bg-white rounded-lg border border-slate-200 shadow-sm flex flex-col overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        
        <div class="h-48 w-full overflow-hidden">
          <img
            src="${service.imageUrl}"
            alt="Proses ${service.title}"
            class="w-full h-full object-cover" 
          >
        </div>
        
        <div class="p-6 flex flex-col grow">
          <div class="mb-4">
            ${service.icon}
          </div>
          
          <h3 class="text-xl font-bold text-slate-900 mb-2">${service.title}</h3>
          
          <p class="text-slate-600 leading-relaxed grow">${service.description}</p>
        </div>
      </div>

    </li>
  `
    )
    .join("");

  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="max-w-3xl mx-auto text-center mb-16">
        <span class="block text-sm font-semibold text-pink-600 uppercase tracking-wide">${data.eyebrow}</span>
        <h2 class="mt-2 text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">${data.heading}</h2>
        <p class="mt-4 text-lg text-slate-600 leading-relaxed">${data.subheading}</p>
      </div>

      <div class="relative w-full overflow-hidden">
        
        <div class="flex w-max animate-marquee" id="services-marquee">
          
          <ul class="flex items-stretch list-none p-0 m-0">
            ${itemsHTML}
          </ul>
          
          <ul class="flex items-stretch list-none p-0 m-0" aria-hidden="true">
            ${itemsHTML}
          </ul>

        </div>
        
        <div class="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-gray-50 to-transparent z-20 pointer-events-none"></div>
        <div class="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-gray-50 to-transparent z-20 pointer-events-none"></div>

      </div>
    </div>
  `;
}
