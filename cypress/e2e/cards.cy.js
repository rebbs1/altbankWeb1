describe('Cards testsuite', () => {
    beforeEach(() => {
        // root-level hook
        // runs before every test block
        cy.login('validUsername', 'validPassword')
    
    })

    afterEach(function() {
        // executes post each test within it block
        cy.wait(3000)
    })
       //Activate card
    it('Activate card', () => {
        cy.visit('/')
        // Navigate to Cards
       cy.get('.css-1iqu6y7 > :nth-child(3)').invoke('show')
       cy.contains('Cards').click()
       cy.url().should('include', 'https://altv3-webqa.sterlingapps.p.azurewebsites.net/cards');
    
    })
})