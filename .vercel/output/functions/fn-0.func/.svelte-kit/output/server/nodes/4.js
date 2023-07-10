import * as universal from '../entries/pages/pages/_slug_/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/pages/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/pages/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/4.4898069f.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/dynamic-import-helper.be004503.js","_app/immutable/chunks/index.758fa85b.js"];
export const stylesheets = ["_app/immutable/assets/Indicator.1d121e74.css"];
export const fonts = [];
