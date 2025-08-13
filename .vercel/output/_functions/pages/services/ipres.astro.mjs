import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_PjVteVLJ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_tqcPVyOT.mjs';
import { $ as $$SectionContainer } from '../../chunks/SectionContainer_DUe0XCbm.mjs';
import { $ as $$SectionTitle } from '../../chunks/SectionTitle_BvxQsaOG.mjs';
import { C as Card, a as CardContent } from '../../chunks/card_9cKSHii2.mjs';
import { B as Button } from '../../chunks/button_DlQ7dBMu.mjs';
import { ArrowRight, BarChart, AlertCircle, Bell, PieChart, CheckCircle, Clock } from 'lucide-react';
export { renderers } from '../../renderers.mjs';

const $$Ipres = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Suivi IPRES - PREVICARE EMPLOI" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex min-h-screen flex-col"> <!-- Hero Section --> <section class="relative w-full py-20 md:py-28 overflow-hidden"> <!-- Image de fond --> <div class="absolute inset-0 z-0" style="background-image: url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop'); background-size: cover; background-position: center;"> <!-- Overlay pour améliorer la lisibilité --> <div class="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/70"></div> </div> <div class="container relative px-4 md:px-6 z-10"> <div class="grid gap-12 lg:grid-cols-2 items-center"> <div class="space-y-6"> <div class="badge badge-secondary inline-flex items-center mb-2 bg-white/20 text-white">
Service Exclusif
</div> <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
Suivi <span class="text-white">IPRES</span> </h1> <p class="text-xl text-white/90 max-w-[600px]">
Monitoring en temps réel de vos cotisations et alertes en cas d'anomalies détectées pour sécuriser votre retraite.
</p> <div class="flex flex-col sm:flex-row gap-3 pt-4"> ${renderComponent($$result2, "Button", Button, { "size": "lg", "className": "bg-white text-secondary hover:bg-white/90 shadow-button-glow btn-glow", "asChild": true }, { "default": ($$result3) => renderTemplate` <a href="/inscription">
Commencer maintenant ${renderComponent($$result3, "ArrowRight", ArrowRight, { "className": "ml-2 h-4 w-4" })} </a> ` })} ${renderComponent($$result2, "Button", Button, { "size": "lg", "variant": "outline", "className": "border-white text-white bg-white/20 hover:bg-white/30 transition-colors", "asChild": true }, { "default": ($$result3) => renderTemplate` <a href="/contact">Nous contacter</a> ` })} </div> </div> <div class="relative"> <div class="absolute -top-6 -left-6 w-24 h-24 bg-white/10 rounded-full animate-pulse-slow"></div> <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full animate-pulse-slow animation-delay-1000"></div> <div class="relative rounded-2xl overflow-hidden shadow-card card-3d"> <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" alt="Suivi des cotisations IPRES" class="w-full h-auto object-cover aspect-video"> <div class="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent"></div> </div> </div> </div> </div> </section> <!-- Features Section --> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "background": "white" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "SectionTitle", $$SectionTitle, { "title": "Fonctionnalit\xE9s de notre service IPRES", "badge": "Avantages", "badgeVariant": "secondary", "subtitle": "Notre solution de suivi IPRES offre de nombreux avantages pour s\xE9curiser votre retraite." })} <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${[
    {
      icon: BarChart,
      title: "Suivi en temps r\xE9el",
      description: "Visualisez l'\xE9tat de vos cotisations et leur historique complet en temps r\xE9el."
    },
    {
      icon: AlertCircle,
      title: "Alertes automatiques",
      description: "Recevez des notifications en cas d'anomalies ou de retards dans vos cotisations."
    },
    {
      icon: Bell,
      title: "Rappels d'\xE9ch\xE9ances",
      description: "Ne manquez plus aucune \xE9ch\xE9ance gr\xE2ce \xE0 nos rappels personnalis\xE9s."
    },
    {
      icon: PieChart,
      title: "Rapports d\xE9taill\xE9s",
      description: "G\xE9n\xE9rez des rapports complets sur vos cotisations pour vos d\xE9clarations."
    },
    {
      icon: CheckCircle,
      title: "V\xE9rification automatique",
      description: "Notre syst\xE8me v\xE9rifie automatiquement la conformit\xE9 de vos cotisations."
    },
    {
      icon: Clock,
      title: "Historique complet",
      description: "Acc\xE9dez \xE0 l'historique complet de vos cotisations depuis votre inscription."
    }
  ].map((feature) => renderTemplate`${renderComponent($$result3, "Card", Card, { "className": "border-none shadow-card transition-all duration-300 hover:shadow-lg group card-hover", "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/runner/workspace/PREVICARE_git/src/components/ui/card", "client:component-export": "Card" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CardContent", CardContent, { "className": "p-6 flex flex-col items-center text-center" }, { "default": ($$result5) => renderTemplate` <div class="p-3 rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors mb-4"> <div class="group-hover:animate-wave"> ${renderComponent($$result5, "feature.icon", feature.icon, { "className": "h-8 w-8 text-secondary" })} </div> </div> <h3 class="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">${feature.title}</h3> <p class="text-gray-600">${feature.description}</p> ` })} ` })}`)} </div> ` })} <!-- CTA Section --> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "background": "gradient-secondary" }, { "default": ($$result3) => renderTemplate` <div class="flex flex-col items-center justify-center space-y-4 text-center"> <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
Sécurisez votre retraite dès maintenant
</h2> <p class="max-w-[700px] md:text-xl/relaxed text-white">
Ne laissez pas les erreurs de cotisation compromettre votre avenir. Rejoignez PREVICARE EMPLOI aujourd'hui.
</p> <div class="flex flex-col sm:flex-row gap-4 mt-6"> ${renderComponent($$result3, "Button", Button, { "size": "lg", "className": "bg-white text-secondary hover:bg-white/90 shadow-button-glow btn-glow", "asChild": true }, { "default": ($$result4) => renderTemplate` <a href="/inscription">Commencer gratuitement</a> ` })} ${renderComponent($$result3, "Button", Button, { "size": "lg", "variant": "outline", "className": "border-white text-white hover:bg-white/10", "asChild": true }, { "default": ($$result4) => renderTemplate` <a href="/contact">Nous contacter</a> ` })} </div> </div> ` })} </main> ` })}`;
}, "/home/runner/workspace/PREVICARE_git/src/pages/services/ipres.astro", void 0);

const $$file = "/home/runner/workspace/PREVICARE_git/src/pages/services/ipres.astro";
const $$url = "/services/ipres";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Ipres,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
