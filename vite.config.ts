import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Build the SSR server as a Netlify Function (publishes static assets to dist/).
  nitro: { preset: "netlify" },
  vite: {
    server: {
      port: 3000,
      host: "0.0.0.0",
      hmr: process.env['DISABLE_HMR'] !== "true",
      watch: process.env['DISABLE_HMR'] === "true" ? null : {},
    },
  },
});
