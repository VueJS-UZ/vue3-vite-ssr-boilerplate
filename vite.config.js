import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Unocss from "unocss/vite";
import { presetAttributify, presetWind, presetWebFonts } from "unocss";
import transformerDirective from "@unocss/transformer-directives";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      transformers: [transformerDirective()],
      presets: [
        presetAttributify(),
        presetWind(),
        presetWebFonts({
          provider: "google", // default provider
          fonts: {
            // these will extend the default theme
            inter: "Inter",
          },
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
