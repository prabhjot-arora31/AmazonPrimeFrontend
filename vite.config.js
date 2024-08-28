import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/movies": {
        target: "https://amazon-prime-backend.vercel.app/",
        changeOrigin: true,
      },
      "/api/user": {
        target: "https://amazon-prime-backend.vercel.app/",
        changeOrigin: true,
      },
      "/api/user/login": {
        target: "https://amazon-prime-backend.vercel.app/",
        changeOrigin: true,
      },
    },
  },
});
