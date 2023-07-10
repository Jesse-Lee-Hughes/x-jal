

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.520a2445.js","_app/immutable/chunks/index.758fa85b.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.e2c519f7.js","_app/immutable/chunks/P.a2ea5f25.js"];
export const stylesheets = ["_app/immutable/assets/Indicator.1d121e74.css"];
export const fonts = [];
