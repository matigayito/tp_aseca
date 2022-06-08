/// <reference types="cypress" />

describe('initiate the test and enter wish frontpage', () => {
    beforeEach(() => {
        cy.visit('https://www.wish.com/?hide_login_modal=true')
    })

    it('verify it reaches wish frontpage', () => {
        cy.get('[data-testid="login-username"]')
        .type('MEGayo@mail.austral.edu.ar')

        cy.get('[data-testid="login-password"]')
        .type('testwish')

        cy.get('[data-testid="login-button"]')
        .click()
    })
})