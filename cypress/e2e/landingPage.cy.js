describe('Homepage Suite', function(){
    beforeEach(() => {
        // root-level hook
        // runs before every test block
        cy.visit('/')
      })
    it('Launch url', function(){
        cy.title().should("include", "AltBank - The Alternative Bank")
        
    })

    it('Contact us', ()=>{
        cy.get('.css-1plk7cb > :nth-child(2)').should('have.text', "Contact Us").should('be.visible').click()
        cy.get('.css-ld2lm1').should('have.text', "help@altbank.ng")
        cy.get('.css-i2rtko').should('contain.text', "01-7000555")
        //cy.get('a > .chakra-button').click()   //alert script did not work, still need a workaround
 
    })

     it('About us', ()=>{
        cy.get('.css-1plk7cb > :nth-child(3)').should('have.text', "About Us").should('be.visible').click()
        cy.get('.css-x4ndje').should('have.text', "What exactly is Altbank?").should('be.visible').click()
        cy.get('.css-1u5qid1 > .css-1j1ss87').should('have.text', "What we Do").should('be.visible').click()
        cy.get('.css-ggd8q7 > .css-1j1ss87').should('have.text', "Testimonials").should('be.visible').click()
 
    })

    it('FAQs', ()=>{
        cy.get('.css-1plk7cb > :nth-child(4)').should('have.text', "FAQs").should('be.visible').click()
        cy.get(':nth-child(4) > .css-0 > .chakra-text').should('have.text', "Did you see your question?").should('be.visible')
 
    })
      
      it('Redirect to download on appstore (beforeEach launch url)', () => {
        cy.get('.css-166l208 > .chakra-stack > [href="https://apps.apple.com/ng/app/altbank/id6461120800"] > .chakra-image', {timeout:5000})
        .invoke('removeAttr','target').click()
        //cy.url().should('include', 'https://apps.apple.com/ng/app/altbank/id6461120800')
        //Add assertion later
       
    })

    it('Redirect to download on playstore (beforeEach launch url)', ()=>{
        cy.get('.css-166l208 > .chakra-stack > [href="https://play.google.com/store/apps/details?id=ng.sterling.altbankv2"] > .chakra-image')
        .click()
        //cy.url().should('include', 'https://play.google.com/store/apps/details?id=ng.sterling.altbankv2')
        //Add assertation later
    })

    it('Redirect to instagram', () => {
        cy.get('[alt="instagram"]', {timeout:2000}).click()
        //Add assertion later
    })

    it('Redirect to twitter', () => {
        cy.get('[alt="twitter"]').click()
        //Add assertion later
    })

    it('Redirect to linkedin', () => {
        cy.get('[alt="linkedin"]').click()
    })

    it('Redirect to facebook', () => {
        cy.get('[alt="facebook"]').click()
        cy.on('window:alert', (str) => {
            expect(str).to.eql("Connect with The Alternative Bank on Facebook")
        })
    })

    *it('Redirect to Our location', () => {
        cy.get(':nth-child(3) > .chakra-stack > .chakra-text').click()
    })
});