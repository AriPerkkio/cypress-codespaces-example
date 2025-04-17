import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    watch: true,
    workspace: [
      {
        test: {
          name: "chromium",
          browser: {
            provider: "playwright",
            enabled: true,
            instances: [{ browser: "chromium" }],

            headless: false,
            ui: true,
          },
        },
      },
    ],
  },
});
