/// <reference types="cypress" />

describe('Teste do NMSC em ambiente Release', () => {
    before(() => {
        cy.visit('/')
    });

    it('Deve realizar Login AEM com sucesso', () => {
        cy.get('#username').type('admin', {log: false})
        cy.get('#password').type('admin', {log: false})
        cy.get('#submit-button').click()
    });

    it('Escolher região', () => {
        cy.get('.location-selector-input').type('Rio de Janeiro')
        cy.get('[href="javascript:;"]').click()
        cy.contains('Rio de Janeiro - RJ').click()
        cy.get('.location-confirm > .hub-button__label').click()
    });   

    it('Escolher a versão do carro', () => {
        cy.get('#test-id-car-showcase-card')
        cy.contains(' ULTRA ').click()
    });    

    it('Escolho a cor', () => {
        cy.get('#test-id-step-color').click()
        cy.get('#test-id-card-showcase-color > :nth-child(4)').click()
        // cy.contains(' PRETO CARBON ').click()
    }); 






});