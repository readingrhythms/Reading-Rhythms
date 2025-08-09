/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead, h as addAttribute } from '../astro_cMhD-XD7.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from './404_cKZbEBIF.mjs';
/* empty css                           */

const $$Astro = createAstro("https://readingrhythms.co");
const $$Events = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Events;
  const activeChapters = [
    {
      id: "ny",
      name: "NY",
      fullName: "Reading Rhythms New York",
      location: "New York State",
      calendarId: "cal-Q8l315UsVMWb6h6",
      description: "Events across New York State",
      status: "active"
    },
    {
      id: "nj",
      name: "NJ",
      fullName: "Reading Rhythms New Jersey",
      location: "New Jersey",
      calendarId: "cal-4yEtAsPtiPI0Nwi",
      description: "Events across New Jersey",
      status: "active"
    },
    {
      id: "ca",
      name: "CA",
      fullName: "Reading Rhythms California",
      location: "California",
      calendarId: "cal-Eo35suMbTdQnr20",
      description: "Events across California",
      status: "active"
    },
    {
      id: "global",
      name: "Global",
      fullName: "Reading Rhythms Global",
      location: "Special Events Worldwide",
      calendarId: "cal-CDoX2WaI5IHD5xs",
      description: "Exclusive global events and virtual sessions",
      status: "active"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Reading Rhythms | Events & Tickets", "description": "Buy tickets for Reading Rhythms events worldwide. Join active chapters or waitlists for launching cities.", "showNavbar": true, "data-astro-cid-ro7pgs3h": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="w-full px-0 pt-4 lg:pt-8" data-astro-cid-ro7pgs3h> <!-- Single Header --> <div class="text-center mb-6 max-w-4xl mx-auto px-4" data-astro-cid-ro7pgs3h> <h1 class="text-3xl md:text-4xl lg:text-5xl text-dark-gray font-display tracking-wider leading-tight mb-2 md:mb-4" data-astro-cid-ro7pgs3h>
Find Your Next <span class="bg-gradient-to-r from-jean via-rust to-dark-purple bg-clip-text text-transparent" data-astro-cid-ro7pgs3h>Reading Party</span> </h1> <p class="text-base md:text-lg text-dark-gray/70 font-light max-w-2xl mx-auto" data-astro-cid-ro7pgs3h>
Buy tickets for upcoming events
</p> </div> <!-- Mobile-First Tab Navigation - Horizontal Scroll --> <div class="flex justify-center mb-4 md:mb-6 px-4" data-astro-cid-ro7pgs3h> <div class="bg-gray-100 rounded-2xl p-2 overflow-x-auto scrollbar-hide inline-flex" data-astro-cid-ro7pgs3h> <div class="flex gap-1" data-astro-cid-ro7pgs3h> ${activeChapters.map((chapter, index) => renderTemplate`<button${addAttribute(`tab-button flex-shrink-0 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 whitespace-nowrap ${index === 0 ? "bg-white text-dark-gray shadow-md" : "text-dark-gray/60 hover:text-dark-gray hover:bg-white/50"}`, "class")}${addAttribute(chapter.id, "data-tab")} data-astro-cid-ro7pgs3h> ${chapter.name} </button>`)} </div> </div> </div> <!-- Tab Content - Nearly Full Width Luma Embeds --> <div class="tab-content-container mb-8 md:mb-12 px-0 mx-0 max-w-6xl md:mx-auto" data-astro-cid-ro7pgs3h> ${activeChapters.map((chapter, index) => renderTemplate`<div${addAttribute(`tab-content ${index === 0 ? "active" : "hidden"}`, "class")}${addAttribute(chapter.id, "data-content")} data-astro-cid-ro7pgs3h> <!-- Full Width Container --> <div class="w-full bg-white rounded-xl shadow-xl shadow-black/5 overflow-hidden md:mx-0" style="margin-left: -8px; margin-right: -8px; width: calc(100% + 16px);" data-astro-cid-ro7pgs3h> <!-- Minimal Padding for Maximum Calendar Space --> <div class="p-0" data-astro-cid-ro7pgs3h> <!-- Maximum Width Luma Calendar --> <div class="w-full" data-astro-cid-ro7pgs3h> <div class="calendar-container w-full" style="min-height: 900px;" data-astro-cid-ro7pgs3h> <iframe${addAttribute(`https://lu.ma/embed/calendar/${chapter.calendarId}/events?lt=light`, "src")} width="100%" height="900" frameborder="0" style="border: none; min-height: 900px; width: 100%; max-width: 100%;" allowfullscreen="" aria-hidden="false" tabindex="0" class="" loading="lazy" data-astro-cid-ro7pgs3h></iframe> </div> </div> </div> </div> </div>`)} </div> <!-- Host Application CTA --> <div class="bg-gradient-to-r from-dark-gray to-dark-purple rounded-2xl p-6 lg:p-8 text-center max-w-4xl mx-auto" data-astro-cid-ro7pgs3h> <h3 class="text-2xl lg:text-3xl font-display text-white mb-3 tracking-widest" data-astro-cid-ro7pgs3h>
Want to Host in Your City?
</h3> <p class="text-white/80 mb-4 max-w-xl mx-auto text-sm" data-astro-cid-ro7pgs3h>
We're always looking for passionate community builders to bring Reading Rhythms to new cities.
</p> <a href="/apply" class="inline-flex items-center justify-center px-8 py-4 bg-white text-dark-gray rounded-xl font-bold text-base hover:shadow-xl hover:shadow-white/25 transition-all duration-300 hover:-translate-y-1" data-astro-cid-ro7pgs3h>
Join the Team!
</a> </div> </div> ` })}  `;
}, "/home/readingrhythms/Reading-Rhythms/src/pages/events.astro", void 0);

const $$file = "/home/readingrhythms/Reading-Rhythms/src/pages/events.astro";
const $$url = "/events";

export { $$Events as default, $$file as file, $$url as url };
