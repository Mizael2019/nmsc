/// <reference types="cypress" />


describe('Acessa NMSC', () => {
  before(() => {
    cy.visit('/')
  });

  it('Clicar em continuar', () => {
    cy.get('.style__FixedButton-sc-14douyw-2 > button').click( {force: true} )
    cy.wait(2000)
  });

  it('Clicar para localizar área', () => {
    cy.get('input').type ('Rio de Janeiro')
    cy.get('.styles__PrimaryButton-sc-5vzz9o-0').click( {force: true} )
    cy.get('.styles__Option-sc-5vzz9o-6').click ()

    it('Seleciono o modelo do carro', () => {
      cy.get(':nth-child(4) > .styles__Box-sc-cdg6y1-3 > .styles__Check-sc-cdg6y1-1 > img').click( {force: true} )
    });










  })
  })