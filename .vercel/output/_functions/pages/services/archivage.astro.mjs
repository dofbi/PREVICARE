import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_PjVteVLJ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_tqcPVyOT.mjs';
import { $ as $$SectionContainer } from '../../chunks/SectionContainer_DUe0XCbm.mjs';
import { $ as $$SectionTitle } from '../../chunks/SectionTitle_BvxQsaOG.mjs';
import { C as Card, a as CardContent } from '../../chunks/card_9cKSHii2.mjs';
import { B as Button } from '../../chunks/button_DlQ7dBMu.mjs';
import { ArrowRight, Shield, Lock, FileText, Upload, Download, CheckCircle } from 'lucide-react';
export { renderers } from '../../renderers.mjs';

const $$Archivage = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Archivage S\xE9curis\xE9 - PREVICARE EMPLOI" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex min-h-screen flex-col"> <!-- Hero Section --> <section class="relative w-full py-20 md:py-28 overflow-hidden"> <!-- Image de fond --> <div class="absolute inset-0 z-0" style="background-image: url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop'); background-size: cover; background-position: center;"> <!-- Overlay pour améliorer la lisibilité --> <div class="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div> </div> <div class="container relative px-4 md:px-6 z-10"> <div class="grid gap-12 lg:grid-cols-2 items-center"> <div class="space-y-6"> <div class="badge badge-primary inline-flex items-center mb-2 bg-white/20 text-white">
Service Premium
</div> <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
Archivage Sécurisé
</h1> <p class="text-xl text-white/90 max-w-[600px]">
Conservation chiffrée de vos documents RH importants avec accès permanent et sécurisé, où que vous soyez.
</p> <div class="flex flex-col sm:flex-row gap-3 pt-4"> ${renderComponent($$result2, "Button", Button, { "size": "lg", "className": "bg-white text-primary hover:bg-white/90 shadow-button-glow btn-glow", "asChild": true }, { "default": ($$result3) => renderTemplate` <a href="/inscription">
Commencer maintenant ${renderComponent($$result3, "ArrowRight", ArrowRight, { "className": "ml-2 h-4 w-4" })} </a> ` })} ${renderComponent($$result2, "Button", Button, { "size": "lg", "variant": "outline", "className": "border-white text-white bg-white/20 hover:bg-white/30 transition-colors", "asChild": true }, { "default": ($$result3) => renderTemplate` <a href="/contact">Nous contacter</a> ` })} </div> </div> <div class="relative"> <div class="absolute -top-6 -left-6 w-24 h-24 bg-white/10 rounded-full animate-pulse-slow"></div> <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full animate-pulse-slow animation-delay-1000"></div> <div class="relative rounded-2xl overflow-hidden shadow-card card-3d"> <img src="https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=1000&auto=format&fit=crop" alt="Archivage sécurisé de documents" class="w-full h-auto object-cover aspect-video"> <div class="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div> </div> </div> </div> </div> </section> <!-- Features Section --> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "background": "accent" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "SectionTitle", $$SectionTitle, { "title": "Pourquoi choisir notre service d'archivage ?", "badge": "Fonctionnalit\xE9s", "badgeVariant": "primary", "subtitle": "Notre solution d'archivage offre de nombreux avantages pour s\xE9curiser vos documents importants." })} <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${[
    {
      icon: Shield,
      title: "S\xE9curit\xE9 maximale",
      description: "Chiffrement de bout en bout et authentification \xE0 deux facteurs pour prot\xE9ger vos donn\xE9es sensibles."
    },
    {
      icon: Lock,
      title: "Confidentialit\xE9 garantie",
      description: "Acc\xE8s strictement contr\xF4l\xE9 \xE0 vos documents avec journalisation des consultations."
    },
    {
      icon: FileText,
      title: "Organisation intelligente",
      description: "Classement automatique et recherche avanc\xE9e pour retrouver rapidement vos documents."
    },
    {
      icon: Upload,
      title: "Import simplifi\xE9",
      description: "T\xE9l\xE9chargement par lot et reconnaissance automatique du type de document."
    },
    {
      icon: Download,
      title: "Acc\xE8s permanent",
      description: "Consultez et t\xE9l\xE9chargez vos documents 24/7 depuis n'importe quel appareil."
    },
    {
      icon: CheckCircle,
      title: "Conformit\xE9 l\xE9gale",
      description: "Respect des normes RGPD et de la l\xE9gislation s\xE9n\xE9galaise sur la conservation des donn\xE9es."
    }
  ].map((feature) => renderTemplate`${renderComponent($$result3, "Card", Card, { "className": "border-none shadow-card transition-all duration-300 hover:shadow-lg group card-hover", "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/runner/workspace/PREVICARE_git/src/components/ui/card", "client:component-export": "Card" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CardContent", CardContent, { "className": "p-6 flex flex-col items-center text-center" }, { "default": ($$result5) => renderTemplate` <div class="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4"> <div class="group-hover:animate-wave"> ${renderComponent($$result5, "feature.icon", feature.icon, { "className": "h-10 w-10 text-primary" })} </div> </div> <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-colors">${feature.title}</h3> <p class="text-gray-600">${feature.description}</p> ` })} ` })}`)} </div> ` })} <!-- CTA Section --> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "background": "gradient-primary" }, { "default": ($$result3) => renderTemplate` <div class="flex flex-col items-center justify-center space-y-4 text-center"> <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
Prêt à sécuriser vos documents importants ?
</h2> <p class="max-w-[700px] md:text-xl/relaxed text-white">
Rejoignez PREVICARE EMPLOI dès aujourd'hui et bénéficiez de notre service d'archivage sécurisé.
</p> <div class="flex flex-col sm:flex-row gap-4 mt-6"> ${renderComponent($$result3, "Button", Button, { "size": "lg", "className": "bg-white text-primary hover:bg-white/90 shadow-button-glow btn-glow", "asChild": true }, { "default": ($$result4) => renderTemplate` <a href="/inscription">Commencer gratuitement</a> ` })} ${renderComponent($$result3, "Button", Button, { "size": "lg", "variant": "outline", "className": "border-white text-white hover:bg-white/10", "asChild": true }, { "default": ($$result4) => renderTemplate` <a href="/contact">Nous contacter</a> ` })} </div> </div> ` })} </main> ` })}`;
}, "/home/runner/workspace/PREVICARE_git/src/pages/services/archivage.astro", void 0);

const $$file = "/home/runner/workspace/PREVICARE_git/src/pages/services/archivage.astro";
const $$url = "/services/archivage";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Archivage,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
