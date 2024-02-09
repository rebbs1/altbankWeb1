describe('Hub testsuite', () => {
    beforeEach(() => {
        // root-level hook
        // runs before every test block
        cy.login('validUsername', 'validPassword')
    })

    afterEach(function() {
        // executes post each test within it block
        cy.wait(3000)
     })
    it('Navigate to Hub', () => {
       // Navigate to Hub
        cy.visit('/')
        cy.get('.css-1iqu6y7 > :nth-child(5)').invoke('show')
        cy.contains('Hub').click()
        cy.url().should('include', 'https://altv3-webqa.sterlingapps.p.azurewebsites.net/hub');
   })
})