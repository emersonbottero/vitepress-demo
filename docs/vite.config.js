import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "./components/AlgoliaSearchBox.vue":
        "vitepress-plugin-search/src/Search.vue",
    },
  },
});