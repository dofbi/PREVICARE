import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_PjVteVLJ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_tqcPVyOT.mjs';
import { $ as $$SectionContainer } from '../../chunks/SectionContainer_DUe0XCbm.mjs';
import { $ as $$SectionTitle } from '../../chunks/SectionTitle_BvxQsaOG.mjs';
import { C as Card, a as CardContent } from '../../chunks/card_9cKSHii2.mjs';
import { B as Button } from '../../chunks/button_DlQ7dBMu.mjs';
import { ArrowRight, Target, LineChart, Briefcase, GraduationCap, BookOpen, Award } from 'lucide-react';
export { renderers } from '../../renderers.mjs';

const $$Carriere = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Gestion de Carri\xE8re - PREVICARE EMPLOI" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex min-h-screen flex-col"> <!-- Hero Section --> <section class="relative w-full py-20 md:py-28 overflow-hidden"> <!-- Image de fond --> <div class="absolute inset-0 z-0" style="background-image: url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop'); background-size: cover; background-position: center;"> <!-- Overlay pour améliorer la lisibilité --> <div class="absolute inset-0 bg-gradient-to-r from-highlight-dark/90 to-highlight/70"></div> </div> <div class="container relative px-4 md:px-6 z-10"> <div class="grid gap-12 lg:grid-cols-2 items-center"> <div class="space-y-6"> <div class="badge badge-highlight inline-flex items-center mb-2 bg-white/20 text-white">
Développement Professionnel
</div> <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
Gestion de <span class="text-white">Carrière</span> </h1> <p class="text-xl text-white/90 max-w-[600px]">
Accompagnement personnalisé pour votre évolution professionnelle et le développement de vos compétences.
</p> <div class="flex flex-col sm:flex-row gap-3 pt-4"> ${renderComponent($$result2, "Button", Button, { "size": "lg", "className": "bg-white text-highlight-dark hover:bg-white/90 shadow-button-glow btn-glow", "asChild": true }, { "default": ($$result3) => renderTemplate` <a href="/inscription">
Commencer maintenant ${renderComponent($$result3, "ArrowRight", ArrowRight, { "className": "ml-2 h-4 w-4" })} </a> ` })} ${renderComponent($$result2, "Button", Button, { "size": "lg", "variant": "outline", "className": "border-white text-white bg-white/20 hover:bg-white/30 transition-colors", "asChild": true }, { "default": ($$result3) => renderTemplate` <a href="/contact">Nous contacter</a> ` })} </div> </div> <div class="relative"> <div class="absolute -top-6 -left-6 w-24 h-24 bg-white/10 rounded-full animate-pulse-slow"></div> <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full animate-pulse-slow animation-delay-1000"></div> <div class="relative rounded-2xl overflow-hidden shadow-card card-3d"> <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" alt="Gestion de carrière professionnelle" class="w-full h-auto object-cover aspect-video"> <div class="absolute inset-0 bg-gradient-to-t from-highlight/30 to-transparent"></div> </div> </div> </div> </div> </section> <!-- Services Section --> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "background": "accent" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "SectionTitle", $$SectionTitle, { "title": "Nos services de gestion de carri\xE8re", "badge": "Services", "badgeVariant": "highlight", "subtitle": "Des solutions compl\xE8tes pour vous accompagner \xE0 chaque \xE9tape de votre parcours professionnel." })} <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${[
    {
      icon: Target,
      title: "Bilan de comp\xE9tences",
      description: "\xC9valuation approfondie de vos comp\xE9tences, aspirations et potentiel d'\xE9volution."
    },
    {
      icon: LineChart,
      title: "Plan de carri\xE8re",
      description: "\xC9laboration d'une strat\xE9gie personnalis\xE9e pour atteindre vos objectifs professionnels."
    },
    {
      icon: Briefcase,
      title: "Coaching professionnel",
      description: "Accompagnement individuel pour d\xE9velopper votre leadership et vos comp\xE9tences manag\xE9riales."
    },
    {
      icon: GraduationCap,
      title: "Formation continue",
      description: "Acc\xE8s \xE0 des programmes de formation adapt\xE9s \xE0 vos besoins et objectifs."
    },
    {
      icon: BookOpen,
      title: "Pr\xE9paration aux entretiens",
      description: "Techniques et conseils pour r\xE9ussir vos entretiens d'embauche et d'\xE9valuation."
    },
    {
      icon: Award,
      title: "Valorisation des acquis",
      description: "Accompagnement dans la reconnaissance et certification de vos comp\xE9tences."
    }
  ].map((service) => renderTemplate`${renderComponent($$result3, "Card", Card, { "className": "border-none shadow-card transition-all duration-300 hover:shadow-lg group card-hover", "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/runner/workspace/PREVICARE_git/src/components/ui/card", "client:component-export": "Card" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CardContent", CardContent, { "className": "p-6 flex flex-col items-center text-center" }, { "default": ($$result5) => renderTemplate` <div class="p-3 rounded-full bg-highlight/10 group-hover:bg-highlight/20 transition-colors mb-4"> <div class="group-hover:animate-wave"> ${renderComponent($$result5, "service.icon", service.icon, { "className": "h-8 w-8 text-highlight" })} </div> </div> <h3 class="text-xl font-bold mb-2 group-hover:text-highlight-dark transition-colors"> ${service.title} </h3> <p class="text-gray-600">${service.description}</p> ` })} ` })}`)} </div> ` })} <!-- CTA Section --> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "background": "gradient-to-r from-highlight to-highlight-dark" }, { "default": ($$result3) => renderTemplate` <div class="flex flex-col items-center justify-center space-y-4 text-center"> <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
Prêt à faire évoluer votre carrière ?
</h2> <p class="max-w-[700px] md:text-xl/relaxed text-white">
Prenez en main votre avenir professionnel avec notre accompagnement personnalisé.
</p> <div class="flex flex-col sm:flex-row gap-4 mt-6"> ${renderComponent($$result3, "Button", Button, { "size": "lg", "className": "bg-white text-highlight-dark hover:bg-white/90 shadow-button-glow btn-glow", "asChild": true }, { "default": ($$result4) => renderTemplate` <a href="/inscription">Commencer maintenant</a> ` })} ${renderComponent($$result3, "Button", Button, { "size": "lg", "variant": "outline", "className": "border-white text-white hover:bg-white/10", "asChild": true }, { "default": ($$result4) => renderTemplate` <a href="/contact">Nous contacter</a> ` })} </div> </div> ` })} </main> ` })}`;
}, "/home/runner/workspace/PREVICARE_git/src/pages/services/carriere.astro", void 0);

const $$file = "/home/runner/workspace/PREVICARE_git/src/pages/services/carriere.astro";
const $$url = "/services/carriere";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Carriere,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
