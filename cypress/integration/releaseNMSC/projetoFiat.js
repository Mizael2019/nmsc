/// <reference types="cypress" />

describe('Teste do NMSC em ambiente Release', () => {
    before(() => {
        cy.visit('/')
    });

    it('Login AEM', () => {
        cy.get('#username').type('admin', {log: false})
        cy.get('#password').type('admin', {log: false})
        cy.get('#submit-button').click()
    });

    it('Escolher região', () => {
        cy.get('.location-selector-input').type('Rio de Janeiro')
        cy.get('[href="javascript:;"]').click()
        cy.contains('Rio de Janeiro - RJ').click()
        cy.get('.hub-info-bar__close-btn > .hub-button').click()
        cy.get('.location-confirm > .hub-button__label').click()
        
    });   

    it('Escolher a versão do carro', () => {
        cy.get(':nth-child(7) > .car-showcase-card--content').click()
        cy.contains('NOVO TORO VOLCANO 2.0 AT9 4X4 DIESEL 4P 2020').click()
    });    

    it('Escolho a cor', () => {
        cy.get('#test-id-step-color').click()
        cy.get('#test-id-card-showcase-color > :nth-child(3)').click()
        cy.contains(' AZUL JAZZ ').click()
    }); 

    it('Kit Opcionais', () => {
        cy.get('#test-id-step-optionals').click( {force: true} )
        cy.get('[price="3500"] > .car-showcase-card--content').click()
      });

      it('Acessórios', () => {
        cy.get('#test-id-step-accessories').click( {force: true})
        cy.get(':nth-child(2) > .car-showcase-card--content').click( {force: true})
        cy.get('.list-grid > :nth-child(6)').click( {force: true})
      });

      it('Revestimentos', () => {
        cy.get('.car-showcase-details-container__action-btn > [data-v-6377c908=""]').click( {force: true})
      });


       it('Resumo', () => {
        cy.get('.car-showcase-details-container__action-btn > [data-v-6377c908=""]').click( {force: true})
        
    
    });
});