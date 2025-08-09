/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_cMhD-XD7.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$BaseLayout } from './404_cKZbEBIF.mjs';
/* empty css                          */

const $$Astro = createAstro("https://readingrhythms.co");
const $$Apply = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Apply;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Reading Rhythms | Apply", "description": "Apply to bring Reading Rhythms to your city. Host application form for community builders.", "showNavbar": true, "mainClasses": "full-height-mobile w-screen md:h-screen flex items-center justify-center" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full h-full max-w-6xl mx-auto pt-8"> <div class="text-center mb-8 px-4"> <h1 class="text-3xl md:text-4xl lg:text-5xl text-dark-gray font-display tracking-wider mb-4">
Join the <span class="bg-gradient-to-r from-jean via-rust to-dark-purple bg-clip-text text-transparent">Team!</span> </h1> <p class="text-lg md:text-xl text-dark-gray/70 font-light max-w-2xl mx-auto">
Join our community of passionate Chapter Leads and create magical reading experiences in your area.
</p> </div> <div class="fillout-wrapper w-full bg-white rounded-xl shadow-lg overflow-hidden mb-24 md:mb-0"> <iframe src="https://form.fillout.com/t/hxpyHGZs3Aus" width="100%" height="550" frameborder="0" marginheight="0" marginwidth="0" style="min-height: 550px;" class="w-full">
        Loading...
      </iframe> </div> </div> ` })} `;
}, "/home/readingrhythms/Reading-Rhythms/src/pages/apply.astro", void 0);

const $$file = "/home/readingrhythms/Reading-Rhythms/src/pages/apply.astro";
const $$url = "/apply";

export { $$Apply as default, $$file as file, $$url as url };
