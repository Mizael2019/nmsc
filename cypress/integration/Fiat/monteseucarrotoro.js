/// <reference types="cypress" />

describe('Acessa NMSC', () => {
  before(() => {
    cy.visit('https://toro.fiat.com.br/novomonte/')
  });

  it('Seleciono localização e versão', () => {
    cy.get('.style__FixedButton-sc-9ihi4h-2 > button').click( {force: true} )
    cy.get('input').type('Rio de Janeiro')
    cy.get('.styles__PrimaryButton-sc-fj3yk2-0').click( {force: true} ).scrollIntoView()
    cy.contains('Rio de Janeiro - RJ').click()
    cy.get(':nth-child(3) > .styles__Box-sc-1s904ag-3 > .styles__Check-sc-1s904ag-1 > img').click( {force: true} )
    cy.get('.styles__Container-sc-y1ybxp-0 > button').click( {force: true} )
  });

  it('Cor', () => {
    cy.wait(4000)
    cy.get(':nth-child(3) > .styles__Box-sc-1s904ag-3 > .styles__Check-sc-1s904ag-1 > img').click( {force: true} )
    cy.contains('PRATA BILLET').click()
  });

  it('Kit Opcionais', () => {
    cy.get('.styles__Container-sc-y1ybxp-0 > button').click( {force: true} )
    cy.contains('Ops. A versão que você escolheu não tem opcionais. Pode pular essa etapa.').focused
    cy.get('.styles__Container-sc-y1ybxp-0 > button').click( {force: true} )
  });

  it('Acessórios', () => {
    cy.get(':nth-child(1) > .styles__Container-sc-1s904ag-0 > .styles__Box-sc-1s904ag-3 > .styles__Check-sc-1s904ag-1 > img')
    .click( {force: true})
  });

  it('Resumo', () => {
    cy.get('.styles__Container-sc-xn9m9t-0 > button').click( {force: true} )
  });

  it('Adicionais no Resumo', () => {
    cy.get(':nth-child(11) > .styles__Box-sc-9sud6j-3').click( {force: true} )
    cy.get(':nth-child(1) > .styles__Container-sc-1s904ag-0 > .styles__Box-sc-1s904ag-3 > .styles__Check-sc-1s904ag-1 > img')
    .click( {force: true} )
    cy.get('.gFqBIx').click( {force: true} )
    cy.get(':nth-child(2) > .styles__Container-sc-1s904ag-0 > .styles__Box-sc-1s904ag-3 > .styles__Check-sc-1s904ag-1 > img')
    .click( {force: true} )
    cy.get('button > p').click( {force: true} )
  });



    it('Formulário Lead', () => {
      cy.get('.styles__Container-sc-xn9m9t-0 > button').click( {force: true} )
      cy.get('#nome').as('nome').type('Mizael Tobias Nazareno')
      cy.get('#e-mail').as('email').type('faker@faker.com')
      cy.get('#telefone').as('numerotelefone').type('21777777777')
      cy.get('#person-type').as('tipoPessoa').select('Pessoa Física')
      cy.get('input[name="cpf"]').as('cpf').type('00987654321')
      cy.get('.styles__ScrollBody-sc-1tamnkh-2')

      
      cy.get('@nome').should('be.empty')
      cy.get('@email').should('be.empty')
      cy.get('@numerotelefone').should('be.empty')
      cy.get('@cpf').should('be.empty')
  

    });
  });