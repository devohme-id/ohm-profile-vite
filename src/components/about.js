// src/components/about.js
export function renderAbout(data) {
  // --- Ikon SVG (didefinisikan di sini agar komponen mandiri) ---
  const ICONS = {
    company: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-ohm-red shrink-0 mr-3 mt-0.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6M9 10.5h6M9 14.25h6M9 18h6" /></svg>`,
    category: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-ohm-red shrink-0 mr-3 mt-0.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M6 9h.008v.008H6V9Z" /></svg>`,
    location: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-ohm-red shrink-0 mr-3 mt-0.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>`,
    factory: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-ohm-red shrink-0 mr-3 mt-0.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 0 0-.12-1.03l-2.268-9.64a3.375 3.375 0 0 0-3.285-2.602H7.923a3.375 3.375 0 0 0-3.285 2.602l-2.268 9.64a4.5 4.5 0 0 0-.12 1.03v.228m19.5 0a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3m19.5 0a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3m16.5 0h.008v.008h-.008v-.008Zm-3 0h.008v.008h-.008v-.008Z" /></svg>`,
    phone: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-ohm-red shrink-0 mr-3 mt-0.5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.837 3.602a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>`,
  };

  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="max-w-3xl mx-auto text-center mb-16">
        <span class="block text-sm font-semibold text-ohm-red uppercase tracking-wide">${data.eyebrow}</span>
        <h2 class="mt-2 text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">${data.heading}</h2>
        <p class="mt-4 text-lg text-slate-600 leading-relaxed">${data.subheading}</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-5 lg:gap-16 items-start">

        <div class="lg:col-span-2 space-y-10 mb-12 lg:mb-0">
          
          <div class="bg-white p-8 rounded-lg border border-slate-200">
            <h3 class="text-2xl font-bold text-slate-900 mb-4">${data.mission.title}</h3>
            <p class="text-slate-600 leading-relaxed">${data.mission.text}</p>
          </div>

          <div class="bg-white p-8 rounded-lg border border-slate-200">
            <h3 class="text-2xl font-bold text-slate-900 mb-4">Komitmen Inti Kami</h3>
            <ul class="space-y-3 text-slate-600">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-ohm-red shrink-0 mr-3 mt-1"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                <span><strong>Kualitas Tanpa Kompromi:</strong> Menjamin standar 'Zero Defect' melalui QC berlapis.</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-ohm-red shrink-0 mr-3 mt-1"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                <span><strong>Inovasi & Presisi:</strong> Menggunakan teknologi SMT canggih untuk hasil yang presisi.</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-ohm-red shrink-0 mr-3 mt-1"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                <span><strong>Kemitraan Jangka Panjang:</strong> Sukses Anda adalah sukses kami.</span>
              </li>
            </ul>
          </div>

        </div>

        <div class="lg:col-span-3 bg-slate-50 rounded-lg border border-slate-200 overflow-hidden shadow-sm">
          
          <img 
            src="/images/factory-2.png" 
            alt="Fasilitas Produksi PT. OHM Electronics Indonesia" 
            class="w-full h-64 object-cover"
          >

          <div class="p-8">
            <h3 class="text-2xl font-bold text-slate-900 mb-6">Info Bisnis</h3>
            <ul class="space-y-4 text-slate-600">
              <li class="flex items-start">
                ${ICONS.company}
                <span class="wrap-break-words">${data.info.name}</span>
              </li>
              <li class="flex items-start">
                ${ICONS.category}
                <span class="wrap-break-words">${data.info.category}</span>
              </li>
              <li class="flex items-start">
                ${ICONS.location}
                <span class="wrap-break-words">${data.info.location}</span>
              </li>
              <li class="flex items-start">
                ${ICONS.factory}
                <span class="wrap-break-words">${data.info.factory}</span>
              </li>
              <li class="flex items-start">
                ${ICONS.phone}
                <span class="wrap-break-words">${data.info.phone}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;
}
