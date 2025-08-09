/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_cMhD-XD7.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$BaseLayout } from './404_cKZbEBIF.mjs';
/* empty css                              */

const $$Astro = createAstro("https://readingrhythms.co");
const $$Manhattan = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Manhattan;
  const getTomorrowsDate = () => {
    const tomorrow = /* @__PURE__ */ new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  };
  const tomorrowsDate = getTomorrowsDate();
  const fetchEvents = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-luma-api-key": "secret-EtDtVkTBFjFoltBNNgZO9EaUY"
      }
    };
    const apiUrl = `https://api.lu.ma/public/v1/calendar/list-events?after=${tomorrowsDate}&series_mode=sessions`;
    try {
      const response = await fetch(apiUrl, options);
      const data = await response.json();
      return data.entries.filter((entry) => entry.event.visibility === "public");
    } catch (err) {
      console.error(err);
      return [];
    }
  };
  await fetchEvents();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Reading Rhythms | Brooklyn Events", "description": "We throw the world\u2019s best reading parties. Bringing reading, ambient music, and cozy venues together to create a one of a kind experience. Bring any book you want. As seen on TV & in major media.", "showNavbar": true, "bodyClasses": "bg-luma-white text-black font-system", "extraClasses": "bg-luma-gray text-white font-system", "data-astro-cid-evdfwijl": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full pl-5 md:pl-20 md:ml-5" data-astro-cid-evdfwijl> <a href="https://bucketlisters.com/experience/reading-rhythms/" target="_self" class="underline pb-10" data-astro-cid-evdfwijl>< Back</a> <div class="md:mr-24 pb-10" data-astro-cid-evdfwijl> <h1 class="md:mb-4 text-xl md:text-3xl font-bold text-left" data-astro-cid-evdfwijl>Reading Rhythms Manhattan</h1> </div> </div> <div class="luma-wrapper max-w-4xl mx-auto" data-astro-cid-evdfwijl> <div class="flex items-center justify-between" data-astro-cid-evdfwijl> <iframe src="https://lu.ma/embed/calendar/cal-Q8l315UsVMWb6h6/events?lt=light&utm_source=bucketlisters" width="1000" height="1100" frameborder="0" style=" border-radius: 4px;" allowfullscreen="" aria-hidden="false" tabindex="0" data-astro-cid-evdfwijl></iframe> <div data-astro-cid-evdfwijl></div> </div>  </div>` })}`;
}, "/home/readingrhythms/Reading-Rhythms/src/pages/bucketlisters/manhattan.astro", void 0);

const $$file = "/home/readingrhythms/Reading-Rhythms/src/pages/bucketlisters/manhattan.astro";
const $$url = "/bucketlisters/manhattan";

export { $$Manhattan as default, $$file as file, $$url as url };
