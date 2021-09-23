/// <reference types="cypress" />


describe('Acessa NMSC', () => {
  before(() => {
    cy.visit('/')
    //cy.reload()
  });

  it('Seleciono localização e versão', () => {
    cy.get('.style__FixedButton-sc-14douyw-2 > button').click( {force: true} )
    cy.get('input').type('Rio de Janeiro')
    cy.contains('Rio de Janeiro - RJ').click()
    cy.get('.styles__Option-sc-5vzz9o-6').click( {force: true} )
    cy.contains('Continuar').click( {force: true} )
    cy.get(':nth-child(3) > .styles__Box-sc-cdg6y1-3 > .styles__Check-sc-cdg6y1-1 > img').click( {force: true} )
    cy.get('.styles__Container-sc-168ooz8-0 > button').click( {force: true} )
  });

  it('Cor', () => {
    cy.wait(4000)
    cy.get(':nth-child(4) > .styles__Box-sc-cdg6y1-3 > .styles__Check-sc-cdg6y1-1 > img').click( {force: true} )
    cy.contains('PRETO CARBON').click()
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
  });

  it('Formulário Lead', () => {
    cy.get('.styles__Container-sc-1nd1h4r-0 > button').click( {force: true} )
    cy.get('#nome').as('nome').type('Mizael Tobias Nazareno')
    cy.get('#e-mail').as('email').type('faker@faker.com')
    cy.get('#telefone').as('numerotelefone').type('21333333333')
    cy.get('#person-type').as('tipoPessoa').select('Pessoa Física')
    cy.get('input[name="cpf"]').as('cpf').type('12345678900')
    cy.get('.styles__ScrollBody-sc-1tamnkh-2').scrollIntoView()
    cy.get('@nome').should('be.empty')
    cy.get('@email').should('be.empty')
    cy.get('@numerotelefone').should('be.empty')
    cy.get('@cpf').should('be.empty')

    cy.get('.styles__ButtonUserLocation-sc-1hvs87e-4').click( {force: true} )
    cy.wait(2000)
    cy.get('.bVndAO > input').click( {force: true} )
    cy.get('.styles__ButtonSend-sc-1hvs87e-14').click( {force: true} )
    cy.contains('SUA PROPOSTA FOI ENVIADA').should('have.text','SUA PROPOSTA FOI ENVIADA')
  });
  });