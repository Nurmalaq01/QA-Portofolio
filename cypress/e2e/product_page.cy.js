/// <reference types="cypress" />



describe('check  ukuran produk', () => {
  it('check  ukuran produk postive case', () => {
    cy.visit('https://magento.softwaretestingboard.com/ ');
    cy.get('[alt="Radiant Tee"]').click();
    cy.wait(10000);
    cy.get('[id="option-label-size-143-item-168"]').click();
    cy.get('[id="option-label-size-143-item-168"]').should('have.class', 'selected');

  })

  it('check  ukuran produk negative case', () => {
    cy.visit('https://magento.softwaretestingboard.com/ ');
    cy.get('[alt="Radiant Tee"]').click();
    cy.get('[id="product-addtocart-button"]').click();
    cy.get('[id="super_attribute[143]-error"]').should('be.visible');
  })
})

describe('check warna produk', () => {
  it('check warna produk postive case', () => {
    cy.visit('https://magento.softwaretestingboard.com/ ');
    cy.get('[alt="Radiant Tee"]').click();
    cy.wait(10000);
    cy.get('[id="option-label-color-93-item-56"]').click();
    cy.get('[id="option-label-color-93-item-56"]').should('have.class', 'selected');
    cy.get('[class="fotorama__img"]').should('have.attr', 'src', 'https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/d34482110da20c5e24f97c38fb219fb3/w/s/ws12-orange_main_1.jpg');

  })

  it('check warna produk negative case', () => {
    cy.visit('https://magento.softwaretestingboard.com/ ');
    cy.get('[alt="Radiant Tee"]').click();
    cy.get('[id="product-addtocart-button"]').click();
    cy.get('[id="super_attribute[93]-error"]').should('be.visible');
  })
})

