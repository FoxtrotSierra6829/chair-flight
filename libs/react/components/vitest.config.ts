/// <reference types="vitest" />
import { default as react } from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { default as viteTsConfigPaths } from "vite-tsconfig-paths";

export default defineConfig({
  cacheDir: "../../../node_modules/.vite/chair-flight-components",

  plugins: [
    react(),
    viteTsConfigPaths({
      root: "../../../",
    }),
  ],

  test: {
    globals: true,
    cache: {
      dir: "../../../node_modules/.vitest",
    },
    coverage: {
      all: true,
      provider: "istanbul",
    },
    environment: "jsdom",
    setupFiles: "./src/__tests__/setup-tests.ts",
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
  },
});