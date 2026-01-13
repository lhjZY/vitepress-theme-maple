<script setup lang="ts">
import { useData, useRoute } from "vitepress";
import { computed } from "vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Home from "./components/Home.vue";
import Article from "./components/Article.vue";
import Archive from "./components/Archive.vue";
import Categories from "./components/Categories.vue";

const { frontmatter, page } = useData();
const route = useRoute();

const isHome = computed(() => route.path === "/");
const isArchive = computed(() => route.path === "/archive/");
const isCategories = computed(() => route.path === "/categories/");

const pageTitle = computed(() => {
  if (isHome.value) return "";
  return frontmatter.value.title || page.value.title || "";
});
</script>

<template>
  <div class="layout">
    <div class="site-container">
      <Header />
      
      <main class="main-content">
        <!-- Page Title Section -->
        <section v-if="pageTitle && !isHome" class="page-title-section">
          <h1 class="page-title">{{ pageTitle }}</h1>
          <div class="title-underline"></div>
        </section>

        <!-- Content Area - Users provide their own content via slots or Content component -->
        <div class="content-wrapper">
          <Home v-if="isHome" />
          <Archive v-else-if="isArchive" />
          <Categories v-else-if="isCategories" />
          <Article v-else />
        </div>
      </main>

      <Footer />
    </div>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing-xl) var(--spacing-lg);
}

.site-container {
  width: 100%;
  max-width: var(--container-max, 840px);
  background: var(--color-bg);
  border: var(--border-solid);
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - var(--spacing-xl) * 2);
}

.page-title-section {
  padding: var(--spacing-md) var(--spacing-lg);
}

.content-wrapper {
  padding: 0 var(--spacing-lg);
}

.main-content {
  flex: 1;
}

@media (max-width: 768px) {
  .layout {
    padding: 0;
  }

  .site-container {
    min-height: 100vh;
    border: none;
  }

  .content-wrapper {
    padding: 0 var(--spacing-md);
  }
}
</style>
