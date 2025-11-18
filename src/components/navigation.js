// src/components/navigation.js

export function renderNavbar(navLinks) {
  // --- LOGIKA BARU: Deteksi Halaman ---
  const path = window.location.pathname;
  // Cek apakah kita di root (/) atau /index.html
  const isHomePage = path === "/" || path === "/index.html" || path === "";

  /**
   * Fungsi 'pintar' untuk membuat link yang benar.
   * @param {string} anchor - Link anchor (cth: '#about')
   */
  const getLinkHref = (anchor) => {
    if (isHomePage) {
      return anchor; // Jika di Beranda, tetap #about
    }
    // Jika di halaman lain (katalog.html, dll.)
    if (anchor === "#home") {
      return "/"; // Link 'Beranda' kembali ke root
    }
    // Ganti #about -> /index.html#about
    return `/index.html${anchor}`;
  };
  // --- BATAS LOGIKA BARU ---

  // Pisahkan "Kontak" dari link lain
  const mainLinks = navLinks.filter((link) => link.text !== "Kontak");
  const contactLink = navLinks.find((link) => link.text === "Kontak");

  // Buat HTML untuk link desktop (Gunakan getLinkHref)
  const desktopLinksHTML = mainLinks
    .map(
      (link) => `
    <a href="${getLinkHref(
      link.href
    )}" class="nav-link text-slate-600 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">${
        link.text
      }</a>
  `
    )
    .join("");

  // Buat HTML untuk SEMUA link mobile (Gunakan getLinkHref)
  const mobileLinksHTML = navLinks
    .map(
      (link) => `
    <a href="${getLinkHref(
      link.href
    )}" class="nav-link block text-slate-600 hover:text-pink-600 px-3 py-2 rounded-md text-base font-medium">${
        link.text
      }</a>
  `
    )
    .join("");

  return `
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-200/80">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">

          <a href="${getLinkHref(
            "#home"
          )}" class="shrink-0 flex items-center group">
            <img class="h-9 w-auto" src="/images/logo.png" alt="PT. OHM Electronics Logo">
            <span class="ml-2 text-lg font-bold text-slate-900 group-hover:text-pink-600 transition-colors">PT. OHM Electronics</span>
          </a>

          <div class="hidden md:flex items-center space-x-1" id="nav-links">
            ${desktopLinksHTML}

            <a href="${getLinkHref(
              contactLink.href
            )}" class="ml-4 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 transition-colors">
              ${contactLink.text}
            </a>
          </div>

          <div class="md:hidden flex items-center">
            <button id="hamburger-btn" class="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-pink-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600">
              <span class="sr-only">Buka menu</span>
              <svg id="icon-open" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <svg id="icon-close" class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

        </div>
      </div>

      <div class="hidden md:hidden absolute top-16 left-0 w-full bg-white shadow-lg py-4" id="mobile-menu">
        <div class="flex flex-col space-y-2 px-4">
          ${mobileLinksHTML} </div>
      </div>
    </nav>
  `;
}
