import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      include: ["src/**/*.ts", "src/**/*.vue"],
    }),
  ],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, "src/index.ts"),
        loader: resolve(__dirname, "src/loader.ts"),
      },
      formats: ["es"],
    },
    rollupOptions: {
      external: (id) => {
        return (
          id === "vue" ||
          id === "vitepress" ||
          id === "medium-zoom" ||
          id.startsWith("@site/")
        );
      },
      output: {
        globals: {
          vue: "Vue",
          vitepress: "VitePress",
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") {
            return "styles/main.css";
          }
          return assetInfo.name || "assets/[name][extname]";
        },
      },
    },
    cssCodeSplit: false,
  },
  server: {
    port: 3030,
  },
});
