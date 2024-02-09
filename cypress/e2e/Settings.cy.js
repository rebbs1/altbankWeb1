describe('Settings testsuite', () => {
    beforeEach(() => {
        // root-level hook
        // runs before every test block
        cy.login('validUsername', 'validPassword')
    })

    afterEach(function() {
        // executes post each test within it block
        cy.wait(3000)
     })
    it('Settings', () => {
         // Navigate to Settings
        cy.get('.css-1iqu6y7 > :nth-child(7)').invoke('show')
        cy.contains('Settings').click()
        cy.url().should('include', 'https://altv3-webqa.sterlingapps.p.azurewebsites.net/Settings');

    })
})