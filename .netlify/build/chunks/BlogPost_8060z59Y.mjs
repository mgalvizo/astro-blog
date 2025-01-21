import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute } from './astro/server_4EYgddpo.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://example.com");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { url, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li> <a${addAttribute(url, "href")}>${title}</a> </li>`;
}, "C:/Users/Miguel Garcia/Desktop/Repos/astro-blog/src/components/blog-post/BlogPost.astro", undefined);

export { $$BlogPost as $ };
