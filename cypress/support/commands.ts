///<reference types="cypress" />
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('login', (username, password) => {
    cy.session([username, password], () => {
        cy.visit('/')
        cy.title().should("include", "AltBank - The Alternative Bank")
        //sign in
        cy.get('.css-1u4gg8e').click()
        cy.get('.chakra-heading', {timeout: 10000}).should('contain.text', "Sign In")
        cy.get('[name="username"]').type('Ogechinagu')
        cy.get('[name="password"]').type('Password12345@')
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
        cy.get('input[type="text"]', {timeout:100000}).type('Ogechinagu')
        cy.get('[name="password"]').type('Password12345@')
        cy.get('.css-p2yaua').click()
        cy.wait(55000)
        //I am signed in
        cy.get('.css-10690m').should('have.text', "Transaction History")
        cy.get('.css-6pkkxl > a > .css-70qvj9 > .chakra-text').should('have.text', "Dashboard")

        //Logout
        //cy.get('chakra-text sideBarListContent css-1se43wi').click()

    })
    
  
})

/*Cypress.Commands.add('login', (username, password) => {
    it('LoginTest with valid credentials', function(){
        cy.visit('https://altv3-webqa.sterlingapps.p.azurewebsites.net//')
        cy.title().should("include", "AltBank - The Alternative Bank")
        //sign in
        cy.get('.css-1u4gg8e').click()
        cy.get('.chakra-heading', {timeout: 10000}).should('contain.text', "Sign In")
        cy.get('[name="username"]').type('username')
        cy.get('[name="password"]').type('password')
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
        cy.get('input[type="text"]', {timeout:100000}).type('username')
        cy.get('[name="password"]').type('password')
        cy.get('.css-p2yaua').click()
        cy.wait(55000)
        //cy.get('.css-6pkkxl > a > .css-70qvj9 > .chakra-text').should('have.text', "Dashboard")

        //Logout
        //cy.get('chakra-text sideBarListContent css-1se43wi').click()
    })
})*/
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import cypress from "cypress"

