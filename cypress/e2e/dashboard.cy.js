describe('The Dashboard testsuite', () => {
    beforeEach(() => {
        // root-level hook
        // runs before every test block
        //Login
        cy.login('validUsername', 'validPassword')
    })

    afterEach(function() {
        // executes post each test within it block
        cy.wait(3000)
     })
    it('Navigate to the dashboard', () => {
        cy.visit('/')
       // Navigate to the dashboard
        cy.get('.css-6pkkxl > a > .css-70qvj9 > .chakra-text').invoke('show')
        cy.contains('Dashboard').click()
        cy.url().should('include', 'https://altv3-webqa.sterlingapps.p.azurewebsites.net/Dashboard');
   })
})