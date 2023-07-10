import { c as create_ssr_component, b as compute_rest_props, d as spread, e as escape_object, f as escape_attribute_value, v as validate_component } from "../../chunks/index2.js";
import classNames from "classnames";
/* empty css                                                    */import { I as Img, H as Heading, P } from "../../chunks/P.js";
const Blockquote = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["border", "italic", "borderClass", "bgClass", "bg", "baseClass", "alignment", "size"]);
  let { border = false } = $$props;
  let { italic = true } = $$props;
  let { borderClass = "border-l-4 border-gray-300 dark:border-gray-500" } = $$props;
  let { bgClass = "bg-gray-50 dark:bg-gray-800" } = $$props;
  let { bg = false } = $$props;
  let { baseClass = "font-semibold text-gray-900 dark:text-white" } = $$props;
  let { alignment = "left" } = $$props;
  let { size = "lg" } = $$props;
  let alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };
  const sizes = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
    "7xl": "text-7xl",
    "8xl": "text-8xl",
    "9xl": "text-9xl"
  };
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.italic === void 0 && $$bindings.italic && italic !== void 0)
    $$bindings.italic(italic);
  if ($$props.borderClass === void 0 && $$bindings.borderClass && borderClass !== void 0)
    $$bindings.borderClass(borderClass);
  if ($$props.bgClass === void 0 && $$bindings.bgClass && bgClass !== void 0)
    $$bindings.bgClass(bgClass);
  if ($$props.bg === void 0 && $$bindings.bg && bg !== void 0)
    $$bindings.bg(bg);
  if ($$props.baseClass === void 0 && $$bindings.baseClass && baseClass !== void 0)
    $$bindings.baseClass(baseClass);
  if ($$props.alignment === void 0 && $$bindings.alignment && alignment !== void 0)
    $$bindings.alignment(alignment);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<blockquote${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(classNames(baseClass, alignmentClasses[alignment], sizes[size], bg && bgClass, border && borderClass, italic && "italic", $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</blockquote>

`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
        return `X-JAL`;
      }
    }
  )}
${validate_component(Blockquote, "Blockquote").$$render($$result, { class: "px-8 py-4" }, {}, {
    default: () => {
      return `Because second is basically first.`;
    }
  })}
${validate_component(P, "P").$$render($$result, { class: "px-8 py-4" }, {}, {
    default: () => {
      return `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua. Amet cursus sit amet dictum sit. Quis enim lobortis scelerisque
  fermentum dui faucibus in. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan.
  Ipsum dolor sit amet consectetur adipiscing elit. Euismod nisi porta lorem mollis aliquam ut
  porttitor. Tortor consequat id porta nibh. Tortor condimentum lacinia quis vel eros donec ac odio.
  Elementum sagittis vitae et leo duis ut diam quam nulla. Vel turpis nunc eget lorem.
`;
    }
  })}
${validate_component(P, "P").$$render($$result, { class: "px-8 py-4" }, {}, {
    default: () => {
      return `Aliquet porttitor lacus luctus accumsan. Ac orci phasellus egestas tellus rutrum tellus. Non odio
  euismod lacinia at quis risus sed. Nam libero justo laoreet sit amet cursus sit amet. Arcu odio ut
  sem nulla pharetra diam sit amet nisl. Vulputate mi sit amet mauris commodo quis imperdiet.
  Malesuada nunc vel risus commodo viverra. Eget nulla facilisi etiam dignissim diam quis enim. Hac
  habitasse platea dictumst quisque. Ultrices gravida dictum fusce ut placerat orci nulla
  pellentesque dignissim.
`;
    }
  })}
${validate_component(P, "P").$$render($$result, { class: "px-8 py-4" }, {}, {
    default: () => {
      return `Nec feugiat in fermentum posuere urna nec tincidunt praesent. Nulla pharetra diam sit amet nisl
  suscipit adipiscing bibendum est. Eu turpis egestas pretium aenean pharetra magna. Ultricies lacus
  sed turpis tincidunt id. Urna nec tincidunt praesent semper feugiat nibh. Aliquam etiam erat velit
  scelerisque in dictum non consectetur. Suspendisse in est ante in nibh mauris cursus mattis
  molestie. Facilisi nullam vehicula ipsum a. Tellus pellentesque eu tincidunt tortor aliquam nulla
  facilisi. Libero justo laoreet sit amet cursus sit amet.
`;
    }
  })}`;
});
export {
  Page as default
};
