// src/components/footer.js
export function renderFooter() {
  return `
    <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-slate-400">
      <p>&copy; ${new Date().getFullYear()} PT. OHM Electronics Indonesia. All Rights Reserved.</p>
    </div>
  `;
}