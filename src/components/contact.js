// src/components/contact.js

export function renderContact(data) {

  const emailsHTML = data.info.emails.map(item => `
    <li class="truncate">${item.type}: <a href="mailto:${item.email}" class="text-ohm-red hover:text-ohm-red-dark underline">${item.email}</a></li>
  `).join('');

  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="max-w-3xl mx-auto text-center mb-16">
        <span class="block text-sm font-semibold text-ohm-red uppercase tracking-wide">${data.eyebrow}</span>
        <h2 class="mt-2 text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">${data.heading}</h2>
        <p class="mt-4 text-lg text-slate-600 leading-relaxed">${data.subheading}</p>
      </div>

      <div class="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg border border-slate-200 shadow-sm">

        <div class="grid md:grid-cols-3 gap-8 mb-12 text-center md:text-left">

          <div>
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Alamat Kantor</h3>
            <p class="text-slate-600 leading-relaxed text-sm">
              ${data.info.address.replace(/<br>/g, '<br>')}
            </p>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Telepon</h3>
            <p class="text-slate-600 leading-relaxed">${data.info.phone}</p>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Email</h3>
            <ul class="space-y-1 text-slate-600">
              ${emailsHTML}
            </ul>
          </div>

        </div>

        <hr class="border-slate-200 mb-12">

        <form action="#" method="POST" class="max-w-lg mx-auto space-y-4">
          <div>
            <label for="name" class="sr-only">${data.form.name}</label>
            <input type="text" name="name" id="name" placeholder="${data.form.name}" required
                   class="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ohm-red focus:border-transparent">
          </div>
          <div>
            <label for="email" class="sr-only">${data.form.email}</label>
            <input type="email" name="email" id="email" placeholder="${data.form.email}" required
                   class="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ohm-red focus:border-transparent">
          </div>
          <div>
            <label for="message" class="sr-only">${data.form.message}</label>
            <textarea name="message" id="message" placeholder="${data.form.message}" rows="5" required
                      class="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ohm-red focus:border-transparent"></textarea>
          </div>
          <div>
            <button type="submit"
                    class="w-full bg-ohm-red hover:bg-ohm-red-dark text-white font-bold py-3 px-6 rounded-md text-lg transition duration-300">
                ${data.form.button}
            </button>
          </div>
        </form>

      </div>
    </div>
  `;
}