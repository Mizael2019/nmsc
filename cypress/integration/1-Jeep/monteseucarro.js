/// <reference types="cypress" />


describe('Acessa NMSC', () => {
  before(() => {
    cy.visit('/')
  });

  beforeEach(() => {
    cy.reload()
})

  it('Seleciono localização e versão', () => {
    cy.get('.style__FixedButton-sc-14douyw-2 > button').click( {force: true} )
    cy.get('input').type('Rio de Janeiro')
    cy.contains('Rio de Janeiro - RJ').click()
    cy.get('.styles__Option-sc-5vzz9o-6').click( {force: true} )
    cy.get('.styles__PrimaryButton-sc-5vzz9o-0').click( {force: true} )
    cy.get(':nth-child(3) > .styles__Box-sc-cdg6y1-3 > .styles__Check-sc-cdg6y1-1 > img').click( {force: true} )
    cy.get('.styles__Container-sc-168ooz8-0 > button').click( {force: true} )
  });

  it('Cor', () => {
    cy.wait(4000)
    cy.get(':nth-child(4) > .styles__Box-sc-cdg6y1-3 > .styles__Check-sc-cdg6y1-1 > img').click( {force: true} )
    cy.contains('PRETO CARBON').click().should('have.text', 'PRETO CARBON')
  });

  it('Kit Opcionais', () => {
    cy.get('.styles__Container-sc-168ooz8-0 > button').click( {force: true} )
    cy.get(':nth-child(2) > .styles__Box-sc-cdg6y1-3 > .styles__Check-sc-cdg6y1-1 > img').click( {force: true} )
  });

  it('Acessórios', () => {
    cy.get('.styles__Container-sc-168ooz8-0 > button').click( {force: true} )
    cy.get(':nth-child(4) > .styles__Container-sc-cdg6y1-0 > .styles__Box-sc-cdg6y1-3 > .styles__Check-sc-cdg6y1-1 > img')
    .click( {force: true} )
    cy.get(':nth-child(6) > .styles__Container-sc-cdg6y1-0 > .styles__Box-sc-cdg6y1-3 > .styles__Check-sc-cdg6y1-1 > img')
    .click( {force: true} )
  });

  it('Resumo', () => {
    cy.get('.styles__Container-sc-1nd1h4r-0 > button').click( {force: true} )
    cy.get('#pageSectionTitle').should('have.text', 'RESUMO')
  });



  });
  