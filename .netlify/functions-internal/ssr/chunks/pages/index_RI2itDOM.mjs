/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderComponent } from '../astro_cMhD-XD7.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from './404_cKZbEBIF.mjs';
import 'clsx';
/* empty css                          */

const quotes = new Proxy({"src":"/_astro/quotes.XLK_cKzU.svg","width":800,"height":592,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro("https://readingrhythms.co");
const $$Quote = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Quote;
  const { quote, author, color, index } = Astro2.props;
  const colorClasses = {
    jean: "border-blue-500/40 bg-gradient-to-br from-blue-400/30 to-blue-300/20 shadow-lg shadow-blue-500/30",
    rust: "border-orange-400/40 bg-gradient-to-br from-orange-300/30 to-orange-200/20 shadow-lg shadow-orange-400/30",
    "dark-purple": "border-amber-200/50 bg-gradient-to-br from-amber-50/60 to-yellow-50/40 shadow-lg shadow-amber-200/25"
  };
  const borderColorClass = colorClasses[color] || "border-gray-300/40 bg-gradient-to-br from-gray-200/30 to-gray-100/20 shadow-lg shadow-gray-300/35";
  const tiltPattern = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "rotate-0", "-rotate-3", "rotate-3"];
  const tilt = tiltPattern[index % tiltPattern.length];
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`p-6 border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-fit break-inside-avoid organic-border ${borderColorClass} ${tilt} hover:rotate-0`, "class")}> <div class="flex items-center justify-between mb-4"> <img${addAttribute(quotes.src, "src")} alt="Quotes icon" class="w-6 opacity-60"> </div> <p class="text-dark-gray text-base leading-relaxed mb-4">"${quote}"</p> <p class="text-dark-gray/70 text-sm font-medium">— ${author}</p> </div>`;
}, "/home/readingrhythms/Reading-Rhythms/src/components/index/Quote.astro", void 0);

const logo = new Proxy({"src":"/_astro/logo.Y91DSjQz.svg","width":780,"height":780,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const pressNyt = new Proxy({"src":"/_astro/press-nyt.AqzuqBC6.svg","width":185,"height":25,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const pressFox5 = new Proxy({"src":"/_astro/press-fox5.ChmbZ7pn.svg","width":1241.006,"height":540,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const rollingStone = new Proxy({"src":"/_astro/rolling-stone.uaytVRJK.svg","width":1197.7,"height":865.6,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const gma = new Proxy({"src":"/_astro/GMA.KDmlurIc.svg","width":129.24977,"height":125.19391,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const thrillist = new Proxy({"src":"/_astro/thrillest.JNarvfNn.png","width":2048,"height":528,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const washpost = new Proxy({"src":"/_astro/washpost.t9jP3Rm7.png","width":2560,"height":399,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const cbsNew = new Proxy({"src":"/_astro/cbs.zz_YoW4g.png","width":820,"height":249,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const forbesNew = new Proxy({"src":"/_astro/forbes.RnPCboaV.png","width":728,"height":281,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const londonNew = new Proxy({"src":"/_astro/london copy.8CqfIgB9.svg","width":685.5,"height":81.75,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const nbcNew = new Proxy({"src":"/_astro/nbc.KTCcSrUD.png","width":728,"height":195,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const techcrunchNew = new Proxy({"src":"/_astro/techcrunch copy.RjFu4rOB.png","width":900,"height":158,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const arrowright = new Proxy({"src":"/_astro/arrow-right.ixKGTF1m.svg","width":521,"height":419,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const chapterPhoto1 = new Proxy({"src":"/_astro/25F4AA6E.PqAkt7is.jpeg","width":1086,"height":724,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const chapterPhoto2 = new Proxy({"src":"/_astro/8H6A2918-Enhanced-NR.YncRUBzR.jpg","width":8192,"height":5464,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const chapterPhoto3 = new Proxy({"src":"/_astro/DSC00318.lBzwz7TH.JPG","width":4095,"height":2735,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const chapterPhoto4 = new Proxy({"src":"/_astro/DSC00384.yS8_vwpZ.JPG","width":4240,"height":2832,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const chapterPhoto5 = new Proxy({"src":"/_astro/DSC00860.ijYG8U09.JPG","width":2832,"height":4240,"format":"jpg","orientation":8}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const chapterPhoto6 = new Proxy({"src":"/_astro/DSC01088.gN-ZWddU.JPG","width":2832,"height":3540,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const chapterPhoto7 = new Proxy({"src":"/_astro/DSC01309.njw6BUVe.JPG","width":2832,"height":3540,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const chapterPhoto8 = new Proxy({"src":"/_astro/DSC01395._AnEp3hE.JPG","width":4240,"height":2832,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const chapterPhoto9 = new Proxy({"src":"/_astro/DSC01567.Z0qBc6uk.JPG","width":2832,"height":3540,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const chapterPhoto10 = new Proxy({"src":"/_astro/DSC01616.4crRPbeF.JPG","width":2832,"height":3540,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const chapterPhoto11 = new Proxy({"src":"/_astro/DSC01870.uemzGZWe.JPG","width":2832,"height":3540,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const chapterPhoto12 = new Proxy({"src":"/_astro/DSC01872.LfgJPY4G.JPG","width":2686,"height":3387,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const chapterPhoto13 = new Proxy({"src":"/_astro/DSC01910.MHStQ4qT.JPG","width":2832,"height":3540,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const chapterPhoto14 = new Proxy({"src":"/_astro/DSC02352.hw8OBbbn.JPG","width":2832,"height":3540,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const chapterPhoto15 = new Proxy({"src":"/_astro/DSC02354.QtgVe-Vw.JPG","width":2832,"height":3540,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const chapterPhoto16 = new Proxy({"src":"/_astro/DSC02645.f3raJnrO.JPG","width":2832,"height":3540,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const chapterPhoto17 = new Proxy({"src":"/_astro/DSC02916.bS-bgc2i.JPG","width":2832,"height":3540,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const chapterPhoto18 = new Proxy({"src":"/_astro/E64763A1-1BE1-44A0-9C5C-C88C1B18B794.3buisywp.JPG","width":1535,"height":2302,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const chapterPhoto19 = new Proxy({"src":"/_astro/IG1A7830.6f_HH1qP.JPG","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const chapterPhoto20 = new Proxy({"src":"/_astro/ReadingRythms-55.aDY2sckG.jpg","width":6000,"height":4000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const chapterPhoto21 = new Proxy({"src":"/_astro/ReadingRythms-61.tBxiZtNn.jpg","width":6000,"height":4000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const heroImage1 = new Proxy({"src":"/_astro/32156EDC-725C-4AC2-9666-D316D8462676_1_105_c.Kev1bwE4.jpeg","width":863,"height":912,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const heroImage2 = new Proxy({"src":"/_astro/Copy of LPA_2025_07_24_Reading Rhythms-06307.-QqaEhSl.jpeg","width":1500,"height":1001,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const heroImage3 = new Proxy({"src":"/_astro/DSC00868.1xn4Z-19.jpg","width":1276,"height":852,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const heroImage4 = new Proxy({"src":"/_astro/FD5E9199-A104-4005-9993-FF2CE6301FBC_1_105_c.PL4Gy5NA.jpeg","width":1086,"height":724,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const heroImage5 = new Proxy({"src":"/_astro/DSC01853.OouU9yNV.JPG","width":2832,"height":3540,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const heroImage6 = new Proxy({"src":"/_astro/Screenshot 2025-08-07 at 15.29.39.fg5OqfE6.png","width":1402,"height":774,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const heroImage7 = new Proxy({"src":"/_astro/8H6A2307-Enhanced-NR.GOygsboe.jpg","width":8192,"height":5464,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const heroImage8 = new Proxy({"src":"/_astro/DSC00303.CepqCEi4.JPG","width":4240,"height":2832,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const heroImage9 = new Proxy({"src":"/_astro/Copy of Lumii_20250729_170410515.O0hIM_iw.jpg","width":6000,"height":6000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const heroImage10 = new Proxy({"src":"/_astro/Copy of _JNG0553.cltUYo8X.jpg","width":6000,"height":4000,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const chapterMaisonMono = new Proxy({"src":"/_astro/Chapter_10_Maison_Mono.IzS84ovw.webp","width":768,"height":1365,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const chapterOnRoof = new Proxy({"src":"/_astro/Chapter_3_on_the_Roof.Y-raGxqE.webp","width":768,"height":1025,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const readersFourFiveSix = new Proxy({"src":"/_astro/Readers_FourFiveSix_Bar.po-wFypE.webp","width":768,"height":1024,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://readingrhythms.co");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allChapters = [
    // Popular cities first, starting with Williamsburg
    { name: "Williamsburg", image: chapterPhoto1, location: "Brooklyn, NY" },
    { name: "Lower Manhattan", image: chapterMaisonMono, location: "New York City" },
    { name: "Upper West Side", image: chapterPhoto2, location: "New York City" },
    { name: "Midtown", image: chapterPhoto3, location: "New York City" },
    { name: "Los Angeles", image: chapterOnRoof, location: "California" },
    { name: "Chicago", image: chapterPhoto4, location: "Illinois" },
    { name: "Toronto", image: chapterPhoto5, location: "Ontario, Canada" },
    { name: "South London", image: readersFourFiveSix, location: "London, UK" },
    { name: "Prospect Heights", image: chapterPhoto6, location: "Brooklyn, NY" },
    { name: "Upper East Side", image: chapterPhoto7, location: "New York City" },
    { name: "Washington Heights", image: chapterPhoto8, location: "New York City" },
    { name: "Harlem", image: chapterPhoto9, location: "New York City" },
    { name: "Greenpoint", image: chapterPhoto10, location: "Brooklyn, NY" },
    { name: "Bushwick", image: chapterPhoto11, location: "Brooklyn, NY" },
    { name: "Astoria", image: chapterPhoto12, location: "Queens, NY" },
    { name: "Long Island City", image: chapterPhoto13, location: "Queens, NY" },
    { name: "Queens", image: chapterPhoto14, location: "New York" },
    { name: "Philadelphia", image: chapterPhoto15, location: "Pennsylvania" },
    { name: "Washington DC", image: chapterPhoto16, location: "District of Columbia" },
    { name: "Austin", image: chapterPhoto17, location: "Texas" },
    { name: "San Diego", image: chapterPhoto18, location: "California" },
    { name: "Denver", image: chapterPhoto19, location: "Colorado" },
    { name: "Jersey City", image: chapterPhoto20, location: "New Jersey" },
    { name: "Long Island", image: chapterPhoto21, location: "New York" },
    { name: "Princeton", image: chapterPhoto1, location: "New Jersey" },
    { name: "Morristown", image: chapterPhoto3, location: "New Jersey" },
    { name: "Atlantic City", image: chapterPhoto5, location: "New Jersey" },
    { name: "Rome", image: chapterPhoto7, location: "Italy" },
    { name: "Milan", image: chapterPhoto9, location: "Italy" },
    { name: "Florence", image: chapterPhoto11, location: "Italy" },
    { name: "Naples", image: chapterPhoto13, location: "Italy" },
    { name: "Barcelona", image: chapterPhoto15, location: "Spain" },
    { name: "Charleston", image: chapterPhoto17, location: "South Carolina" },
    { name: "Detroit", image: chapterPhoto19, location: "Michigan" },
    { name: "Algiers", image: chapterPhoto21, location: "Algeria" }
  ];
  const partners = [
    { name: "Penguin Random House", logo: "/src/assets/images/partners/PRH.jpeg", type: "publisher", size: "large", url: "https://www.penguinrandomhouse.com" },
    { name: "HarperCollins", logo: "/src/assets/images/partners/HarperCollins Logo.png", type: "publisher", size: "medium", url: "https://www.harpercollins.com" },
    { name: "Simon & Schuster", logo: "/src/assets/images/partners/simon schuster.webp", type: "publisher", size: "small", url: "https://www.simonandschuster.com" },
    { name: "Hachette Books", logo: "/src/assets/images/partners/Hachette Books Logo.png", type: "publisher", size: "medium", url: "https://www.hachettebookgroup.com" },
    { name: "Macmillan", logo: "/src/assets/images/partners/macimillan.png", type: "publisher", size: "small", url: "https://us.macmillan.com" },
    { name: "Hudson Yards", logo: "/src/assets/images/partners/Hudson yards.svg", type: "venue", size: "large", url: "https://www.hudsonyardsnewyork.com" },
    { name: "NYPL", logo: "/src/assets/images/partners/nypl.png", type: "venue", size: "medium", url: "https://www.nypl.org" },
    { name: "Tomorrowland", logo: "/src/assets/images/partners/tomorrowland.svg", type: "brand", size: "small", url: "https://www.tomorrowland.com" },
    { name: "Rivian", logo: "/src/assets/images/partners/rivian.png", type: "brand", size: "medium", url: "https://rivian.com" },
    { name: "Immi", logo: "/src/assets/images/partners/immi.webp", type: "brand", size: "small", url: "https://immieats.com/" },
    { name: "Naked Life", logo: "/src/assets/images/partners/naked life.webp", type: "brand", size: "small", url: "https://drinknakedlife.com/pages/age-gate" },
    { name: "Threads", logo: "/src/assets/images/partners/threads.avif", type: "brand", size: "medium", url: "https://www.threads.net" }
  ];
  const pressLogos = [
    { name: "Rolling Stone", logo: rollingStone },
    { name: "The Washington Post", logo: washpost },
    { name: "The Guardian", logo: "/src/assets/images/guardian.png" },
    { name: "Thrillist", logo: thrillist },
    { name: "GMA", logo: gma },
    { name: "FOX5", logo: pressFox5 },
    { name: "CBS", logo: cbsNew },
    { name: "Forbes", logo: forbesNew },
    { name: "London Evening Standard", logo: londonNew },
    { name: "NBC", logo: nbcNew },
    { name: "TechCrunch", logo: techcrunchNew }
  ];
  const testimonials = [
    { quote: "I leave every single Reading Rhythms party feeling like **skipping all the way home** even if the work day preceding it makes me tired or kind of cranky. I love seeing the stars in all your eyes as you depart as well, **gives me goosebumps!**", author: "Regular Attendee", color: "jean", boldPhrases: ["skipping all the way home", "gives me goosebumps"] },
    { quote: "I'm 88 years old and moved to Hudson Yards to be closer to my grandkids. I think this is a wonderful idea.", author: "Judith", color: "beige", boldPhrases: [] },
    { quote: "We're embedded with everyday superficial conversations, the kind of small talk that is essentially bland, useless and tasteless. **RR gives people the chance to connect similar people together** in the same room.", author: "Community Member", color: "jean", boldPhrases: ["RR gives people the chance to connect similar people together"] },
    { quote: "That first event I attended was **really cool** for me because I'd been wanting to just read more often and making a plan to just go somewhere and read **really kept me accountable** to that.", author: "NYC Newcomer", color: "dark-purple", boldPhrases: ["really cool", "really kept me accountable"] },
    { quote: "I'm so glad I found Reading Rhythms! I had no idea how much I **needed and wanted to connect** with other readers. Last night was another **exceptional experience**, full of connection, laughter, and community.", author: "Stacee", color: "jean", boldPhrases: ["needed and wanted to connect", "exceptional experience"] },
    { quote: "Event space was great. Host brought **great energy**. Really enjoyed the quiet time reading and the conversation in the middle. Did get slightly distracted by the music (but only because it was good and I was Shazam'ing it).", author: "Bradley Layton", color: "rust", boldPhrases: ["great energy"] },
    { quote: "It reminded me why I attend Reading Rhythms in the first place. Not only do they **care about the readers**, but they also **champion the small businesses** that helped shape this community in the first place.", author: "Andres", color: "rust", boldPhrases: ["care about the readers", "champion the small businesses"] },
    { quote: "I really enjoyed the choice to read by the sea, the atmosphere, and **the connection that was created** with the other readers.", author: "Bernardina (Amalfi Coast)", color: "dark-purple", boldPhrases: ["the connection that was created"] },
    { quote: "I am **so back into reading** thanks to Reading Rhythms\u2014I even bought a Kindle.", author: "Community Member", color: "rust", boldPhrases: ["so back into reading"] },
    { quote: "Always a great time joining any reading party. Thank you for hosting one of my fave authors.", author: "Ellen", color: "jean" },
    { quote: "But SO thrilled to meet you and to have these books again \u{1F4DA} SO much kindness in this community. I think today is the first day I've felt so uplifted, truly.", author: "Community Member", color: "rust" },
    { quote: "Happy New Year. 2024 was really special. I came to NYC and met you guys. I look forward to attending more Reading Rhythms events this year.", author: "Community Member", color: "dark-purple" },
    { quote: "It was such an amazing event and I could see the Art of Gathering woven throughout the night, which was so fun. I absolutely loved it.", author: "Katie Dulka, Priya Parker's Chief of Staff (The Art of Gathering)", color: "jean" },
    { quote: "A millennial library", author: "Barstool Sports", color: "rust" }
  ];
  const chaptersDataJson = JSON.stringify(allChapters);
  JSON.stringify(pressLogos);
  const arrowRightSrc = arrowright.src;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Reading Rhythms | Not a book club. A reading party.", "description": "We throw the world", "s": true, "best": true, "reading": true, "parties.": true, "Bringing": true, "reading,": true, "ambient": true, "music,": true, "and": true, "cozy": true, "venues": true, "together": true, "to": true, "create": true, "a": true, "one": true, "of": true, "a": true, "kind": true, "experience.": true, "Bring": true, "any": true, "book": true, "you": true, "want.": true, "As": true, "seen": true, "on": true, "TV": true, "&": true, "in": true, "major": true, "media.'": true, "showNavbar": true, "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative overflow-hidden pt-16 pb-12" data-astro-cid-j7pv25f6> <!-- Background gradient --> <div class="absolute inset-0 w-full h-full bg-gradient-to-br from-white via-gray-50/50 to-jean/5" style="left: -100vw; right: -100vw; width: 300vw; margin-left: 0; margin-right: 0;" data-astro-cid-j7pv25f6></div> <!-- Content Container --> <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8" data-astro-cid-j7pv25f6> <div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start" data-astro-cid-j7pv25f6> <!-- Left Column - Hero Content (6 columns on desktop) --> <div class="lg:col-span-6 text-center lg:text-left space-y-6" data-astro-cid-j7pv25f6> <!-- Logo --> <div class="flex justify-center lg:justify-start" data-astro-cid-j7pv25f6> <img${addAttribute(logo.src, "src")} alt="Reading Rhythms logo" class="w-20 md:w-24 lg:w-28 h-20 md:h-24 lg:h-28 drop-shadow-lg transform hover:rotate-3 transition-transform duration-300" data-astro-cid-j7pv25f6> </div> <!-- Main Heading --> <div class="space-y-4" data-astro-cid-j7pv25f6> <h1 class="text-4xl md:text-5xl lg:text-5xl text-dark-gray font-display tracking-wider leading-tight" data-astro-cid-j7pv25f6>
Reading<br data-astro-cid-j7pv25f6> <span class="bg-gradient-to-r from-jean via-rust to-dark-purple bg-clip-text text-transparent gradient-animate" data-astro-cid-j7pv25f6>
Rhythms
</span> </h1> <div class="bg-white rounded-xl p-4 border border-gray-300 shadow-sm max-w-sm mx-auto lg:mx-0" data-astro-cid-j7pv25f6> <p class="text-lg md:text-xl text-dark-gray font-bold tracking-wide leading-snug" data-astro-cid-j7pv25f6>
Bring your favorite chapter, discover your favorite people.
</p> </div> </div> <!-- Social Proof --> <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start text-center lg:text-left" data-astro-cid-j7pv25f6> <div class="flex items-center justify-center lg:justify-start space-x-6" data-astro-cid-j7pv25f6> <div class="text-center group cursor-pointer" data-astro-cid-j7pv25f6> <div class="text-2xl md:text-4xl font-bold text-jean group-hover:scale-110 transition-transform duration-300" data-astro-cid-j7pv25f6>320+</div> <div class="text-xs md:text-sm text-dark-gray/60 group-hover:text-dark-gray transition-colors duration-300" data-astro-cid-j7pv25f6>Events</div> </div> <div class="w-px h-8 md:h-10 bg-gradient-to-b from-transparent via-gray-300 to-transparent" data-astro-cid-j7pv25f6></div> <div class="text-center group cursor-pointer" data-astro-cid-j7pv25f6> <div class="text-2xl md:text-4xl font-bold text-rust group-hover:scale-110 transition-transform duration-300" data-astro-cid-j7pv25f6>25k+</div> <div class="text-xs md:text-sm text-dark-gray/60 group-hover:text-dark-gray transition-colors duration-300" data-astro-cid-j7pv25f6>Attendees</div> </div> <div class="w-px h-8 md:h-10 bg-gradient-to-b from-transparent via-gray-300 to-transparent" data-astro-cid-j7pv25f6></div> <div class="text-center group cursor-pointer" data-astro-cid-j7pv25f6> <div class="text-2xl md:text-4xl font-bold text-dark-purple group-hover:scale-110 transition-transform duration-300" data-astro-cid-j7pv25f6>20+</div> <div class="text-xs md:text-sm text-dark-gray/60 group-hover:text-dark-gray transition-colors duration-300" data-astro-cid-j7pv25f6>Cities</div> </div> </div> </div> <!-- CTA Buttons --> <div class="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start" data-astro-cid-j7pv25f6> <a href="/events" class="group relative overflow-hidden bg-gradient-to-r from-jean to-dark-purple text-white px-6 py-3 md:px-7 md:py-3 rounded-xl font-bold text-base md:text-lg shadow-xl shadow-jean/25 hover:shadow-2xl hover:shadow-jean/40 transition-all duration-300 hover:-translate-y-1" data-astro-cid-j7pv25f6> <span class="relative z-10 flex items-center justify-center mt-0.5" data-astro-cid-j7pv25f6>
Buy Tickets! ✨
</span> <div class="absolute inset-0 bg-gradient-to-r from-dark-purple to-jean opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-cid-j7pv25f6></div> </a> <a href="/apply" class="group relative overflow-hidden bg-white border-2 border-gray-200 text-dark-gray px-6 py-3 md:px-8 md:py-3 rounded-xl font-semibold text-base md:text-lg hover:border-jean hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1 inline-flex items-center justify-center" data-astro-cid-j7pv25f6> <span class="relative z-10 flex items-center" data-astro-cid-j7pv25f6>
Join the Team
</span> </a> </div> </div> <!-- Right Column - Illustrated Book Carousel (6 columns on desktop) --> <div class="lg:col-span-6 space-y-4" data-astro-cid-j7pv25f6> <div class="book-carousel-container relative" data-astro-cid-j7pv25f6> <!-- Instagram Rotating Square --> <div class="instagram-square-container relative w-full max-w-lg mx-auto" data-astro-cid-j7pv25f6> <!-- Main rotating square --> <div class="instagram-square w-full aspect-square mx-auto relative overflow-hidden rounded-2xl shadow-2xl" data-astro-cid-j7pv25f6> <!-- Hero image carousel --> <div class="rotating-image active absolute inset-0" data-astro-cid-j7pv25f6> <img${addAttribute(chapterMaisonMono.src, "src")} alt="Chapter 10 @ Maison Mono" class="w-full h-full object-cover" data-astro-cid-j7pv25f6> </div> <div class="rotating-image absolute inset-0 opacity-0" data-astro-cid-j7pv25f6> <img${addAttribute(heroImage1.src, "src")} alt="Reading Rhythms Event" class="w-full h-full object-cover" data-astro-cid-j7pv25f6> </div> <div class="rotating-image absolute inset-0 opacity-0" data-astro-cid-j7pv25f6> <img${addAttribute(chapterOnRoof.src, "src")} alt="Chapter 3 on the Roof" class="w-full h-full object-cover" data-astro-cid-j7pv25f6> </div> <div class="rotating-image absolute inset-0 opacity-0" data-astro-cid-j7pv25f6> <img${addAttribute(heroImage2.src, "src")} alt="Reading Rhythms Gathering" class="w-full h-full object-cover" data-astro-cid-j7pv25f6> </div> <div class="rotating-image absolute inset-0 opacity-0" data-astro-cid-j7pv25f6> <img${addAttribute(readersFourFiveSix.src, "src")} alt="Readers @ FourFiveSix Bar" class="w-full h-full object-cover" data-astro-cid-j7pv25f6> </div> <div class="rotating-image absolute inset-0 opacity-0" data-astro-cid-j7pv25f6> <img${addAttribute(heroImage3.src, "src")} alt="Reading Session" class="w-full h-full object-cover" data-astro-cid-j7pv25f6> </div> <div class="rotating-image absolute inset-0 opacity-0" data-astro-cid-j7pv25f6> <img${addAttribute(heroImage4.src, "src")} alt="Community Reading" class="w-full h-full object-cover" data-astro-cid-j7pv25f6> </div> <div class="rotating-image absolute inset-0 opacity-0" data-astro-cid-j7pv25f6> <img${addAttribute(heroImage5.src, "src")} alt="Book Club Meeting" class="w-full h-full object-cover" data-astro-cid-j7pv25f6> </div> <div class="rotating-image absolute inset-0 opacity-0" data-astro-cid-j7pv25f6> <img${addAttribute(heroImage6.src, "src")} alt="Reading Event" class="w-full h-full object-cover" data-astro-cid-j7pv25f6> </div> <div class="rotating-image absolute inset-0 opacity-0" data-astro-cid-j7pv25f6> <img${addAttribute(heroImage7.src, "src")} alt="Literary Gathering" class="w-full h-full object-cover" data-astro-cid-j7pv25f6> </div> <div class="rotating-image absolute inset-0 opacity-0" data-astro-cid-j7pv25f6> <img${addAttribute(heroImage8.src, "src")} alt="Reading Community" class="w-full h-full object-cover" data-astro-cid-j7pv25f6> </div> <div class="rotating-image absolute inset-0 opacity-0" data-astro-cid-j7pv25f6> <img${addAttribute(heroImage9.src, "src")} alt="Book Event" class="w-full h-full object-cover" data-astro-cid-j7pv25f6> </div> <div class="rotating-image absolute inset-0 opacity-0" data-astro-cid-j7pv25f6> <img${addAttribute(heroImage10.src, "src")} alt="Reading Party" class="w-full h-full object-cover" data-astro-cid-j7pv25f6> </div> </div> <!-- Instagram branding --> <div class="text-center mt-4" data-astro-cid-j7pv25f6> <a href="https://www.instagram.com/reading_rhythms/" target="_blank" rel="noopener" class="hidden md:inline-flex items-center text-dark-gray/60 hover:text-dark-gray transition-colors duration-300" data-astro-cid-j7pv25f6> <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" data-astro-cid-j7pv25f6></path> </svg>
@reading_rhythms
</a> </div> </div> </div> </div> </div> <!-- Press Logos - Full Width Centered Below Both Columns --> <div class="hidden md:block mt-8 md:mt-12 w-full py-4" data-astro-cid-j7pv25f6> <p class="text-sm text-dark-gray/50 mb-6 text-center" data-astro-cid-j7pv25f6>As featured in:</p> <div class="press-carousel-container relative overflow-hidden py-4" data-astro-cid-j7pv25f6> <div class="press-carousel flex items-center space-x-6 lg:space-x-8 opacity-70 hover:opacity-100 transition-opacity duration-300" style="width: max-content;" data-astro-cid-j7pv25f6> ${pressLogos.map((press, index) => renderTemplate`<img${addAttribute(press.logo.src || press.logo, "src")}${addAttribute(`${press.name} logo`, "alt")} class="press-logo h-8 lg:h-10 w-auto max-w-none filter grayscale hover:grayscale-0 transition-all duration-500 hover:scale-125 flex-shrink-0"${addAttribute(index, "data-index")} data-astro-cid-j7pv25f6>`)} <!-- Duplicate logos for seamless loop --> ${pressLogos.map((press, index) => renderTemplate`<img${addAttribute(press.logo.src || press.logo, "src")}${addAttribute(`${press.name} logo`, "alt")} class="press-logo h-8 lg:h-10 w-auto max-w-none filter grayscale hover:grayscale-0 transition-all duration-500 hover:scale-125 flex-shrink-0"${addAttribute(index + pressLogos.length, "data-index")} data-astro-cid-j7pv25f6>`)} <!-- Additional duplicates for smoother infinite scroll --> ${pressLogos.map((press, index) => renderTemplate`<img${addAttribute(press.logo.src || press.logo, "src")}${addAttribute(`${press.name} logo`, "alt")} class="press-logo h-8 lg:h-10 w-auto max-w-none filter grayscale hover:grayscale-0 transition-all duration-500 hover:scale-125 flex-shrink-0"${addAttribute(index + pressLogos.length * 2, "data-index")} data-astro-cid-j7pv25f6>`)} <!-- Fourth set for smoother infinite scroll --> ${pressLogos.map((press, index) => renderTemplate`<img${addAttribute(press.logo.src || press.logo, "src")}${addAttribute(`${press.name} logo`, "alt")} class="press-logo h-8 lg:h-10 w-auto max-w-none filter grayscale hover:grayscale-0 transition-all duration-500 hover:scale-125 flex-shrink-0"${addAttribute(index + pressLogos.length * 3, "data-index")} data-astro-cid-j7pv25f6>`)} </div> </div> </div> <!-- Mobile Press Logos - Static Layout --> <div class="md:hidden mt-2 w-full py-1" data-astro-cid-j7pv25f6> <p class="text-sm text-dark-gray/50 mb-2 text-center" data-astro-cid-j7pv25f6>As featured in:</p> <div class="flex flex-wrap justify-center gap-4 items-center opacity-70" data-astro-cid-j7pv25f6> ${pressLogos.map((press) => renderTemplate`<img${addAttribute(press.logo.src || press.logo, "src")}${addAttribute(`${press.name} logo`, "alt")} class="h-6 w-auto filter grayscale hover:grayscale-0 transition-all duration-500 hover:scale-125" data-astro-cid-j7pv25f6>`)} </div> </div> <!-- Quote Section - Inside Hero --> <div class="mt-12 md:mt-16 lg:mt-20 w-full text-center" data-astro-cid-j7pv25f6> <blockquote class="text-xl md:text-2xl lg:text-3xl font-serif text-dark-gray italic leading-relaxed max-w-3xl mx-auto hover:text-jean transition-colors duration-300" data-astro-cid-j7pv25f6>
"Curated evenings mixing epic venues, silent reading, and lively chats."
</blockquote> </div> </div> <!-- Enhanced Decorative Elements --> <div class="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-jean/10 to-rust/10 rounded-full blur-3xl animate-pulse" data-astro-cid-j7pv25f6></div> <div class="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-rust/10 to-dark-purple/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;" data-astro-cid-j7pv25f6></div> <div class="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-br from-dark-purple/5 to-jean/5 rounded-full blur-2xl animate-pulse" style="animation-delay: 4s;" data-astro-cid-j7pv25f6></div> </section>  <section class="py-16 lg:py-24 bg-gradient-to-b from-gray-50/30 to-white relative overflow-hidden" data-astro-cid-j7pv25f6> <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10" data-astro-cid-j7pv25f6> <!-- Section Header --> <div class="text-center mb-12" data-astro-cid-j7pv25f6> <h2 class="text-3xl md:text-4xl lg:text-5xl font-display text-dark-gray mb-6 tracking-wide" data-astro-cid-j7pv25f6>
Our <span class="bg-gradient-to-r from-jean to-rust bg-clip-text text-transparent" data-astro-cid-j7pv25f6>Global Community</span> </h2> <p class="text-xl text-dark-gray/70 max-w-3xl mx-auto" data-astro-cid-j7pv25f6>
Join thousands of readers across the world in our growing network of chapters.
</p> </div> <!-- Mobile Swipable Chapters --> <div class="md:hidden -mx-6 lg:-mx-8 py-2 mb-8" data-astro-cid-j7pv25f6> <div class="flex gap-8 overflow-x-auto pb-6 pt-2 px-6 lg:px-8 scrollbar-hide" data-astro-cid-j7pv25f6> <!-- Black Intro Card --> <div class="flex-shrink-0 w-64 sm:w-72" data-astro-cid-j7pv25f6> <div class="bg-dark-gray rounded-2xl shadow-lg p-6 text-left h-full flex flex-col justify-center min-h-[87px]" data-astro-cid-j7pv25f6> <h3 class="text-4xl font-display text-white mb-4 leading-tight tracking-widest" data-astro-cid-j7pv25f6>Join a chapter near you!</h3> <div class="flex items-center mt-auto" data-astro-cid-j7pv25f6> <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center" data-astro-cid-j7pv25f6> <svg class="w-8 h-8 text-dark-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-j7pv25f6></path> </svg> </div> </div> </div> </div> <!-- All Chapter Cards --> ${allChapters.map((chapter) => renderTemplate`<div class="flex-shrink-0 w-64 sm:w-72" data-astro-cid-j7pv25f6> <div class="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col justify-center min-h-[70px]" data-astro-cid-j7pv25f6> <div class="h-2/3 overflow-hidden" data-astro-cid-j7pv25f6> <img${addAttribute(chapter.image.src || chapter.image, "src")}${addAttribute(chapter.name, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-astro-cid-j7pv25f6> </div> <div class="px-2 py-1 h-1/3 flex flex-col justify-center" data-astro-cid-j7pv25f6> <div class="text-center flex flex-col items-center" data-astro-cid-j7pv25f6> <h3 class="text-xl font-serif text-dark-gray mb-1" data-astro-cid-j7pv25f6>${chapter.name}</h3> <p class="text-dark-gray/60 text-base mb-3" data-astro-cid-j7pv25f6>${chapter.location}</p> <a${addAttribute(`/events?chapterId=${chapter.name.toLowerCase().replace(/\s+/g, "-")}`, "href")} class="flex items-center justify-center text-jean text-sm font-semibold underline hover:text-dark-purple transition-all duration-300 group/link" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>View Events →</span> </a> </div> </div> </div> </div>`)} </div> <p class="text-center text-sm text-dark-gray/60 mt-6 px-6" data-astro-cid-j7pv25f6>← Swipe to explore all chapters →</p> </div> <!-- Desktop Grid Display --> <div id="desktop-chapters-grid" class="hidden md:block" data-astro-cid-j7pv25f6> <!-- Desktop grid will be populated by JavaScript --> </div> <!-- Navigation Arrows - Desktop Only --> <div class="hidden md:flex justify-center items-center gap-4 mb-8 mt-12" data-astro-cid-j7pv25f6> <button id="prev-chapters" class="p-3 bg-white border border-gray-300 rounded-full shadow-sm hover:shadow-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed" data-astro-cid-j7pv25f6> <svg class="w-5 h-5 text-dark-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-astro-cid-j7pv25f6></path> </svg> </button> <span id="chapter-counter" class="text-sm text-dark-gray/60 font-medium" data-astro-cid-j7pv25f6>1 of ${allChapters.length}</span> <button id="next-chapters" class="p-3 bg-white border border-gray-300 rounded-full shadow-sm hover:shadow-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed" data-astro-cid-j7pv25f6> <svg class="w-5 h-5 text-dark-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-j7pv25f6></path> </svg> </button> </div> <!-- CTA to Join --> <div class="text-center mt-12" data-astro-cid-j7pv25f6> <a href="/events" class="inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-jean to-dark-purple text-white rounded-2xl font-bold text-base md:text-lg hover:shadow-xl hover:shadow-jean/25 transition-all duration-300 hover:-translate-y-1" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>Find Events Near You</span> <img${addAttribute(arrowright.src, "src")} alt="Arrow right" class="w-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" data-astro-cid-j7pv25f6> </a> </div> </div> </section>  <section class="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50/30" data-astro-cid-j7pv25f6> <div class="max-w-7xl mx-auto px-6 lg:px-8" data-astro-cid-j7pv25f6> <div class="text-center mb-12" data-astro-cid-j7pv25f6> <h2 class="text-3xl md:text-4xl lg:text-5xl font-display text-dark-gray mb-4 tracking-wide" data-astro-cid-j7pv25f6>
Trusted <span class="bg-gradient-to-r from-jean to-rust bg-clip-text text-transparent" data-astro-cid-j7pv25f6>Partners</span> </h2> <p class="text-xl text-dark-gray/70 max-w-3xl mx-auto" data-astro-cid-j7pv25f6>
We work with select publishers & innovative brands to elevate every reading party.
</p> </div> <!-- Innovative Floating Logo Layout --> <div class="relative max-w-6xl mx-auto mb-8" data-astro-cid-j7pv25f6> <!-- Multiple focal points for visual interest --> <div class="absolute top-1/3 left-1/4 w-24 h-24 bg-gradient-to-br from-jean/15 to-rust/10 rounded-full blur-3xl animate-pulse" data-astro-cid-j7pv25f6></div> <div class="absolute bottom-1/4 right-1/3 w-32 h-32 bg-gradient-to-br from-rust/10 to-dark-purple/15 rounded-full blur-2xl animate-pulse" style="animation-delay: 2s;" data-astro-cid-j7pv25f6></div> <div class="absolute top-1/2 right-1/4 w-20 h-20 bg-gradient-to-br from-dark-purple/10 to-jean/15 rounded-full blur-xl animate-pulse" style="animation-delay: 4s;" data-astro-cid-j7pv25f6></div> <!-- Creative constellation-style logo layout --> <!-- Desktop Constellation Layout (md and up) --> <div class="hidden md:block mb-8" data-astro-cid-j7pv25f6> <div class="grid grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto" data-astro-cid-j7pv25f6> ${partners.map((partner, index) => {
    const containerSizes = {
      small: "p-3 lg:p-4",
      medium: "p-4 lg:p-5",
      large: "p-5 lg:p-6"
    };
    return renderTemplate`<a${addAttribute(partner.url, "href")} target="_blank" rel="noopener" class="group transform hover:scale-105 transition-all duration-300 cursor-pointer floating-logo" data-astro-cid-j7pv25f6> <div class="relative" data-astro-cid-j7pv25f6> <!-- Logo container with varying sizes --> <div${addAttribute(`bg-white rounded-2xl ${containerSizes[partner.size]} shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 flex items-center justify-center min-h-[100px] lg:min-h-[120px] ${partner.name === "Hachette Books" ? "p-2 lg:p-3" : ""}`, "class")} data-astro-cid-j7pv25f6> <img${addAttribute(partner.logo, "src")}${addAttribute(`${partner.name} logo`, "alt")}${addAttribute(`${partner.name === "Hachette Books" ? "max-w-[85%] max-h-[70%]" : "max-w-[80%] max-h-[75%]"} w-full h-full object-contain`, "class")} data-astro-cid-j7pv25f6> </div> </div> </a>`;
  })} </div> </div> <!-- Mobile Grid Layout (sm and below) --> <div class="md:hidden mb-8" data-astro-cid-j7pv25f6> <div class="grid grid-cols-2 gap-4 max-w-lg mx-auto" data-astro-cid-j7pv25f6> ${partners.map((partner) => {
    const mobileContainerSizes = {
      small: "p-2",
      medium: "p-3",
      large: "p-4"
    };
    return renderTemplate`<a${addAttribute(partner.url, "href")} target="_blank" rel="noopener" class="group transform hover:scale-105 transition-all duration-300 cursor-pointer"${addAttribute(partner.name.toLowerCase(), "data-name")} data-astro-cid-j7pv25f6> <div class="relative" data-astro-cid-j7pv25f6> <div${addAttribute(`bg-white rounded-xl ${mobileContainerSizes[partner.size]} shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 flex items-center justify-center min-h-[100px]`, "class")} data-astro-cid-j7pv25f6> <img${addAttribute(partner.logo, "src")}${addAttribute(`${partner.name} logo`, "alt")}${addAttribute(`${partner.name === "Hachette Books" ? "max-w-[85%] max-h-[70%]" : "max-w-[80%] max-h-[75%]"} w-full h-full object-contain`, "class")} data-astro-cid-j7pv25f6> </div> </div> </a>`;
  })} </div> </div> </div> <!-- Partner with us CTA --> <div class="text-center mt-8 md:mt-12" data-astro-cid-j7pv25f6> <a href="/partnerships" class="group inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-jean to-dark-purple text-white rounded-2xl font-bold text-base md:text-lg hover:shadow-xl hover:shadow-jean/25 transition-all duration-300 hover:-translate-y-1" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>Partner with us!</span> <img${addAttribute(arrowright.src, "src")} alt="Arrow right" class="w-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" data-astro-cid-j7pv25f6> </a> </div> </div> </section>  <section class="pt-12 pb-20 md:py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50/30" data-astro-cid-j7pv25f6> <div class="max-w-7xl mx-auto px-6 lg:px-8" data-astro-cid-j7pv25f6> <div class="text-center mb-12" data-astro-cid-j7pv25f6> <h2 class="text-3xl md:text-4xl lg:text-5xl font-display text-dark-gray mb-6 tracking-wide" data-astro-cid-j7pv25f6>
What <span class="bg-gradient-to-r from-jean to-rust bg-clip-text text-transparent" data-astro-cid-j7pv25f6>Readers</span> are saying
</h2> <p class="text-xl text-dark-gray/70 max-w-3xl mx-auto" data-astro-cid-j7pv25f6>
Real stories from readers who've experienced the magic of Reading Rhythms.
</p> </div> <!-- Testimonials Grid --> <!-- Desktop Grid --> <div class="hidden md:block" data-astro-cid-j7pv25f6> <div id="testimonials-grid" class="masonry-container columns-2 lg:columns-3 gap-8 space-y-8" data-astro-cid-j7pv25f6> <!-- Initial 9 testimonials --> ${testimonials.slice(0, 9).map((testimonial, index) => renderTemplate`<div class="break-inside-avoid mb-4 testimonial-card" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Quote", $$Quote, { "quote": testimonial.quote, "author": testimonial.author, "color": testimonial.color, "boldPhrases": testimonial.boldPhrases, "index": index, "data-astro-cid-j7pv25f6": true })} </div>`)} <!-- Remaining testimonials (hidden initially) --> ${testimonials.slice(9).map((testimonial, index) => renderTemplate`<div class="break-inside-avoid mb-4 testimonial-card testimonial-hidden" style="display: none;" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Quote", $$Quote, { "quote": testimonial.quote, "author": testimonial.author, "color": testimonial.color, "boldPhrases": testimonial.boldPhrases, "index": index + 9, "data-astro-cid-j7pv25f6": true })} </div>`)} </div> <!-- Show More/Less Button --> <div class="text-center mt-8" data-astro-cid-j7pv25f6> <button id="testimonials-toggle" class="group inline-flex items-center justify-center px-6 py-3 bg-white border-2 border-gray-200 text-dark-gray rounded-xl font-semibold text-base hover:border-jean hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1" data-astro-cid-j7pv25f6> <span id="toggle-text" data-astro-cid-j7pv25f6>Show More Testimonials</span> <svg id="toggle-arrow" class="w-4 h-4 ml-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-j7pv25f6></path> </svg> </button> </div> </div> <!-- Fallback Grid for older browsers --> <div class="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start masonry-fallback" data-astro-cid-j7pv25f6> <!-- Initial 9 testimonials --> ${testimonials.slice(0, 9).map((testimonial, index) => renderTemplate`<div class="testimonial-card" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Quote", $$Quote, { "quote": testimonial.quote, "author": testimonial.author, "color": testimonial.color, "boldPhrases": testimonial.boldPhrases, "index": index, "data-astro-cid-j7pv25f6": true })} </div>`)} <!-- Remaining testimonials (hidden initially) --> ${testimonials.slice(9).map((testimonial, index) => renderTemplate`<div class="testimonial-card testimonial-hidden" style="display: none;" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Quote", $$Quote, { "quote": testimonial.quote, "author": testimonial.author, "color": testimonial.color, "boldPhrases": testimonial.boldPhrases, "index": index + 9, "data-astro-cid-j7pv25f6": true })} </div>`)} </div> <!-- Fallback Show More/Less Button --> <div class="hidden md:block text-center mt-8 masonry-fallback" data-astro-cid-j7pv25f6> <button id="testimonials-toggle-fallback" class="group inline-flex items-center justify-center px-6 py-3 bg-white border-2 border-gray-200 text-dark-gray rounded-xl font-semibold text-base hover:border-jean hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1" data-astro-cid-j7pv25f6> <span id="toggle-text-fallback" data-astro-cid-j7pv25f6>Show More Testimonials</span> <svg id="toggle-arrow-fallback" class="w-4 h-4 ml-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-j7pv25f6></path> </svg> </button> </div> <!-- Mobile Horizontal Scroll --> <div class="md:hidden -mx-6 lg:-mx-8 py-4" data-astro-cid-j7pv25f6> <div class="flex gap-8 overflow-x-auto pb-6 pt-2 px-6 lg:px-8 scrollbar-hide" data-astro-cid-j7pv25f6> ${testimonials.map((testimonial, index) => renderTemplate`<div class="flex-shrink-0 w-72 sm:w-80" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Quote", $$Quote, { "quote": testimonial.quote, "author": testimonial.author, "color": testimonial.color, "boldPhrases": testimonial.boldPhrases, "index": index, "data-astro-cid-j7pv25f6": true })} </div>`)} </div> <p class="text-center text-sm text-dark-gray/60 mt-6 px-6" data-astro-cid-j7pv25f6>← Swipe to see more testimonials →</p> </div> </div> </section>  <section id="press-media" class="py-12 lg:py-20 bg-gradient-to-b from-gray-50/30 to-white relative overflow-visible" data-astro-cid-j7pv25f6> <div class="max-w-7xl mx-auto px-6 lg:px-8 relative" data-astro-cid-j7pv25f6> <!-- Section Header --> <div class="text-center mb-8" data-astro-cid-j7pv25f6> <h2 class="text-3xl md:text-4xl lg:text-5xl font-display text-dark-gray mb-4 tracking-wide" data-astro-cid-j7pv25f6>
Press & <span class="bg-gradient-to-r from-jean to-rust bg-clip-text text-transparent" data-astro-cid-j7pv25f6>Media</span> </h2> <p class="text-lg text-dark-gray/70 max-w-3xl mx-auto" data-astro-cid-j7pv25f6>Reading Rhythms in the news</p> </div> <!-- ========== DESKTOP/TABLET (masonry) ========== --> <div class="hidden md:block relative" data-astro-cid-j7pv25f6> <div class="masonry columns-2 lg:columns-3 gap-6 pb-24" data-astro-cid-j7pv25f6> <!-- 1) NYT --> <div class="press-card mb-6" data-astro-cid-j7pv25f6> <div class="transform hover:scale-[1.02] transition-transform duration-300" data-astro-cid-j7pv25f6> <div class="p-6 border border-beaver rounded-xl shadow-sm" data-astro-cid-j7pv25f6> <a href="https://www.nytimes.com/2023/12/19/books/reading-rhythms.html" target="_blank" rel="noopener" data-astro-cid-j7pv25f6> <div class="press-favicon mb-3" data-astro-cid-j7pv25f6><img${addAttribute(pressNyt.src, "src")} alt="New York Times logo" data-astro-cid-j7pv25f6></div> <!-- Added quote --> <blockquote class="mb-4 p-4 bg-jean/5 border-l-4 border-jean rounded-r-lg" data-astro-cid-j7pv25f6> <p class="text-lg font-semibold italic text-dark-gray leading-relaxed" data-astro-cid-j7pv25f6>
“There are hardly any environments where we get to read in unison,” Adam said. “It’s kind of beautiful”.
</p> </blockquote> <h3 class="mb-1 text-dark-gray text-sm leading-snug" data-astro-cid-j7pv25f6>It's My Party and I'll Read If I Want To</h3> <p class="text-dark-gray/50 text-xs mb-4" data-astro-cid-j7pv25f6>nytimes.com</p> <img src="/src/assets/media/New_York_Times.webp" alt="New York Times story thumbnail" class="w-full rounded-xl" data-astro-cid-j7pv25f6> </a> </div> </div> </div> <!-- 2) Rolling Stone --> <div class="press-card mb-6" data-astro-cid-j7pv25f6> <div class="transform hover:scale-[1.02] transition-transform duration-300" data-astro-cid-j7pv25f6> <div class="p-6 border border-beaver rounded-xl shadow-sm" data-astro-cid-j7pv25f6> <a href="https://www.rollingstone.com/culture-council/articles/are-reading-parties-the-new-wellness-activity-creative-leaders-1234969533/" target="_blank" rel="noopener" data-astro-cid-j7pv25f6> <div class="press-favicon mb-3" data-astro-cid-j7pv25f6><img src="/src/assets/images/press_section/rollingstonefav.webp" alt="Rolling Stone logo" data-astro-cid-j7pv25f6></div> <blockquote class="mb-4 p-4 bg-dark-purple/5 border-l-4 border-dark-purple rounded-r-lg" data-astro-cid-j7pv25f6> <p class="text-lg font-semibold italic text-dark-gray leading-relaxed" data-astro-cid-j7pv25f6>"Are reading parties the new wellness activity?"</p> </blockquote> <h3 class="mb-1 text-dark-gray text-sm leading-snug" data-astro-cid-j7pv25f6>Are Reading Parties the New Wellness Activity?</h3> <p class="text-dark-gray/50 text-xs mb-4" data-astro-cid-j7pv25f6>rollingstone.com</p> <img src="/src/assets/images/press_section/rollingstoneimage.webp" alt="Rolling Stone story thumbnail" class="w-full rounded-xl" data-astro-cid-j7pv25f6> </a> </div> </div> </div> <!-- 3) The Guardian --> <div class="press-card mb-6" data-astro-cid-j7pv25f6> <div class="transform hover:scale-[1.02] transition-transform duration-300" data-astro-cid-j7pv25f6> <div class="p-6 border border-beaver rounded-xl shadow-sm" data-astro-cid-j7pv25f6> <a href="https://www.theguardian.com/books/2024/jan/26/books-and-looks-gen-z-is-rediscovering-the-public-library" target="_blank" rel="noopener" data-astro-cid-j7pv25f6> <div class="press-favicon mb-3" data-astro-cid-j7pv25f6><img src="/src/assets/images/press_section/guardian_favicon.ico" alt="The Guardian logo" data-astro-cid-j7pv25f6></div> <h3 class="mb-1 text-dark-gray text-sm leading-snug" data-astro-cid-j7pv25f6>Books and looks: Gen Z is rediscovering the public library</h3> <p class="text-dark-gray/50 text-xs mb-4" data-astro-cid-j7pv25f6>theguardian.com</p> <img src="/src/assets/images/press_section/guardian_article.jpg" alt="The Guardian story thumbnail" class="w-full rounded-xl" data-astro-cid-j7pv25f6> </a> </div> </div> </div> <!-- 4) Forbes --> <div class="press-card mb-6" data-astro-cid-j7pv25f6> <div class="transform hover:scale-[1.02] transition-transform duration-300" data-astro-cid-j7pv25f6> <div class="p-6 border border-beaver rounded-xl shadow-sm" data-astro-cid-j7pv25f6> <a href="https://www.forbes.com/sites/annahaines/2025/05/06/mothers-day-gift-guide-the-best-gifts-for-community-minded-moms/" target="_blank" rel="noopener" data-astro-cid-j7pv25f6> <div class="press-favicon mb-3" data-astro-cid-j7pv25f6><img src="/src/assets/images/press_section/forbesfav.jpeg" alt="Forbes logo" data-astro-cid-j7pv25f6></div> <blockquote class="mb-4 p-4 bg-jean/5 border-l-4 border-jean rounded-r-lg" data-astro-cid-j7pv25f6> <p class="text-lg font-semibold italic text-dark-gray leading-relaxed" data-astro-cid-j7pv25f6>"One of the best ways to meet new people is through shared interests, so if mom likes to read, this is the gift for her."</p> </blockquote> <h3 class="mb-1 text-dark-gray text-sm leading-snug" data-astro-cid-j7pv25f6>Mother's Day Gift Guide: The Best Gifts for Community Minded Moms</h3> <p class="text-dark-gray/50 text-xs mb-4" data-astro-cid-j7pv25f6>forbes.com</p> <img src="/src/assets/images/press_section/forbes_image.webp" alt="Forbes story thumbnail" class="w-full rounded-xl" data-astro-cid-j7pv25f6> </a> </div> </div> </div> <!-- 5) The I --> <div class="press-card mb-6" data-astro-cid-j7pv25f6> <div class="transform hover:scale-[1.02] transition-transform duration-300" data-astro-cid-j7pv25f6> <div class="p-6 border border-beaver rounded-xl shadow-sm" data-astro-cid-j7pv25f6> <a href="https://inews.co.uk/news/world/gen-z-making-reading-parties-cool-in-new-york-3446123" target="_blank" rel="noopener" data-astro-cid-j7pv25f6> <div class="press-favicon mb-3" data-astro-cid-j7pv25f6><img src="/src/assets/images/press_section/theIfav.jpg" alt="The I logo" data-astro-cid-j7pv25f6></div> <blockquote class="mb-4 p-4 bg-jean/5 border-l-4 border-jean rounded-r-lg" data-astro-cid-j7pv25f6> <p class="text-lg font-semibold italic text-dark-gray leading-relaxed" data-astro-cid-j7pv25f6>"New York's book lovers are finding community in bars and at quiet reading parties"</p> </blockquote> <h3 class="mb-1 text-dark-gray text-sm leading-snug" data-astro-cid-j7pv25f6>Gen Z making reading parties cool in New York</h3> <p class="text-dark-gray/50 text-xs mb-4" data-astro-cid-j7pv25f6>inews.co.uk</p> <img src="/src/assets/images/press_section/theIimage.webp" alt="The I story thumbnail" class="w-full rounded-xl" data-astro-cid-j7pv25f6> </a> </div> </div> </div> <!-- 6) TimeOut --> <div class="press-card mb-6" data-astro-cid-j7pv25f6> <div class="transform hover:scale-[1.02] transition-transform duration-300" data-astro-cid-j7pv25f6> <div class="p-6 border border-beaver rounded-xl shadow-sm" data-astro-cid-j7pv25f6> <a href="https://www.timeout.com/newyork/news/forget-the-apps-nyc-singles-are-finding-love-and-lust-at-these-in-person-events-020224" target="_blank" rel="noopener" data-astro-cid-j7pv25f6> <div class="press-favicon mb-3" data-astro-cid-j7pv25f6><img src="/src/assets/images/press_section/timeoutfav.png" alt="TimeOut logo" data-astro-cid-j7pv25f6></div> <h3 class="mb-1 text-dark-gray text-sm leading-snug" data-astro-cid-j7pv25f6>Forget the apps: NYC singles are finding love and lust at these in-person events</h3> <p class="text-dark-gray/50 text-xs mb-4" data-astro-cid-j7pv25f6>timeout.com</p> <img src="/src/assets/images/press_section/timeoutimage.webp" alt="TimeOut story thumbnail" class="w-full rounded-xl" data-astro-cid-j7pv25f6> </a> </div> </div> </div> <!-- 7) TODAY Show --> <div class="press-card mb-6" data-astro-cid-j7pv25f6> <div class="transform hover:scale-[1.02] transition-transform duration-300" data-astro-cid-j7pv25f6> <div class="p-6 border border-beaver rounded-xl shadow-sm" data-astro-cid-j7pv25f6> <a href="https://www.today.com/video/move-over-book-clubs-it-s-reading-parties-that-are-lit-202835013954" target="_blank" rel="noopener" data-astro-cid-j7pv25f6> <div class="press-favicon mb-3" data-astro-cid-j7pv25f6><img src="/src/assets/images/press_section/todayshowfav.svg" alt="TODAY Show logo" data-astro-cid-j7pv25f6></div> <h3 class="mb-1 text-dark-gray text-sm leading-snug" data-astro-cid-j7pv25f6>Move over book clubs, it's reading parties that are lit</h3> <p class="text-dark-gray/50 text-xs mb-4" data-astro-cid-j7pv25f6>today.com</p> <img src="/src/assets/images/press_section/todayshowimage.png" alt="TODAY Show story thumbnail" class="w-full rounded-xl" data-astro-cid-j7pv25f6> </a> </div> </div> </div> <!-- 8) WNBC --> <div class="press-card mb-6" data-astro-cid-j7pv25f6> <div class="transform hover:scale-[1.02] transition-transform duration-300" data-astro-cid-j7pv25f6> <div class="p-6 border border-beaver rounded-xl shadow-sm" data-astro-cid-j7pv25f6> <a href="https://www.nbcnewyork.com/entertainment/the-scene/new-york-live/attend-a-reading-party-in-nyc/5170513/" target="_blank" rel="noopener" data-astro-cid-j7pv25f6> <div class="press-favicon mb-3" data-astro-cid-j7pv25f6><img src="/src/assets/images/press_section/wnbc_favicon.png" alt="WNBC logo" data-astro-cid-j7pv25f6></div> <blockquote class="mb-4 p-4 bg-jean/5 border-l-4 border-jean rounded-r-lg" data-astro-cid-j7pv25f6> <p class="text-lg font-semibold italic text-dark-gray leading-relaxed" data-astro-cid-j7pv25f6>“It’s not a book club… it’s a reading party.”</p> </blockquote> <h3 class="mb-1 text-dark-gray text-sm leading-snug" data-astro-cid-j7pv25f6>Attend a Reading Party in NYC</h3> <p class="text-dark-gray/50 text-xs mb-4" data-astro-cid-j7pv25f6>nbcnewyork.com</p> <img src="/src/assets/images/press_section/wnbc_article.png" alt="WNBC story thumbnail" class="w-full rounded-xl" data-astro-cid-j7pv25f6> </a> </div> </div> </div> <!-- ===== Hidden until expand (DESKTOP) ===== --> <!-- TechCrunch / DryBaby (HIDDEN INITIALLY) --> <div class="press-card mb-6 hidden hidden-press-desktop" data-astro-cid-j7pv25f6> <div class="transform hover:scale-[1.02] transition-transform duration-300" data-astro-cid-j7pv25f6> <div class="p-6 border border-beaver rounded-xl shadow-sm" data-astro-cid-j7pv25f6> <a href="https://techcrunch.com/2024/09/10/drybaby-new-sober-dating-app-betting-on-surge-in-sober-curious-movement/" target="_blank" rel="noopener" data-astro-cid-j7pv25f6> <div class="press-favicon mb-3" data-astro-cid-j7pv25f6><img src="/src/assets/images/press_section/techcrunch_favicon.png" alt="TechCrunch logo" data-astro-cid-j7pv25f6></div> <h3 class="mb-1 text-dark-gray text-sm leading-snug" data-astro-cid-j7pv25f6>DryBaby: New sober dating app betting on surge in sober curious movement</h3> <p class="text-dark-gray/50 text-xs mb-4" data-astro-cid-j7pv25f6>techcrunch.com</p> <img src="/src/assets/images/press_section/techcrunch_article.jpg" alt="TechCrunch story thumbnail" class="w-full rounded-xl" data-astro-cid-j7pv25f6> </a> </div> </div> </div> <!-- CBS Los Angeles (HIDDEN) --> <div class="press-card mb-6 hidden hidden-press-desktop" data-astro-cid-j7pv25f6> <div class="transform hover:scale-[1.02] transition-transform duration-300" data-astro-cid-j7pv25f6> <div class="p-6 border border-beaver rounded-xl shadow-sm" data-astro-cid-j7pv25f6> <a href="https://www.cbsnews.com/losangeles/news/inside-socal-community-connection-316/" target="_blank" rel="noopener" data-astro-cid-j7pv25f6> <div class="press-favicon mb-3" data-astro-cid-j7pv25f6><img src="/src/assets/images/press_section/cbs_favicon.png" alt="CBS logo" data-astro-cid-j7pv25f6></div> <blockquote class="mb-4 p-4 bg-rust/5 border-l-4 border-rust rounded-r-lg" data-astro-cid-j7pv25f6> <p class="text-lg font-semibold italic text-dark-gray leading-relaxed" data-astro-cid-j7pv25f6>“It’s incredibly safe and special.”</p> </blockquote> <h3 class="mb-1 text-dark-gray text-sm leading-snug" data-astro-cid-j7pv25f6>Inside SoCal: Community Connection</h3> <p class="text-dark-gray/50 text-xs mb-4" data-astro-cid-j7pv25f6>cbsnews.com</p> <img src="/src/assets/images/press_section/cbs_article.png" alt="CBS story thumbnail" class="w-full rounded-xl" data-astro-cid-j7pv25f6> </a> </div> </div> </div> <!-- Toronto Today (HIDDEN) --> <div class="press-card mb-6 hidden hidden-press-desktop" data-astro-cid-j7pv25f6> <div class="transform hover:scale-[1.02] transition-transform duration-300" data-astro-cid-j7pv25f6> <div class="p-6 border border-beaver rounded-xl shadow-sm" data-astro-cid-j7pv25f6> <a href="https://www.torontotoday.ca/local/arts-culture/loneliness-in-toronto-byobook-read-with-stranger-10410387" target="_blank" rel="noopener" data-astro-cid-j7pv25f6> <div class="press-favicon mb-3" data-astro-cid-j7pv25f6><img src="/src/assets/images/press_section/toronto_today_favicon.png" alt="Toronto Today logo" data-astro-cid-j7pv25f6></div> <blockquote class="mb-4 p-4 bg-jean/5 border-l-4 border-jean rounded-r-lg" data-astro-cid-j7pv25f6> <p class="text-lg font-semibold italic text-dark-gray leading-relaxed" data-astro-cid-j7pv25f6>“Something deeper than just reading… connect more deeply with themselves and the world around them.”</p> </blockquote> <h3 class="mb-1 text-dark-gray text-sm leading-snug" data-astro-cid-j7pv25f6>Loneliness in Toronto: BYOB(ook), read with stranger</h3> <p class="text-dark-gray/50 text-xs mb-4" data-astro-cid-j7pv25f6>torontotoday.ca</p> <img src="/src/assets/images/press_section/toronto_today_article.jpg" alt="Toronto Today story thumbnail" class="w-full rounded-xl" data-astro-cid-j7pv25f6> </a> </div> </div> </div> <!-- Condé Nast Traveler (HIDDEN) --> <div class="press-card mb-6 hidden hidden-press-desktop" data-astro-cid-j7pv25f6> <div class="transform hover:scale-[1.02] transition-transform duration-300" data-astro-cid-j7pv25f6> <div class="p-6 border border-beaver rounded-xl shadow-sm" data-astro-cid-j7pv25f6> <a href="https://www.traveler.es/articulos/reading-rhythms-fiestas-de-lectura-nueva-york" target="_blank" rel="noopener" data-astro-cid-j7pv25f6> <div class="press-favicon mb-3" data-astro-cid-j7pv25f6><img src="/src/assets/images/press_section/conde_nast_traveler_favicon.ico" alt="Conde Nast Traveler logo" data-astro-cid-j7pv25f6></div> <blockquote class="mb-4 p-4 bg-dark-purple/5 border-l-4 border-dark-purple rounded-r-lg" data-astro-cid-j7pv25f6> <p class="text-lg font-semibold italic text-dark-gray leading-relaxed" data-astro-cid-j7pv25f6>“Crear pertenencia a través de la lectura.” / “La soledad de la lectura con el elemento social de la conexión.”</p> </blockquote> <h3 class="mb-1 text-dark-gray text-sm leading-snug" data-astro-cid-j7pv25f6>Reading Rhythms: fiestas de lectura Nueva York</h3> <p class="text-dark-gray/50 text-xs mb-4" data-astro-cid-j7pv25f6>traveler.es</p> <img src="/src/assets/images/press_section/conde_nast_traveler_article.JPG" alt="Conde Nast Traveler story thumbnail" class="w-full rounded-xl" data-astro-cid-j7pv25f6> </a> </div> </div> </div> <!-- LA Spectrum News (HIDDEN) --> <div class="press-card mb-6 hidden hidden-press-desktop" data-astro-cid-j7pv25f6> <div class="transform hover:scale-[1.02] transition-transform duration-300" data-astro-cid-j7pv25f6> <div class="p-6 border border-beaver rounded-xl shadow-sm" data-astro-cid-j7pv25f6> <a href="https://spectrumnews1.com/ca/southern-california/education/2024/12/20/reading--books--parties--holiday--reading-rhythms" target="_blank" rel="noopener" data-astro-cid-j7pv25f6> <div class="press-favicon mb-3" data-astro-cid-j7pv25f6><img src="/src/assets/images/press_section/la_spectrum_news_favicon.png" alt="LA Spectrum News logo" data-astro-cid-j7pv25f6></div> <blockquote class="mb-4 p-4 bg-rust/5 border-l-4 border-rust rounded-r-lg" data-astro-cid-j7pv25f6> <p class="text-lg font-semibold italic text-dark-gray leading-relaxed" data-astro-cid-j7pv25f6>“Good vibes and good reads.”</p> </blockquote> <h3 class="mb-1 text-dark-gray text-sm leading-snug" data-astro-cid-j7pv25f6>Reading, books, parties, holiday: Reading Rhythms</h3> <p class="text-dark-gray/50 text-xs mb-4" data-astro-cid-j7pv25f6>spectrumnews1.com</p> <img src="/src/assets/images/press_section/la_spectrum_news_article.jpg" alt="LA Spectrum News story thumbnail" class="w-full rounded-xl" data-astro-cid-j7pv25f6> </a> </div> </div> </div> <!-- Sky TG24 (HIDDEN) --> <div class="press-card mb-6 hidden hidden-press-desktop" data-astro-cid-j7pv25f6> <div class="transform hover:scale-[1.02] transition-transform duration-300" data-astro-cid-j7pv25f6> <div class="p-6 border border-beaver rounded-xl shadow-sm" data-astro-cid-j7pv25f6> <a href="https://video.sky.it/news/cronaca/video/reading-party-dagli-stati-uniti-per-combattere-la-solitudine-957970" target="_blank" rel="noopener" data-astro-cid-j7pv25f6> <div class="press-favicon mb-3" data-astro-cid-j7pv25f6><img src="/src/assets/images/press_section/sky_favicon.png" alt="Sky logo" data-astro-cid-j7pv25f6></div> <blockquote class="mb-4 p-4 bg-dark-purple/5 border-l-4 border-dark-purple rounded-r-lg" data-astro-cid-j7pv25f6> <p class="text-lg font-semibold italic text-dark-gray leading-relaxed" data-astro-cid-j7pv25f6>“Una festa in cui si legge.” / “Un ambiente un po’ più freddo.” / “Veramente qualcosa di innovativo.”</p> </blockquote> <h3 class="mb-1 text-dark-gray text-sm leading-snug" data-astro-cid-j7pv25f6>Reading party dagli Stati Uniti per combattere la solitudine</h3> <p class="text-dark-gray/50 text-xs mb-4" data-astro-cid-j7pv25f6>sky.it</p> <img src="/src/assets/images/press_section/sky_article.jpg" alt="Sky story thumbnail" class="w-full rounded-xl" data-astro-cid-j7pv25f6> </a> </div> </div> </div> <!-- Radio New Zealand (HIDDEN) --> <div class="press-card mb-6 hidden hidden-press-desktop" data-astro-cid-j7pv25f6> <div class="transform hover:scale-[1.02] transition-transform duration-300" data-astro-cid-j7pv25f6> <div class="p-6 border border-beaver rounded-xl shadow-sm" data-astro-cid-j7pv25f6> <a href="https://www.rnz.co.nz/national/programmes/afternoons/audio/2018936527/not-book-club-not-a-library-but-a-great-night-out-reading" target="_blank" rel="noopener" data-astro-cid-j7pv25f6> <div class="press-favicon mb-3" data-astro-cid-j7pv25f6><img src="/src/assets/images/press_section/rnz_favicon.png" alt="Radio New Zealand logo" data-astro-cid-j7pv25f6></div> <blockquote class="mb-4 p-4 bg-jean/5 border-l-4 border-jean rounded-r-lg" data-astro-cid-j7pv25f6> <p class="text-lg font-semibold italic text-dark-gray leading-relaxed" data-astro-cid-j7pv25f6>“Not book club, not a library but a great night out reading.”</p> </blockquote> <h3 class="mb-1 text-dark-gray text-sm leading-snug" data-astro-cid-j7pv25f6>Not book club, not a library, but a great night out reading</h3> <p class="text-dark-gray/50 text-xs mb-4" data-astro-cid-j7pv25f6>rnz.co.nz</p> <img src="/src/assets/images/press_section/rnz_article.jpg" alt="Radio New Zealand story thumbnail" class="w-full rounded-xl" data-astro-cid-j7pv25f6> </a> </div> </div> </div> </div> <!-- Fade overlay (desktop) --> <div id="press-fade-new" class="pointer-events-none absolute bottom-24 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/90 to-transparent" data-astro-cid-j7pv25f6></div> <!-- Toggle (desktop) --> <div id="press-toggle-container" class="text-center mt-2" data-astro-cid-j7pv25f6> <button id="press-toggle" class="group inline-flex items-center justify-center px-6 py-3 bg-white border-2 border-gray-200 text-dark-gray rounded-xl font-semibold text-base hover:border-jean hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1" data-astro-cid-j7pv25f6> <span id="press-toggle-text" data-astro-cid-j7pv25f6>Show More Press</span> <svg id="press-toggle-arrow" class="w-4 h-4 ml-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-j7pv25f6></path> </svg> </button> </div> </div> <!-- ========== MOBILE (horizontal swipe — all visible, no toggle) ========== --> <div class="md:hidden -mx-6 py-4" data-astro-cid-j7pv25f6> <div id="press-mobile" class="flex gap-6 overflow-x-auto pb-8 pt-2 px-6 scrollbar-hide" data-astro-cid-j7pv25f6> <!-- NYT --> <div class="press-card-mobile w-72 flex-shrink-0" data-astro-cid-j7pv25f6> <div class="p-6 border border-beaver rounded-xl shadow-sm" data-astro-cid-j7pv25f6> <a href="https://www.nytimes.com/2023/12/19/books/reading-rhythms.html" target="_blank" rel="noopener" data-astro-cid-j7pv25f6> <div class="press-favicon mb-3" data-astro-cid-j7pv25f6><img${addAttribute(pressNyt.src, "src")} alt="New York Times logo" data-astro-cid-j7pv25f6></div> <!-- Added quote --> <blockquote class="mb-4 p-3 bg-jean/5 border-l-4 border-jean rounded-r-lg" data-astro-cid-j7pv25f6> <p class="text-base font-semibold italic text-dark-gray leading-relaxed" data-astro-cid-j7pv25f6>
“There are hardly any environments where we get to read in unison,” Adam said. “It’s kind of beautiful”.
</p> </blockquote> <h3 class="mb-1 text-dark-gray text-sm leading-snug" data-astro-cid-j7pv25f6>It's My Party and I'll Read If I Want To</h3> <p class="text-dark-gray/50 text-xs mb-4" data-astro-cid-j7pv25f6>nytimes.com</p> <img src="/src/assets/media/New_York_Times.webp" alt="NYT" class="w-full rounded-xl" data-astro-cid-j7pv25f6> </a> </div> </div> <!-- Rolling Stone --> <div class="press-card-mobile w-72 flex-shrink-0" data-astro-cid-j7pv25f6> <div class="p-6 border border-beaver rounded-xl shadow-sm" data-astro-cid-j7pv25f6> <a href="https://www.rollingstone.com/culture-council/articles/are-reading-parties-the-new-wellness-activity-creative-leaders-1234969533/" target="_blank" rel="noopener" data-astro-cid-j7pv25f6> <div class="press-favicon mb-3" data-astro-cid-j7pv25f6><img src="/src/assets/images/press_section/rollingstonefav.webp" alt="Rolling Stone" data-astro-cid-j7pv25f6></div> <blockquote class="mb-4 p-3 bg-dark-purple/5 border-l-4 border-dark-purple rounded-r-lg" data-astro-cid-j7pv25f6> <p class="text-base font-semibold italic text-dark-gray leading-relaxed" data-astro-cid-j7pv25f6>"Are reading parties the new wellness activity?"</p> </blockquote> <h3 class="mb-1 text-dark-gray text-sm leading-snug" data-astro-cid-j7pv25f6>Are Reading Parties the New Wellness Activity?</h3> <p class="text-dark-gray/50 text-xs mb-4" data-astro-cid-j7pv25f6>rollingstone.com</p> <img src="/src/assets/images/press_section/rollingstoneimage.webp" alt="Rolling Stone" class="w-full rounded-xl" data-astro-cid-j7pv25f6> </a> </div> </div> <!-- Guardian --> <div class="press-card-mobile w-72 flex-shrink-0" data-astro-cid-j7pv25f6> <div class="p-6 border border-beaver rounded-xl shadow-sm" data-astro-cid-j7pv25f6> <a href="https://www.theguardian.com/books/2024/jan/26/books-and-looks-gen-z-is-rediscovering-the-public-library" target="_blank" rel="noopener" data-astro-cid-j7pv25f6> <div class="press-favicon mb-3" data-astro-cid-j7pv25f6><img src="/src/assets/images/press_section/guardian_favicon.ico" alt="The Guardian" data-astro-cid-j7pv25f6></div> <h3 class="mb-1 text-dark-gray text-sm leading-snug" data-astro-cid-j7pv25f6>Books and looks: Gen Z is rediscovering the public library</h3> <p class="text-dark-gray/50 text-xs mb-4" data-astro-cid-j7pv25f6>theguardian.com</p> <img src="/src/assets/images/press_section/guardian_article.jpg" alt="Guardian" class="w-full rounded-xl" data-astro-cid-j7pv25f6> </a> </div> </div> <!-- Forbes --> <div class="press-card-mobile w-72 flex-shrink-0" data-astro-cid-j7pv25f6> <div class="p-6 border border-beaver rounded-xl shadow-sm" data-astro-cid-j7pv25f6> <a href="https://www.forbes.com/sites/annahaines/2025/05/06/mothers-day-gift-guide-the-best-gifts-for-community-minded-moms/" target="_blank" rel="noopener" data-astro-cid-j7pv25f6> <div class="press-favicon mb-3" data-astro-cid-j7pv25f6><img src="/src/assets/images/press_section/forbesfav.jpeg" alt="Forbes" data-astro-cid-j7pv25f6></div> <blockquote class="mb-4 p-3 bg-jean/5 border-l-4 border-jean rounded-r-lg" data-astro-cid-j7pv25f6> <p class="text-base font-semibold italic text-dark-gray leading-relaxed" data-astro-cid-j7pv25f6>"One of the best ways to meet new people is through shared interests..."</p> </blockquote> <h3 class="mb-1 text-dark-gray text-sm leading-snug" data-astro-cid-j7pv25f6>Mother's Day Gift Guide</h3> <p class="text-dark-gray/50 text-xs mb-4" data-astro-cid-j7pv25f6>forbes.com</p> <img src="/src/assets/images/press_section/forbes_image.webp" alt="Forbes" class="w-full rounded-xl" data-astro-cid-j7pv25f6> </a> </div> </div> <!-- (HIDE The I on mobile) --> <!-- TimeOut --> <div class="press-card-mobile w-72 flex-shrink-0" data-astro-cid-j7pv25f6> <div class="p-6 border border-beaver rounded-xl shadow-sm" data-astro-cid-j7pv25f6> <a href="https://www.timeout.com/newyork/news/forget-the-apps-nyc-singles-are-finding-love-and-lust-at-these-in-person-events-020224" target="_blank" rel="noopener" data-astro-cid-j7pv25f6> <div class="press-favicon mb-3" data-astro-cid-j7pv25f6><img src="/src/assets/images/press_section/timeoutfav.png" alt="TimeOut" data-astro-cid-j7pv25f6></div> <h3 class="mb-1 text-dark-gray text-sm leading-snug" data-astro-cid-j7pv25f6>Forget the apps...</h3> <p class="text-dark-gray/50 text-xs mb-4" data-astro-cid-j7pv25f6>timeout.com</p> <img src="/src/assets/images/press_section/timeoutimage.webp" alt="TimeOut" class="w-full rounded-xl" data-astro-cid-j7pv25f6> </a> </div> </div> <!-- TODAY Show --> <div class="press-card-mobile w-72 flex-shrink-0" data-astro-cid-j7pv25f6> <div class="p-6 border border-beaver rounded-xl shadow-sm" data-astro-cid-j7pv25f6> <a href="https://www.today.com/video/move-over-book-clubs-it-s-reading-parties-that-are-lit-202835013954" target="_blank" rel="noopener" data-astro-cid-j7pv25f6> <div class="press-favicon mb-3" data-astro-cid-j7pv25f6><img src="/src/assets/images/press_section/todayshowfav.svg" alt="TODAY" data-astro-cid-j7pv25f6></div> <h3 class="mb-1 text-dark-gray text-sm leading-snug" data-astro-cid-j7pv25f6>Move over book clubs...</h3> <p class="text-dark-gray/50 text-xs mb-4" data-astro-cid-j7pv25f6>today.com</p> <img src="/src/assets/images/press_section/todayshowimage.png" alt="TODAY" class="w-full rounded-xl" data-astro-cid-j7pv25f6> </a> </div> </div> <!-- WNBC --> <div class="press-card-mobile w-72 flex-shrink-0" data-astro-cid-j7pv25f6> <div class="p-6 border border-beaver rounded-xl shadow-sm" data-astro-cid-j7pv25f6> <a href="https://www.nbcnewyork.com/entertainment/the-scene/new-york-live/attend-a-reading-party-in-nyc/5170513/" target="_blank" rel="noopener" data-astro-cid-j7pv25f6> <div class="press-favicon mb-3" data-astro-cid-j7pv25f6><img src="/src/assets/images/press_section/wnbc_favicon.png" alt="WNBC" data-astro-cid-j7pv25f6></div> <blockquote class="mb-4 p-3 bg-jean/5 border-l-4 border-jean rounded-r-lg" data-astro-cid-j7pv25f6> <p class="text-base font-semibold italic text-dark-gray leading-relaxed" data-astro-cid-j7pv25f6>“It’s not a book club… it’s a reading party.”</p> </blockquote> <h3 class="mb-1 text-dark-gray text-sm leading-snug" data-astro-cid-j7pv25f6>Attend a Reading Party in NYC</h3> <p class="text-dark-gray/50 text-xs mb-4" data-astro-cid-j7pv25f6>nbcnewyork.com</p> <img src="/src/assets/images/press_section/wnbc_article.png" alt="WNBC" class="w-full rounded-xl" data-astro-cid-j7pv25f6> </a> </div> </div> <!-- TechCrunch / DryBaby --> <div class="press-card-mobile w-72 flex-shrink-0" data-astro-cid-j7pv25f6> <div class="p-6 border border-beaver rounded-xl shadow-sm" data-astro-cid-j7pv25f6> <a href="https://techcrunch.com/2024/09/10/drybaby-new-sober-dating-app-betting-on-surge-in-sober-curious-movement/" target="_blank" rel="noopener" data-astro-cid-j7pv25f6> <div class="press-favicon mb-3" data-astro-cid-j7pv25f6><img src="/src/assets/images/press_section/techcrunch_favicon.png" alt="TechCrunch" data-astro-cid-j7pv25f6></div> <h3 class="mb-1 text-dark-gray text-sm leading-snug" data-astro-cid-j7pv25f6>DryBaby: sober curious movement</h3> <p class="text-dark-gray/50 text-xs mb-4" data-astro-cid-j7pv25f6>techcrunch.com</p> <img src="/src/assets/images/press_section/techcrunch_article.jpg" alt="TechCrunch" class="w-full rounded-xl" data-astro-cid-j7pv25f6> </a> </div> </div> <!-- Toronto Today --> <div class="press-card-mobile w-72 flex-shrink-0" data-astro-cid-j7pv25f6> <div class="p-6 border border-beaver rounded-xl shadow-sm" data-astro-cid-j7pv25f6> <a href="https://www.torontotoday.ca/local/arts-culture/loneliness-in-toronto-byobook-read-with-stranger-10410387" target="_blank" rel="noopener" data-astro-cid-j7pv25f6> <div class="press-favicon mb-3" data-astro-cid-j7pv25f6><img src="/src/assets/images/press_section/toronto_today_favicon.png" alt="Toronto Today" data-astro-cid-j7pv25f6></div> <blockquote class="mb-4 p-3 bg-jean/5 border-l-4 border-jean rounded-r-lg" data-astro-cid-j7pv25f6> <p class="text-base font-semibold italic text-dark-gray leading-relaxed" data-astro-cid-j7pv25f6>“Something deeper than just reading… connect more deeply with themselves and the world around them.”</p> </blockquote> <h3 class="mb-1 text-dark-gray text-sm leading-snug" data-astro-cid-j7pv25f6>Loneliness in Toronto</h3> <p class="text-dark-gray/50 text-xs mb-4" data-astro-cid-j7pv25f6>torontotoday.ca</p> <img src="/src/assets/images/press_section/toronto_today_article.jpg" alt="Toronto Today" class="w-full rounded-xl" data-astro-cid-j7pv25f6> </a> </div> </div> <!-- Conde Nast Traveler --> <div class="press-card-mobile w-72 flex-shrink-0" data-astro-cid-j7pv25f6> <div class="p-6 border border-beaver rounded-xl shadow-sm" data-astro-cid-j7pv25f6> <a href="https://www.traveler.es/articulos/reading-rhythms-fiestas-de-lectura-nueva-york" target="_blank" rel="noopener" data-astro-cid-j7pv25f6> <div class="press-favicon mb-3" data-astro-cid-j7pv25f6><img src="/src/assets/images/press_section/conde_nast_traveler_favicon.ico" alt="Traveler" data-astro-cid-j7pv25f6></div> <blockquote class="mb-4 p-3 bg-dark-purple/5 border-l-4 border-dark-purple rounded-r-lg" data-astro-cid-j7pv25f6> <p class="text-base font-semibold italic text-dark-gray leading-relaxed" data-astro-cid-j7pv25f6>“Crear pertenencia a través de la lectura.”</p> </blockquote> <h3 class="mb-1 text-dark-gray text-sm leading-snug" data-astro-cid-j7pv25f6>Fiestas de lectura Nueva York</h3> <p class="text-dark-gray/50 text-xs mb-4" data-astro-cid-j7pv25f6>traveler.es</p> <img src="/src/assets/images/press_section/conde_nast_traveler_article.JPG" alt="Traveler" class="w-full rounded-xl" data-astro-cid-j7pv25f6> </a> </div> </div> <!-- LA Spectrum --> <div class="press-card-mobile w-72 flex-shrink-0" data-astro-cid-j7pv25f6> <div class="p-6 border border-beaver rounded-xl shadow-sm" data-astro-cid-j7pv25f6> <a href="https://spectrumnews1.com/ca/southern-california/education/2024/12/20/reading--books--parties--holiday--reading-rhythms" target="_blank" rel="noopener" data-astro-cid-j7pv25f6> <div class="press-favicon mb-3" data-astro-cid-j7pv25f6><img src="/src/assets/images/press_section/la_spectrum_news_favicon.png" alt="Spectrum" data-astro-cid-j7pv25f6></div> <blockquote class="mb-4 p-3 bg-rust/5 border-l-4 border-rust rounded-r-lg" data-astro-cid-j7pv25f6> <p class="text-base font-semibold italic text-dark-gray leading-relaxed" data-astro-cid-j7pv25f6>“Good vibes and good reads.”</p> </blockquote> <h3 class="mb-1 text-dark-gray text-sm leading-snug" data-astro-cid-j7pv25f6>Reading Rhythms</h3> <p class="text-dark-gray/50 text-xs mb-4" data-astro-cid-j7pv25f6>spectrumnews1.com</p> <img src="/src/assets/images/press_section/la_spectrum_news_article.jpg" alt="Spectrum" class="w-full rounded-xl" data-astro-cid-j7pv25f6> </a> </div> </div> <!-- Sky TG24 --> <div class="press-card-mobile w-72 flex-shrink-0" data-astro-cid-j7pv25f6> <div class="p-6 border border-beaver rounded-xl shadow-sm" data-astro-cid-j7pv25f6> <a href="https://video.sky.it/news/cronaca/video/reading-party-dagli-stati-uniti-per-combattere-la-solitudine-957970" target="_blank" rel="noopener" data-astro-cid-j7pv25f6> <div class="press-favicon mb-3" data-astro-cid-j7pv25f6><img src="/src/assets/images/press_section/sky_favicon.png" alt="Sky TG24" data-astro-cid-j7pv25f6></div> <blockquote class="mb-4 p-3 bg-dark-purple/5 border-l-4 border-dark-purple rounded-r-lg" data-astro-cid-j7pv25f6> <p class="text-base font-semibold italic text-dark-gray leading-relaxed" data-astro-cid-j7pv25f6>“Una festa in cui si legge.”</p> </blockquote> <h3 class="mb-1 text-dark-gray text-sm leading-snug" data-astro-cid-j7pv25f6>Reading party</h3> <p class="text-dark-gray/50 text-xs mb-4" data-astro-cid-j7pv25f6>sky.it</p> <img src="/src/assets/images/press_section/sky_article.jpg" alt="Sky" class="w-full rounded-xl" data-astro-cid-j7pv25f6> </a> </div> </div> <!-- RNZ --> <div class="press-card-mobile w-72 flex-shrink-0" data-astro-cid-j7pv25f6> <div class="p-6 border border-beaver rounded-xl shadow-sm" data-astro-cid-j7pv25f6> <a href="https://www.rnz.co.nz/national/programmes/afternoons/audio/2018936527/not-book-club-not-a-library-but-a-great-night-out-reading" target="_blank" rel="noopener" data-astro-cid-j7pv25f6> <div class="press-favicon mb-3" data-astro-cid-j7pv25f6><img src="/src/assets/images/press_section/rnz_favicon.png" alt="RNZ" data-astro-cid-j7pv25f6></div> <blockquote class="mb-4 p-3 bg-jean/5 border-l-4 border-jean rounded-r-lg" data-astro-cid-j7pv25f6> <p class="text-base font-semibold italic text-dark-gray leading-relaxed" data-astro-cid-j7pv25f6>“Not book club, not a library but a great night out reading.”</p> </blockquote> <h3 class="mb-1 text-dark-gray text-sm leading-snug" data-astro-cid-j7pv25f6>Great night out reading</h3> <p class="text-dark-gray/50 text-xs mb-4" data-astro-cid-j7pv25f6>rnz.co.nz</p> <img src="/src/assets/images/press_section/rnz_article.jpg" alt="RNZ" class="w-full rounded-xl" data-astro-cid-j7pv25f6> </a> </div> </div> </div> <p class="text-center text-sm text-dark-gray/60 -mt-2 px-6" data-astro-cid-j7pv25f6>← Swipe to see more press →</p> </div> </div> </section>      <section class="py-10 lg:py-14" data-astro-cid-j7pv25f6> <div class="max-w-5xl mx-auto px-6" data-astro-cid-j7pv25f6> <div class="mx-auto max-w-3xl rounded-2xl bg-gradient-to-r from-[#151218] via-[#1b1420] to-[#20131a]
                 border border-white/10 shadow-xl text-center p-8 md:p-10" data-astro-cid-j7pv25f6> <h2 class="text-2xl md:text-3xl lg:text-4xl font-display text-white mb-3 tracking-wider" data-astro-cid-j7pv25f6>
Ready to join the community?
</h2> <p class="text-base md:text-lg text-white/85 mb-6" data-astro-cid-j7pv25f6>
Come read with us, meet great people, and help grow the movement.
</p> <div class="flex flex-col sm:flex-row gap-3 justify-center" data-astro-cid-j7pv25f6> <a href="/events" class="inline-flex items-center justify-center rounded-xl bg-white text-dark-gray
                 px-5 py-3 md:px-6 md:py-3 font-medium hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5" data-astro-cid-j7pv25f6>
Find an Event
</a> <a href="/apply" class="inline-flex items-center justify-center rounded-xl border-2 border-white text-white
                 px-5 py-3 md:px-6 md:py-3 font-medium hover:bg-white hover:text-dark-gray
                 transition-all duration-300 hover:-translate-y-0.5" data-astro-cid-j7pv25f6>
Join the team
</a> </div> </div> </div> </section> ` })} <!-- Hidden data container for client-side JavaScript --> <div id="chapters-data"${addAttribute(chaptersDataJson, "data-chapters")} style="display: none;" data-astro-cid-j7pv25f6></div> <div id="arrow-right-data"${addAttribute(arrowRightSrc, "data-arrow")} style="display: none;" data-astro-cid-j7pv25f6></div>  `;
}, "/home/readingrhythms/Reading-Rhythms/src/pages/index.astro", void 0);

const $$file = "/home/readingrhythms/Reading-Rhythms/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { arrowright as a, techcrunchNew as b, cbsNew as c, pressNyt as d, forbesNew as f, gma as g, index as i, londonNew as l, nbcNew as n, pressFox5 as p, rollingStone as r, thrillist as t, washpost as w };
