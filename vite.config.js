import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    port: 3030,
  },
  preview: {
    port: 4270,
  },
  build: {
    incremental: true,
    babel: {
      presets: ["@babel/preset-env", "@babel/preset-react"],
    },
    cache: true,

    minify: true,

    mode: "production",

    chunks: true,

    moduleBundling: true,

    prerenderPaths: ["/"],

    modulePreload: true,

    devCode: true,

    debug: true,

    //Esta opción se utiliza para dividir el código CSS en archivos separados por componente. Esto puede mejorar el rendimiento de tu aplicación y reducir el tamaño de los archivos CSS.
    cssCodeSplit: true,
  },
});
