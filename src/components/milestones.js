// src/components/milestones.js
export function renderMilestones(data) {
  const columnsHTML = data.years
    .map((yearData, index) => {
      // Kita butuh 'index' untuk konektor

      const eventsHTML = yearData.events
        .map(
          (eventText) => `
      <div class="milestone-card bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex items-start h-full">
        <span class="inline-block w-2 h-2 bg-pink-600 rounded-full mr-3 mt-1.5 shrink-0"></span>
        <p class="text-slate-700 leading-snug text-pretty">${eventText}</p>
      </div>
    `
        )
        .join("");

      // REVISI: Mengubah kontainer menjadi <li> dan menambahkan konektor
      return `
      <li class="relative flex flex-col gap-y-4">

        <div class="hidden lg:block lg:first:hidden absolute top-6 -left-9 w-full h-1 bg-slate-200 z-0">
          <span class="absolute top-1/2 left-0 -mt-1.5 w-3 h-3 bg-white border-2 border-slate-200 rounded-full"></span>
        </div>

        <div class="bg-pink-600 text-white font-bold p-3 text-center rounded-lg shadow-md relative z-10">
          ${yearData.label}
        </div>

        <div class="hidden lg:block absolute top-12 left-1/2 -ml-px h-full w-0.5 bg-slate-200 z-0"></div>

        <div class="flex flex-col gap-y-4 relative z-10">
          ${eventsHTML}
        </div>
      </li>
    `;
    })
    .join("");

  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="max-w-3xl mx-auto text-center mb-16">
        <span class="block text-sm font-semibold text-pink-600 uppercase tracking-wide">${data.eyebrow}</span>
        <h2 class="mt-2 text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">${data.heading}</h2>
        <p class="mt-4 text-lg text-slate-600 leading-relaxed">${data.subheading}</p>
      </div>

      <ul class="list-none p-0 m-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-8 gap-x-12 lg:gap-x-8 lg:pt-8">
          ${columnsHTML}
      </ul>

    </div>
  `;
}