// src/katalog.js

import "./style.css";

import { companyData } from "./api/data.js";

import { renderNavbar } from "./components/navigation.js";
import { renderFooter } from "./components/footer.js";
import { renderCatalogContent } from "./components/catalog_content.js";
import { renderFloatButtons } from "./components/float_buttons.js";

// Fungsi "Render" Halaman
document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.querySelector("#navbar-container");
  const catalogContainer = document.querySelector("#catalog-content-container");
  const footerContainer = document.querySelector("#footer-container");
  const floatContainer = document.querySelector("#float-buttons-container");

  // Inject HTML
  navbarContainer.innerHTML = renderNavbar(companyData.navigation);
  catalogContainer.innerHTML = renderCatalogContent(companyData.catalogPage);
  footerContainer.innerHTML = renderFooter(
    companyData.navigation,
    companyData.contact.info
  );
  floatContainer.innerHTML = renderFloatButtons(companyData.contactCS);

  setupEventListeners(); // Ganti nama fungsi
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
