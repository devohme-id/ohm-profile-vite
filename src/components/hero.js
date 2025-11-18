// src/components/hero.js

export function renderHero(heroSlides) {
  const slidesHTML = heroSlides
    .map(
      (slide) => `
    <li class="splide__slide" data-splide-interval="7000">
      <img src="${slide.imageUrl}" alt="${slide.tagline}" class="absolute top-0 left-0 w-full h-full object-cover z-0">

      <div class="relative h-screen flex items-center justify-center text-center text-white">
        <div class="absolute inset-0 bg-black/50 z-10"></div>
        
        <div class="relative z-20 p-4 max-w-3xl slide-content">
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">${slide.title}</h1>
          <p class="text-xl md:text-2xl mb-8 font-light text-slate-200">${slide.tagline}</p>
          <a href="#contact" class="bg-ohm-red hover:bg-ohm-red-dark text-white font-bold py-3 px-8 rounded-md text-lg transition duration-300 z-30 relative">
            ${slide.buttonText}
          </a>
        </div>

      </div>
    </li>
  `
    )
    .join("");

  return `
    <div class="splide__track">
      <ul class="splide__list">
        ${slidesHTML}
      </ul>
    </div>
  `;
}
