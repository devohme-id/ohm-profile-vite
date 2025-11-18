// src/components/float_buttons.js

export function renderFloatButtons(data) {
  // Ikon (Tidak berubah)
  const iconWA = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7"><path d="M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.7-.8.9-.1.1-.3.2-.5.1-.3-.1-.9-.3-1.8-1.1-.7-.6-1.1-1.4-1.3-1.6-.1-.2 0-.4.1-.5.1-.1.2-.2.4-.4.1-.1.2-.2.3-.4.1-.1.1-.3 0-.4-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2 1 2.4c.1.1 1.5 2.3 3.6 3.2.5.2.8.3 1.1.4.5.1.9.1 1.3.1.4 0 1.1-.4 1.3-.8.2-.4.2-.7.1-.8l-.2-.1z M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18.2c-4.5 0-8.2-3.7-8.2-8.2S7.5 3.8 12 3.8s8.2 3.7 8.2 8.2-3.7 8.2-8.2 8.2z"/></svg>`;
  const iconUp = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0-6.75 6.75M12 4.5l6.75 6.75" /></svg>`;

  return `
      <div class="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-4">
        
        <button 
          id="back-to-top-btn"
          aria-label="Kembali ke atas"
          class="bg-pink-600 hover:bg-pink-700 text-white p-4 rounded-full shadow-lg
                 opacity-0 max-h-0 overflow-hidden transition-all duration-300
                 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2"
        >
          ${iconUp}
        </button>
  
        <a 
          href="${data.whatsappUrl}" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Hubungi Customer Service via WhatsApp"
          class="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg
                 transition-all duration-300
                 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          ${iconWA}
        </a>
        
      </div>
    `;
}
