

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.864abcfa.js","_app/immutable/chunks/index.758fa85b.js","_app/immutable/chunks/stores.8331248b.js","_app/immutable/chunks/singletons.2ae0c43c.js"];
export const stylesheets = [];
export const fonts = [];
