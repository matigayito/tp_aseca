/// <reference types="cypress" />

describe('initiate the test and enter wish frontpage', () => {
    beforeEach(() => {
        cy.visit('https://www.wish.com.ar/')
    })

    it('verify you cant log in with random credentials', () => {
        cy.get(':nth-child(2) > .user-list__link')
        .click()

        cy.get('#login_email')
        .type('test@mail.comm')

        cy.get('#login_password')
        .type('testPassword')

        cy.get('#login-btn')
        .click()

        cy.get('.alert__message')
        .should('have.text', 'Email y/o clave incorrecta')
    })

    it('verify you can find certain item', () => {
        cy.get('#search')
        .type('cuaderno')

        cy.get('#search-btn')
        .click()

        cy.wait(500)

        cy.get(':nth-child(1) > .products-feed__product-wrapper > .products-feed__product-media > .products-feed__product-link > .products-feed__product-image')
        .click()

        cy.get('.product-vip__title')
        .should('have.text', 'Todo sobre papá - Cuaderno para regalar a papá')

        
    })

    it('verify you can enter an item to de cart and proceed to buy it', () => {
        cy.get('#search')
        .type('cuaderno')

        cy.get('#search-btn')
        .click()

        cy.wait(500)

        cy.get(':nth-child(1) > .products-feed__product-wrapper > .products-feed__product-media > .products-feed__product-link > .products-feed__product-image')
        .click()

        cy.get('#add_to_cart-btn')
        .click()

        cy.get('#start_checkout-btn')
        .click()

        cy.get(':nth-child(1) > .uk-grid-small > :nth-child(1) > div > .checkout__section-title')
        .should('have.text', 'Opciones de envío')

    })
})