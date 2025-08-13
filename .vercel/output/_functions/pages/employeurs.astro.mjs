import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_PjVteVLJ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_tqcPVyOT.mjs';
import { $ as $$SectionContainer } from '../chunks/SectionContainer_DUe0XCbm.mjs';
import { $ as $$SectionTitle } from '../chunks/SectionTitle_BvxQsaOG.mjs';
import { C as Card } from '../chunks/card_9cKSHii2.mjs';
export { renderers } from '../renderers.mjs';

const $$Employeurs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Employeurs - PREVICARE" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50"> <!-- Hero Section --> <section class="relative py-20 px-4 text-center bg-gradient-to-r from-primary via-secondary to-primary-dark text-white"> <div class="absolute inset-0 bg-black/10"></div> <div class="relative max-w-4xl mx-auto"> <h1 class="text-4xl md:text-6xl font-bold mb-6">
Solutions pour Employeurs
</h1> <p class="text-xl md:text-2xl mb-8 text-blue-100">
Optimisez votre gestion RH et sécurisez vos relations sociales
</p> </div> </section> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "SectionTitle", $$SectionTitle, { "title": "Services pour Employeurs", "subtitle": "Accompagnement complet pour une gestion RH sereine" })} <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"> ${renderComponent($$result3, "Card", Card, { "client:load": true, "className": "p-6 border-l-4 border-l-primary hover:shadow-lg transition-shadow", "client:component-hydration": "load", "client:component-path": "/home/runner/workspace/PREVICARE_git/src/components/ui/card", "client:component-export": "Card" }, { "default": ($$result4) => renderTemplate` <div class="flex items-center mb-4"> <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4"> <span class="text-2xl">📋</span> </div> <h3 class="text-xl font-semibold text-gray-900">Conformité RH</h3> </div> <p class="text-gray-600 mb-4">
Mise en conformité de vos procédures avec la législation en vigueur.
</p> <ul class="text-sm text-gray-600 space-y-2"> <li>• Audit de conformité</li> <li>• Mise à jour des contrats</li> <li>• Procédures disciplinaires</li> </ul> ` })} ${renderComponent($$result3, "Card", Card, { "client:load": true, "className": "p-6 border-l-4 border-l-secondary hover:shadow-lg transition-shadow", "client:component-hydration": "load", "client:component-path": "/home/runner/workspace/PREVICARE_git/src/components/ui/card", "client:component-export": "Card" }, { "default": ($$result4) => renderTemplate` <div class="flex items-center mb-4"> <div class="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4"> <span class="text-2xl">💰</span> </div> <h3 class="text-xl font-semibold text-gray-900">Gestion Paie</h3> </div> <p class="text-gray-600 mb-4">
Externalisation complète de votre paie et déclarations sociales.
</p> <ul class="text-sm text-gray-600 space-y-2"> <li>• Bulletins de paie</li> <li>• Déclarations IPRES</li> <li>• Gestion des congés</li> </ul> ` })} ${renderComponent($$result3, "Card", Card, { "client:load": true, "className": "p-6 border-l-4 border-l-tertiary hover:shadow-lg transition-shadow", "client:component-hydration": "load", "client:component-path": "/home/runner/workspace/PREVICARE_git/src/components/ui/card", "client:component-export": "Card" }, { "default": ($$result4) => renderTemplate` <div class="flex items-center mb-4"> <div class="w-12 h-12 bg-tertiary/10 rounded-lg flex items-center justify-center mr-4"> <span class="text-2xl">🤝</span> </div> <h3 class="text-xl font-semibold text-gray-900">Relations Sociales</h3> </div> <p class="text-gray-600 mb-4">
Amélioration du dialogue social et prévention des conflits.
</p> <ul class="text-sm text-gray-600 space-y-2"> <li>• Négociations collectives</li> <li>• Formation des managers</li> <li>• Médiation sociale</li> </ul> ` })} ${renderComponent($$result3, "Card", Card, { "client:load": true, "className": "p-6 border-l-4 border-l-primary hover:shadow-lg transition-shadow", "client:component-hydration": "load", "client:component-path": "/home/runner/workspace/PREVICARE_git/src/components/ui/card", "client:component-export": "Card" }, { "default": ($$result4) => renderTemplate` <div class="flex items-center mb-4"> <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4"> <span class="text-2xl">📚</span> </div> <h3 class="text-xl font-semibold text-gray-900">Formation</h3> </div> <p class="text-gray-600 mb-4">
Développement des compétences de vos équipes RH.
</p> <ul class="text-sm text-gray-600 space-y-2"> <li>• Droit du travail</li> <li>• Gestion des conflits</li> <li>• Management RH</li> </ul> ` })} ${renderComponent($$result3, "Card", Card, { "client:load": true, "className": "p-6 border-l-4 border-l-secondary hover:shadow-lg transition-shadow", "client:component-hydration": "load", "client:component-path": "/home/runner/workspace/PREVICARE_git/src/components/ui/card", "client:component-export": "Card" }, { "default": ($$result4) => renderTemplate` <div class="flex items-center mb-4"> <div class="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4"> <span class="text-2xl">📊</span> </div> <h3 class="text-xl font-semibold text-gray-900">Reporting RH</h3> </div> <p class="text-gray-600 mb-4">
Tableaux de bord et indicateurs RH personnalisés.
</p> <ul class="text-sm text-gray-600 space-y-2"> <li>• KPI sociaux</li> <li>• Bilan social</li> <li>• Analyses prédictives</li> </ul> ` })} ${renderComponent($$result3, "Card", Card, { "client:load": true, "className": "p-6 border-l-4 border-l-tertiary hover:shadow-lg transition-shadow", "client:component-hydration": "load", "client:component-path": "/home/runner/workspace/PREVICARE_git/src/components/ui/card", "client:component-export": "Card" }, { "default": ($$result4) => renderTemplate` <div class="flex items-center mb-4"> <div class="w-12 h-12 bg-tertiary/10 rounded-lg flex items-center justify-center mr-4"> <span class="text-2xl">🔒</span> </div> <h3 class="text-xl font-semibold text-gray-900">Archivage Sécurisé</h3> </div> <p class="text-gray-600 mb-4">
Conservation numérique et physique de vos documents RH.
</p> <ul class="text-sm text-gray-600 space-y-2"> <li>• Dossiers employés</li> <li>• Documents légaux</li> <li>• Accès sécurisé</li> </ul> ` })} </div>  <div class="bg-gradient-to-r from-primary/5 via-secondary/5 to-tertiary/5 rounded-2xl p-8 mb-16"> <h2 class="text-3xl font-bold text-center mb-8 text-gray-900">
Nos engagements
</h2> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6"> <div class="text-center"> <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4"> <span class="text-white text-2xl">⚡</span> </div> <h4 class="text-lg font-semibold text-gray-900 mb-2">Réactivité</h4> <p class="text-gray-600 text-sm">Réponse sous 24h garantie</p> </div> <div class="text-center"> <div class="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4"> <span class="text-white text-2xl">🎯</span> </div> <h4 class="text-lg font-semibold text-gray-900 mb-2">Précision</h4> <p class="text-gray-600 text-sm">Zéro erreur en paie</p> </div> <div class="text-center"> <div class="w-16 h-16 bg-tertiary rounded-full flex items-center justify-center mx-auto mb-4"> <span class="text-white text-2xl">🔐</span> </div> <h4 class="text-lg font-semibold text-gray-900 mb-2">Sécurité</h4> <p class="text-gray-600 text-sm">Données protégées</p> </div> <div class="text-center"> <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4"> <span class="text-white text-2xl">💡</span> </div> <h4 class="text-lg font-semibold text-gray-900 mb-2">Innovation</h4> <p class="text-gray-600 text-sm">Solutions digitales</p> </div> </div> </div>  <div class="text-center"> <h3 class="text-2xl font-bold text-gray-900 mb-4">
Prêt à optimiser votre RH ?
</h3> <p class="text-lg text-gray-600 mb-8">
Demandez votre audit gratuit dès maintenant
</p> <div class="space-x-4"> <a href="/contact" class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
Audit gratuit
</a> <a href="/tarifs" class="inline-flex items-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300">
Voir les tarifs
</a> </div> </div> ` })} </main> ` })}`;
}, "/home/runner/workspace/PREVICARE_git/src/pages/employeurs.astro", void 0);

const $$file = "/home/runner/workspace/PREVICARE_git/src/pages/employeurs.astro";
const $$url = "/employeurs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Employeurs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
