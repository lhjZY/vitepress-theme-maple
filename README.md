# vitepress-theme-maple
<img width="1784" height="1646" alt="image" src="https://github.com/user-attachments/assets/0dd1c8ef-4c91-4baf-bec2-3222ae8f2620" />

[中文](#中文文档) | [English](#english)

# 中文文档

## 使用

### 从零开始（快速步骤）

1. 安装主题：

```bash
pnpm add vitepress-theme-maple
```

2. 创建 `.vitepress/posts.data.ts`：

```ts
import { createPostsLoader, type Post } from "vitepress-theme-maple/loader";

declare const data: Post[];
export { data };

export default createPostsLoader();
```

3. 在 `.vitepress/theme/index.ts` 注入文章数据：

```ts
import Theme, { providePosts } from "vitepress-theme-maple";
import "vitepress-theme-maple/styles";
import { data as posts } from "../posts.data";

export default {
  ...Theme,
  setup() {
    providePosts(posts);
    Theme.setup?.();
  },
};
```

主题会自动读取以下路径的文章：

- `posts/*.md`
- `posts/*/index.md`
- `posts/*/*.md`

创建 `.vitepress/posts.data.ts`（必需）并使用上面的 `createPostsLoader()` 即可。

### 写文章

在 `posts/` 下新建 markdown 文件，并添加 frontmatter：

```md
---
title: Hello World
date: 2024-06-01
category: Notes
tags: [intro, vitepress]
author: Huanjun
---

正文内容。

<!--more-->

这里的内容会显示在首页摘要。
```

`<!--more-->` 用于分隔摘要与正文。

### 配置

在 `.vitepress/config.ts` 中：

```ts
import { defineConfig } from "vitepress";

export default defineConfig({
  title: "My Blog",
  description: "My personal blog",

  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "My Blog",
    homeTitle: "Posts",
    author: "Your Name",
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about/" },
      { text: "Archive", link: "/archive/" },
    ],
    footer: {
      copyright: "© 2024 Your Name",
      links: [{ text: "GitHub", link: "https://github.com/yourname" }],
    },
  },
});
```

## 自定义

### CSS 变量

在自定义样式中覆盖：

```css
:root {
  --color-accent: #0066cc;
  --container-max: 960px;
}
```

---

# English

A minimalist VitePress theme with a clean editorial feel.

## Features

- 🎨 Clean black & white design with red accent
- 📱 Responsive layout
- ⚙️ Fully configurable via `themeConfig`
- 🔍 Medium-zoom for images
- 🔤 Bundled MapleMono font
- 🗂️ Post list, archive, and categories pages

## Installation

```bash
pnpm add vitepress-theme-maple
```

## Usage

### Quick Start (from zero)

1. Install the theme:

```bash
pnpm add vitepress-theme-maple
```

2. Create `.vitepress/posts.data.ts`:

```ts
import { createPostsLoader, type Post } from "vitepress-theme-maple/loader";

declare const data: Post[];
export { data };

export default createPostsLoader();
```

3. Wire the theme and inject posts in `.vitepress/theme/index.ts`:

```ts
import Theme, { providePosts } from "vitepress-theme-maple";
import "vitepress-theme-maple/styles";
import { data as posts } from "../posts.data";

export default {
  ...Theme,
  setup() {
    providePosts(posts);
    Theme.setup?.();
  },
};
```

The theme automatically loads posts from:

- `posts/*.md`
- `posts/*/index.md`
- `posts/*/*.md`

Create `.vitepress/posts.data.ts` is required and uses `createPostsLoader()` above.

### Writing Posts

Create a markdown file under `posts/` with frontmatter:

```md
---
title: Hello World
date: 2024-06-01
category: Notes
tags: [intro, vitepress]
author: Huanjun
---

Your content here.

<!--more-->

This part appears in the list excerpt.
```

`<!--more-->` splits the excerpt shown on the home page.

### Configuration

In your `.vitepress/config.ts`:

```ts
import { defineConfig } from "vitepress";

export default defineConfig({
  title: "My Blog",
  description: "My personal blog",

  themeConfig: {
    // Logo in header
    logo: "/logo.svg",

    // Site title in header
    siteTitle: "My Blog",

    // Home page title
    homeTitle: "Posts",

    // Author name
    author: "Your Name",

    // Navigation
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about/" },
      { text: "Archive", link: "/archive/" },
    ],

    // Footer
    footer: {
      copyright: "© 2024 Your Name",
      links: [{ text: "GitHub", link: "https://github.com/yourname" }],
    },
  },
});
```

## Customization

### CSS Variables

Override CSS variables in your own styles:

```css
:root {
  --color-accent: #0066cc;
  --container-max: 960px;
}
```

## License

MIT
