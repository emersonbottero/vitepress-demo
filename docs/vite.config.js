import { defineConfig } from "vite";
// import { MermaidPlugin } from "vitepress-plugin-mermaid";
// import { SearchPlugin } from "vitepress-plugin-search";

export default defineConfig({
  // plugins: [
  //   MermaidPlugin({
  //     mermaidTheme: "forest",
  //   }),
  //   SearchPlugin(),
  // ],
  // optimizeDeps: { include: ["moment-mini", "@braintree/sanitize-url"] },
  plugins: [
    {
      // ...
      configureServer(server) {
        server.ws.on("my:from-client", (data, client) => {
          console.log("Message from client:", data.msg); // Hey!
          // reply only to the client (if needed)
          client.send("my:ack", { msg: "Hi! I got your message!" });
        });
      },
    },
  ],
});
