import { fileURLToPath } from "node:url";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import Sitemap from "vite-plugin-sitemap";
import { crawlableRoutes } from "./src/config/crawlableRoutes.js";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, fileURLToPath(new URL(".", import.meta.url)), "");
  const siteUrl = env.VITE_SITE_URL || env.SITE_URL || "https://berkleyestates.co.uk";

  return {
    plugins: [
      react(),
      tailwindcss(),
      Sitemap({
        hostname: siteUrl,
        dynamicRoutes: crawlableRoutes.filter((route) => route !== "/"),
        exclude: ["/404", "/404.html"],
      }),
    ],
    build: {
      target: "es2019",
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules/framer-motion")) {
              return "animation-vendor";
            }

            if (id.includes("node_modules/swiper")) {
              return "slider-vendor";
            }

            return undefined;
          },
        },
      },
    },
  };
});
