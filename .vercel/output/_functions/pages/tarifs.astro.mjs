import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_PjVteVLJ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_tqcPVyOT.mjs';
import { $ as $$SectionContainer } from '../chunks/SectionContainer_DUe0XCbm.mjs';
import { $ as $$SectionTitle } from '../chunks/SectionTitle_BvxQsaOG.mjs';
import { C as Card, b as CardHeader, c as CardTitle, a as CardContent, d as CardFooter } from '../chunks/card_9cKSHii2.mjs';
import { B as Button } from '../chunks/button_DlQ7dBMu.mjs';
export { renderers } from '../renderers.mjs';

const $$Tarifs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Tarifs - PREVICARE EMPLOI" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex min-h-screen flex-col"> <!-- Hero Section --> <section class="relative w-full pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden"> <!-- Image de fond --> <div class="absolute inset-0 z-0" style="background-image: url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2036&auto=format&fit=crop'); background-size: cover; background-position: center;"> <!-- Overlay pour améliorer la lisibilité --> <div class="absolute inset-0 bg-gradient-to-b from-secondary/90 to-secondary/70"></div> </div> <div class="container relative px-4 md:px-6 z-10"> <div class="flex flex-col items-center text-center space-y-4"> <h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
Des formules simples et transparentes
</h1> <p class="max-w-[700px] text-white/90 md:text-xl">
Choisissez le plan qui correspond à vos besoins, avec ou sans abonnement.
</p> </div> </div> </section> <!-- Pricing Cards --> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "background": "accent" }, { "default": ($$result3) => renderTemplate` <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto items-stretch"> <!-- Essentiel Plan --> ${renderComponent($$result3, "Card", Card, { "className": "border-none shadow-card flex flex-col", "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/runner/workspace/PREVICARE_git/src/components/ui/card", "client:component-export": "Card" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CardHeader", CardHeader, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "CardTitle", CardTitle, { "className": "text-2xl font-bold" }, { "default": ($$result6) => renderTemplate`Essentiel` })} <p class="text-gray-500">Pour les employés</p> <div class="mt-4 flex items-baseline"> <span class="text-4xl font-extrabold tracking-tight">5.000</span> <span class="ml-1 text-xl font-semibold">FCFA</span> <span class="ml-1 text-sm font-medium text-gray-500">/mois</span> </div> ` })} ${renderComponent($$result4, "CardContent", CardContent, { "className": "flex-grow" }, { "default": ($$result5) => renderTemplate` <ul class="space-y-3"> ${[
    "Archivage s\xE9curis\xE9",
    "Suivi des cotisations IPRES",
    "Veille juridique mensuelle",
    "Conseil en gestion de conflits",
    "Support par email"
  ].map((feature) => renderTemplate`<li class="flex items-start"> <i class="lucide lucide-check-circle h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0"></i> <span>${feature}</span> </li>`)} </ul> ` })} ${renderComponent($$result4, "CardFooter", CardFooter, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Button", Button, { "className": "w-full", "asChild": true }, { "default": ($$result6) => renderTemplate` <a href="/inscription">Choisir Essentiel</a> ` })} ` })} ` })} <!-- Premium Plan --> ${renderComponent($$result3, "Card", Card, { "className": "border-2 border-primary shadow-card flex flex-col relative", "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/runner/workspace/PREVICARE_git/src/components/ui/card", "client:component-export": "Card" }, { "default": ($$result4) => renderTemplate` <div class="absolute top-0 right-4 -mt-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
Populaire
</div> ${renderComponent($$result4, "CardHeader", CardHeader, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "CardTitle", CardTitle, { "className": "text-2xl font-bold" }, { "default": ($$result6) => renderTemplate`Premium` })} <p class="text-gray-500">Pour les professionnels & expatriés</p> <div class="mt-4 flex items-baseline"> <span class="text-4xl font-extrabold tracking-tight">15.000</span> <span class="ml-1 text-xl font-semibold">FCFA</span> <span class="ml-1 text-sm font-medium text-gray-500">/mois</span> </div> ` })} ${renderComponent($$result4, "CardContent", CardContent, { "className": "flex-grow" }, { "default": ($$result5) => renderTemplate` <ul class="space-y-3"> ${[
    "Tout du plan Essentiel",
    "Assurance d\xE9fense juridique",
    "Conseil en gestion de carri\xE8re",
    "Assistance permis de travail",
    "2 consultations / mois",
    "Support prioritaire 24/7"
  ].map((feature) => renderTemplate`<li class="flex items-start"> <i class="lucide lucide-check-circle h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0"></i> <span>${feature}</span> </li>`)} </ul> ` })} ${renderComponent($$result4, "CardFooter", CardFooter, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Button", Button, { "className": "w-full bg-gradient-primary hover:opacity-90", "asChild": true }, { "default": ($$result6) => renderTemplate` <a href="/inscription">Choisir Premium</a> ` })} ` })} ` })} <!-- Entreprise Plan --> ${renderComponent($$result3, "Card", Card, { "className": "border-none shadow-card flex flex-col", "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/runner/workspace/PREVICARE_git/src/components/ui/card", "client:component-export": "Card" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CardHeader", CardHeader, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "CardTitle", CardTitle, { "className": "text-2xl font-bold" }, { "default": ($$result6) => renderTemplate`Entreprise` })} <p class="text-gray-500">Pour les employeurs & délégués</p> <div class="mt-4"> <span class="text-4xl font-extrabold tracking-tight">Sur mesure</span> </div> ` })} ${renderComponent($$result4, "CardContent", CardContent, { "className": "flex-grow" }, { "default": ($$result5) => renderTemplate` <ul class="space-y-3"> ${[
    "Package groupe pour employ\xE9s",
    "Canal whistleblower",
    "Barom\xE8tre du climat social",
    "M\xE9diation sociale",
    "Outils pour le dialogue social",
    "Gestionnaire de compte d\xE9di\xE9"
  ].map((feature) => renderTemplate`<li class="flex items-start"> <i class="lucide lucide-check-circle h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0"></i> <span>${feature}</span> </li>`)} </ul> ` })} ${renderComponent($$result4, "CardFooter", CardFooter, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Button", Button, { "variant": "outline", "className": "w-full bg-transparent", "asChild": true }, { "default": ($$result6) => renderTemplate` <a href="/contact">Nous contacter</a> ` })} ` })} ` })} <!-- A l'acte Plan --> ${renderComponent($$result3, "Card", Card, { "className": "border-none shadow-card flex flex-col bg-tertiary/10", "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/runner/workspace/PREVICARE_git/src/components/ui/card", "client:component-export": "Card" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CardHeader", CardHeader, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "CardTitle", CardTitle, { "className": "text-2xl font-bold" }, { "default": ($$result6) => renderTemplate`À l'acte` })} <p class="text-gray-500">Pour un besoin ponctuel</p> <div class="mt-4"> <span class="text-2xl font-bold tracking-tight">Payez à l'usage</span> <p class="text-gray-500 text-sm mt-1">Sans abonnement.</p> </div> ` })} ${renderComponent($$result4, "CardContent", CardContent, { "className": "flex-grow" }, { "default": ($$result5) => renderTemplate` <ul class="space-y-3"> ${[
    "Consultation juridique unique",
    "Coaching carri\xE8re ponctuel",
    "Analyse de contrat",
    "Paiement mobile s\xE9curis\xE9"
  ].map((feature) => renderTemplate`<li class="flex items-start"> <i class="lucide lucide-check-circle h-5 w-5 text-tertiary mr-2 mt-0.5 flex-shrink-0"></i> <span>${feature}</span> </li>`)} </ul> ` })} ${renderComponent($$result4, "CardFooter", CardFooter, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Button", Button, { "variant": "outline", "className": "w-full bg-transparent border-tertiary text-tertiary hover:bg-tertiary hover:text-white", "asChild": true }, { "default": ($$result6) => renderTemplate` <a href="/contact">Prendre rendez-vous</a> ` })} ` })} ` })} </div> ` })} <!-- FAQ Section --> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "background": "white" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "SectionTitle", $$SectionTitle, { "title": "Questions fr\xE9quentes", "badge": "FAQ", "badgeVariant": "secondary", "subtitle": "Retrouvez les r\xE9ponses aux questions les plus courantes sur nos offres." })} <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"> ${[
    {
      question: "Comment puis-je changer de formule ?",
      answer: "Vous pouvez facilement changer de formule \xE0 tout moment depuis votre espace personnel."
    },
    {
      question: "Les prix incluent-ils la TVA ?",
      answer: "Oui, tous nos prix affich\xE9s incluent la TVA et toutes les taxes applicables au S\xE9n\xE9gal."
    },
    {
      question: "Puis-je annuler mon abonnement ?",
      answer: "Oui, vous pouvez annuler votre abonnement \xE0 tout moment sans frais suppl\xE9mentaires."
    },
    {
      question: "Comment fonctionne le paiement \xE0 l'acte ?",
      answer: "Vous pouvez prendre rendez-vous pour une consultation unique via notre plateforme et payer de mani\xE8re s\xE9curis\xE9e par mobile money ou carte bancaire, sans abonnement."
    }
  ].map((faq) => renderTemplate`<div class="space-y-2"> <div class="flex items-start"> <i class="lucide lucide-help-circle h-5 w-5 text-primary mr-2 mt-0.5"></i> <h3 class="font-semibold text-lg">${faq.question}</h3> </div> <p class="text-gray-600 pl-7">${faq.answer}</p> </div>`)} </div> ` })} </main> ` })}`;
}, "/home/runner/workspace/PREVICARE_git/src/pages/tarifs.astro", void 0);

const $$file = "/home/runner/workspace/PREVICARE_git/src/pages/tarifs.astro";
const $$url = "/tarifs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Tarifs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
