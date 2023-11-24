import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
   chromeWebSecurity: false,
   setupNodeEvents(on, config) {
     // e2e testing node events setup code
     return config;
    },
  },
})
