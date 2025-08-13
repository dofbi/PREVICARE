import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, a as renderTemplate, g as renderSlot, r as renderComponent } from './astro/server_PjVteVLJ.mjs';
import 'kleur/colors';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const $$Astro$1 = createAstro();
const $$DecorativeShapes = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$DecorativeShapes;
  const { variant = "primary" } = Astro2.props;
  const shapes = {
    primary: [
      { size: "w-32 h-32", color: "bg-primary/10", position: "top-10 left-10", animation: "animate-pulse-slow" },
      {
        size: "w-24 h-24",
        color: "bg-secondary/10",
        position: "bottom-20 right-20",
        animation: "animate-pulse-slow animation-delay-1000"
      }
    ],
    secondary: [
      { size: "w-40 h-40", color: "bg-secondary/10", position: "top-20 right-10", animation: "animate-pulse-slow" },
      {
        size: "w-28 h-28",
        color: "bg-primary/10",
        position: "bottom-10 left-20",
        animation: "animate-pulse-slow animation-delay-2000"
      }
    ],
    mixed: [
      { size: "w-36 h-36", color: "bg-tertiary/10", position: "top-16 left-16", animation: "animate-pulse-slow" },
      {
        size: "w-20 h-20",
        color: "bg-secondary/10",
        position: "bottom-16 right-16",
        animation: "animate-pulse-slow animation-delay-1000"
      },
      {
        size: "w-28 h-28",
        color: "bg-primary/10",
        position: "top-1/2 right-10",
        animation: "animate-pulse-slow animation-delay-2000"
      }
    ]
  };
  const currentShapes = shapes[variant] || shapes.primary;
  return renderTemplate`${maybeRenderHead()}<div class="absolute inset-0 overflow-hidden pointer-events-none"> ${currentShapes.map((shape) => renderTemplate`<div${addAttribute(`absolute rounded-full ${shape.size} ${shape.color} ${shape.position} ${shape.animation}`, "class")}></div>`)} </div>`;
}, "/home/runner/workspace/PREVICARE_git/src/components/DecorativeShapes.astro", void 0);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const $$Astro = createAstro();
const $$SectionContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  const {
    background = "white",
    decorative = false,
    decorativeVariant = "primary",
    className,
    id
  } = Astro2.props;
  const backgroundClasses = {
    white: "bg-white",
    accent: "bg-accent",
    pattern: "bg-gradient-to-br from-accent to-white",
    "gradient-primary": "bg-gradient-primary",
    "gradient-secondary": "bg-gradient-secondary",
    "gradient-tertiary": "bg-gradient-tertiary",
    gradient: "bg-gradient-primary",
    "gradient-to-r from-highlight to-highlight-dark": "bg-gradient-to-r from-highlight to-highlight-dark"
  };
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(cn("relative w-full py-16 md:py-24 overflow-visible", backgroundClasses[background], className), "class")}> ${decorative && renderTemplate`${renderComponent($$result, "DecorativeShapes", $$DecorativeShapes, { "variant": decorativeVariant })}`} <div class="container mx-auto px-4 md:px-6 relative z-10"> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "/home/runner/workspace/PREVICARE_git/src/components/SectionContainer.astro", void 0);

export { $$SectionContainer as $, cn as c };
