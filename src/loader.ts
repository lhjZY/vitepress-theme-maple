/**
 * Posts Content Loader
 *
 * This module provides a helper function to create VitePress content loaders
 * for blog posts. Users can import this in their .vitepress/posts.data.ts file.
 */

import { createContentLoader, type ContentData } from "vitepress";
import type { Post } from "./types";

export interface PostsLoaderOptions {
  /**
   * Glob patterns to match post files
   * @default ['posts/*.md', 'posts/*\/index.md', 'posts/*\/*.md']
   */
  patterns?: string[];

  /**
   * Excerpt separator in markdown files
   * @default '<!--more-->'
   */
  excerptSeparator?: string;

  /**
   * Custom transform function to process raw content data
   * If provided, this replaces the default transform
   */
  transform?: (raw: ContentData[]) => Post[];
}

/**
 * Extract the first image from HTML content
 */
function extractFirstImage(html: string): {
  image: string | null;
  text: string;
} {
  const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/i;
  const match = html.match(imgRegex);

  if (match) {
    const image = match[1];
    // Remove image tag, keep plain text
    const text = html.replace(imgRegex, "").trim();
    return { image, text };
  }

  return { image: null, text: html };
}

/**
 * Convert relative image paths to absolute paths
 */
function resolveImagePath(imagePath: string, postUrl: string): string {
  // If already absolute, return as is
  if (imagePath.startsWith("/") || imagePath.startsWith("http")) {
    return imagePath;
  }

  // Handle relative paths ./xxx or xxx
  const cleanPath = imagePath.replace(/^\.\//, "");

  // Get the directory of the post
  // postUrl format: /posts/hello-vitepress/ or /posts/welcome.html
  let baseDir = postUrl;
  if (postUrl.endsWith(".html")) {
    // Single file: /posts/welcome.html -> /posts/
    baseDir = postUrl.substring(0, postUrl.lastIndexOf("/") + 1);
  } else if (!postUrl.endsWith("/")) {
    baseDir = postUrl + "/";
  }

  return baseDir + cleanPath;
}

/**
 * Format date to YYYY-MM-DD string
 */
function formatDate(date: string | Date): string {
  const d = new Date(date);
  return d.toISOString().split("T")[0];
}

/**
 * Default transform function for post content
 */
function defaultTransform(raw: ContentData[]): Post[] {
  return raw
    .map(({ url, frontmatter, excerpt }) => {
      const { image, text } = extractFirstImage(excerpt || "");

      // Convert image path to absolute path
      const cover = image ? resolveImagePath(image, url) : undefined;

      return {
        title: (frontmatter.title as string) || "Untitled",
        url: url,
        date: frontmatter.date
          ? formatDate(frontmatter.date as string | Date)
          : "",
        category: (frontmatter.category as string) || "",
        author: (frontmatter.author as string) || "",
        tags: (frontmatter.tags as string[]) || [],
        excerpt: text,
        cover: cover,
      };
    })
    .sort((a, b) => {
      // Sort by date descending (newest first)
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

/**
 * Create a VitePress content loader for blog posts
 *
 * @example
 * ```typescript
 * // .vitepress/posts.data.ts
 * import { createPostsLoader } from 'vitepress-theme-maple/loader'
 *
 * export default createPostsLoader()
 * // or with custom options:
 * export default createPostsLoader({
 *   patterns: ['blog/*.md'],
 *   excerptSeparator: '---more---'
 * })
 * ```
 */
export function createPostsLoader(options: PostsLoaderOptions = {}) {
  const {
    patterns = ["posts/*.md", "posts/*/index.md", "posts/*/*.md"],
    excerptSeparator = "<!--more-->",
    transform = defaultTransform,
  } = options;

  return createContentLoader(patterns, {
    excerpt: excerptSeparator,
    transform,
  });
}

// Re-export Post type for convenience
export type { Post } from "./types";
