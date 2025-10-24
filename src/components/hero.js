// src/components/hero.js

export function renderHero(heroData) {
  return `
    <div class="relative h-screen flex items-center justify-center text-center text-white bg-hero-factory bg-cover bg-center">

      <div class="absolute inset-0 bg-black/50"></div>

      <div class="relative z-10 p-4 max-w-3xl">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">${heroData.name}</h1>
        <p class="text-xl md:text-2xl mb-8 font-light text-slate-200">${heroData.tagline}</p>
        <a href="#about" class="bg-ohm-red hover:bg-ohm-red-dark text-white font-bold py-3 px-8 rounded-md text-lg transition duration-300">
          ${heroData.buttonText}
        </a>
      </div>
    </div>
  `;
}