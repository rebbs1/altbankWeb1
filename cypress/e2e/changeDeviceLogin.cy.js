const { expect } = require("chai");
const { describe } = require("mocha");

describe('Login with change device and logout Suite', function(){
    it('LoginTest with valid credentials', function(){
        cy.login('validUsername', 'validPassword')

    })
});
