// src/components/milestones.js
export function renderMilestones(data) {

  const itemsHTML = data.items.map(item => `
    <div class="relative pl-12 pb-12">
      <div class="absolute left-0 top-1 flex items-center justify-center h-6 w-6 bg-white border-2 border-ohm-red rounded-full">
        <span class="h-2 w-2 bg-ohm-red rounded-full"></span>
      </div>
      <div class="relative">
        <h3 class="text-xl font-bold text-slate-900">${item.date}</h3>
        <p class="mt-1 text-slate-600">${item.event}</p>
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

      <div class="relative max-w-2xl mx-auto">
        <div class="absolute left-3 top-0 h-full w-0.5 bg-slate-200" aria-hidden="true"></div>
        ${itemsHTML}
      </div>
    </div>
  `;
}