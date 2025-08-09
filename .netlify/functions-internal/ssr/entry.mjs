import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_urc5drhU.mjs';

const _page0  = () => import('./chunks/generic_hhoHHnN7.mjs');
const _page1  = () => import('./chunks/index_wQ5Z1mxp.mjs');
const _page2  = () => import('./chunks/ticketing-agreement_iameDVwr.mjs');
const _page3  = () => import('./chunks/privacy-policy_06VJEaNM.mjs');
const _page4  = () => import('./chunks/manhattan_RJcD-5WG.mjs');
const _page5  = () => import('./chunks/brooklyn_uA80ij64.mjs');
const _page6  = () => import('./chunks/partnerships_WbFwdcb6.mjs');
const _page7  = () => import('./chunks/events_syAXatF6.mjs');
const _page8  = () => import('./chunks/apply_SFAjZuyN.mjs');
const _page9  = () => import('./chunks/press_OojuONIV.mjs');
const _page10  = () => import('./chunks/terms_oBU3J297.mjs');
const _page11  = () => import('./chunks/404_i2bnavRJ.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/ticketing-agreement.astro", _page2],["src/pages/privacy-policy.astro", _page3],["src/pages/bucketlisters/manhattan.astro", _page4],["src/pages/bucketlisters/brooklyn.astro", _page5],["src/pages/partnerships.astro", _page6],["src/pages/events.astro", _page7],["src/pages/apply.astro", _page8],["src/pages/press.astro", _page9],["src/pages/terms.astro", _page10],["src/pages/404.astro", _page11]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = undefined;

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
