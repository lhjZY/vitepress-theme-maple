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
import type { Theme } from 'vitepress';
import './styles/main.css';
export * from './types';
export { default as Layout } from './Layout.vue';
export { default as Header } from './components/Header.vue';
export { default as Footer } from './components/Footer.vue';
export { default as Article } from './components/Article.vue';
export { default as Home } from './components/Home.vue';
export { default as Archive } from './components/Archive.vue';
export { default as Categories } from './components/Categories.vue';
declare const theme: Theme;
export default theme;
