// src/components/products.js

export function renderProducts(data) {

  const itemsHTML = data.items.map(product => `
    <div class="bg-white rounded-lg border border-slate-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col overflow-hidden">

      <div class="h-48 w-full overflow-hidden">
        <img
          src="${product.imageUrl}"
          alt="Produk ${product.title}"
          class="w-full h-full object-cover"
        >
      </div>

      <div class="p-6 flex flex-col flex-grow">
        <div class="mb-4">
          ${product.icon} </div>
        <h3 class="text-xl font-bold text-slate-900 mb-2">${product.title}</h3>
        <p class="text-slate-600 leading-relaxed flex-grow">${product.description}</p>
      </div>
    </div>
  `).join('');

  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="max-w-3xl mx-auto text-center mb-16">
        <span class="block text-sm font-semibold text-ohm-red uppercase tracking-wide">${data.eyebrow}</span>
        <h2 class="mt-2 text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">${data.heading}</h2>
        <p class="mt-4 text-lg text-slate-600 leading-relaxed">${data.subheading}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        ${itemsHTML}
      </div>
    </div>
  `;
}