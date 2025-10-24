import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { componentTagger } from "lovable-tagger";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  root: path.resolve(__dirname, "client"),
  server: {
    host: "0.0.0.0",
    port: 5000,
    strictPort: true,
  },
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client/src"),
      "@shared": path.resolve(__dirname, "./shared"),
      "@lib": path.resolve(__dirname, "./client/src/lib"),
      "@assets": path.resolve(__dirname, "./attached_assets"),
    },
  },
}));
