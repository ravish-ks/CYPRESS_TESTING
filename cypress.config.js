const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '65s4nw',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
