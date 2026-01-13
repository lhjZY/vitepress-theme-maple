<script setup lang="ts">
import { withBase, useData } from "vitepress";
import { computed } from "vue";
import { data as posts } from "vitepress-theme-maple/posts.data";

const { theme } = useData();

const homeTitle = computed(() => {
  return theme.value.homeTitle || "文章列表";
});
</script>

<template>
  <div class="home-page">
    <section class="page-title-section">
      <h1 class="page-title">{{ homeTitle }}</h1>
      <div class="title-underline"></div>
    </section>

    <div class="post-list">
      <article v-for="post in posts" :key="post.url" class="post-card">
        <header class="post-header">
          <h2 class="post-title">
            <a :href="withBase(post.url)">{{ post.title }}</a>
          </h2>
        </header>

        <div class="post-separator"></div>

        <div class="post-body" :class="{ 'has-cover': post.cover }">
          <div class="post-content">
            <div v-if="post.excerpt" class="post-excerpt" v-html="post.excerpt"></div>
            <a :href="withBase(post.url)" class="post-read-more">
              read more →
            </a>
          </div>

          <div v-if="post.cover" class="post-cover">
            <a :href="withBase(post.url)">
              <img :src="post.cover" :alt="post.title" />
            </a>
          </div>
        </div>
      </article>

      <div v-if="!posts || posts.length === 0" class="empty-state">
        <p>暂无文章</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.post-list {
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 810px;
  margin: 0 auto;
}

.post-card {
  width: 100%;
  height: 380px;
  display: flex;
  flex-direction: column;
  padding: var(--spacing-lg) 0;
  border-bottom: var(--border-solid);
}

.post-card:last-child {
  border-bottom: none;
}

.post-header {
  margin-bottom: var(--spacing-xs);
}

.post-title {
  font-family: var(--font-cursive);
  font-size: 1rem;
  font-weight: 800;
  font-style: italic;
  margin: 0;
}

.post-title a {
  color: var(--color-text);
  text-decoration: none;
}

.post-title a:hover {
  color: var(--color-accent);
}

.post-separator {
  height: 1px;
  background: repeating-linear-gradient(
    90deg,
    var(--color-border) 0px,
    var(--color-border) 4px,
    transparent 4px,
    transparent 8px
  );
  margin: var(--spacing-sm) 0;
}

.post-body {
  display: flex;
  gap: var(--spacing-xl);
  height: 100%;
  flex: 1;
  min-height: 0;
  align-items: stretch;
}

.post-body.has-cover {
  align-items: flex-start;
}

.post-body.has-cover .post-content {
  flex: 1;
  min-width: 0;
}

.post-content {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.post-cover {
  flex: 0 0 300px;
  max-width: 300px;
  height: 100%;
}

.post-cover img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: opacity var(--transition-fast);
  box-shadow: 2px 2px #bbb;
}

.post-cover img:hover {
  opacity: 0.9;
}

.post-excerpt {
  flex: 1;
  font-size: 0.875rem;
  line-height: 1.6;
  color: var(--color-text);
  margin-bottom: var(--spacing-md);
}

.post-read-more {
  display: inline-block;
  font-family: var(--font-cursive);
  font-size: 0.875rem;
  padding: var(--spacing-xs) var(--spacing-md);
  border: var(--border-solid);
  background: var(--color-black);
  color: var(--color-white);
  text-decoration: none;
  transition: all var(--transition-fast);
  align-self: flex-start;
  width: fit-content;
}

.post-read-more:hover {
  background: var(--color-accent);
  border-color: var(--color-accent);
}

.empty-state {
  padding: var(--spacing-2xl);
  text-align: center;
  color: var(--color-text-secondary);
  font-family: var(--font-mono);
}

@media (max-width: 768px) {
  .post-list {
    width: 100%;
  }

  .post-card {
    width: 100%;
    height: auto;
  }

  .post-body {
    flex-direction: column;
  }
  
  .post-cover {
    display: none;
  }
}
</style>
