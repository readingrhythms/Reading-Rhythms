import '@astrojs/internal-helpers/path';
/* empty css                          */
import { A as AstroError, c as InvalidImageService, d as ExpectedImageOptions, E as ExpectedImage, e as createAstro, f as createComponent, g as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, h as addAttribute, s as spreadAttributes, i as renderComponent, j as renderHead, k as renderSlot } from '../astro_cMhD-XD7.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { i as isESMImportedImage, a as isLocalService, b as isRemoteImage, D as DEFAULT_HASH_PROPS } from '../astro/assets-service_v6fLM9IY.mjs';
/* empty css                        */

async function getConfiguredImageService() {
  if (!globalThis?.astroAsset?.imageService) {
    const { default: service } = await import(
      // @ts-expect-error
      '../astro/assets-service_v6fLM9IY.mjs'
    ).then(n => n.s).catch((e) => {
      const error = new AstroError(InvalidImageService);
      error.cause = e;
      throw error;
    });
    if (!globalThis.astroAsset)
      globalThis.astroAsset = {};
    globalThis.astroAsset.imageService = service;
    return service;
  }
  return globalThis.astroAsset.imageService;
}
async function getImage$1(options, imageConfig) {
  if (!options || typeof options !== "object") {
    throw new AstroError({
      ...ExpectedImageOptions,
      message: ExpectedImageOptions.message(JSON.stringify(options))
    });
  }
  if (typeof options.src === "undefined") {
    throw new AstroError({
      ...ExpectedImage,
      message: ExpectedImage.message(
        options.src,
        "undefined",
        JSON.stringify(options)
      )
    });
  }
  const service = await getConfiguredImageService();
  const resolvedOptions = {
    ...options,
    src: typeof options.src === "object" && "then" in options.src ? (await options.src).default ?? await options.src : options.src
  };
  const clonedSrc = isESMImportedImage(resolvedOptions.src) ? (
    // @ts-expect-error - clone is a private, hidden prop
    resolvedOptions.src.clone ?? resolvedOptions.src
  ) : resolvedOptions.src;
  resolvedOptions.src = clonedSrc;
  const validatedOptions = service.validateOptions ? await service.validateOptions(resolvedOptions, imageConfig) : resolvedOptions;
  const srcSetTransforms = service.getSrcSet ? await service.getSrcSet(validatedOptions, imageConfig) : [];
  let imageURL = await service.getURL(validatedOptions, imageConfig);
  let srcSets = await Promise.all(
    srcSetTransforms.map(async (srcSet) => ({
      transform: srcSet.transform,
      url: await service.getURL(srcSet.transform, imageConfig),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }))
  );
  if (isLocalService(service) && globalThis.astroAsset.addStaticImage && !(isRemoteImage(validatedOptions.src) && imageURL === validatedOptions.src)) {
    const propsToHash = service.propertiesToHash ?? DEFAULT_HASH_PROPS;
    imageURL = globalThis.astroAsset.addStaticImage(validatedOptions, propsToHash);
    srcSets = srcSetTransforms.map((srcSet) => ({
      transform: srcSet.transform,
      url: globalThis.astroAsset.addStaticImage(srcSet.transform, propsToHash),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }));
  }
  return {
    rawOptions: resolvedOptions,
    options: validatedOptions,
    src: imageURL,
    srcSet: {
      values: srcSets,
      attribute: srcSets.map((srcSet) => `${srcSet.url} ${srcSet.descriptor}`).join(", ")
    },
    attributes: service.getHTMLAttributes !== void 0 ? await service.getHTMLAttributes(validatedOptions, imageConfig) : {}
  };
}

const $$Astro$5 = createAstro("https://readingrhythms.co");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "/home/readingrhythms/Reading-Rhythms/node_modules/astro/components/Image.astro", void 0);

const $$Astro$4 = createAstro("https://readingrhythms.co");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionaAttributes = {};
  if (props.sizes) {
    sourceAdditionaAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}${spreadAttributes(sourceAdditionaAttributes)}>`;
  })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
}, "/home/readingrhythms/Reading-Rhythms/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					new URL("file:///home/readingrhythms/Reading-Rhythms/dist/");
					const getImage = async (options) => await getImage$1(options, imageConfig);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro("https://readingrhythms.co");
const $$MainHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$MainHead;
  const {
    title = "Reading Rhythms",
    description = "Not a book club. A reading party. Read with friends to curated music."
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<meta charset="utf-8"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="manifest" href="/site.webmanifest"><meta name="description" property="og:description"', '><meta name="viewport" content="width=device-width"><meta name="generator"', "><title>", '</title><!-- Google Tag Manager --><!-- End Google Tag Manager --><script type="application/ld+json">\n{\n  "@context": "https://schema.org",\n  "@type": "Organization",\n  "name": "Reading Rhythms",\n	"description": "Your About Sentence Here",\n  "url": "https://readingrhythms.co/",\n  "logo": "https://readingrhythms.co/.netlify/images?url=_astro%2Flogo.Y91DSjQz.svg",\n  "sameAs": "https://www.instagram.com/reading_rhythms"\n}\n<\/script>'])), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), title);
}, "/home/readingrhythms/Reading-Rhythms/src/components/layout/MainHead.astro", void 0);

const textLogo = new Proxy({"src":"/_astro/reading_rhythms-knockout copy.2ixzAT-6.png","width":2414,"height":665,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro("https://readingrhythms.co");
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Navbar;
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<nav class="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800 shadow-lg"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex items-center justify-between h-16 lg:h-20"> <!-- Logo Section --> <div class="flex-shrink-0"> <a href="/" class="flex items-center group"> ${renderComponent($$result, "Image", $$Image, { "src": textLogo, "alt": "Reading Rhythms", "class": "h-8 md:h-10 lg:h-12 w-auto transition-all duration-300 group-hover:scale-105 brightness-0 invert" })} </a> </div> <!-- Desktop Navigation Links --> <div class="hidden lg:flex items-center space-x-2"> <a href="https://lunchboxpacks.notion.site/Reading-Rhythms-Press-HQ-d4200456065d4aefb97fa465255b8a2e" target="_blank" rel="noopener" class="relative px-4 xl:px-6 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 rounded-full text-white hover:text-black hover:bg-white/90">
Press
</a> <a href="/partnerships"${addAttribute(`relative px-4 xl:px-6 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 rounded-full ${currentPath === "/partnerships" ? "text-black bg-white shadow-lg shadow-white/25" : "text-white hover:text-black hover:bg-white/90"}`, "class")}>
Partner with Us
${currentPath === "/partnerships" && renderTemplate`<div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-black rounded-full"></div>`} </a> <a href="/apply"${addAttribute(`relative px-4 xl:px-6 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 rounded-full ${currentPath === "/apply" ? "text-black bg-white shadow-lg shadow-white/25" : "text-white hover:text-black hover:bg-white/90"}`, "class")}>
Join the Team
${currentPath === "/apply" && renderTemplate`<div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-black rounded-full"></div>`} </a> <a href="/events"${addAttribute(`relative px-6 xl:px-8 py-2.5 ml-4 text-sm font-bold tracking-wide transition-all duration-300 rounded-full border-2 ${currentPath === "/events" ? "text-black bg-white border-white shadow-lg shadow-white/25" : "text-white border-white hover:bg-white hover:text-black hover:shadow-lg hover:shadow-white/25"}`, "class")}>
Buy Tickets
${currentPath === "/events" && renderTemplate`<div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-black rounded-full"></div>`} </a> </div> <!-- Tablet Navigation (md to lg) --> <div class="hidden md:flex lg:hidden items-center space-x-1"> <a href="https://lunchboxpacks.notion.site/Reading-Rhythms-Press-HQ-d4200456065d4aefb97fa465255b8a2e" target="_blank" rel="noopener" class="px-3 py-2 text-sm font-semibold transition-all duration-300 rounded-lg text-white hover:text-black hover:bg-white/90">
Press
</a> <a href="/partnerships"${addAttribute(`px-3 py-2 text-sm font-semibold transition-all duration-300 rounded-lg ${currentPath === "/partnerships" ? "text-black bg-white" : "text-white hover:text-black hover:bg-white/90"}`, "class")}>
Partner with Us
</a> <a href="/apply"${addAttribute(`px-3 py-2 text-sm font-semibold transition-all duration-300 rounded-lg ${currentPath === "/apply" ? "text-black bg-white" : "text-white hover:text-black hover:bg-white/90"}`, "class")}>
Join the Team
</a> <a href="/events"${addAttribute(`px-4 py-2 ml-2 text-sm font-bold transition-all duration-300 rounded-lg border-2 ${currentPath === "/events" ? "text-black bg-white border-white" : "text-white border-white hover:bg-white hover:text-black"}`, "class")}>
Buy Tickets
</a> </div> <!-- Mobile Menu Button --> <div class="md:hidden"> <button id="mobile-menu-button" class="p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-200" aria-label="Toggle mobile menu"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> </div> <!-- Mobile Menu --> <div id="mobile-menu" class="hidden md:hidden pb-4"> <div class="space-y-1"> <a href="https://lunchboxpacks.notion.site/Reading-Rhythms-Press-HQ-d4200456065d4aefb97fa465255b8a2e" target="_blank" rel="noopener" class="block px-4 py-3 text-base font-semibold rounded-lg transition-all duration-200 text-white hover:bg-white/10">
Press
</a> <a href="/partnerships"${addAttribute(`block px-4 py-3 text-base font-semibold rounded-lg transition-all duration-200 ${currentPath === "/partnerships" ? "text-black bg-white" : "text-white hover:bg-white/10"}`, "class")}>
Partner with Us
</a> <a href="/apply"${addAttribute(`block px-4 py-3 text-base font-semibold rounded-lg transition-all duration-200 ${currentPath === "/apply" ? "text-black bg-white" : "text-white hover:bg-white/10"}`, "class")}>
Join the Team
</a> <a href="/events"${addAttribute(`block px-4 py-3 mt-2 text-base font-bold rounded-lg border-2 transition-all duration-200 ${currentPath === "/events" ? "text-black bg-white border-white" : "text-white border-white hover:bg-white hover:text-black"}`, "class")}>
Buy Tickets
</a> </div> </div> </div> </nav> `;
}, "/home/readingrhythms/Reading-Rhythms/src/components/layout/Navbar.astro", void 0);

const $$Astro$1 = createAstro("https://readingrhythms.co");
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description, showNavbar, bodyClasses, mainClasses } = Astro2.props;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "MainHead", $$MainHead, { "title": title, "description": description })}${renderHead()}</head> <body${addAttribute(`font-serif ${bodyClasses ?? ""}`, "class")}> <!-- Google Tag Manager (noscript) --> <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PS29M37L" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> <!-- End Google Tag Manager (noscript) --> ${showNavbar && renderTemplate`${renderComponent($$result, "Navbar", $$Navbar, {})}`} <main${addAttribute(`relative w-full h-full mb-4 md:mb-0 px-6 md:px-16 pt-[80px] lg:pt-[96px] pb-6 md:pb-16 ${mainClasses ?? ""}`, "class")}> ${renderSlot($$result, $$slots["default"])} </main> <!-- Newsletter Signup Section --> <section class="bg-gradient-to-r from-jean/10 to-rust/10 py-12 border-t border-gray-200"> <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center"> <h3 class="text-2xl lg:text-3xl font-display text-dark-gray mb-3 tracking-widest">
Stay in the Loop
</h3> <p class="text-dark-gray/70 mb-6 max-w-2xl mx-auto">
Get notified about new events in your chapter and exclusive Reading Rhythms updates.
</p> <form class="flex flex-col gap-4 max-w-lg mx-auto" action="#" method="POST"> <!-- Chapter Selection --> <div class="flex flex-col sm:flex-row gap-4"> <select name="chapter" required class="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-jean focus:border-transparent text-dark-gray bg-white"> <option value="">Select your chapter</option> <option value="algiers">Algiers, Algeria</option> <option value="astoria">Astoria, NY</option> <option value="atlantic-city">Atlantic City, NJ</option> <option value="austin">Austin, TX</option> <option value="barcelona">Barcelona, Spain</option> <option value="bushwick">Bushwick, NY</option> <option value="charleston">Charleston, SC</option> <option value="chicago">Chicago, IL</option> <option value="denver">Denver, CO</option> <option value="detroit">Detroit, MI</option> <option value="florence">Florence, Italy</option> <option value="greenpoint">Greenpoint, NY</option> <option value="harlem">Harlem, NY</option> <option value="jersey-city">Jersey City, NJ</option> <option value="long-island">Long Island, NY</option> <option value="long-island-city">Long Island City, NY</option> <option value="los-angeles">Los Angeles, CA</option> <option value="lower-manhattan">Lower Manhattan, NY</option> <option value="midtown">Midtown, NY</option> <option value="milan">Milan, Italy</option> <option value="morristown">Morristown, NJ</option> <option value="naples">Naples, Italy</option> <option value="philadelphia">Philadelphia, PA</option> <option value="princeton">Princeton, NJ</option> <option value="prospect-heights">Prospect Heights, NY</option> <option value="queens">Queens, NY</option> <option value="rome">Rome, Italy</option> <option value="san-diego">San Diego, CA</option> <option value="south-london">South London, UK</option> <option value="toronto">Toronto, Canada</option> <option value="upper-east-side">Upper East Side, NY</option> <option value="upper-west-side">Upper West Side, NY</option> <option value="washington-dc">Washington DC</option> <option value="washington-heights">Washington Heights, NY</option> </select> <input type="email" name="email" placeholder="Enter your email" required class="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-jean focus:border-transparent text-dark-gray"> </div> <button type="submit" class="px-6 py-3 bg-gradient-to-r from-jean to-dark-purple text-white rounded-xl font-bold hover:shadow-lg hover:shadow-jean/25 transition-all duration-300 hover:-translate-y-1">
Subscribe to Chapter
</button> </form> <p class="text-xs text-dark-gray/50 mt-4">
We respect your privacy. Unsubscribe at any time.
</p> </div> </section> <!-- Footer Section --> <footer class="bg-dark-gray text-white py-16 relative overflow-hidden"> <!-- Footer background decoration --> <div class="absolute inset-0 bg-gradient-to-t from-dark-gray via-dark-gray to-dark-gray/95"></div> <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div> <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10"> <div class="text-center space-y-8"> <div class="space-y-4"> <p class="text-white/80 text-lg">Not a book club. A Reading Party. ™</p> <p class="text-white/60">Reading Rhythms LLC 2024</p> <div class="flex flex-wrap justify-center gap-6 text-sm"> <a href="/privacy-policy" class="text-white/60 hover:text-white transition-colors duration-200 underline decoration-white/30 hover:decoration-white">Privacy Policy</a> <span class="text-white/40">•</span> <a href="/terms" class="text-white/60 hover:text-white transition-colors duration-200 underline decoration-white/30 hover:decoration-white">Terms & Conditions</a> <span class="text-white/40">•</span> <a href="/ticketing-agreement" class="text-white/60 hover:text-white transition-colors duration-200 underline decoration-white/30 hover:decoration-white">Ticketing Agreement</a> </div> </div> </div> </div> </footer> </body></html>`;
}, "/home/readingrhythms/Reading-Rhythms/src/layouts/BaseLayout.astro", void 0);

const $$Astro = createAstro("https://readingrhythms.co");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Reading Rhythms | 404 Page Not Found", "description": "We throw the world\u2019s best reading parties. Bringing reading, ambient music, and cozy venues together to create a one of a kind experience. Bring any book you want. As seen on TV & in major media.", "mainClasses": "full-height-mobile w-screen md:h-screen flex items-center justify-center" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-xl text-center"> <h1 class="gradient-text mb-4 text-8xl bg-gradient-to-r from-jean via-beaber to-rust font-display tracking-wider">404</h1> <h2 class="mb-4 text-4xl text-dark-gray">Whoops!</h2> <p class="my-1 md:text-xl text-dark-gray/75 font-light">It seems like we couldn't find the page you were looking for. <a href="/" class="underline">Back to homepage</a>.</p> </div> ` })} `;
}, "/home/readingrhythms/Reading-Rhythms/src/pages/404.astro", void 0);

const $$file = "/home/readingrhythms/Reading-Rhythms/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BaseLayout as $, _404 as _, getConfiguredImageService as g, imageConfig as i };
