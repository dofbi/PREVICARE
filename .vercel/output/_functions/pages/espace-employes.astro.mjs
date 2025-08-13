import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as renderScript } from '../chunks/astro/server_PjVteVLJ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_tqcPVyOT.mjs';
import { $ as $$DashboardShell, D as DocumentList } from '../chunks/DocumentList_BS5TIMoU.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';
import { N as NotificationList } from '../chunks/NotificationList_CKWssxMo.mjs';
export { renderers } from '../renderers.mjs';

function IPRESStatus() {
  const cotisations = [
    {
      id: 1,
      mois: "Mars 2025",
      statut: "versée",
      montant: "125,000 FCFA",
      status: "success"
    },
    {
      id: 2,
      mois: "Février 2025",
      statut: "versée",
      montant: "125,000 FCFA",
      status: "success"
    },
    {
      id: 3,
      mois: "Janvier 2025",
      statut: "versée",
      montant: "125,000 FCFA",
      status: "success"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsx("div", { className: "bg-green-50 border border-green-200 rounded-lg p-4 mb-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-green-500 rounded-full mr-3" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "font-medium text-green-800", children: "Statut IPRES : À jour" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-green-600", children: "Toutes vos cotisations sont à jour" })
      ] })
    ] }) }),
    cotisations.map((cotisation) => /* @__PURE__ */ jsxs("div", { className: `flex items-center justify-between p-4 border rounded-lg ${cotisation.status === "success" ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`, children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
        /* @__PURE__ */ jsx("div", { className: `w-3 h-3 rounded-full ${cotisation.status === "success" ? "bg-green-500" : "bg-red-500"}` }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-medium", children: cotisation.mois }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600", children: [
            "Cotisation ",
            cotisation.statut
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("span", { className: `font-medium ${cotisation.status === "success" ? "text-green-600" : "text-red-600"}`, children: cotisation.montant })
    ] }, cotisation.id))
  ] });
}

const $$Astro = createAstro();
const $$EspaceEmployes = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$EspaceEmployes;
  const { user } = Astro2.locals;
  if (!user) {
    return Astro2.redirect("/connexion");
  }
  const userRole = user.user_metadata?.role;
  if (userRole !== "employee") {
    return Astro2.redirect("/connexion");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Espace Employ\xE9s - PREVICARE EMPLOI" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "DashboardShell", $$DashboardShell, { "title": "Tableau de bord Employ\xE9" }, { "default": ($$result3) => renderTemplate`  ${maybeRenderHead()}<div class="grid gap-3 sm:gap-4 grid-cols-2 lg:grid-cols-4 mb-6"> <div class="bg-white rounded-lg border shadow-sm p-4"> <div class="flex flex-row items-center justify-between space-y-0 pb-1 sm:pb-2"> <h3 class="text-xs sm:text-sm font-medium">Documents archivés</h3> <svg class="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path> </svg> </div> <div> <div class="text-lg sm:text-2xl font-bold">12</div> <p class="text-[10px] sm:text-xs text-muted-foreground">Dernière mise à jour: 16/03/2025</p> </div> </div> <div class="bg-white rounded-lg border shadow-sm p-4"> <div class="flex flex-row items-center justify-between space-y-0 pb-1 sm:pb-2"> <h3 class="text-xs sm:text-sm font-medium">Statut IPRES</h3> <svg class="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path> </svg> </div> <div> <div class="text-lg sm:text-2xl font-bold text-green-500">À jour</div> <p class="text-[10px] sm:text-xs text-muted-foreground">Dernière cotisation: Mars 2025</p> </div> </div> <div class="bg-white rounded-lg border shadow-sm p-4"> <div class="flex flex-row items-center justify-between space-y-0 pb-1 sm:pb-2"> <h3 class="text-xs sm:text-sm font-medium">Consultations juridiques</h3> <svg class="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path> </svg> </div> <div> <div class="text-lg sm:text-2xl font-bold">3</div> <p class="text-[10px] sm:text-xs text-muted-foreground">Dernière consultation: 10/03/2025</p> </div> </div> <div class="bg-white rounded-lg border shadow-sm p-4"> <div class="flex flex-row items-center justify-between space-y-0 pb-1 sm:pb-2"> <h3 class="text-xs sm:text-sm font-medium">Notifications</h3> <svg class="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5zM10.5 17H8a2 2 0 01-2-2V5a2 2 0 012-2h8a2 2 0 012 2v4.5"></path> </svg> </div> <div> <div class="text-lg sm:text-2xl font-bold">2</div> <p class="text-[10px] sm:text-xs text-muted-foreground">Nouvelles notifications</p> </div> </div> </div>  <div class="mt-4 sm:mt-6"> <div class="bg-muted p-1 rounded-lg w-full grid grid-cols-3"> <button class="tab-button active flex items-center justify-center whitespace-nowrap rounded-md px-3 py-2 text-xs sm:text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background text-foreground shadow" data-tab="documents">
Documents
</button> <button class="tab-button flex items-center justify-center whitespace-nowrap rounded-md px-3 py-2 text-xs sm:text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow" data-tab="ipres">
Suivi IPRES
</button> <button class="tab-button flex items-center justify-center whitespace-nowrap rounded-md px-3 py-2 text-xs sm:text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow" data-tab="notifications">
Notifications
</button> </div> <!-- Tab Content --> <div class="mt-4 space-y-4"> <!-- Documents Tab --> <div id="documents-tab" class="tab-content"> <div class="bg-white rounded-lg border shadow-sm"> <div class="p-6 border-b"> <h3 class="text-lg font-semibold">Mes documents archivés</h3> <p class="text-sm text-muted-foreground">Gérez vos documents RH importants en toute sécurité</p> </div> <div class="p-6"> ${renderComponent($$result3, "DocumentList", DocumentList, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/runner/workspace/PREVICARE_git/src/components/DocumentList.tsx", "client:component-export": "DocumentList" })} </div> <div class="p-6 border-t flex justify-between"> <button class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"> <svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path> </svg>
Télécharger
</button> <button class="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90"> <svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path> </svg>
Ajouter un document
</button> </div> </div> </div> <!-- IPRES Tab --> <div id="ipres-tab" class="tab-content hidden"> <div class="bg-white rounded-lg border shadow-sm"> <div class="p-6 border-b"> <h3 class="text-lg font-semibold">Suivi des cotisations IPRES</h3> <p class="text-sm text-muted-foreground">Visualisez l'historique de vos cotisations et leur statut</p> </div> <div class="p-6"> ${renderComponent($$result3, "IPRESStatus", IPRESStatus, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/runner/workspace/PREVICARE_git/src/components/IPRESStatus.tsx", "client:component-export": "IPRESStatus" })} </div> <div class="p-6 border-t flex justify-between"> <button class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"> <svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4M3 21h18M5 21l1-9h12l1 9"></path> </svg>
Historique complet
</button> <button class="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90"> <svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.664-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"></path> </svg>
Signaler un problème
</button> </div> </div> </div> <!-- Notifications Tab --> <div id="notifications-tab" class="tab-content hidden"> <div class="bg-white rounded-lg border shadow-sm"> <div class="p-6 border-b"> <h3 class="text-lg font-semibold">Mes notifications</h3> <p class="text-sm text-muted-foreground">Restez informé des mises à jour importantes</p> </div> <div class="p-6"> ${renderComponent($$result3, "NotificationList", NotificationList, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/runner/workspace/PREVICARE_git/src/components/NotificationList.tsx", "client:component-export": "NotificationList" })} </div> <div class="p-6 border-t"> <button class="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
Marquer tout comme lu
</button> </div> </div> </div> </div> </div> ${renderScript($$result3, "/home/runner/workspace/PREVICARE_git/src/pages/espace-employes.astro?astro&type=script&index=0&lang.ts")} ` })} ` })}`;
}, "/home/runner/workspace/PREVICARE_git/src/pages/espace-employes.astro", void 0);

const $$file = "/home/runner/workspace/PREVICARE_git/src/pages/espace-employes.astro";
const $$url = "/espace-employes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$EspaceEmployes,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
