describe('Login Suite', function(){
    beforeEach(() => {
        // root-level hook
        // runs before every test block
            //sign in
        cy.login('Ogechinagu', 'Password12345@')
    })

    it('Altbank to Sterling bank transfer', ()=> {
        cy.visit('/')
        //Click on Sterling Transaction
        cy.wait(10000)
        //cy.wait(50000)
        cy.get('.css-70qvj9').invoke('show')
        cy.contains('Transaction').click()
        cy.url().should('include', 'transaction');
        cy.get('.css-i46xk9 > .chakra-stack > .chakra-text').and('have.text', "Funds").click()
        cy.get(':nth-child(1) > a > .css-i46xk9').click()
        cy.get('[role="tablist"]', {timeout:10000}).should('be.visible').and('have.text', "Local TransferAlt BankSterlingOther BankSelf")
        //Complete the form
        cy.get('[name="fromAccount"]').eq(0).select("0501993282")
          .find(":selected").contains("0501993282 --- Current Acct - Indiv --- ₦60,002,422.83")
        cy.get('input[type="text"]').eq(0).type("0504154817")
        cy.get('[name="amount"]').eq(0).type("1000")
        cy.get('[name="category"]').eq(0).select("General").find(":selected").contains("General")
        cy.get('[name="paymentReference"]').eq(0).type("This is a test")
        cy.get('.chakra-button.css-xxmzn7').eq(0).should("have.text", "Continue").and("be.enabled").click()
              //Enter transaction PIN
        cy.get('.chakra-text.css-8fbu7x').should('exist').and('have.text', "Enter your PIN:")
        cy.get('.chakra-pin-input.css-1nj6yyt').eq(0).type("2")
        cy.get('.chakra-pin-input.css-1nj6yyt').eq(1).type("3")
        cy.get('.chakra-pin-input.css-1nj6yyt').eq(2).type("4")
        cy.get('.chakra-pin-input.css-1nj6yyt').eq(3).type("5")
        cy.get('.chakra-button.css-g80myp').eq(0).click()
    })

})