import * as universal from '../entries/pages/team/_slug_/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/team/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/team/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/5.25e0a26f.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/dynamic-import-helper.be004503.js","_app/immutable/chunks/index.c4ca6160.js","_app/immutable/chunks/index.758fa85b.js"];
export const stylesheets = ["_app/immutable/assets/Indicator.1d121e74.css"];
export const fonts = [];
