import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import fs from "node:fs";

const here = path.dirname(fileURLToPath(import.meta.url));

function normalizeBase(input: string): string {
  const trimmed = input.trim();
  if (!trimmed) {
    return "/";
  }
  if (trimmed === "./") {
    return "./";
  }
  if (trimmed.endsWith("/")) {
    return trimmed;
  }
  return `${trimmed}/`;
}

function copyWsplayerFiles() {
  return {
    name: "copy-wsplayer",
    closeBundle() {
      const srcDir = path.resolve(here, "src/wsplayer");
      const destDir = path.resolve(here, "../dist/control-ui/wsplayer");

      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }

      function copyDir(src: string, dest: string) {
        if (!fs.existsSync(dest)) {
          fs.mkdirSync(dest, { recursive: true });
        }
        const entries = fs.readdirSync(src, { withFileTypes: true });
        for (const entry of entries) {
          const srcPath = path.join(src, entry.name);
          const destPath = path.join(dest, entry.name);
          if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
          } else {
            fs.copyFileSync(srcPath, destPath);
          }
        }
      }

      copyDir(srcDir, destDir);

      // WSPlayer's runtime loader hardcodes a nested /WSPlayer/* asset layout.
      copyDir(srcDir, path.resolve(destDir, "WSPlayer"));

      console.log("Copied wsplayer files to dist");
    },
  };
}

export default defineConfig(() => {
  const envBase = process.env.OPENCLAW_CONTROL_UI_BASE_PATH?.trim();
  const base = envBase ? normalizeBase(envBase) : "./";
  return {
    base,
    publicDir: path.resolve(here, "public"),
    optimizeDeps: {
      include: ["lit/directives/repeat.js"],
    },
    build: {
      outDir: path.resolve(here, "../dist/control-ui"),
      emptyOutDir: true,
      sourcemap: true,
      // Keep CI/onboard logs clean; current control UI chunking is intentionally above 500 kB.
      chunkSizeWarningLimit: 1024,
    },
    plugins: [copyWsplayerFiles()],
    server: {
      host: true,
      port: 5173,
      strictPort: true,
    },
  };
});
