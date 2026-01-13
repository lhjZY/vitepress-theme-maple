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
declare const data: Post[];
export { data };
declare const _default: {
  watch: string | string[];
  load: () => Promise<Post[]>;
};
export default _default;
