/// <reference types="cypress" />


describe('Acessa NMSC', () => {
  before(() => {
    cy.visit('/')
    cy.wait(5000)
  });

  it('Seleciono localização e versão', () => {
    cy.get('.style__FixedButton-sc-14douyw-2 > button').click( {force: true} )
    cy.get('input').type('Rio de Janeiro')
    cy.contains('Rio de Janeiro - RJ').click()
    cy.get('.styles__Option-sc-5vzz9o-6').click( {force: true} )
    cy.get('.styles__PrimaryButton-sc-5vzz9o-0').click( {force: true} )
    cy.get(':nth-child(3) > .styles__Box-sc-cdg6y1-3 > .styles__Check-sc-cdg6y1-1 > img').click( {force: true} )
    cy.get('.styles__Container-sc-168ooz8-0 > button').click( {force: true} )
  });


  it('Seleciono cor', () => {
    cy.get(':nth-child(4) > .styles__Box-sc-cdg6y1-3 > .styles__Check-sc-cdg6y1-1 > img').click( {force: true} )
    cy.contains('AZUL JAZZ').click()
});







  });
  