describe('Password recovery testsuite', () => {
    beforeEach(() => {
        // root-level hook
        // runs before every test block
        cy.visit('/')
    })

    afterEach(function() {
        // executes post each test within it block
        cy.wait(3000)
     })

     // Recover password with invalid BVN and invalid account number
    /*it('Recover password with invalid BVN and invalid account number', () => {
        cy.get('button[type="button"]').eq(0).should("have.text", "Sign In").and("be.enabled").click()
        cy.get('.css-2j0f21').should('exist').and('have.text', "Forgot password?").click()
        cy.get('.css-13t1oxy').should('be.visible').and('have.text', "Forgot Password")
        cy.get('[placeholder="Enter BVN"]').type('23456789')
        cy.get('[placeholder="Enter Account Number"]').type('3456789')
        cy.get('.chakra-button').click()
        cy.get('.chakra-form-control > :nth-child(2)').should('be.visible').and('have.text', "Invalid bvn")
        cy.get('.chakra-form-control > :nth-child(4)').should('be.visible').and('have.text', "Invalid account number")
        cy.get('.css-13t1oxy').should('be.visible').and('have.text', "Forgot Password")
    

    })

    it('Recover password with invalid BVN', () => {
        cy.get('button[type="button"]').eq(0).should("have.text", "Sign In").and("be.enabled").click()
        cy.get('.css-2j0f21').should('exist').and('have.text', "Forgot password?").click()
        cy.get('.css-13t1oxy').should('be.visible').and('have.text', "Forgot Password")
        cy.get('[placeholder="Enter BVN"]').type('23456789')
        cy.get('[placeholder="Enter Account Number"]').type('0504489355')
        cy.get('.chakra-button').click()
        cy.get('.chakra-form-control > :nth-child(2)').should('be.visible').and('have.text', "Invalid bvn")
        cy.get('.css-13t1oxy').should('be.visible').and('have.text', "Forgot Password")
    

    })

    it('Recover password with invalid account number', () => {
        cy.get('button[type="button"]').eq(0).should("have.text", "Sign In").and("be.enabled").click()
        cy.get('.css-2j0f21').should('exist').and('have.text', "Forgot password?").click()
        cy.get('.css-13t1oxy').should('be.visible').and('have.text', "Forgot Password")
        cy.get('[placeholder="Enter BVN"]').type('23456789098')
        cy.get('[placeholder="Enter Account Number"]').type('3456789')
        cy.get('.chakra-button').click()
        cy.get('.chakra-form__helper-text.css-1scwrk5').should('be.visible').and('have.text', "Invalid account number")
        cy.get('.css-13t1oxy').should('be.visible').and('have.text', "Forgot Password")
    

    })

    it('Recover password without BVN and account number', () => {
        cy.get('button[type="button"]').eq(0).should("have.text", "Sign In").and("be.enabled").click()
        cy.get('.css-2j0f21').should('exist').and('have.text', "Forgot password?").click()
        cy.get('.css-13t1oxy').should('be.visible').and('have.text', "Forgot Password")
        cy.get('[placeholder="Enter BVN"]').type('23456789098').clear()
        cy.get('[placeholder="Enter Account Number"]').type('3456789').clear()
        cy.get('.chakra-button').click()
        cy.get('.chakra-form__helper-text.css-1scwrk5').eq(0).should('be.visible').and('have.text', "Provide a valid bvn!")
        cy.get('.chakra-form__helper-text.css-1scwrk5').eq(1).should('be.visible').and('have.text', "Provide a valid account number!")
        cy.get('.css-13t1oxy').should('be.visible').and('have.text', "Forgot Password")
    

    })

    it('Recover password without BVN', () => {
        cy.get('button[type="button"]').eq(0).should("have.text", "Sign In").and("be.enabled").click()
        cy.get('.css-2j0f21').should('exist').and('have.text', "Forgot password?").click()
        cy.get('.css-13t1oxy').should('be.visible').and('have.text', "Forgot Password")
        cy.get('[placeholder="Enter BVN"]').type('23456789098').clear()
        cy.get('[placeholder="Enter Account Number"]').type('3456789')
        cy.get('.chakra-button').click()
        cy.get('.chakra-form__helper-text.css-1scwrk5').eq(0).should('be.visible').and('have.text', "Provide a valid bvn!")
        cy.get('.css-13t1oxy').should('be.visible').and('have.text', "Forgot Password")
    

    })

    it('Recover password without account number', () => {
        cy.get('button[type="button"]').eq(0).should("have.text", "Sign In").and("be.enabled").click()
        cy.get('.css-2j0f21').should('exist').and('have.text', "Forgot password?").click()
        cy.get('.css-13t1oxy').should('be.visible').and('have.text', "Forgot Password")
        cy.get('[placeholder="Enter BVN"]').type('23456789098')
        cy.get('[placeholder="Enter Account Number"]').type('3456789').clear()
        cy.get('.chakra-button').click()
        cy.get('.chakra-form__helper-text.css-1scwrk5').eq(0).should('be.visible').and('have.text', "Provide a valid account number!")
        cy.get('.css-13t1oxy').should('be.visible').and('have.text', "Forgot Password")
    

    })*/

    it('Recover password with valid BVN and account number', () => {
        cy.get('button[type="button"]').eq(0).should("have.text", "Sign In").and("be.enabled").click()
        cy.get('.css-2j0f21').should('exist').and('have.text', "Forgot password?").click()
        cy.get('.css-13t1oxy').should('be.visible').and('have.text', "Forgot Password")
        cy.get('[placeholder="Enter BVN"]').type('22350318734')
        cy.get('[placeholder="Enter Account Number"]').type('0504489355')
        cy.get('.chakra-button').click()
        cy.get('.chakra-text').should('be.visible').and('have.text', "Answer your security question")
        //Answer security question
        cy.get('#questionId', {timeout: 100000}).select(1).find(":selected").contains("What is your favorite colour?")
        cy.get('#answer').type('Blue')
        cy.get('.chakra-button').click()
        cy.wait(50000)
        cy.get('.css-1f20wg9 > .chakra-text').should('be.visible').and('have.text', "An OTP has been sent to your phone number")
        //OTP validation
        cy.wait(20000)
        cy.get('.css-4g6ai3', {timeout:100000}).click({force:true})
        cy.wait(110000)
        cy.get('input[type="number"]', {timeout:200000}).type('777777', {force:true})
        cy.get('.chakra-button', {timeout:10000}).click()
        cy.on('windows:alert', (str) => {
            expect(str).to.equal('Device changed successfully!')
        })
        
    

    })
})