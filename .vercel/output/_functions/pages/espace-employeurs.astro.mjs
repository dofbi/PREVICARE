import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_PjVteVLJ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_tqcPVyOT.mjs';
import { $ as $$DashboardShell, D as DocumentList } from '../chunks/DocumentList_BS5TIMoU.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$EspaceEmployeurs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$EspaceEmployeurs;
  const { user } = Astro2.locals;
  if (!user) {
    return Astro2.redirect("/connexion");
  }
  const userRole = user.user_metadata?.role;
  if (userRole !== "employer") {
    return Astro2.redirect("/connexion");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Espace Employeurs - PREVICARE EMPLOI" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "DashboardShell", $$DashboardShell, { "title": "Tableau de bord Employeur" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template(["  ", `<div class="relative w-full h-48 mb-6 rounded-xl overflow-hidden"> <div class="absolute inset-0 z-0" style="background-image: url('https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=2070&auto=format&fit=crop'); background-size: cover; background-position: center;"> <div class="absolute inset-0 bg-gradient-to-r from-secondary/80 to-secondary/60"></div> </div> <div class="relative h-full flex flex-col justify-center px-6 z-10"> <h1 class="text-2xl font-bold tracking-wide text-white">
Bienvenue, `, " ", ' </h1> <p class="text-white/90">Votre espace entreprise PREVICARE EMPLOI</p> ', ` </div> </div> <div class="flex justify-end mb-6"> <button class="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90"> <svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path> </svg>
Ajouter un employ\xE9
</button> </div>  <div class="grid gap-3 sm:gap-4 grid-cols-2 lg:grid-cols-4 mb-6"> <div class="bg-white rounded-lg border shadow-sm p-4"> <div class="flex flex-row items-center justify-between space-y-0 pb-1 sm:pb-2"> <h3 class="text-xs sm:text-sm font-medium">Employ\xE9s</h3> <svg class="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path> </svg> </div> <div> <div class="text-lg sm:text-2xl font-bold">42</div> <p class="text-[10px] sm:text-xs text-muted-foreground">+3 ce mois-ci</p> </div> </div> <div class="bg-white rounded-lg border shadow-sm p-4"> <div class="flex flex-row items-center justify-between space-y-0 pb-1 sm:pb-2"> <h3 class="text-xs sm:text-sm font-medium">Conformit\xE9 IPRES</h3> <svg class="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path> </svg> </div> <div> <div class="text-lg sm:text-2xl font-bold text-green-500">98%</div> <p class="text-[10px] sm:text-xs text-muted-foreground">Derni\xE8re v\xE9rification: 15/03/2025</p> </div> </div> <div class="bg-white rounded-lg border shadow-sm p-4"> <div class="flex flex-row items-center justify-between space-y-0 pb-1 sm:pb-2"> <h3 class="text-xs sm:text-sm font-medium">Documents archiv\xE9s</h3> <svg class="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path> </svg> </div> <div> <div class="text-lg sm:text-2xl font-bold">156</div> <p class="text-[10px] sm:text-xs text-muted-foreground">Derni\xE8re mise \xE0 jour: 16/03/2025</p> </div> </div> <div class="bg-white rounded-lg border shadow-sm p-4"> <div class="flex flex-row items-center justify-between space-y-0 pb-1 sm:pb-2"> <h3 class="text-xs sm:text-sm font-medium">Alertes</h3> <svg class="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5zM10.5 17H8a2 2 0 01-2-2V5a2 2 0 012-2h8a2 2 0 012 2v4.5"></path> </svg> </div> <div> <div class="text-lg sm:text-2xl font-bold">2</div> <p class="text-[10px] sm:text-xs text-muted-foreground">Requi\xE8rent votre attention</p> </div> </div> </div>  <div class="mt-4 sm:mt-6"> <div class="bg-muted p-1 rounded-lg w-full grid grid-cols-3"> <button class="tab-button active flex items-center justify-center whitespace-nowrap rounded-md px-3 py-2 text-xs sm:text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background text-foreground shadow" data-tab="employees">
Employ\xE9s
</button> <button class="tab-button flex items-center justify-center whitespace-nowrap rounded-md px-3 py-2 text-xs sm:text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" data-tab="documents">
Documents
</button> <button class="tab-button flex items-center justify-center whitespace-nowrap rounded-md px-3 py-2 text-xs sm:text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" data-tab="compliance">
Conformit\xE9
</button> </div> <!-- Tab Content --> <div class="mt-4 space-y-4"> <!-- Employees Tab --> <div id="employees-tab" class="tab-content"> <div class="bg-white rounded-lg border shadow-sm"> <div class="p-6 border-b"> <h3 class="text-lg font-semibold">Gestion des employ\xE9s</h3> <p class="text-sm text-muted-foreground">G\xE9rez les informations de vos employ\xE9s et leurs documents</p> </div> <div class="p-6"> <div class="space-y-4"> <div class="flex items-center justify-between p-4 border rounded-lg"> <div class="flex items-center space-x-3"> <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
AS
</div> <div> <h4 class="font-medium">Aminata Sow</h4> <p class="text-sm text-gray-600">D\xE9veloppeuse - CDI</p> </div> </div> <span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Actif</span> </div> <div class="flex items-center justify-between p-4 border rounded-lg"> <div class="flex items-center space-x-3"> <div class="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
MD
</div> <div> <h4 class="font-medium">Moussa Diallo</h4> <p class="text-sm text-gray-600">Chef de projet - CDI</p> </div> </div> <span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Actif</span> </div> <div class="flex items-center justify-between p-4 border rounded-lg"> <div class="flex items-center space-x-3"> <div class="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-semibold">
FN
</div> <div> <h4 class="font-medium">Fatou Ndiaye</h4> <p class="text-sm text-gray-600">Comptable - CDD</p> </div> </div> <span class="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">CDD</span> </div> </div> </div> <div class="p-6 border-t flex justify-between"> <button class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"> <svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path> </svg>
Exporter la liste
</button> <button class="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90"> <svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path> </svg>
Ajouter un employ\xE9
</button> </div> </div> </div> <!-- Documents Tab --> <div id="documents-tab" class="tab-content hidden"> <div class="bg-white rounded-lg border shadow-sm"> <div class="p-6 border-b"> <h3 class="text-lg font-semibold">Documents d'entreprise</h3> <p class="text-sm text-muted-foreground">G\xE9rez vos documents d'entreprise en toute s\xE9curit\xE9</p> </div> <div class="p-6"> `, ` </div> <div class="p-6 border-t flex justify-between"> <button class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"> <svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path> </svg>
T\xE9l\xE9charger
</button> <button class="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90"> <svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path> </svg>
Ajouter un document
</button> </div> </div> </div> <!-- Compliance Tab --> <div id="compliance-tab" class="tab-content hidden"> <div class="bg-white rounded-lg border shadow-sm"> <div class="p-6 border-b"> <h3 class="text-lg font-semibold">Statut de conformit\xE9</h3> <p class="text-sm text-muted-foreground">Suivez votre conformit\xE9 aux obligations l\xE9gales</p> </div> <div class="p-6"> <div class="space-y-4"> <div class="flex items-center justify-between p-4 border rounded-lg"> <div class="flex items-center space-x-3"> <svg class="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <div> <h4 class="font-medium">D\xE9clarations IPRES</h4> <p class="text-sm text-gray-600">Toutes les d\xE9clarations \xE0 jour</p> </div> </div> <span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Conforme</span> </div> <div class="flex items-center justify-between p-4 border rounded-lg"> <div class="flex items-center space-x-3"> <svg class="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <div> <h4 class="font-medium">Code du Travail</h4> <p class="text-sm text-gray-600">Respect des dispositions l\xE9gales</p> </div> </div> <span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Conforme</span> </div> <div class="flex items-center justify-between p-4 border rounded-lg"> <div class="flex items-center space-x-3"> <svg class="h-5 w-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.664-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"></path> </svg> <div> <h4 class="font-medium">Formation s\xE9curit\xE9</h4> <p class="text-sm text-gray-600">Formation \xE0 programmer</p> </div> </div> <span class="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">\xC0 planifier</span> </div> </div> </div> <div class="p-6 border-t flex justify-between"> <button class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"> <svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path> </svg>
Rapport complet
</button> <button class="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90"> <svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.664-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"></path> </svg>
Signaler un probl\xE8me
</button> </div> </div> </div> </div> </div>  <div class="bg-white rounded-lg border shadow-sm mt-6"> <div class="p-6 border-b"> <h3 class="text-lg font-semibold">Aper\xE7u de l'entreprise</h3> <p class="text-sm text-muted-foreground">Statistiques et informations cl\xE9s sur votre entreprise</p> </div> <div class="p-6"> <div class="grid md:grid-cols-2 gap-6"> <div class="space-y-4"> <div class="flex items-start"> <svg class="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path> </svg> <div> <h4 class="font-medium">Informations g\xE9n\xE9rales</h4> <p class="text-sm text-gray-600">Raison sociale: `, `</p> <p class="text-sm text-gray-600">NINEA: SN-DKR-2023-A-12345</p> <p class="text-sm text-gray-600">Secteur: Technologies</p> </div> </div> <div class="flex items-start"> <svg class="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path> </svg> <div> <h4 class="font-medium">R\xE9partition des employ\xE9s</h4> <p class="text-sm text-gray-600">CDI: 35 (83%)</p> <p class="text-sm text-gray-600">CDD: 5 (12%)</p> <p class="text-sm text-gray-600">Stagiaires: 2 (5%)</p> </div> </div> <div class="flex items-start"> <svg class="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path> </svg> <div> <h4 class="font-medium">Prochaines \xE9ch\xE9ances</h4> <p class="text-sm text-gray-600">D\xE9claration IPRES: 15/04/2025</p> <p class="text-sm text-gray-600">Renouvellement assurance: 30/04/2025</p> </div> </div> </div> <div class="rounded-lg overflow-hidden h-[200px]"> <img src="https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=1000&auto=format&fit=crop" alt="Graphique d'entreprise" class="w-full h-full object-cover"> </div> </div> </div> <div class="p-6 border-t"> <button class="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"> <svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path> </svg>
Voir les rapports d\xE9taill\xE9s
</button> </div> </div> <script data-astro-rerun>
      document.addEventListener('DOMContentLoaded', function() {
        const tabButtons = document.querySelectorAll('.tab-button');
        const tabContents = document.querySelectorAll('.tab-content');

        tabButtons.forEach(button => {
          button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');

            // Remove active class from all buttons
            tabButtons.forEach(btn => {
              btn.classList.remove('active', 'bg-background', 'text-foreground', 'shadow');
            });

            // Add active class to clicked button
            this.classList.add('active', 'bg-background', 'text-foreground', 'shadow');

            // Hide all tab contents
            tabContents.forEach(content => {
              content.classList.add('hidden');
            });

            // Show target tab content
            const targetContent = document.getElementById(targetTab + '-tab');
            if (targetContent) {
              targetContent.classList.remove('hidden');
            }
          });
        });
      });
    <\/script> `])), maybeRenderHead(), user.user_metadata?.first_name, user.user_metadata?.last_name, user.user_metadata?.organization && renderTemplate`<p class="text-sm text-white/70">${user.user_metadata.organization}</p>`, renderComponent($$result3, "DocumentList", DocumentList, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/runner/workspace/PREVICARE_git/src/components/DocumentList.tsx", "client:component-export": "DocumentList" }), user.user_metadata?.organization || "ACME S\xE9n\xE9gal SARL") })} ` })}`;
}, "/home/runner/workspace/PREVICARE_git/src/pages/espace-employeurs.astro", void 0);

const $$file = "/home/runner/workspace/PREVICARE_git/src/pages/espace-employeurs.astro";
const $$url = "/espace-employeurs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$EspaceEmployeurs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
