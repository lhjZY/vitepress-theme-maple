import { createContentLoader } from "vitepress";

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

function extractFirstImage(html: string): { image: string | null; text: string } {
  const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/i;
  const match = html.match(imgRegex);

  if (match) {
    const image = match[1];
    const text = html.replace(imgRegex, "").trim();
    return { image, text };
  }

  return { image: null, text: html };
}

function resolveImagePath(imagePath: string, postUrl: string): string {
  if (imagePath.startsWith("/") || imagePath.startsWith("http")) {
    return imagePath;
  }

  const cleanPath = imagePath.replace(/^\.\//, "");
  let baseDir = postUrl;

  if (postUrl.endsWith(".html")) {
    baseDir = postUrl.substring(0, postUrl.lastIndexOf("/") + 1);
  } else if (!postUrl.endsWith("/")) {
    baseDir = postUrl + "/";
  }

  return baseDir + cleanPath;
}

export default createContentLoader(["posts/*.md", "posts/*/index.md", "posts/*/*.md"], {
  excerpt: "<!--more-->",
  transform(raw): Post[] {
    return raw
      .map(({ url, frontmatter, excerpt }) => {
        const { image, text } = extractFirstImage(excerpt || "");
        const cover = image ? resolveImagePath(image, url) : undefined;

        return {
          title: frontmatter.title || "Untitled",
          url: url,
          date: frontmatter.date ? formatDate(frontmatter.date) : "",
          category: frontmatter.category || "",
          author: frontmatter.author || "",
          tags: frontmatter.tags || [],
          excerpt: text,
          cover: cover,
        };
      })
      .sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
  },
});

function formatDate(date: string | Date): string {
  const d = new Date(date);
  return d.toISOString().split("T")[0];
}
