import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Sport-Store", // Укажите ваш репозиторий (название после `https://Anatoliy2024.github.io/`)
})
