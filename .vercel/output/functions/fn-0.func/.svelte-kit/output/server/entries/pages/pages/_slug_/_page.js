import { _ as __variableDynamicImportRuntimeHelper } from "../../../../chunks/dynamic-import-helper.js";
async function load({ params }) {
  const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../about.md": () => import("../../../../chunks/about.js"), "../contact.md": () => import("../../../../chunks/contact.js") }), `../${params.slug}.md`);
  const { title, dir } = post.metadata;
  const content = post.default;
  return {
    content,
    title,
    dir
  };
}
export {
  load
};
