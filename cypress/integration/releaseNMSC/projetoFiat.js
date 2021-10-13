/// <reference types="cypress" />

describe('Teste do NMSC em ambiente Release', () => {
    before(() => {
        cy.visit('/')
    });

    it('Deve realizar Login AEM com sucesso', () => {
        cy.get('.location-selector-input').type('Rio de Janeiro')
        cy.get('[href="javascript:;"]').click()
        cy.contains('Rio de Janeiro - RJ').click()
        cy.get('.location-confirm > .hub-button__label').click()






        
    //     cy.get('#username').type('admin', {log: false})
    //     cy.get('#password').type('admin', {log: false})
    //     cy.get('#submit-button').click()
    });


});