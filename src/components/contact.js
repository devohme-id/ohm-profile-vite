// src/components/contact.js

export function renderContact(data) {
  // --- Ikon SVG (didefinisikan di sini) ---
  const ICONS = {
    location: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-ohm-red shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>`,
    phone: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-ohm-red shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.837 3.602a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>`,
    email: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-ohm-red shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>`,
  };

  const emailsHTML = data.info.emails
    .map(
      (item) => `
    <li class="truncate">
      <span class="font-medium">${item.type}:</span>
      <a href="mailto:${item.email}" class="text-slate-300 hover:text-ohm-red underline">${item.email}</a>
    </li>
  `
    )
    .join("");

  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="max-w-3xl mx-auto text-center mb-16">
        <span class="block text-sm font-semibold text-ohm-red uppercase tracking-wide">${
          data.eyebrow
        }</span>
        <h2 class="mt-2 text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">${
          data.heading
        }</h2>
        <p class="mt-4 text-lg text-slate-600 leading-relaxed">${
          data.subheading
        }</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

        <div class="bg-slate-800 text-slate-100 p-8 rounded-lg shadow-lg h-full">
          <h3 class="text-3xl font-bold mb-8 text-white">Informasi Kontak</h3>
          
          <ul class="space-y-6">
            <li class="flex items-start gap-4">
              ${ICONS.location}
              <div>
                <h4 class="text-lg font-semibold text-white mb-1">Alamat Kantor</h4>
                <p class="text-slate-300 leading-relaxed">
                  ${data.info.address.replace(/<br>/g, "<br>")}
                </p>
              </div>
            </li>
            <li class="flex items-start gap-4">
              ${ICONS.phone}
              <div>
                <h4 class="text-lg font-semibold text-white mb-1">Telepon</h4>
                <p class="text-slate-300 leading-relaxed">${data.info.phone}</p>
              </div>
            </li>
            <li class="flex items-start gap-4">
              ${ICONS.email}
              <div>
                <h4 class="text-lg font-semibold text-white mb-1">Email</h4>
                <ul class="space-y-1 text-slate-300">
                  ${emailsHTML}
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <div class="bg-white p-8 rounded-lg border border-slate-200 shadow-sm h-full">
          <h3 class="text-3xl font-bold text-slate-900 mb-8">Kirim Pesan Cepat</h3>
          
          <form action="#" method="POST" class="space-y-4">
            <div>
              <label for="name" class="sr-only">${data.form.name}</label>
              <input type="text" name="name" id="name" placeholder="${
                data.form.name
              }" required
                     class="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ohm-red focus:border-transparent">
            </div>
            <div>
              <label for="email" class="sr-only">${data.form.email}</label>
              <input type="email" name="email" id="email" placeholder="${
                data.form.email
              }" required
                     class="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ohm-red focus:border-transparent">
            </div>
            <div>
              <label for="message" class="sr-only">${data.form.message}</label>
              <textarea name="message" id="message" placeholder="${
                data.form.message
              }" rows="5" required
                        class="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ohm-red focus:border-transparent"></textarea>
            </div>
            <div>
              <button type="submit"
                      class="w-full bg-ohm-red hover:bg-ohm-red-dark text-white font-bold py-3 px-6 rounded-md text-lg transition duration-300">
                  ${data.form.button}
              </button>
            </div>
          </form>
        </div>

        <div class="bg-white rounded-lg border border-slate-200 shadow-sm h-full flex flex-col overflow-hidden">
          <iframe 
            src="${data.info.mapEmbedUrl}" 
            class="w-full h-full min-h-[300px] lg:min-h-0 border-0" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>

      </div>
    </div>
  `;
}
