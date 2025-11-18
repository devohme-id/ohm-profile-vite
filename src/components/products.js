// src/components/products.js

// --- FUNGSI 1: RENDER (Membuat HTML) ---
export function renderProducts(data) {
  // 1. Buat Tombol Tab
  const tabButtonsHTML = data.items
    .map(
      (product, index) => `
    <button 
      role="tab" 
      aria-selected="${index === 0 ? "true" : "false"}" 
      aria-controls="tabpanel-${product.id}" 
      id="tab-${product.id}"
      class="product-tab-btn shrink-0 px-6 py-3 text-lg font-medium border-b-2 transition-all duration-300
             ${
               index === 0
                 ? "border-pink-600 text-pink-600" // 'pink-600' sesuai warna baru
                 : "border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300"
             }"
    >
      ${product.title}
    </button>
  `
    )
    .join("");

  // 2. Buat Konten Tab (Layout Unik: Gambar Kiri, Teks Kanan)
  const tabContentsHTML = data.items
    .map(
      (product, index) => `
    <div 
      role="tabpanel" 
      id="tabpanel-${product.id}" 
      aria-labelledby="tab-${product.id}"
      class="product-tab-content grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center py-12 transition-opacity duration-300
             ${index !== 0 ? "hidden" : ""}"
    >
      <div class="h-64 md:h-96 w-full overflow-hidden rounded-lg shadow-xl border border-slate-200">
        <img
          src="${product.imageUrl}"
          alt="Produk ${product.title}"
          class="w-full h-full object-cover"
        >
      </div>
      
      <div class="p-4">
        <div class="mb-4">
          ${product.icon}
        </div>
        <h3 class="text-3xl font-bold text-slate-900 mb-4">${product.title}</h3>
        <p class="text-lg text-slate-600 leading-relaxed mb-8">${
          product.description
        }</p>
        
        <a href="/katalog.html" 
           class="inline-block bg-slate-600 hover:bg-slate-700 text-white font-bold py-3 px-8 rounded-md text-lg transition duration-300">
          ${data.buttonText}
        </a>
      </div>
    </div>
  `
    )
    .join("");

  // 3. Kembalikan Seluruh Section
  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="max-w-3xl mx-auto text-center mb-12">
        <span class="block text-sm font-semibold text-pink-600 uppercase tracking-wide">${data.eyebrow}</span>
        <h2 class="mt-2 text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">${data.heading}</h2>
        <p class="mt-4 text-lg text-slate-600 leading-relaxed">${data.subheading}</p>
      </div>

      <div class="w-full">
        <div role="tablist" aria-label="Portofolio Produk" class="flex justify-center border-b border-slate-200 overflow-x-auto">
          ${tabButtonsHTML}
        </div>
        
        <div class="mt-8">
          ${tabContentsHTML}
        </div>
      </div>

    </div>
  `;
}

// --- FUNGSI 2: INIT (Menghidupkan Tab) ---
export function initProductTabs() {
  const tabButtons = document.querySelectorAll(".product-tab-btn");
  const tabContents = document.querySelectorAll(".product-tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // 1. Nonaktifkan semua tombol
      tabButtons.forEach((btn) => {
        btn.setAttribute("aria-selected", "false");
        btn.classList.remove("border-pink-600", "text-pink-600");
        btn.classList.add(
          "border-transparent",
          "text-slate-500",
          "hover:text-slate-800",
          "hover:border-slate-300"
        );
      });

      // 2. Aktifkan tombol yang diklik
      button.setAttribute("aria-selected", "true");
      button.classList.add("border-pink-600", "text-pink-600");
      button.classList.remove(
        "border-transparent",
        "text-slate-500",
        "hover:text-slate-800",
        "hover:border-slate-300"
      );

      // 3. Sembunyikan semua konten
      tabContents.forEach((content) => {
        content.classList.add("hidden");
      });

      // 4. Tampilkan konten yang sesuai
      const targetPanelId = button.getAttribute("aria-controls");
      const targetPanel = document.getElementById(targetPanelId);
      if (targetPanel) {
        targetPanel.classList.remove("hidden");
      }
    });
  });
}
