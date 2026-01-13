/**
 * vitepress-theme-maple
 *
 * A minimalist VitePress theme with a clean editorial feel.
 *
 * Features:
 * - Clean black & white design with red accent
 * - Responsive layout
 * - Configurable via themeConfig
 * - Medium-zoom for images
 * - Post list, archive, and categories pages
 *
 * @license MIT
 */

import type { Theme } from "vitepress";
import { onMounted, watch, nextTick } from "vue";
import { useRoute } from "vitepress";
import mediumZoom from "medium-zoom";
import Layout from "./Layout.vue";
import "./styles/main.css";

// Export types
export * from "./types";

// Export composables for posts data injection
export { providePosts, usePosts } from "./composables/usePosts";

// Export components for customization
export { default as Layout } from "./Layout.vue";
export { default as Header } from "./components/Header.vue";
export { default as Footer } from "./components/Footer.vue";
export { default as Article } from "./components/Article.vue";
export { default as Home } from "./components/Home.vue";
export { default as Archive } from "./components/Archive.vue";
export { default as Categories } from "./components/Categories.vue";

const theme: Theme = {
  Layout,
  enhanceApp({ app }) {
    // Users can register their own components
  },
  setup() {
    const route = useRoute();

    const initZoom = () => {
      mediumZoom(".article-content img, .post-excerpt img", {
        background: "rgba(0, 0, 0, 0.9)",
      });
    };

    onMounted(() => initZoom());

    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
};

export default theme;
