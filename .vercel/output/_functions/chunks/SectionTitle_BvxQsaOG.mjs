import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_PjVteVLJ.mjs';
import 'kleur/colors';
import 'clsx';
import { c as cn } from './SectionContainer_DUe0XCbm.mjs';

const $$Astro = createAstro();
const $$SectionTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SectionTitle;
  const {
    title,
    subtitle,
    badge,
    badgeVariant = "primary",
    align = "center"
  } = Astro2.props;
  const badgeClasses = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary-dark",
    tertiary: "bg-tertiary/10 text-tertiary-dark",
    highlight: "bg-highlight/10 text-highlight-dark"
  };
  const alignClasses = {
    left: "text-left",
    center: "text-center"
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn("mb-12", alignClasses[align]), "class")}> ${badge && renderTemplate`<div${addAttribute(cn(
    "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4",
    badgeClasses[badgeVariant]
  ), "class")}> ${badge} </div>`} <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary mb-4">${title}</h2> ${subtitle && renderTemplate`<p class="text-xl text-primary/80 max-w-3xl mx-auto">${subtitle}</p>`} </div>`;
}, "/home/runner/workspace/PREVICARE_git/src/components/SectionTitle.astro", void 0);

export { $$SectionTitle as $ };
