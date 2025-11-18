// src/main.js

import "./style.css";
import "@splidejs/splide/css";
import Splide from "@splidejs/splide";

import { companyData } from "./api/data.js";

// Impor semua komponen
import { renderNavbar } from "./components/navigation.js";
import { renderHero } from "./components/hero.js";
import { renderAbout } from "./components/about.js";
import { renderClients } from "./components/clients.js";
import { renderMilestones } from "./components/milestones.js";
import { renderServices } from "./components/services.js";
import { renderProducts, initProductTabs } from "./components/products.js";
import { renderSystems } from "./components/systems.js";
import { renderQuality } from "./components/quality.js";
import { renderFacilities } from "./components/facilities.js";
import { renderContact } from "./components/contact.js";
import { renderFooter } from "./components/footer.js";
import { renderFloatButtons } from "./components/float_buttons.js";

// Fungsi "Render" Halaman
document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.querySelector("#navbar-container");
  const heroSection = document.querySelector("#home");
  const aboutSection = document.querySelector("#about");
  const clientsSection = document.querySelector("#clients");
  const milestonesSection = document.querySelector("#milestones");
  const servicesSection = document.querySelector("#services");
  const productsSection = document.querySelector("#products");
  const systemsSection = document.querySelector("#systems");
  const qualitySection = document.querySelector("#quality");
  const facilitiesSection = document.querySelector("#facilities");
  const contactSection = document.querySelector("#contact");
  const footerContainer = document.querySelector("#footer-container");
  const floatContainer = document.querySelector("#float-buttons-container");

  // Inject HTML
  navbarContainer.innerHTML = renderNavbar(companyData.navigation);
  heroSection.innerHTML = renderHero(companyData.hero);
  aboutSection.innerHTML = renderAbout(companyData.about);
  clientsSection.innerHTML = renderClients(companyData.clients);
  milestonesSection.innerHTML = renderMilestones(companyData.milestones);
  servicesSection.innerHTML = renderServices(companyData.services);
  productsSection.innerHTML = renderProducts(companyData.products);
  systemsSection.innerHTML = renderSystems(companyData.systems);
  qualitySection.innerHTML = renderQuality(companyData.quality);
  facilitiesSection.innerHTML = renderFacilities(companyData.facilities);
  contactSection.innerHTML = renderContact(companyData.contact);
  footerContainer.innerHTML = renderFooter(
    companyData.navigation,
    companyData.contact.info
  );
  floatContainer.innerHTML = renderFloatButtons(companyData.contactCS);

  // Jalankan semua skrip setelah HTML di-render
  initPageScripts();
});

// --- FUNGSI UNTUK MENGAKTIFKAN SEMUA SKRIP ---
function initPageScripts() {
  // 1. Splide Image Carousel (Slider Hero)
  const splide = new Splide(".splide", {
    type: "fade",
    rewind: true,
    cover: true,
    autoplay: true,
    arrows: false,
    pagination: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    waitForTransition: true,
  });

  splide.on('active', (slide) => {
    splide.Components.Slides.forEach(s => {
      s.slide.classList.remove('is-active');
    });
    slide.slide.classList.add('is-active');
  });
  splide.mount();

  // 2. Animasi Fade-in on Scroll (Intersection Observer)
  const sections = document.querySelectorAll("section[id]");
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });
  
  // 3. Pause Marquee (Clients & Services)
  setupMarqueePause('marquee-wrapper');
  setupMarqueePause('services-marquee'); 

  // 4. Aktifkan Tab Produk
  initProductTabs();
  
  // 5. Aktifkan Tab Sistem (Donut Chart)
  // initSystemTabs(); 

  // 6. Fungsionalitas Navigasi & Float Button
  setupEventListeners();
}

// --- FUNGSI HELPER MARQUEE ---
function setupMarqueePause(elementId) {
  const scroller = document.getElementById(elementId);
  if (scroller) {
    const scrollerContainer = scroller.parentElement;
    scrollerContainer.addEventListener('mouseenter', () => {
      scroller.style.animationPlayState = 'paused';
    });
    scrollerContainer.addEventListener('mouseleave', () => {
      scroller.style.animationPlayState = 'running';
    });
  }
}

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

  const sections = document.querySelectorAll("section[id]");
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

  // Logika Tombol Back to Top
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

  // Logika Scroll Active Link
  if (sections.length > 0) {
    window.addEventListener("scroll", () => {
      let current = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 80) {
          current = section.getAttribute("id");
        }
      });
      navLinks.forEach((a) => {
        a.classList.remove("text-pink-600", "font-bold");
        a.classList.add("text-slate-600");
        if (a.getAttribute("href") == "#" + current) {
          a.classList.add("text-pink-600", "font-bold");
          a.classList.remove("text-slate-600");
        }
      });
    });
  }
}