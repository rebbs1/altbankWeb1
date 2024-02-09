describe('Login Suite', function(){
    beforeEach(() => {
        // root-level hook
        // runs before every test block
        cy.login('validUsername', 'validPassword')
    })
    it('Logout from Altbank', () => {
          //Logout
        cy.visit('/')  
        cy.get('.css-70qvj9').invoke('show')
        cy.contains('Log out').click()
        cy.url().should('include', 'https://altv3-webqa.sterlingapps.p.azurewebsites.net/');
        cy.get('.css-1u4gg8e').should('be.visible').and('have.text', "Sign In")
    })

})