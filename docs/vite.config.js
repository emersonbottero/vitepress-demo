import { defineConfig } from "vite";
import { MermaidPlugin } from "vitepress-plugin-mermaid";
import { SearchPlugin } from "vitepress-plugin-search";

export default defineConfig({
  plugins: [
    MermaidPlugin({
      mermaidTheme: "forest",
    }),
    SearchPlugin(),
  ],
});
