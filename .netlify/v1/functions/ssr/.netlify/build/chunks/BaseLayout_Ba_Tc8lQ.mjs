import { c as createAstro, a as createComponent, r as renderTemplate, e as addAttribute, j as renderScript, m as maybeRenderHead, b as renderComponent, k as renderHead, f as renderSlot } from './astro/server_4EYgddpo.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
import { jsx } from 'react/jsx-runtime';
import { atom } from 'nanostores';

const $$Astro$2 = createAstro("https://example.com");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/Miguel Garcia/Desktop/Repos/astro-blog/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Miguel Garcia/Desktop/Repos/astro-blog/node_modules/astro/components/ClientRouter.astro", undefined);

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="nav-links"> <a href="/">Home</a> <a href="/about/">About</a> <a href="/blog/">Blog</a> <a href="/tags/">Tags</a> </div>`;
}, "C:/Users/Miguel Garcia/Desktop/Repos/astro-blog/src/components/navigation/Navigation.astro", undefined);

const $$Hamburguer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="hamburger"> <span class="line"></span> <span class="line"></span> <span class="line"></span> </div>`;
}, "C:/Users/Miguel Garcia/Desktop/Repos/astro-blog/src/components/hamburguer/Hamburguer.astro", undefined);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ThemeIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<button id="themeToggle" data-astro-cid-znswkiyt> <svg width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-astro-cid-znswkiyt> <path class="sun" fill-rule="evenodd" d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 1.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm12-7a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1 0-1.6h2.4a.8.8 0 0 1 .8.8zM4 12a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1 0-1.6h2.5a.8.8 0 0 1 .8.8zm16.5-8.5a.8.8 0 0 1 0 1l-1.8 1.8a.8.8 0 0 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM6.3 17.7a.8.8 0 0 1 0 1l-1.7 1.8a.8.8 0 1 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM12 0a.8.8 0 0 1 .8.8v2.5a.8.8 0 0 1-1.6 0V.8A.8.8 0 0 1 12 0zm0 20a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-1.6 0v-2.4a.8.8 0 0 1 .8-.8zM3.5 3.5a.8.8 0 0 1 1 0l1.8 1.8a.8.8 0 1 1-1 1L3.5 4.6a.8.8 0 0 1 0-1zm14.2 14.2a.8.8 0 0 1 1 0l1.8 1.7a.8.8 0 0 1-1 1l-1.8-1.7a.8.8 0 0 1 0-1z" data-astro-cid-znswkiyt></path> <path class="moon" fill-rule="evenodd" d="M16.5 6A10.5 10.5 0 0 1 4.7 16.4 8.5 8.5 0 1 0 16.4 4.7l.1 1.3zm-1.7-2a9 9 0 0 1 .2 2 9 9 0 0 1-11 8.8 9.4 9.4 0 0 1-.8-.3c-.4 0-.8.3-.7.7a10 10 0 0 0 .3.8 10 10 0 0 0 9.2 6 10 10 0 0 0 4-19.2 9.7 9.7 0 0 0-.9-.3c-.3-.1-.7.3-.6.7a9 9 0 0 1 .3.8z" data-astro-cid-znswkiyt></path> </svg> </button>  <script>\n  const theme = (() => {\n    const localStorageTheme = localStorage?.getItem("theme") ?? "";\n    if (["dark", "light"].includes(localStorageTheme)) {\n      return localStorageTheme;\n    }\n    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {\n      return "dark";\n    }\n    return "light";\n  })();\n\n  if (theme === "light") {\n    document.documentElement.classList.remove("dark");\n  } else {\n    document.documentElement.classList.add("dark");\n  }\n\n  window.localStorage.setItem("theme", theme);\n\n  const handleToggleClick = () => {\n    const element = document.documentElement;\n    element.classList.toggle("dark");\n\n    const isDark = element.classList.contains("dark");\n    localStorage.setItem("theme", isDark ? "dark" : "light");\n  };\n\n  document\n    .getElementById("themeToggle")\n    ?.addEventListener("click", handleToggleClick);\n<\/script>'])), maybeRenderHead());
}, "C:/Users/Miguel Garcia/Desktop/Repos/astro-blog/src/components/theme-icon/ThemeIcon.astro", undefined);

const globalState = atom({ count: 0 });

const increment = () => {
  globalState.set({ count: globalState.get().count + 1 });
};

const decrement = () => {
  globalState.set({ count: globalState.get().count - 1 });
};

const Button = () => {
  return /* @__PURE__ */ jsx("button", { type: "button", onClick: increment, children: "Increment" });
};

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header> <nav> ${renderComponent($$result, "Hamburguer", $$Hamburguer, {})} ${renderComponent($$result, "ThemeIcon", $$ThemeIcon, {})} ${renderComponent($$result, "Navigation", $$Navigation, {})} ${renderComponent($$result, "DisplayAmount", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/Miguel Garcia/Desktop/Repos/astro-blog/src/components/display-amount/DisplayAmount", "client:component-export": "default" })} ${renderComponent($$result, "Button", Button, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Miguel Garcia/Desktop/Repos/astro-blog/src/components/button/Button", "client:component-export": "default" })} </nav> </header>`;
}, "C:/Users/Miguel Garcia/Desktop/Repos/astro-blog/src/components/header/Header.astro", undefined);

const $$Astro$1 = createAstro("https://example.com");
const $$Social = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Social;
  const { platform, username } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`https://www.${platform}.com/${username}`, "href")} data-astro-cid-g4qybpaj>${platform}</a>`;
}, "C:/Users/Miguel Garcia/Desktop/Repos/astro-blog/src/components/social/Social.astro", undefined);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-dwl4onjj> ${renderComponent($$result, "Social", $$Social, { "platform": "twitter", "username": "astrodotbuild", "data-astro-cid-dwl4onjj": true })} ${renderComponent($$result, "Social", $$Social, { "platform": "github", "username": "withastro", "data-astro-cid-dwl4onjj": true })} ${renderComponent($$result, "Social", $$Social, { "platform": "youtube", "username": "astrodotbuild", "data-astro-cid-dwl4onjj": true })} </footer>`;
}, "C:/Users/Miguel Garcia/Desktop/Repos/astro-blog/src/components/footer/Footer.astro", undefined);

const $$Astro = createAstro("https://example.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { pageTitle } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}<title>${pageTitle}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <h1>${pageTitle}</h1> <!-- Inject child content --> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "Button", Button, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Miguel Garcia/Desktop/Repos/astro-blog/src/components/button/Button", "client:component-export": "default" })} <!-- JavaScript file import --> ${renderScript($$result, "C:/Users/Miguel Garcia/Desktop/Repos/astro-blog/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "C:/Users/Miguel Garcia/Desktop/Repos/astro-blog/src/layouts/BaseLayout.astro", undefined);

export { $$BaseLayout as $, Button as B, decrement as d, increment as i };
