/**
 * Posts Data Composable
 *
 * This composable provides a way to inject posts data into the theme.
 * Users need to provide posts data through the `providePosts` function
 * in their theme setup.
 */

import { inject, provide, type InjectionKey, type Ref, ref } from "vue";
import type { Post } from "../types";

export const postsKey: InjectionKey<Ref<Post[]>> = Symbol("posts");

/**
 * Provide posts data to the theme
 * Should be called in the theme's setup function
 */
export function providePosts(posts: Post[] | Ref<Post[]>) {
  const postsRef = ref(posts) as Ref<Post[]>;
  provide(postsKey, postsRef);
}

/**
 * Inject posts data in theme components
 */
export function usePosts(): Ref<Post[]> {
  const posts = inject(postsKey);
  if (!posts) {
    console.warn(
      "[vitepress-theme-maple] Posts data not provided. Make sure to call providePosts() in your theme setup."
    );
    return ref([]);
  }
  return posts;
}
