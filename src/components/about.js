// src/components/about.js
export function renderAbout(data) {
  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="max-w-3xl mx-auto text-center mb-16">
        <span class_class="block text-sm font-semibold text-ohm-red uppercase tracking-wide">${data.eyebrow}</span>
        <h2 class="mt-2 text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">${data.heading}</h2>
        <p class="mt-4 text-lg text-slate-600 leading-relaxed">${data.subheading}</p>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-start">

        <div class="bg-white p-8 rounded-lg border border-slate-200">
          <h3 class="text-2xl font-bold text-slate-900 mb-4">${data.mission.title}</h3>
          <p class="text-slate-600 leading-relaxed">${data.mission.text}</p>
        </div>

        <div class="bg-slate-50 p-8 rounded-lg border border-slate-200">
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Info Bisnis</h3>
          <ul class="space-y-3 text-slate-600">
            <li class="flex items-start"><strong class="w-24 shrink-0">Nama</strong>: ${data.info.name}</li>
            <li class="flex items-start"><strong class="w-24 shrink-0">Kategori</strong>: ${data.info.category}</li>
            <li class="flex items-start"><strong class="w-24 shrink-0">Lokasi</strong>: ${data.info.location}</li>
            <li class="flex items-start"><strong class="w-24 shrink-0">Pabrik</strong>: ${data.info.factory}</li>
            <li class="flex items-start"><strong class="w-24 shrink-0">Telepon</strong>: ${data.info.phone}</li>
          </ul>
        </div>
      </div>
    </div>
  `;
}