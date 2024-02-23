import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import million from "million/compiler";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [million.vite({ auto: true }),react()],
  define: {
    __APP_ENV__: process.env.VITE_VERCEL_ENV,
  },
});
