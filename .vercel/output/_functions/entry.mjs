import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BGS3FT80.mjs';
import { manifest } from './manifest_BlZQvPz9.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/_actions/_---path_.astro.mjs');
const _page2 = () => import('./pages/a-propos.astro.mjs');
const _page3 = () => import('./pages/connexion.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/delegues.astro.mjs');
const _page6 = () => import('./pages/employes.astro.mjs');
const _page7 = () => import('./pages/employeurs.astro.mjs');
const _page8 = () => import('./pages/espace-delegues.astro.mjs');
const _page9 = () => import('./pages/espace-employes.astro.mjs');
const _page10 = () => import('./pages/espace-employeurs.astro.mjs');
const _page11 = () => import('./pages/espace-expatries.astro.mjs');
const _page12 = () => import('./pages/expatries.astro.mjs');
const _page13 = () => import('./pages/inscription.astro.mjs');
const _page14 = () => import('./pages/services/archivage.astro.mjs');
const _page15 = () => import('./pages/services/carriere.astro.mjs');
const _page16 = () => import('./pages/services/ipres.astro.mjs');
const _page17 = () => import('./pages/services/juridique.astro.mjs');
const _page18 = () => import('./pages/tarifs.astro.mjs');
const _page19 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/astro/dist/actions/runtime/route.js", _page1],
    ["src/pages/a-propos.astro", _page2],
    ["src/pages/connexion.astro", _page3],
    ["src/pages/contact.astro", _page4],
    ["src/pages/delegues.astro", _page5],
    ["src/pages/employes.astro", _page6],
    ["src/pages/employeurs.astro", _page7],
    ["src/pages/espace-delegues.astro", _page8],
    ["src/pages/espace-employes.astro", _page9],
    ["src/pages/espace-employeurs.astro", _page10],
    ["src/pages/espace-expatries.astro", _page11],
    ["src/pages/expatries.astro", _page12],
    ["src/pages/inscription.astro", _page13],
    ["src/pages/services/archivage.astro", _page14],
    ["src/pages/services/carriere.astro", _page15],
    ["src/pages/services/ipres.astro", _page16],
    ["src/pages/services/juridique.astro", _page17],
    ["src/pages/tarifs.astro", _page18],
    ["src/pages/index.astro", _page19]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_astro-internal_actions.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "f24ef266-e09b-4bf3-b82c-98fa18cfbaca",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
