const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.specPattern = [
        'cypress/e2e/3-tugas-akhir/Homepage.cy.js',
        'cypress/e2e/3-tugas-akhir/Sign_Up.cy.js',
        'cypress/e2e/3-tugas-akhir/Sign_In.cy.js',
        'cypress/e2e/3-tugas-akhir/Product.cy.js',
        'cypress/e2e/3-tugas-akhir/Shopping_cart.cy.js',
        'cypress/e2e/3-tugas-akhir/Checkout.cy.js',
      ]
      return config
      // implement node event listeners here
    },
  },
});
