/// <reference types="cypress" />

describe('Acessa NMSC', () => {
  before(() => {
    cy.visit('https://toro.fiat.com.br/novomonte/')
  });

  it('Seleciono localização e versão', () => {
    cy.get(':nth-child(2) > :nth-child(1) > .style__FixedButton-sc-9ihi4h-2 > button')
    .click({force: true})
    cy.get('.naGIG > :nth-child(1) > .style__FixedButton-sc-9ihi4h-2 > button')
    .click({force: true})
    cy.get('input[name="city"]').type('Rio de Janeiro').click({force: true})
    cy.get('.styles__Option-sc-fj3yk2-6').click({force: true})
    cy.get('.styles__PrimaryButton-sc-fj3yk2-0').click({force: true})
    cy.get('[alt="FREEDOM TURBO 270 FLEX AT6"]').click({force: true}) 
});
 

  it('Cor', () => {
    cy.wait(4000)
    cy.get('.styles__Container-sc-y1ybxp-0 > button').click({force: true})
    cy.get(':nth-child(3) > .styles__Box-sc-1s904ag-3 > .styles__Check-sc-1s904ag-1 > img')
    .click( {force: true} )
    cy.get('[alt="PRATA BILLET"]').click({force: true})
  });


  it('Kit Opcionais', () => {
    cy.get('.styles__Container-sc-y1ybxp-0 > button').click( {force: true} )
    cy.get('.styles__Infos-sc-1s904ag-4 > div').click( {force: true} )
    cy.get('.styles__Container-sc-y1ybxp-0 > button').click( {force: true} )
  });


  it('Acessórios', () => {
    cy.get('[alt="ADESIVO LATERAL DE CAÇAMBA"]').click( {force: true})
    cy.get('.styles__Container-sc-xn9m9t-0 > button').click( {force: true} )
  });


  it('Resumo', () => {
    cy.get('.styles__Container-sc-xn9m9t-0 > button').click( {force: true} )
  });

    it('Formulário Lead', () => {
      cy.get('.styles__Container-sc-xn9m9t-0 > button').click( {force: true} )
      cy.get('#nome').as('nome').type('Tester User')
      cy.get('#e-mail').as('email').type('test@fake.com')
      cy.get('#telefone').as('numerotelefone').type('21777777777')
      cy.get('#person-type').as('tipoPessoa').select('Pessoa Física')
      cy.get('input[name="cpf"]').as('cpf').type('00987654321')
      cy.get('.styles__ButtonUserLocation-sc-1l1w0zh-6').click( {force: true} )
      cy.get(':nth-child(3) > [type="radio"]').click( {force: true} )
      cy.get('.styles__ButtonSend-sc-1l1w0zh-15').click( {force: true} )
      cy.contains('Você receberá um e-mail/whatsapp com o resumo do carro que você montou.')
      .should('have.text','Você receberá um e-mail/whatsapp com o resumo do carro que você montou.')
    });
  });