// src/components/clients.js

export function renderClients(data) {
  // 1. REVISI: Ukuran logo diperbesar ke h-16 (64px) dan margin ditambah
  const logosHTML = data.items
    .map(
      (client) => `
    <li class="shrink-0 mx-14"> <img
        src="${client.logoUrl}"
        alt="${client.name}"
        class="h-16 w-auto opacity-60 grayscale" >
    </li>
  `
    )
    .join("");

  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <span class="text-center block text-sm font-semibold text-pink-600 uppercase tracking-wide">${data.eyebrow}</span>
      <h2 class="text-center mt-2 text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
        ${data.heading}
      </h2>

      <div class="relative w-full overflow-hidden mt-10">

        <div class="flex w-max animate-marquee" id="marquee-wrapper">

          <ul class="flex items-center list-none p-0 m-0">
            ${logosHTML}
          </ul>

          <ul class="flex items-center list-none p-0 m-0" aria-hidden="true">
            ${logosHTML}
          </ul>

        </div>

        <div class="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-gray-50 to-transparent z-20 pointer-events-none"></div>
        <div class="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-gray-50 to-transparent z-20 pointer-events-none"></div>

      </div>
    </div>
  `;
}
