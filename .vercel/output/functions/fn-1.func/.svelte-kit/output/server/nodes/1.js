

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a98cfce3.js","_app/immutable/chunks/index.758fa85b.js","_app/immutable/chunks/stores.1f6d579d.js","_app/immutable/chunks/singletons.037e4fe5.js"];
export const stylesheets = [];
export const fonts = [];
