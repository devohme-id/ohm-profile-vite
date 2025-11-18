// src/fasilitas-detail.js

import "./style.css";

import { companyData } from "./api/data.js";

import { renderNavbar } from "./components/navigation.js";
import { renderFooter } from "./components/footer.js";
import { renderFacilityDetail } from "./components/facility_detail_content.js";
import { renderFloatButtons } from "./components/float_buttons.js";

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const machineId = urlParams.get("id");
  const categoryId = urlParams.get("category"); // Baca ID Kategori

  let machineData = null;
  let categoryEyebrow = companyData.facilities.homepage.eyebrow; 

  for (const category of companyData.facilities.categories) {
    if (category.machines && category.machines.length > 0) {
      const found = category.machines.find((m) => m.id === machineId);
      if (found) {
        machineData = found;
        categoryEyebrow = category.title; 
        break;
      }
    }
  }

  const navbarContainer = document.querySelector("#navbar-container");
  const detailContainer = document.querySelector("#facility-detail-container");
  const footerContainer = document.querySelector("#footer-container");
  const floatContainer = document.querySelector("#float-buttons-container");

  navbarContainer.innerHTML = renderNavbar(companyData.navigation);
  footerContainer.innerHTML = renderFooter(
    companyData.navigation,
    companyData.contact.info
  );
  floatContainer.innerHTML = renderFloatButtons(companyData.contactCS);

  if (machineData) {
    // Kirim ID kategori ke fungsi render
    detailContainer.innerHTML = renderFacilityDetail(
      machineData,
      categoryEyebrow,
      categoryId 
    );
    document.title = `${machineData.name} - PT. OHM Electronics`;
  } else {
    // Gunakan ID Kategori di link error
    const backCategory = categoryId || 'smt-assembly';
    detailContainer.innerHTML = `<div class="text-center py-40 max-w-7xl mx-auto">
      <h1 class="text-3xl font-bold text-pink-600">Mesin Tidak Ditemukan</h1>
      <p class="mt-4 text-lg text-slate-600">Maaf, kami tidak dapat menemukan detail untuk mesin ini.</p>
      <a href="/fasilitas-katalog.html?category=${backCategory}" class="mt-8 inline-block bg-pink-600 text-white font-bold py-3 px-8 rounded-md">Kembali ke Katalog Fasilitas</a>
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