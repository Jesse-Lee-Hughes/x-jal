import { _ as __variableDynamicImportRuntimeHelper } from "../../../../chunks/dynamic-import-helper.js";
import "../../../../chunks/index.js";
async function load({ params }) {
  const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../diablo4.md": () => import("../../../../chunks/diablo4.js") }), `../${params.slug}.md`);
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
