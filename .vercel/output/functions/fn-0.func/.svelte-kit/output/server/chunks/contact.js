import { c as create_ssr_component, v as validate_component, j as escape } from "./index2.js";
import "classnames";
/* empty css                                         */import { I as Img, H as Heading, P } from "./P.js";
const metadata = {
  "dir": "pages",
  "title": "Contact",
  "icon": "ChatBubbleOvalLeftEllipsis"
};
const { dir, title, icon } = metadata;
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Img, "Img").$$render(
    $$result,
    {
      src: "/images/war.png",
      alt: "sample 1",
      size: "max-w-lg",
      alignment: "mx-auto"
    },
    {},
    {}
  )}
${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      class: "p-8",
      tag: "h1",
      customSize: "text-3xl"
    },
    {},
    {
      default: () => {
        return `${escape(title)}`;
      }
    }
  )}
${validate_component(P, "P").$$render($$result, { class: "px-8 py-4" }, {}, {
    default: () => {
      return `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet cursus sit amet dictum sit. Quis enim lobortis scelerisque fermentum dui faucibus in. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Ipsum dolor sit amet consectetur adipiscing elit. Euismod nisi porta lorem mollis aliquam ut porttitor. Tortor consequat id porta nibh. Tortor condimentum lacinia quis vel eros donec ac odio. Elementum sagittis vitae et leo duis ut diam quam nulla. Vel turpis nunc eget lorem.  
`;
    }
  })}
${validate_component(P, "P").$$render($$result, { class: "px-8 py-4" }, {}, {
    default: () => {
      return `Aliquet porttitor lacus luctus accumsan. Ac orci phasellus egestas tellus rutrum tellus. Non odio euismod lacinia at quis risus sed. Nam libero justo laoreet sit amet cursus sit amet. Arcu odio ut sem nulla pharetra diam sit amet nisl. Vulputate mi sit amet mauris commodo quis imperdiet. Malesuada nunc vel risus commodo viverra. Eget nulla facilisi etiam dignissim diam quis enim. Hac habitasse platea dictumst quisque. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim.
`;
    }
  })}
${validate_component(P, "P").$$render($$result, { class: "px-8 py-4" }, {}, {
    default: () => {
      return `Nec feugiat in fermentum posuere urna nec tincidunt praesent. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Eu turpis egestas pretium aenean pharetra magna. Ultricies lacus sed turpis tincidunt id. Urna nec tincidunt praesent semper feugiat nibh. Aliquam etiam erat velit scelerisque in dictum non consectetur. Suspendisse in est ante in nibh mauris cursus mattis molestie. Facilisi nullam vehicula ipsum a. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Libero justo laoreet sit amet cursus sit amet.
`;
    }
  })}`;
});
export {
  Contact as default,
  metadata
};
