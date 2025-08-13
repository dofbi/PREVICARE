import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderScript } from '../chunks/astro/server_PjVteVLJ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_tqcPVyOT.mjs';
import { a as actions } from '../chunks/_astro_actions_DK20husH.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Connexion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Connexion;
  const { user } = Astro2.locals;
  if (user) {
    const userRole = user.user_metadata?.role;
    if (userRole === "employee") {
      return Astro2.redirect(user.user_metadata?.is_expatriate ? "/espace-expatries" : "/espace-employes");
    } else if (userRole === "employer") {
      return Astro2.redirect("/espace-employeurs");
    } else if (userRole === "delegate") {
      return Astro2.redirect("/espace-delegues");
    }
    return Astro2.redirect("/");
  }
  const result = Astro2.getActionResult(actions.auth.signIn);
  if (result && !result.error && result.data?.success) {
    return Astro2.redirect(result.data.redirectUrl);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Connexion - PREVICARE EMPLOI" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex min-h-screen items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"> <div class="w-full max-w-md"> <div class="text-center mb-8"> <a href="/" class="inline-block"> <h1 class="text-3xl font-bold text-primary">PREVICARE EMPLOI</h1> </a> <p class="mt-2 text-gray-600">Votre partenaire RH au Sénégal</p> </div> <div class="w-full"> <!-- Tabs --> <div class="grid w-full grid-cols-2 mb-8 bg-gray-100 p-1 rounded-lg"> <button class="tab-button active bg-white text-primary px-4 py-2 text-sm font-medium rounded-md transition-all" data-tab="login">
Connexion
</button> <a href="/inscription" class="tab-button text-gray-600 px-4 py-2 text-sm font-medium rounded-md transition-all text-center">
Inscription
</a> </div> <!-- Affichage des erreurs --> ${(result?.error || result?.data && !result.data.success) && renderTemplate`<div class="mb-4 p-4 bg-red-50 border border-red-200 rounded-md"> <div class="flex"> <div class="flex-shrink-0"> <svg class="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path> </svg> </div> <div class="ml-3"> <h3 class="text-sm font-medium text-red-800">
Erreur de connexion
</h3> <div class="mt-1 text-sm text-red-700"> <p> ${result?.error?.message || result?.data?.message || "Une erreur s'est produite lors de la connexion."} </p> </div> </div> </div> </div>`} <!-- Login Tab Content --> <div id="login-tab" class="tab-content"> <div class="bg-white rounded-lg shadow-md"> <div class="p-6"> <h2 class="text-xl font-semibold mb-2">Connexion</h2> <p class="text-gray-600 mb-4">Accédez à votre espace personnel PREVICARE EMPLOI</p> <form method="POST"${addAttribute(actions.auth.signIn, "action")} class="space-y-4"> <div class="space-y-2"> <label for="email" class="block text-sm font-medium text-gray-700">Email</label> <div class="relative"> <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"> <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path> </svg> </div> <input type="email" id="email" name="email" placeholder="nom@exemple.com" class="flex h-10 w-full rounded-md border border-gray-300 bg-background pl-10 px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" required> </div> </div> <div class="space-y-2"> <div class="flex items-center justify-between"> <label for="password" class="block text-sm font-medium text-gray-700">Mot de passe</label> <a href="/mot-de-passe-oublie" class="text-sm text-primary hover:underline">
Mot de passe oublié ?
</a> </div> <div class="relative"> <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"> <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path> </svg> </div> <input type="password" id="password" name="password" placeholder="••••••••" class="flex h-10 w-full rounded-md border border-gray-300 bg-background pl-10 pr-10 px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" required> <button type="button" class="absolute inset-y-0 right-0 flex items-center pr-3 toggle-password" data-target="password"> <svg class="h-5 w-5 text-gray-400 eye-open" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path> </svg> <svg class="h-5 w-5 text-gray-400 eye-closed hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"></path> </svg> </button> </div> </div> <div class="px-6 py-4"> <button type="submit" class="w-full bg-primary text-white hover:bg-primary-dark py-2 px-4 rounded-md font-medium transition-colors">
Se connecter
</button> </div> </form> </div> </div> </div> <p class="mt-4 text-center text-sm text-gray-600">
Vous n'avez pas de compte ?
<a href="/inscription" class="text-primary hover:underline font-medium">
S'inscrire
</a> </p> </div> </div> </main> ${renderScript($$result2, "/home/runner/workspace/PREVICARE_git/src/pages/connexion.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/home/runner/workspace/PREVICARE_git/src/pages/connexion.astro", void 0);

const $$file = "/home/runner/workspace/PREVICARE_git/src/pages/connexion.astro";
const $$url = "/connexion";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Connexion,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
