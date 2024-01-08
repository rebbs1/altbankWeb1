describe('Login Suite', function(){
    beforeEach(() => {
        // root-level hook
        // runs before every test block
        cy.visit('/')
    })
    /*it('LoginTest with valid credentials', function(){
        //Login with valid credentials
        cy.get('.css-1u4gg8e').click()
        cy.get('.chakra-heading', {timeout: 10000}).should('contain.text', "Sign In")
        cy.get('[name="username"]').type('Ogechinagu')
        cy.get('[name="password"]').type('Password12345@')
        cy.get('.css-p2yaua').click()

    })*/
    //Login without username
    /*it('Login without username', ()=>{
        cy.get('.css-1u4gg8e').click()
        cy.get('.chakra-heading', {timeout: 10000}).should('contain.text', "Sign In")
        cy.get('[name="username"]').type('fdghj').clear()
        cy.get('[name="password"]').type('Password12345@')
        cy.get('.css-p2yaua').click()
        cy.get('.chakra-heading', {timeout: 10000}).should('contain.text', "Sign In")
        cy.get('#field-:r0:-helptext', {timeout: 10000}).should('be.visible')
          .should('have.text', " Username is Required")

    })
    //Login without password
    it('Login without password', ()=>{
       cy.get('.css-1u4gg8e').click()
       cy.get('.chakra-heading', {timeout: 10000}).should('contain.text', "Sign In")
       cy.get('[name="username"]').type('Ogechinagu')
       cy.get('[name="password"]').type('DFGHertyu456').clear()
       cy.get('.css-p2yaua').click()
       cy.get('#field-\:r0\:-helptext').should('be.visible')
       .should('have.text', " Password is Required")
       cy.get('.chakra-heading', {timeout: 10000}).should('contain.text', "Sign In")
      
    })

    //Login without username and without password
   /it('Login without username and without password', ()=> {
        cy.get('.css-1u4gg8e').click()
        cy.get('.chakra-heading', {timeout: 10000}).should('contain.text', "Sign In")
        cy.get('[name="username"]').type('dfghghj').clear()
        cy.get('[name="password"]').type('dfg67').clear()
        cy.get('.css-p2yaua').click()
        cy.get('.chakra-heading', {timeout: 10000}).should('contain.text', "Sign In")
        cy.get('#field-:r0:-helptext', {timeout: 10000}).should('be.visible')
          .should('have.text', " Username is Required")
        cy.get('#field-\:r0\:-helptext').should('be.visible')
          .should('have.text', " Password is Required")

    })

    //Login with invalid username
    it('Login with invalid username', ()=> {
        cy.get('.css-1u4gg8e').click()
        cy.get('.chakra-heading', {timeout: 10000}).should('contain.text', "Sign In")
        cy.get('[name="username"]').type('Ogechinagu12345')
        cy.get('[name="password"]').type('Password12345@')
        cy.get('.css-p2yaua').click()
        cy.get('.chakra-heading', {timeout: 10000}).should('contain.text', "Sign In")
        cy.on('window:alert', (alerttext) => {
            expect(alerttext).to.exist
            .and.to.eql("Please check your user details and try again")
        })
        cy.get('.chakra-alert__desc').should('be.visible')
        .and('have.text', " Please check your user details and try again")
    
    })*/

    //Login with invalid password
    it('Login with invalid password', () => {
        cy.get('.css-1u4gg8e').click()
        cy.get('.chakra-heading', {timeout: 10000}).should('contain.text', "Sign In")
        cy.get('[name="username"]').type('rebbs')
        cy.get('[name="password"]').type('InvalidPassword1@')
        cy.get('.css-p2yaua').click()
        cy.get('.chakra-heading', {timeout: 10000}).should('contain.text', "Sign In")
        cy.on('window:alert', (alerttext) => {
            expect(alerttext).to.exist
            .and.to.eql("Please check your user details and try again")
        })
        cy.get('.chakra-alert__desc').should('be.visible')
        .and('have.text', "Incorrect UserName/Password. You have 2 password attempt(s) left to retry.")
    })

    //Login with invalid username and invalid password
    /*it('Login with invalid username and invalid password', ()=> {
        cy.get('.css-1u4gg8e').click()
        cy.get('.chakra-heading', {timeout: 10000}).should('contain.text', "Sign In")
        cy.get('[name="username"]').type('Ogechi####nagu')
        cy.get('[name="password"]').type('Pass#####word12345@')
        cy.get('.css-p2yaua').click()
    })*/

});
