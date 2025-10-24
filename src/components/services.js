// src/components/services.js

// PASTIKAN ADA KATA 'export' DI SINI
export function renderServices(data) {

  const itemsHTML = data.items.map(service => `
    <div class="bg-white p-6 rounded-lg border border-slate-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div class="mb-4">
        ${service.icon} </div>
      <h3 class="text-xl font-bold text-slate-900 mb-2">${service.title}</h3>
      <p class="text-slate-600 leading-relaxed">${service.description}</p>
    </div>
  `).join('');

  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="max-w-3xl mx-auto text-center mb-16">
        <span class="block text-sm font-semibold text-ohm-red uppercase tracking-wide">${data.eyebrow}</span>
        <h2 class="mt-2 text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">${data.heading}</h2>
        <p class="mt-4 text-lg text-slate-600 leading-relaxed">${data.subheading}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        ${itemsHTML}
      </div>
    </div>
  `;
}