import type { FigmaConfig, PluginManifest } from "vite-figma-plugin/lib/types";
import { version } from "./package.json";

export const manifest: PluginManifest = {
  name: "iziFlow", 
  id: "luskizera.iziFlow", 
  api: "1.0.0",
  main: "code.js",
  ui: "index.html",
  editorType: [
    "figjam", 
  ],
  documentAccess: "dynamic-page",
  networkAccess: {
    allowedDomains: ["*"],
    reasoning: "For accessing remote assets",
  },
};

const extraPrefs = {
  copyZipAssets: ["public-zip/*"],
};

export const config: FigmaConfig = {
  manifest,
  version,
  ...extraPrefs,
};
