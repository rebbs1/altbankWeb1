//modify script to include invalid and edge case later
describe('Login Suite', function(){
      beforeEach(() => {
        // root-level hook
        // runs before every test block
        //sign in
        cy.login('Ogechinagu', 'Password12345@')
      })

      it('Initiate intrabank transfer without selecting source acount', function(){
            cy.visit('/')
            //Click on Transaction
            cy.wait(10000)
            //cy.wait(50000)
            cy.get('.css-70qvj9').invoke('show')
            cy.contains('Transaction').click()
            cy.url().should('include', 'transaction');
            cy.get('.css-i46xk9 > .chakra-stack > .chakra-text').and('have.text', "Funds").click()
            //cy.get(':nth-child(1) > a > .css-i46xk9').click({force:true})
            cy.get(':nth-child(1) > a > .css-i46xk9').invoke('show')
            cy.contains('Local transfer').click()
            cy.get('[role="tablist"]', {timeout:10000}).should('be.visible').and('have.text', "Local TransferAlt BankSterlingOther BankSelf")
            //Complete the form
       //cy.get('[name="fromAccount"]').eq(0).select("0501993282")
       // .find(":selected").contains("0501993282 --- Current Acct - Indiv --- ₦60,002,422.83")
            cy.get('input[type="text"]').eq(0).type("0504154817")
            cy.get('[name="amount"]').eq(0).type("1000")
            cy.get('[name="category"]').eq(0).select("General").find(":selected").contains("General")
            cy.get('[name="paymentReference"]').eq(0).type("This is a test")
            cy.get('.chakra-button.css-xxmzn7').eq(0).should("have.text", "Continue").and("be.disabled")

      })

      it('Initiate intrabank transfer without destination acount', function(){
            cy.visit('/')
            //Click on Transaction
            cy.wait(10000)
            //cy.wait(50000)
            cy.get('.css-70qvj9').invoke('show')
            cy.contains('Transaction').click()
            cy.url().should('include', 'transaction');
            cy.get('.css-i46xk9 > .chakra-stack > .chakra-text').and('have.text', "Funds").click()
            //cy.get(':nth-child(1) > a > .css-i46xk9').click({force:true})
            cy.get(':nth-child(1) > a > .css-i46xk9').invoke('show')
            cy.contains('Local transfer').click()
            cy.get('[role="tablist"]', {timeout:10000}).should('be.visible').and('have.text', "Local TransferAlt BankSterlingOther BankSelf")
            //Complete the form
            cy.get('[name="fromAccount"]').eq(0).select("0501993282").find(":selected")
            cy.get('input[type="text"]').eq(0).type("0504154817").clear()
            cy.get('[name="amount"]').eq(0).type("1000")
            cy.get('[name="category"]').eq(1).select("General", {force:true}).find(":selected").contains("General")
            cy.get('[name="paymentReference"]').eq(0).type("This is a test")
            cy.get('.chakra-button.css-xxmzn7').eq(0).should("have.text", "Continue").and("be.disabled")

      })

      it('Initiate intrabank transfer with invalid destination acount', function(){
            cy.visit('/')
            //Click on Transaction
            cy.wait(10000)
            //cy.wait(50000)
            cy.get('.css-70qvj9').invoke('show')
            cy.contains('Transaction').click()
            cy.url().should('include', 'transaction');
            cy.get('.css-i46xk9 > .chakra-stack > .chakra-text').and('have.text', "Funds").click()
            //cy.get(':nth-child(1) > a > .css-i46xk9').click({force:true})
            cy.get(':nth-child(1) > a > .css-i46xk9').invoke('show')
            cy.contains('Local transfer').click()
            cy.get('[role="tablist"]', {timeout:10000}).should('be.visible').and('have.text', "Local TransferAlt BankSterlingOther BankSelf")
            //Complete the form
            cy.get('[name="fromAccount"]').eq(0).select("0501993282").find(":selected")
            cy.get('input[type="text"]').eq(0).type("0504154817fg#$%^&df4567")
            cy.get('[name="amount"]').eq(0).type("1000")
            cy.get('[name="category"]').eq(1).select("General", {force:true}).find(":selected").contains("General")
            cy.get('[name="paymentReference"]').eq(0).type("This is a test")
            cy.get('.chakra-button.css-xxmzn7').eq(0).should("have.text", "Continue").and("be.disabled")

      })

      it('Initiate intrabank transfer without entering amount', function(){
            cy.visit('/')
            //Click on Transaction
            cy.wait(10000)
            //cy.wait(50000)
            cy.get('.css-70qvj9').invoke('show')
            cy.contains('Transaction').click()
            cy.url().should('include', 'transaction');
            cy.get('.css-i46xk9 > .chakra-stack > .chakra-text').and('have.text', "Funds").click()
            //cy.get(':nth-child(1) > a > .css-i46xk9').click({force:true})
            cy.get(':nth-child(1) > a > .css-i46xk9').invoke('show')
            cy.contains('Local transfer').click()
            cy.get('[role="tablist"]', {timeout:10000}).should('be.visible').and('have.text', "Local TransferAlt BankSterlingOther BankSelf")
            //Complete the form
            cy.get('[name="fromAccount"]').eq(0).select("0501993282").find(":selected")
            cy.get('input[type="text"]').eq(0).type("0504154817")
            cy.get('[name="amount"]').eq(0).type("1000").clear()
            cy.get('[name="category"]').eq(0).select("General", {force:true}).find(":selected").contains("General")
            cy.get('[name="paymentReference"]').eq(0).type("This is a test")
            cy.get('.chakra-button.css-xxmzn7').eq(0).should("have.text", "Continue").and("be.disabled")

      })

      it('Initiate intrabank transfer with invalid amount', function(){
            cy.visit('/')
            //Click on Transaction
            cy.wait(10000)
            //cy.wait(50000)
            cy.get('.css-70qvj9').invoke('show')
            cy.contains('Transaction').click()
            cy.url().should('include', 'transaction');
            cy.get('.css-i46xk9 > .chakra-stack > .chakra-text').and('have.text', "Funds").click()
            //cy.get(':nth-child(1) > a > .css-i46xk9').click({force:true})
            cy.get(':nth-child(1) > a > .css-i46xk9').invoke('show')
            cy.contains('Local transfer').click()
            cy.get('[role="tablist"]', {timeout:10000}).should('be.visible').and('have.text', "Local TransferAlt BankSterlingOther BankSelf")
            //Complete the form
            cy.get('[name="fromAccount"]').eq(0).select("0501993282").find(":selected")
            cy.get('input[type="text"]').eq(0).type("0504154817")
            cy.get('[name="amount"]').eq(0).type("-dfg$%")
            cy.get('[name="category"]').eq(0).select("General", {force:true}).find(":selected").contains("General")
            cy.get('[name="paymentReference"]').eq(0).type("This is a test")
            cy.get('.chakra-button.css-xxmzn7').eq(0).should("have.text", "Continue").and("be.disabled")

      })

      it('Initiate intrabank transfer with insufficient funds', function(){
            cy.visit('/')
            //Click on Transaction
            cy.wait(10000)
            //cy.wait(50000)
            cy.get('.css-70qvj9').invoke('show')
            cy.contains('Transaction').click()
            cy.url().should('include', 'transaction');
            cy.get('.css-i46xk9 > .chakra-stack > .chakra-text').and('have.text', "Funds").click()
            //cy.get(':nth-child(1) > a > .css-i46xk9').click({force:true})
            cy.get(':nth-child(1) > a > .css-i46xk9').invoke('show')
            cy.contains('Local transfer').click()
            cy.get('[role="tablist"]', {timeout:10000}).should('be.visible').and('have.text', "Local TransferAlt BankSterlingOther BankSelf")
            //Complete the form
            cy.get('[name="fromAccount"]').eq(0).select("0501993282").find(":selected")
            cy.get('input[type="text"]').eq(0).type("0504154817")
            cy.get('[name="amount"]').eq(0).type("₦55,002,423.83")
            cy.get('[name="category"]').eq(0).select("General", {force:true}).find(":selected").contains("General")
            cy.get('[name="paymentReference"]').eq(0).type("This is a test")
            cy.get('.chakra-button.css-xxmzn7').eq(0).should("have.text", "Continue").and("be.enabled").click()
            cy.get('.chakra-text.css-8fbu7x').should('exist').and('have.text', "Enter your PIN:")
            cy.get('.chakra-pin-input.css-1nj6yyt').eq(0).type("2")
            cy.get('.chakra-pin-input.css-1nj6yyt').eq(1).type("3")
            cy.get('.chakra-pin-input.css-1nj6yyt').eq(2).type("4")
            cy.get('.chakra-pin-input.css-1nj6yyt').eq(3).type("5")
            cy.get('.chakra-button.css-g80myp').eq(0).should('be.enabled').click()
            cy.get('.chakra-alert__desc').should('have.text', " Insufficient Account Balance")
            
      })

      it('Initiate intrabank transfer with invalid PIN', function(){
            cy.visit('/')
            //Click on Transaction
            cy.wait(10000)
            //cy.wait(50000)
            cy.get('.css-70qvj9').invoke('show')
            cy.contains('Transaction').click()
            cy.url().should('include', 'transaction');
            cy.get('.css-i46xk9 > .chakra-stack > .chakra-text').and('have.text', "Funds").click()
           // cy.get(':nth-child(1) > a > .css-i46xk9').click({force:true})
            cy.get(':nth-child(1) > a > .css-i46xk9').invoke('show')
            cy.contains('Local transfer').click()
            cy.get('[role="tablist"]', {timeout:10000}).should('be.visible').and('have.text', "Local TransferAlt BankSterlingOther BankSelf")
            //Complete the form
            cy.get('[name="fromAccount"]').eq(0).select("0501993282").find(":selected")
            cy.get('input[type="text"]').eq(0).type("0504154817")
            cy.get('[name="amount"]').eq(0).type("₦55,002,423.83")
            cy.get('[name="category"]').eq(0).select("General", {force:true}).find(":selected").contains("General")
            cy.get('[name="paymentReference"]').eq(0).type("This is a test")
            cy.get('.chakra-button.css-xxmzn7').eq(0).should("have.text", "Continue").and("be.enabled").click()
            cy.get('.chakra-text.css-8fbu7x').should('exist').and('have.text', "Enter your PIN:")
            cy.get('.chakra-pin-input.css-1nj6yyt').eq(0).type("2")
            cy.get('.chakra-pin-input.css-1nj6yyt').eq(1).type("0")
            cy.get('.chakra-pin-input.css-1nj6yyt').eq(2).type("0")
            cy.get('.chakra-pin-input.css-1nj6yyt').eq(3).type("0")
            cy.get('.chakra-button.css-g80myp').eq(0).should('be.enabled').click()
            cy.get('.chakra-alert__desc').should('have.text', " Transaction Pin is Invalid")
            
      })

      it('Initiate intrabank transfer without PIN', function(){
            cy.visit('/')
            //Click on Transaction
            cy.wait(10000)
            //cy.wait(50000)
            cy.get('.css-70qvj9').invoke('show')
            cy.contains('Transaction').click()
            cy.url().should('include', 'transaction');
            cy.get('.css-i46xk9 > .chakra-stack > .chakra-text').and('have.text', "Funds").click()
            //cy.get(':nth-child(1) > a > .css-i46xk9').click({force:true})
            cy.get(':nth-child(1) > a > .css-i46xk9').invoke('show')
            cy.contains('Local transfer').click()
            cy.get('[role="tablist"]', {timeout:10000}).should('be.visible').and('have.text', "Local TransferAlt BankSterlingOther BankSelf")
            //Complete the form
            cy.get('[name="fromAccount"]').eq(0).select("0501993282").find(":selected")
            cy.get('input[type="text"]').eq(0).type("0504154817")
            cy.get('[name="amount"]').eq(0).type("₦55,002,423.83")
            cy.get('[name="category"]').eq(0).select("General", {force:true}).find(":selected").contains("General")
            cy.get('[name="paymentReference"]').eq(0).type("This is a test")
            cy.get('.chakra-button.css-xxmzn7').eq(0).invoke('show').should("have.text", "Continue").and("be.enabled").click()
            cy.get('.chakra-text.css-8fbu7x').should('exist').and('have.text', "Enter your PIN:")
            cy.get('.chakra-pin-input.css-1nj6yyt').eq(0).type("2").clear()
            cy.get('.chakra-pin-input.css-1nj6yyt').eq(1).type("3").clear()
            cy.get('.chakra-pin-input.css-1nj6yyt').eq(2).type("4").clear()
            cy.get('.chakra-pin-input.css-1nj6yyt').eq(3).type("5").clear()
            cy.get('.chakra-button.css-g80myp').eq(0).should('be.disabled')
            cy.get('.css-6ald2v > .chakra-text').should('have.text', "Enter your PIN:")

      })

      it('Initiate intrabank transfer with valid credentials', function(){
            cy.visit('/')
              //Click on Transaction
        cy.wait(10000)
              //cy.wait(50000)
        cy.get('.css-70qvj9').invoke('show')
        cy.contains('Transaction').click()
        cy.url().should('include', 'transaction');
        cy.get('.css-i46xk9 > .chakra-stack > .chakra-text').and('have.text', "Funds").click()
        //cy.get(':nth-child(1) > a > .css-i46xk9').click({force:true})
        cy.get(':nth-child(1) > a > .css-i46xk9').invoke('show')
        cy.contains('Local transfer').click()
        cy.get('[role="tablist"]', {timeout:10000}).should('be.visible').and('have.text', "Local TransferAlt BankSterlingOther BankSelf")
              //Complete the form
        cy.get('[name="fromAccount"]').eq(0).select("0501993282").find(":selected")
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
            //Transfer is successful
        cy.wait(10000)
        cy.get('.css-1xfwbde').should('be.visible')
        cy.get('.chakra-text.css-1jzqw6p').should('have.text', "Transfer successful")
        cy.get('.chakra-button.css-123gfym').eq(0).should('have.text', "Done").click()
      })

   
})