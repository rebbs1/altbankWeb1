describe('Accounts testsuite', () => {
    beforeEach(() => {
        // root-level hook
        // runs before every test block
        cy.login('validUsername', 'validPassword')
    })

    afterEach(function() {
        // executes post each test within it block
        cy.wait(3000)
     })
    it('accounts', () => {
        cy.visit('/')
        // Navigate to Accounts
        cy.get('.css-1iqu6y7 > :nth-child(6)').invoke('show')
        cy.contains('Account').click()
        cy.url().should('include', 'https://altv3-webqa.sterlingapps.p.azurewebsites.net/Account');

    })
})