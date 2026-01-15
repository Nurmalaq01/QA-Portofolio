/// <reference types="cypress" />



describe('Cek Username column', () => {

    it('Cek username column with empty column', () => {
    cy.visit('https://www.linkedin.com/login');
    cy.get('button[type=submit]').click();
    cy.wait(10000);
    cy.get('[id="error-for-username"]').should('have.text', 'Please enter an email address or phone number.');
  })
    it('Check Username column with invalid data', () => {
    cy.visit('https://www.linkedin.com/login');
    cy.get('[id="username"]').type('nurmala');
    cy.wait(10000);
    cy.get('button[type=submit]').click();
    cy.get('[id="error-for-username"]').should('have.text','Please enter a valid username.');

  })

    it('Check Username column with valid data', () => {
    cy.visit('https://www.linkedin.com/login');
    cy.get('[id="username"]').type('nurmalas039@gmail.com');
    cy.wait(10000);
    cy.get('button[type=submit]').click();
  })
})

describe('Cek Password column', () => {

    it('Cek password column with empty column', () => {
    cy.visit('https://www.linkedin.com/login');
    cy.get('[id="username"]').type('test@gmail.com');
    cy.get('button[type=submit]').click();
    cy.wait(10000);
    cy.get('[id="error-for-password"]').should('have.text','Please enter a password.');
  })
    it('Check Password column with invalid data', () => {
    cy.visit('https://www.linkedin.com/login');
    cy.get('[id="username"]').type('test@gmail.com');
    cy.get('[id="password"]').type('yuk');
    cy.get('button[type=submit]').click();
    cy.wait(6000);
    cy.get('[id="error-for-password"]').should('have.text','The password you provided must have at least 6 characters.');
  })

    it('Check Password column with valid data', () => {
    cy.visit('https://www.linkedin.com/login');
    cy.get('[id="password"]').type('yuk12345');
    cy.wait(10000);
    cy.get('button[type=submit]').click();

  })
})