// src/main.js

import './style.css'
import { companyData } from './api/data.js'

import { renderNavbar } from './components/navigation.js'
import { renderHero } from './components/hero.js'
import { renderAbout } from './components/about.js'
import { renderMilestones } from './components/milestones.js'
import { renderServices } from './components/services.js'
import { renderProducts } from './components/products.js'
import { renderSystems } from './components/systems.js'
import { renderContact } from './components/contact.js'
import { renderFooter } from './components/footer.js'

// Fungsi "Render" Halaman
document.addEventListener('DOMContentLoaded', () => {

  // Ambil "cangkang" kosong
  const navbarContainer = document.querySelector('#navbar-container');
  const heroSection = document.querySelector('#home');
  const aboutSection = document.querySelector('#about');
  const milestonesSection = document.querySelector('#milestones');
  const servicesSection = document.querySelector('#services');
  const productsSection = document.querySelector('#products');
  const systemsSection = document.querySelector('#systems');
  const contactSection = document.querySelector('#contact');
  const footerContainer = document.querySelector('#footer-container');

  // Inject HTML dengan data baru
  // Perhatikan perubahan di baris navbar, hero, dan contact
  navbarContainer.innerHTML = renderNavbar(companyData.navigation);
  heroSection.innerHTML = renderHero(companyData.hero);
  aboutSection.innerHTML = renderAbout(companyData.about);
  milestonesSection.innerHTML = renderMilestones(companyData.milestones);
  servicesSection.innerHTML = renderServices(companyData.services);
  productsSection.innerHTML = renderProducts(companyData.products);
  systemsSection.innerHTML = renderSystems(companyData.systems);
  contactSection.innerHTML = renderContact(companyData.contact);
  footerContainer.innerHTML = renderFooter(companyData.navigation);

  // Jalankan fungsionalitas (menu, scroll) SETELAH HTML di-inject
  setupEventListeners();
});


// Fungsi untuk semua fungsionalitas (menu, scroll, dll)
function setupEventListeners() {

  // --- FUNGSI MENU MOBILE (HAMBURGER) ---
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

  // --- FUNGSI ACTIVE LINK & TUTUP MENU ---
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("a.nav-link");

  // Fungsi untuk tutup menu (dipakai di 2 tempat)
  const closeMenu = () => {
    if(!mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.add("hidden");
      iconOpen.classList.remove("hidden");
      iconClose.classList.add("hidden");
    }
  };

  // 1. Tutup menu saat link di-klik
  navLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  // 2. Atur active link saat scroll
  window.addEventListener("scroll", () => {
    let current = "home"; // Default ke home

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= (sectionTop - 80)) { // 80px offset untuk navbar
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(a => {
      a.classList.remove("text-ohm-red", "font-bold");
      a.classList.add("text-slate-600");

      if (a.getAttribute("href") == "#" + current) {
        a.classList.add("text-ohm-red", "font-bold");
        a.classList.remove("text-slate-600");
      }
    });
  });
}