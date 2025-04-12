import { c as createComponent, b as renderTemplate, r as renderHead, a as renderComponent } from '../chunks/astro/server_Y8I97_Dn.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "C:/Users/ASUS/mike-sevilla-portfolio/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "C:/Users/ASUS/mike-sevilla-portfolio/src/components/Footer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Mike Sevilla - SAP Consultant</title><meta name="description" content="SAP Consultant with 13+ years of experience in ABAP, S/4HANA, and CRM."><link rel="stylesheet" href="/styles/global.css">${renderHead()}</head> <body class="bg-gray-100 text-gray-800 font-sans"> ${renderComponent($$result, "Header", $$Header, {})} <main class="max-w-4xl mx-auto px-4 p-4"> <section class="text-center py-12"> <img src="/images/mike-sevilla.jpg" alt="Mike Sevilla" class="w-32 h-32 rounded-full mx-auto mb-4"> <h1 class="text-4xl font-bold text-gray-800">Mike Donald Sevilla</h1> <p class="text-xl text-gray-600">SAP Consultant with 13+ Years of Expertise</p> <a href="/about" class="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Learn More</a> </section> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/ASUS/mike-sevilla-portfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/ASUS/mike-sevilla-portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
