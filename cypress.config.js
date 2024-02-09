const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "pageLoadTimeout": 100000,
  e2e: {
    baseUrl: 'https://altv3-webqa.sterlingapps.p.azurewebsites.net',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },

  },
});
