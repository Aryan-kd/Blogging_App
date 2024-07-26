import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
<<<<<<< HEAD
        secure: false,
=======
        changeOrigin: true,
        secure: false,
        ws: false,
>>>>>>> newBranch
      },
    },
  },
  build: {
    chunkSizeWarningLimit: 2000,
  },
  plugins: [react()],
});
