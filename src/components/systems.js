// src/components/systems.js

export function renderSystems(data) {
  // 1. Kita pisahkan 4 item menjadi 2 grup (kiri dan kanan)
  const leftItems = data.items
    .slice(0, 2)
    .map(
      (item) => `
    <div class="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      
      <div class="h-48 w-full overflow-hidden">
        <img 
          src="${item.imageUrl}" 
          alt="Sistem ${item.title}" 
          class="w-full h-full object-cover"
        >
      </div>

      <div class="p-6 flex flex-col grow">
        <div class="mb-4">
          ${item.icon}
        </div>
        <h3 class="text-xl font-bold text-slate-900 mb-2">${item.title}</h3>
        <p class="text-slate-600 leading-relaxed grow">${item.description}</p>
      </div>
    </div>
  `
    )
    .join('<div class="h-8"></div>'); // Beri jarak antar kartu

  const rightItems = data.items
    .slice(2, 4)
    .map(
      (item) => `
    <div class="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">

      <div class="h-48 w-full overflow-hidden">
        <img 
          src="${item.imageUrl}" 
          alt="Sistem ${item.title}" 
          class="w-full h-full object-cover"
        >
      </div>

      <div class="p-6 flex flex-col grow">
        <div class="mb-4">
          ${item.icon}
        </div>
        <h3 class="text-xl font-bold text-slate-900 mb-2">${item.title}</h3>
        <p class="text-slate-600 leading-relaxed grow">${item.description}</p>
      </div>
    </div>
  `
    )
    .join('<div class="h-8"></div>'); // Beri jarak antar kartu

  // 2. Kembalikan Seluruh Section
  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="max-w-3xl mx-auto text-center mb-16">
        <span class="block text-sm font-semibold text-pink-600 uppercase tracking-wide">${data.eyebrow}</span>
        <h2 class="mt-2 text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">${data.heading}</h2>
        <p class="mt-4 text-lg text-slate-600 leading-relaxed">${data.subheading}</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
        
        <div class="space-y-8 order-2 lg:order-1">
          ${leftItems}
        </div>

        <div class="order-1 lg:order-2 px-8">
          <img 
            src="${data.items[0].imageUrl}" 
            alt="Sistem MES 4.0 Terintegrasi"
            class="w-full h-auto object-contain"
          >
          <p class="text-center text-slate-500 italic mt-4">
            Semua sistem terintegrasi dalam satu ekosistem MES 4.0
          </p>
        </div>

        <div class="space-y-8 order-3 lg:order-3">
          ${rightItems}
        </div>

      </div>

    </div>
  `;
}
