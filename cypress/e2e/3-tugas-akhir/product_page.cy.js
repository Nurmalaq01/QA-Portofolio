/// <reference types="cypress" />

describe('add to cart product', () => {
  it('Add to cart negative case', () => {
    cy.visit('https://magento.softwaretestingboard.com/ ');

    cy.get('[alt="Radiant Tee"]').click();
    cy.get('[id="product-addtocart-button"]').click();
    cy.get('[id="super_attribute[143]-error"]').should('be.visible');
    cy.wait(10000);
    cy.get('[id="option-label-size-143-item-168"]').click();
    cy.get('[id="product-addtocart-button"]').click();
    cy.get('[id="super_attribute[93]-error"]').should('be.visible');


  })

  it('Add to cart positive case', () => {
    cy.visit('https://magento.softwaretestingboard.com/ ');
    
    cy.get('[alt="Radiant Tee"]').click();
    cy.wait(10000);
    cy.get('[id="option-label-size-143-item-168"]').click();
    cy.wait(1000);
    cy.get('[id="option-label-color-93-item-56"]').click();
    cy.wait(1000);
    cy.get('[id="product-addtocart-button"]').click();
    cy.wait(10000);
    cy.get('[class="action showcart"]').click();
    cy.wait(10000);
    cy.get('[id="btn-minicart-close"]').click();
})

})


