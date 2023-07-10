import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.64f815a9.js","_app/immutable/chunks/index.758fa85b.js","_app/immutable/chunks/stores.1f6d579d.js","_app/immutable/chunks/singletons.037e4fe5.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.e2c519f7.js"];
export const stylesheets = ["_app/immutable/assets/0.a6fa63fb.css","_app/immutable/assets/Indicator.1d121e74.css"];
export const fonts = [];
