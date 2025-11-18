// src/components/footer.js

// REVISI: Fungsi ini sekarang butuh 'navigation' dan 'contactInfo'
export function renderFooter(navigation, contactInfo) {
  // --- Ikon (Sama seperti di contact.js) ---
  const ICONS = {
    location: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-ohm-red shrink-0 mt-1"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>`,
    phone: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-ohm-red shrink-0 mt-1"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.837 3.602a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>`,
    email: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-ohm-red shrink-0 mt-1"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>`,
  };

  // REVISI: Kita saring linknya, tidak perlu semua (Tidak redundant)
  const quickLinks = navigation.filter((link) =>
    ["Beranda", "Tentang Kami", "Layanan", "Kualitas", "Kontak"].includes(
      link.text
    )
  );

  const linksHTML = quickLinks
    .map(
      (link) => `
    <li>
      <a href="${link.href}" class="text-slate-300 hover:text-ohm-red transition-colors duration-200">
        ${link.text}
      </a>
    </li>
  `
    )
    .join("");

  // REVISI: Ambil email dari contactInfo
  const emailsHTML = contactInfo.emails
    .map(
      (item) => `
    <a href="mailto:${item.email}" class="block text-slate-300 hover:text-ohm-red transition-colors duration-200 truncate">${item.email}</a>
  `
    )
    .join("");

  // REVISI: Layout 3 kolom
  return `
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        <div class="md:col-span-5 lg:col-span-4">
          <a href="#home" class="flex items-center group mb-4">
            <img class="h-9 w-auto" src="/images/logo.png" alt="PT. OHM Electronics Logo">
            <span class="ml-2 text-lg font-bold text-white group-hover:text-ohm-red transition-colors">PT. OHM Electronics</span>
          </a>
          <p class="text-sm text-slate-400 leading-relaxed">
            Mitra manufaktur PCB Assembly SMT terpercaya Anda. Kami hadir untuk mewujudkan inovasi Anda dengan presisi dan kualitas teruji.
          </p>
        </div>

        <div class="md:col-span-3 lg:col-span-2 lg:mx-auto">
          <h3 class="text-base font-semibold text-white uppercase tracking-wider mb-4">Navigasi</h3>
          <ul class="space-y-3">
            ${linksHTML}
          </ul>
        </div>

        <div class="md:col-span-4 lg:col-span-6">
          <h3 class="text-base font-semibold text-white uppercase tracking-wider mb-4">Hubungi Kami</h3>
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              ${ICONS.location}
              <span class="text-sm text-slate-300">${contactInfo.address.replace(
                /<br>/g,
                ", "
              )}</span>
            </li>
            <li class="flex items-start gap-3">
              ${ICONS.phone}
              <span class="text-sm text-slate-300">${contactInfo.phone}</span>
            </li>
            <li class="flex items-start gap-3">
              ${ICONS.email}
              <div class="text-sm">
                ${emailsHTML}
              </div>
            </li>
          </ul>
        </div>

      </div>

      <div class="mt-12 pt-8 border-t border-slate-700">
        <p class="text-center text-sm text-slate-400">
          &copy; ${new Date().getFullYear()} PT. OHM Electronics Indonesia. All Rights Reserved.
        </p>
      </div>
    </div>
  `;
}
