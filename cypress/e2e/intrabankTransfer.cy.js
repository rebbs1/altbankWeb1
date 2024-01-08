describe('Login Suite', function(){
    it('LoginTest with valid credentials', function(){
        cy.visit('/')
        cy.title().should("include", "AltBank - The Alternative Bank")
        //sign in
        cy.get('.css-1u4gg8e').click()
        cy.get('.chakra-heading', {timeout: 10000}).should('contain.text', "Sign In")
        cy.get('[name="username"]').type('Rebbs')
        cy.get('[name="password"]').type('Altbank@1234')
        cy.get('.css-p2yaua').click()
        cy.get('.chakra-heading', {timeout:100000}).should('have.text', "Security Question")
        //Set security question
        cy.get('#questionId', {timeout: 100000}).select(1).find(":selected").contains("What is your favorite colour?")
        cy.get('#answer').type('Blue')
        cy.get('.chakra-button').click()
        cy.get('.chakra-heading').should('be.visible')
        //OTP validation
        cy.wait(60000)
        cy.get('.chakra-stack > div > button', {timeout:100000}).click({force:true})
        cy.wait(110000)
        cy.get('input[type="number"]', {timeout:200000}).type('777777')
        cy.get('.chakra-button', {timeout:10000}).click()
        cy.on('windows:alert', (str) => {
            expect(str).to.equal('Device changed successfully!')
        })

        //Fresh sign in after device change
        //cy.get('.chakra-heading').should('contain.text', "Sign In")
        cy.wait(25000)
        cy.get('input[type="text"]', {timeout:100000}).type('Rebbs')
        cy.get('[name="password"]').type('Altbank@1234')
        cy.get('.css-p2yaua').click()
        cy.wait(55000)
        //cy.get('.css-6pkkxl > a > .css-70qvj9 > .chakra-text').should('have.text', "Dashboard")

        //Logout
        //cy.get('.sideBar', {ensureScrollable:false}).scrollTo('bottom')
        cy.get('chakra-text sideBarListContent css-1se43wi', {timeout:100000}).click().click()
    })
});