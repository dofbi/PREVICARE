import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_PjVteVLJ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_tqcPVyOT.mjs';
import { $ as $$SectionContainer } from '../../chunks/SectionContainer_DUe0XCbm.mjs';
import { $ as $$SectionTitle } from '../../chunks/SectionTitle_BvxQsaOG.mjs';
import { C as Card, a as CardContent } from '../../chunks/card_9cKSHii2.mjs';
import { B as Button } from '../../chunks/button_DlQ7dBMu.mjs';
import { ArrowRight, Scale, FileText, Shield, BookOpen, Users, MessageSquare } from 'lucide-react';
export { renderers } from '../../renderers.mjs';

const $$Juridique = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Conseil Juridique - PREVICARE EMPLOI" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex min-h-screen flex-col"> <!-- Hero Section --> <section class="relative w-full py-20 md:py-28 overflow-hidden"> <!-- Image de fond --> <div class="absolute inset-0 z-0" style="background-image: url('https://images.unsplash.com/photo-1589578527966-fdac0f44566c?q=80&w=2070&auto=format&fit=crop'); background-size: cover; background-position: center;"> <!-- Overlay pour améliorer la lisibilité --> <div class="absolute inset-0 bg-gradient-to-r from-tertiary/90 to-tertiary/70"></div> </div> <div class="container relative px-4 md:px-6 z-10"> <div class="grid gap-12 lg:grid-cols-2 items-center"> <div class="space-y-6"> <div class="badge badge-tertiary inline-flex items-center mb-2 bg-white/20 text-white">
Expertise Juridique
</div> <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
Conseil <span class="text-white">Juridique</span> </h1> <p class="text-xl text-white/90 max-w-[600px]">
Assistance personnalisée pour tous vos besoins en droit du travail au Sénégal, par des experts qualifiés.
</p> <div class="flex flex-col sm:flex-row gap-3 pt-4"> ${renderComponent($$result2, "Button", Button, { "size": "lg", "className": "bg-white text-tertiary hover:bg-white/90 shadow-button-glow btn-glow", "asChild": true }, { "default": ($$result3) => renderTemplate` <a href="/inscription">
Commencer maintenant ${renderComponent($$result3, "ArrowRight", ArrowRight, { "className": "ml-2 h-4 w-4" })} </a> ` })} ${renderComponent($$result2, "Button", Button, { "size": "lg", "variant": "outline", "className": "border-white text-white bg-white/20 hover:bg-white/30 transition-colors", "asChild": true }, { "default": ($$result3) => renderTemplate` <a href="/contact">Nous contacter</a> ` })} </div> </div> <div class="relative"> <div class="absolute -top-6 -left-6 w-24 h-24 bg-white/10 rounded-full animate-pulse-slow"></div> <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full animate-pulse-slow animation-delay-1000"></div> <div class="relative rounded-2xl overflow-hidden shadow-card card-3d"> <img src="https://images.unsplash.com/photo-1589578527966-fdac0f44566c?q=80&w=1000&auto=format&fit=crop" alt="Conseil juridique professionnel" class="w-full h-auto object-cover aspect-video"> <div class="absolute inset-0 bg-gradient-to-t from-tertiary/30 to-transparent"></div> </div> </div> </div> </div> </section> <!-- Services Section --> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "background": "accent" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "SectionTitle", $$SectionTitle, { "title": "Nos services juridiques", "badge": "Expertise", "badgeVariant": "tertiary", "subtitle": "Une gamme compl\xE8te de services juridiques adapt\xE9s aux besoins des travailleurs et employeurs au S\xE9n\xE9gal." })} <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${[
    {
      icon: Scale,
      title: "Conseil en droit du travail",
      description: "Consultation personnalis\xE9e sur tous les aspects du droit du travail s\xE9n\xE9galais."
    },
    {
      icon: FileText,
      title: "R\xE9daction de contrats",
      description: "\xC9laboration et r\xE9vision de contrats de travail conformes \xE0 la l\xE9gislation en vigueur."
    },
    {
      icon: Shield,
      title: "Gestion des litiges",
      description: "Accompagnement dans la r\xE9solution des conflits employeur-employ\xE9."
    },
    {
      icon: BookOpen,
      title: "Veille juridique",
      description: "Information r\xE9guli\xE8re sur les \xE9volutions l\xE9gislatives et r\xE9glementaires."
    },
    {
      icon: Users,
      title: "M\xE9diation sociale",
      description: "Facilitation du dialogue social et r\xE9solution amiable des conflits."
    },
    {
      icon: MessageSquare,
      title: "Hotline juridique",
      description: "Assistance t\xE9l\xE9phonique pour r\xE9pondre \xE0 vos questions urgentes."
    }
  ].map((service) => renderTemplate`${renderComponent($$result3, "Card", Card, { "className": "border-none shadow-card transition-all duration-300 hover:shadow-lg group card-hover", "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/runner/workspace/PREVICARE_git/src/components/ui/card", "client:component-export": "Card" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CardContent", CardContent, { "className": "p-6 flex flex-col items-center text-center" }, { "default": ($$result5) => renderTemplate` <div class="p-3 rounded-full bg-tertiary/10 group-hover:bg-tertiary/20 transition-colors mb-4"> <div class="group-hover:animate-wave"> ${renderComponent($$result5, "service.icon", service.icon, { "className": "h-8 w-8 text-tertiary" })} </div> </div> <h3 class="text-xl font-bold mb-2 group-hover:text-tertiary transition-colors">${service.title}</h3> <p class="text-gray-600">${service.description}</p> ` })} ` })}`)} </div> ` })} <!-- CTA Section --> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "background": "gradient-tertiary" }, { "default": ($$result3) => renderTemplate` <div class="flex flex-col items-center justify-center space-y-4 text-center"> <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
Besoin d'un conseil juridique ?
</h2> <p class="max-w-[700px] md:text-xl/relaxed text-white">
Ne restez pas dans l'incertitude. Nos experts sont là pour vous accompagner dans toutes vos démarches.
</p> <div class="flex flex-col sm:flex-row gap-4 mt-6"> ${renderComponent($$result3, "Button", Button, { "size": "lg", "className": "bg-white text-tertiary hover:bg-white/90 shadow-button-glow btn-glow", "asChild": true }, { "default": ($$result4) => renderTemplate` <a href="/inscription">Obtenir un conseil</a> ` })} ${renderComponent($$result3, "Button", Button, { "size": "lg", "variant": "outline", "className": "border-white text-white hover:bg-white/10", "asChild": true }, { "default": ($$result4) => renderTemplate` <a href="/contact">Nous contacter</a> ` })} </div> </div> ` })} </main> ` })}`;
}, "/home/runner/workspace/PREVICARE_git/src/pages/services/juridique.astro", void 0);

const $$file = "/home/runner/workspace/PREVICARE_git/src/pages/services/juridique.astro";
const $$url = "/services/juridique";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Juridique,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
