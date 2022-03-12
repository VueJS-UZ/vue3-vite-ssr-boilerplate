import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Unocss from "unocss/vite";
import { presetAttributify, presetUno, presetWebFonts } from "unocss";
import transformerDirective from "@unocss/transformer-directives";
import transformerVariantGroup from "@unocss/transformer-variant-group";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      transformers: [transformerDirective(), transformerVariantGroup()],
      presets: [
        presetAttributify(),
        presetUno(),
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
