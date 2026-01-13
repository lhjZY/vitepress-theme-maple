# vitepress-theme-maple

[English](#vitepress-theme-maple) | [中文](#中文文档)

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

### Basic Setup

In your `.vitepress/theme/index.ts`:

```ts
import Theme from 'vitepress-theme-maple'
import 'vitepress-theme-maple/styles'

export default Theme
```

### Recommended Folder Structure

```
docs/
  .vitepress/
    config.ts
    theme/
      index.ts
    posts.data.ts
  posts/
    hello-world.md
    my-first-post/
      index.md
      cover.jpg
```

The theme automatically loads posts from:
- `posts/*.md`
- `posts/*/index.md`
- `posts/*/*.md`

Create `.vitepress/posts.data.ts`:

```ts
import { createContentLoader } from 'vitepress'

export interface Post {
  title: string
  url: string
  date: string
  category?: string
  author?: string
  tags?: string[]
  excerpt?: string
  cover?: string
}

declare const data: Post[]
export { data }

function extractFirstImage(html: string): { image: string | null; text: string } {
  const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/i
  const match = html.match(imgRegex)

  if (match) {
    const image = match[1]
    const text = html.replace(imgRegex, '').trim()
    return { image, text }
  }

  return { image: null, text: html }
}

function resolveImagePath(imagePath: string, postUrl: string): string {
  if (imagePath.startsWith('/') || imagePath.startsWith('http')) {
    return imagePath
  }

  const cleanPath = imagePath.replace(/^\\.\\//, '')
  let baseDir = postUrl

  if (postUrl.endsWith('.html')) {
    baseDir = postUrl.substring(0, postUrl.lastIndexOf('/') + 1)
  } else if (!postUrl.endsWith('/')) {
    baseDir = postUrl + '/'
  }

  return baseDir + cleanPath
}

export default createContentLoader(['posts/*.md', 'posts/*/index.md', 'posts/*/*.md'], {
  excerpt: '<!--more-->',
  transform(raw): Post[] {
    return raw
      .map(({ url, frontmatter, excerpt }) => {
        const { image, text } = extractFirstImage(excerpt || '')
        const cover = image ? resolveImagePath(image, url) : undefined

        return {
          title: frontmatter.title || 'Untitled',
          url: url,
          date: frontmatter.date ? formatDate(frontmatter.date) : '',
          category: frontmatter.category || '',
          author: frontmatter.author || '',
          tags: frontmatter.tags || [],
          excerpt: text,
          cover: cover
        }
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }
})

function formatDate(date: string | Date): string {
  const d = new Date(date)
  return d.toISOString().split('T')[0]
}
```

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

### Images

You can use absolute or relative paths:

```md
![cover](/images/cover.jpg)
![inline](./cover.jpg)
```

Relative image paths are resolved against the post URL. For example:

```
posts/my-first-post/index.md
```

`./cover.jpg` resolves to `/posts/my-first-post/cover.jpg`.

### Preview Image (Cover)

The theme uses the **first image in the excerpt** as the preview cover.

Example:

```md
---
title: My First Post
date: 2024-06-01
---

![cover](./cover.jpg)

Intro text here.

<!--more-->
```

If there is no image before `<!--more-->`, the post card will not show a cover.

### Configuration

In your `.vitepress/config.ts`:

```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'My Blog',
  description: 'My personal blog',
  
  themeConfig: {
    // Logo in header
    logo: '/logo.svg',
    
    // Site title in header
    siteTitle: 'My Blog',
    
    // Home page title
    homeTitle: 'Posts',
    
    // Author name
    author: 'Your Name',
    
    // Navigation
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Archive', link: '/archive/' }
    ],
    
    // Footer
    footer: {
      copyright: '© 2024 Your Name',
      links: [
        { text: 'GitHub', link: 'https://github.com/yourname' }
      ]
    }
  }
})
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

---

# 中文文档

## 使用

### 基础设置

在 `.vitepress/theme/index.ts` 中：

```ts
import Theme from 'vitepress-theme-maple'
import 'vitepress-theme-maple/styles'

export default Theme
```

### 推荐目录结构

```
docs/
  .vitepress/
    config.ts
    theme/
      index.ts
    posts.data.ts
  posts/
    hello-world.md
    my-first-post/
      index.md
      cover.jpg
```

主题会自动读取以下路径的文章：
- `posts/*.md`
- `posts/*/index.md`
- `posts/*/*.md`

创建 `.vitepress/posts.data.ts`：

```ts
import { createContentLoader } from 'vitepress'

export interface Post {
  title: string
  url: string
  date: string
  category?: string
  author?: string
  tags?: string[]
  excerpt?: string
  cover?: string
}

declare const data: Post[]
export { data }

function extractFirstImage(html: string): { image: string | null; text: string } {
  const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/i
  const match = html.match(imgRegex)

  if (match) {
    const image = match[1]
    const text = html.replace(imgRegex, '').trim()
    return { image, text }
  }

  return { image: null, text: html }
}

function resolveImagePath(imagePath: string, postUrl: string): string {
  if (imagePath.startsWith('/') || imagePath.startsWith('http')) {
    return imagePath
  }

  const cleanPath = imagePath.replace(/^\\.\\//, '')
  let baseDir = postUrl

  if (postUrl.endsWith('.html')) {
    baseDir = postUrl.substring(0, postUrl.lastIndexOf('/') + 1)
  } else if (!postUrl.endsWith('/')) {
    baseDir = postUrl + '/'
  }

  return baseDir + cleanPath
}

export default createContentLoader(['posts/*.md', 'posts/*/index.md', 'posts/*/*.md'], {
  excerpt: '<!--more-->',
  transform(raw): Post[] {
    return raw
      .map(({ url, frontmatter, excerpt }) => {
        const { image, text } = extractFirstImage(excerpt || '')
        const cover = image ? resolveImagePath(image, url) : undefined

        return {
          title: frontmatter.title || 'Untitled',
          url: url,
          date: frontmatter.date ? formatDate(frontmatter.date) : '',
          category: frontmatter.category || '',
          author: frontmatter.author || '',
          tags: frontmatter.tags || [],
          excerpt: text,
          cover: cover
        }
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }
})

function formatDate(date: string | Date): string {
  const d = new Date(date)
  return d.toISOString().split('T')[0]
}
```

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

### 图片

支持绝对路径与相对路径：

```md
![cover](/images/cover.jpg)
![inline](./cover.jpg)
```

相对路径会基于文章 URL 解析。例如：

```
posts/my-first-post/index.md
```

`./cover.jpg` 会解析为 `/posts/my-first-post/cover.jpg`。

### 预览图（封面）

主题会使用**摘要区域内的第一张图片**作为卡片封面。

示例：

```md
---
title: My First Post
date: 2024-06-01
---

![cover](./cover.jpg)

这里是摘要内容。

<!--more-->
```

如果 `<!--more-->` 之前没有图片，卡片将不显示封面。

### 配置

在 `.vitepress/config.ts` 中：

```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'My Blog',
  description: 'My personal blog',

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'My Blog',
    homeTitle: 'Posts',
    author: 'Your Name',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Archive', link: '/archive/' }
    ],
    footer: {
      copyright: '© 2024 Your Name',
      links: [
        { text: 'GitHub', link: 'https://github.com/yourname' }
      ]
    }
  }
})
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
