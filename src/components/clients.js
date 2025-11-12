// src/components/clients.js

export function renderClients(data) {

  // Buat <li> untuk setiap logo
  const logosHTML = data.items.map(client => `
    <li class="flex justify-center items-center p-4">
      <img
        src="${client.logoUrl}"
        alt="${client.name}"
        class="h-10 w-auto opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
      >
    </li>
  `).join('');

  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <h3 class="text-center text-base font-semibold text-slate-500 uppercase tracking-wider">
        ${data.heading}
      </h3>

      <ul class="mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-4">
        ${logosHTML}
      </ul>

    </div>
  `;
}