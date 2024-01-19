import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true })],
  build: {
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      external: ["react", "react-dom"],
      output: { globals: { react: "React", "react-dom": "ReactDOM" } },
    },
    lib: {
      entry: path.resolve(__dirname, "src/index.tsx"),
      name: "react-each-of",
      fileName: (format: string) => `index.${format}.js`,
    },
  },
});
