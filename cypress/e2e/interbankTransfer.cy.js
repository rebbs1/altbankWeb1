describe('Login Suite', function(){
    beforeEach(() => {
        // root-level hook
        // runs before every test block
        //sign in
        cy.login('Ogechinagu', 'Password12345@')
        
    })

    it('Interbank transfer', ()=> {
         cy.visit('/')
         //Click on Other Transaction
         cy.wait(10000)
         //cy.wait(50000)
         cy.get('.css-70qvj9').invoke('show')
         cy.contains('Transaction').click()
         cy.url().should('include', 'transaction');
         cy.get('.css-i46xk9 > .chakra-stack > .chakra-text').and('have.text', "Funds").click()
         cy.get(':nth-child(1) > a > .css-i46xk9').click()
         cy.get('[role="tablist"]', {timeout:10000}).should('be.visible').and('have.text', "Local TransferAlt BankSterlingOther BankSelf")
         cy.get('.chakra-tabs__tab.css-843zsv').eq(1).should('have.text', "Other Bank").click()
         //Complete the form
        cy.get('[name="fromAccount"]').eq(0).invoke('show').select("0501993282", {force: true}).find(":selected")
        cy.get('input[type="text"]').eq(0).type("0051762787", {force: true})
        //cy.get('.css-146k1ar-input').type("NIBSS Bank")
        //cy.get('[name="destinationBankName"]').type("NIBSS Bank", {force: true}).should('contain', "999998").click()
        cy.get('[name="destinationBankName"]').each(function($ele, index) {
            cy.log($ele.text())
            if ($ele.text()=== "NIBSS Bank") {
                cy.log("Found element")
                cy.wrap($ele).click({force:true})
            }
            else {
                cy.log("current value", $ele.text())
            }
        })
        cy.get('[name="amount"]').eq(0).type("1000", {force: true})
        cy.get('[name="category"]').eq(0).select("General", {force: true}).find(":selected").contains("General")
        cy.get('[name="paymentReference"]').eq(0).type("This is a test", {force: true})
        cy.wait(10000)
        cy.get('.chakra-button.css-xxmzn7').eq(0).should("have.text", "Continue").and("be.enabled").click({force: true})
              //Enter transaction PIN
        cy.get('.chakra-text.css-8fbu7x').should('exist').and('have.text', "Enter your PIN:")
        cy.get('.chakra-pin-input.css-1nj6yyt').eq(0).type("2")
        cy.get('.chakra-pin-input.css-1nj6yyt').eq(1).type("3")
        cy.get('.chakra-pin-input.css-1nj6yyt').eq(2).type("4")
        cy.get('.chakra-pin-input.css-1nj6yyt').eq(3).type("5")
        cy.get('.chakra-button.css-g80myp').eq(0).click()
        //Transfer is successful
        cy.get('#chakra-modal--header-\:r2\: > .chakra-text').should('be.displayed').and('have.text', "Transfer successful")
        //View receipt
        cy.get('.css-owjkmg > .chakra-stack').should('have.text', "receipt").click()
        cy.get('.css-1agc66q > .chakra-button').should('have.text', "Done").click()
    })

})