import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { crx, defineManifest } from "@crxjs/vite-plugin";

const manifest = defineManifest({
  manifest_version: 3,
  name: "寿司打トラッカー",
  version: "0.0.1",
  description: "寿司打のスコアを集約し、成長を可視化する Chrome の拡張機能",
  background: {
    service_worker: "src/background/background.tsx",
    type: "module",
  },
  action: {},
  permissions: ["tabs", "webNavigation", "storage", "unlimitedStorage"],
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest })],
});
