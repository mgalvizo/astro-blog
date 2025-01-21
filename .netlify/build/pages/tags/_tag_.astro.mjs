import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_4EYgddpo.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_D1pnZ85v.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_Ba_Tc8lQ.mjs';
import { $ as $$BlogPost } from '../../chunks/BlogPost_8060z59Y.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://example.com");
const prerender = false;
async function getStaticPaths() {
  const allPosts = await getCollection("blog");
  const uniqueTags = [
    ...new Set(allPosts.map((post) => post.data.tags).flat())
  ];
  return uniqueTags.map((tag) => {
    const filteredPosts = allPosts.filter(
      (post) => post.data.tags.includes(tag)
    );
    return {
      params: { tag },
      props: { posts: filteredPosts }
    };
  });
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.params;
  const { posts } = Astro2.props;
  const filteredPosts = posts.filter((post) => post.data.tags.includes(tag));
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": tag }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>Posts tagged with ${tag}</p> <ul> ${filteredPosts.map((post) => renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { "url": `/posts/${post.id}/`, "title": post.data.title })}`)} </ul> ` })}`;
}, "C:/Users/Miguel Garcia/Desktop/Repos/astro-blog/src/pages/tags/[tag].astro", undefined);

const $$file = "C:/Users/Miguel Garcia/Desktop/Repos/astro-blog/src/pages/tags/[tag].astro";
const $$url = "/tags/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tag,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
