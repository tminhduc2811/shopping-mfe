import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), ""));
  return {
    plugins: [
      react(),
      federation({
        name: "root-app",
        filename: "root-app-entry.js",
        shared: ["react", "react-dom", "react-router-dom", "zustand"],
        remotes: {
          "product-mfe": process.env.VITE_PRODUCT_MFE_URL,
          "cart-mfe": process.env.VITE_CART_MFE_URL,
          "about-mfe": process.env.VITE_ABOUT_MFE_URL,
        },
      }),
    ],
    build: {
      modulePreload: false,
      target: "esnext",
      minify: false,
      cssCodeSplit: false,
    },
    server: {
      port: 3000,
    },
    preview: {
      port: 3000,
    },
    base: "/shopping-mfe/",
  };
});
