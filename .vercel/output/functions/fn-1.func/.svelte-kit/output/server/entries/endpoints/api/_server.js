import { j as json } from "../../../chunks/index.js";
const GET = async () => {
  const allPosts = await fetchMarkdownPosts();
  return json(allPosts);
};
const fetchMarkdownPosts = async () => {
  const articleFiles = /* @__PURE__ */ Object.assign({ "/src/routes/team/jesse.md": () => import("../../../chunks/jesse.js") });
  const pageFiles = /* @__PURE__ */ Object.assign({ "/src/routes/pages/about.md": () => import("../../../chunks/about.js"), "/src/routes/pages/contact.md": () => import("../../../chunks/contact.js") });
  const gameFiles = /* @__PURE__ */ Object.assign({ "/src/routes/games/diablo4.md": () => import("../../../chunks/diablo4.js") });
  const iterableArticleFiles = Object.entries(articleFiles);
  const iterablePageFiles = Object.entries(pageFiles);
  const iterableGameFiles = Object.entries(gameFiles);
  const team = await Promise.all(
    iterableArticleFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const filePath = path.slice(17, -3);
      return {
        meta: metadata,
        path: filePath
      };
    })
  );
  const pages = await Promise.all(
    iterablePageFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const filePath = path.slice(18, -3);
      return {
        meta: metadata,
        path: filePath
      };
    })
  );
  const games = await Promise.all(
    iterableGameFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const filePath = path.slice(18, -3);
      return {
        meta: metadata,
        path: filePath
      };
    })
  );
  return { pages, team, games };
};
export {
  GET
};
