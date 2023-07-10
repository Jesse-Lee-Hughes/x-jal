import * as universal from '../entries/pages/games/_slug_/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/games/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/games/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/3.deb7051a.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/dynamic-import-helper.be004503.js","_app/immutable/chunks/index.c4ca6160.js","_app/immutable/chunks/index.758fa85b.js"];
export const stylesheets = ["_app/immutable/assets/Indicator.1d121e74.css"];
export const fonts = [];
