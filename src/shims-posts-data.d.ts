declare module "@site/posts.data" {
  export interface Post {
    title: string;
    url: string;
    date: string;
    category?: string;
    author?: string;
    tags?: string[];
    excerpt?: string;
    cover?: string;
  }

  export const data: Post[];
  const loader: unknown;
  export default loader;
}
