import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_PjVteVLJ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_tqcPVyOT.mjs';
import { $ as $$SectionContainer } from '../chunks/SectionContainer_DUe0XCbm.mjs';
import { $ as $$SectionTitle } from '../chunks/SectionTitle_BvxQsaOG.mjs';
import { C as Card } from '../chunks/card_9cKSHii2.mjs';
export { renderers } from '../renderers.mjs';

const $$Employes = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Employ\xE9s - PREVICARE" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50"> <!-- Hero Section --> <section class="relative py-20 px-4 text-center bg-gradient-to-r from-tertiary to-tertiary-dark text-white"> <div class="absolute inset-0 bg-black/10"></div> <div class="relative max-w-4xl mx-auto"> <h1 class="text-4xl md:text-6xl font-bold mb-6">
Services aux Employés
</h1> <p class="text-xl md:text-2xl mb-8 text-green-100">
Protection et accompagnement de vos droits en tant qu'employé
</p> </div> </section> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "SectionTitle", $$SectionTitle, { "title": "Nos Services pour Employ\xE9s", "subtitle": "D\xE9fendez vos droits et optimisez votre carri\xE8re" })} <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"> ${renderComponent($$result3, "Card", Card, { "client:load": true, "className": "p-6 border-l-4 border-l-tertiary hover:shadow-lg transition-shadow", "client:component-hydration": "load", "client:component-path": "/home/runner/workspace/PREVICARE_git/src/components/ui/card", "client:component-export": "Card" }, { "default": ($$result4) => renderTemplate` <div class="flex items-center mb-4"> <div class="w-12 h-12 bg-tertiary/10 rounded-lg flex items-center justify-center mr-4"> <span class="text-2xl">⚖️</span> </div> <h3 class="text-xl font-semibold text-gray-900">Défense Juridique</h3> </div> <p class="text-gray-600 mb-4">
Protection juridique complète pour tous vos litiges professionnels.
</p> <ul class="text-sm text-gray-600 space-y-2"> <li>• Licenciements abusifs</li> <li>• Harcèlement au travail</li> <li>• Conflits salariaux</li> </ul> ` })} ${renderComponent($$result3, "Card", Card, { "client:load": true, "className": "p-6 border-l-4 border-l-primary hover:shadow-lg transition-shadow", "client:component-hydration": "load", "client:component-path": "/home/runner/workspace/PREVICARE_git/src/components/ui/card", "client:component-export": "Card" }, { "default": ($$result4) => renderTemplate` <div class="flex items-center mb-4"> <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4"> <span class="text-2xl">💼</span> </div> <h3 class="text-xl font-semibold text-gray-900">Conseil Carrière</h3> </div> <p class="text-gray-600 mb-4">
Accompagnement personnalisé pour votre évolution professionnelle.
</p> <ul class="text-sm text-gray-600 space-y-2"> <li>• Négociation salariale</li> <li>• Évolution de poste</li> <li>• Reconversion</li> </ul> ` })} ${renderComponent($$result3, "Card", Card, { "client:load": true, "className": "p-6 border-l-4 border-l-secondary hover:shadow-lg transition-shadow", "client:component-hydration": "load", "client:component-path": "/home/runner/workspace/PREVICARE_git/src/components/ui/card", "client:component-export": "Card" }, { "default": ($$result4) => renderTemplate` <div class="flex items-center mb-4"> <div class="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4"> <span class="text-2xl">🛡️</span> </div> <h3 class="text-xl font-semibold text-gray-900">Protection Sociale</h3> </div> <p class="text-gray-600 mb-4">
Optimisation de vos droits sociaux et retraite.
</p> <ul class="text-sm text-gray-600 space-y-2"> <li>• Gestion IPRES</li> <li>• Assurance maladie</li> <li>• Allocations familiales</li> </ul> ` })} </div>  <div class="bg-white rounded-2xl shadow-lg p-8 mb-16"> <h2 class="text-3xl font-bold text-center mb-12 text-gray-900">
Comment nous procédons
</h2> <div class="grid md:grid-cols-4 gap-8"> <div class="text-center"> <div class="w-16 h-16 bg-tertiary rounded-full flex items-center justify-center mx-auto mb-4"> <span class="text-white text-2xl font-bold">1</span> </div> <h4 class="text-lg font-semibold text-gray-900 mb-2">Écoute</h4> <p class="text-gray-600 text-sm">Analyse de votre situation</p> </div> <div class="text-center"> <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4"> <span class="text-white text-2xl font-bold">2</span> </div> <h4 class="text-lg font-semibold text-gray-900 mb-2">Conseil</h4> <p class="text-gray-600 text-sm">Stratégie personnalisée</p> </div> <div class="text-center"> <div class="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4"> <span class="text-white text-2xl font-bold">3</span> </div> <h4 class="text-lg font-semibold text-gray-900 mb-2">Action</h4> <p class="text-gray-600 text-sm">Mise en œuvre des solutions</p> </div> <div class="text-center"> <div class="w-16 h-16 bg-tertiary rounded-full flex items-center justify-center mx-auto mb-4"> <span class="text-white text-2xl font-bold">4</span> </div> <h4 class="text-lg font-semibold text-gray-900 mb-2">Suivi</h4> <p class="text-gray-600 text-sm">Accompagnement continu</p> </div> </div> </div>  <div class="text-center"> <h3 class="text-2xl font-bold text-gray-900 mb-4">
Besoin d'aide ?
</h3> <p class="text-lg text-gray-600 mb-8">
Nos experts sont là pour vous conseiller
</p> <div class="space-x-4"> <a href="/contact" class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-tertiary to-tertiary-dark text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
Consultation gratuite
</a> <a href="/services/juridique" class="inline-flex items-center px-8 py-4 border-2 border-tertiary text-tertiary font-semibold rounded-lg hover:bg-tertiary hover:text-white transition-all duration-300">
Nos services juridiques
</a> </div> </div> ` })} </main> ` })}`;
}, "/home/runner/workspace/PREVICARE_git/src/pages/employes.astro", void 0);

const $$file = "/home/runner/workspace/PREVICARE_git/src/pages/employes.astro";
const $$url = "/employes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Employes,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
