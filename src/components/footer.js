// src/components/footer.js

// Terima 'navLinks' sebagai argumen
export function renderFooter(navLinks) {

  // Buat HTML untuk link footer
  const footerLinksHTML = navLinks.map(link => `
    <a href="${link.href}" class="text-sm text-slate-400 hover:text-ohm-red transition-colors">${link.text}</a>
  `).join(' '); // dipisahkan spasi

  return `
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col items-center">

        <a href="#home" class="flex items-center group mb-6">
          <img class="h-9 w-auto" src="/images/logo.png" alt="PT. OHM Electronics Logo">
          <span class="ml-2 text-lg font-bold text-slate-500 group-hover:text-ohm-red transition-colors">PT. OHM Electronics</span>
        </a>

        <nav class="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6" aria-label="Footer">
          ${footerLinksHTML}
        </nav>

        <p class="text-center text-sm text-slate-400">
          &copy; ${new Date().getFullYear()} PT. OHM Electronics Indonesia. All Rights Reserved.
        </p>

      </div>
    </div>
  `;
}