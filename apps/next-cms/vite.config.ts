/// <reference types="vitest" />
import { default as react } from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { default as viteTsConfigPaths } from "vite-tsconfig-paths";

export default defineConfig({
  cacheDir: "../../node_modules/.vite/next-cms",

  plugins: [
    react(),
    viteTsConfigPaths({
      root: "../../",
    }),
  ],

  test: {
    globals: true,
    environment: "jsdom",
    cache: {
      dir: "../../node_modules/.vitest",
    },
    coverage: {
      all: true,
      provider: "istanbul",
    },
    include: [
      "src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
      "pages/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
    ],
  },
});