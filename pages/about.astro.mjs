import { c as createComponent, r as renderHead, a as renderComponent, b as renderTemplate } from '../chunks/astro/server_Y8I97_Dn.mjs';
import 'kleur/colors';
import 'html-escaper';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>About - Mike Sevilla</title>${renderHead()}</head> <body class="bg-gray-100 font-sans"> ${renderComponent($$result, "Header", Header, {})} <main class="container mx-auto p-4"> <h1 class="text=3xl font bold mb-4">About Me</h1> <p class="text=lg mb-4">
SAP Consultant with 13 years of experience in ABAP, ABAP-CRM, and SAP CRM-SD, specializing in system implementation, technical design, and integration. Expertise in SAP ECC, S/4HANA, and ABAP on HANA, with a strong track record in RICEFW development and CRM Middleware. Adept at optimizing business processes and leading teams to deliver high-quality solutions. Continuously upskilling in SAP BTP and SAP Fiori to stay ahead in emerging technologies.
</p> <h2 class="text-2xl font-semibold mb-2">Certifications</h2> <ul class="list-disc pl-6"> <li>SAP Certified Associate: Backend Developer - SAP Cloud Application Programming Model (2025)</li> <li>SAP Certified Development Associate: SAP Fiori Application Developer (2023)</li> <li>SAP Certified Development Associate: SAP HANA 2.0 SPS06 (2023)</li> </ul> </main> ${renderComponent($$result, "Footer", Footer, {})} </body>`;
}, "C:/Users/ASUS/mike-sevilla-portfolio/src/pages/about.astro", void 0);

const $$file = "C:/Users/ASUS/mike-sevilla-portfolio/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
