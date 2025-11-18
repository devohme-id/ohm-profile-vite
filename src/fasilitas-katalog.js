// src/fasilitas-katalog.js

import "./style.css"; 

import { companyData } from "./api/data.js";

import { renderNavbar } from "./components/navigation.js";
import { renderFooter } from "./components/footer.js";
import { renderFacilityCategory } from "./components/facility_category_content.js";
import { renderFloatButtons } from "./components/float_buttons.js";

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const categoryId = urlParams.get('category');
  
  const categoryData = companyData.facilities.categories.find(c => c.id === categoryId);

  const navbarContainer = document.querySelector("#navbar-container");
  const catalogContainer = document.querySelector("#facility-catalog-container");
  const footerContainer = document.querySelector("#footer-container");
  const floatContainer = document.querySelector("#float-buttons-container");

  navbarContainer.innerHTML = renderNavbar(companyData.navigation);
  footerContainer.innerHTML = renderFooter(companyData.navigation, companyData.contact.info);
  floatContainer.innerHTML = renderFloatButtons(companyData.contactCS);

  if (categoryData) {
    catalogContainer.innerHTML = renderFacilityCategory(categoryData);
    document.title = `${categoryData.title} - PT. OHM Electronics`;
    
  } else {
    // Error
    catalogContainer.innerHTML = `<div class="text-center py-40 max-w-7xl mx-auto">
      <h1 class="text-3xl font-bold text-pink-600">Kategori Tidak Ditemukan</h1>
      <p class="mt-4 text-lg text-slate-600">Maaf, kami tidak dapat menemukan detail untuk kategori ini.</p>
      <a href="/#facilities" class="mt-8 inline-block bg-pink-600 text-white font-bold py-3 px-8 rounded-md">Kembali ke Beranda</a>
    </div>`;
  }

  setupEventListeners();
});

// --- FUNGSI EVENT LISTENERS (NAV & FLOAT BUTTON) ---
function setupEventListeners() {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const iconOpen = document.getElementById("icon-open");
  const iconClose = document.getElementById("icon-close");

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
      iconOpen.classList.toggle("hidden");
      iconClose.classList.toggle("hidden");
    });
  }
  
  const navLinks = document.querySelectorAll("a.nav-link");
  const closeMenu = () => {
    if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.add("hidden");
      iconOpen.classList.remove("hidden");
      iconClose.classList.add("hidden");
    }
  };
  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  const backToTopBtn = document.getElementById("back-to-top-btn");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add("opacity-100", "max-h-16");
        backToTopBtn.classList.remove("opacity-0", "max-h-0");
      } else {
        backToTopBtn.classList.add("opacity-0", "max-h-0");
        backToTopBtn.classList.remove("opacity-100", "max-h-16");
      }
    });
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}