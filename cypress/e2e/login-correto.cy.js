/// <reference types="Cypress" />

describe('Página de login', () => {
    it('Preencher o login corretamente', () => {
      cy.visit('http://localhost:4200/#/home')
      cy.get('data-test="loginUserName"]').type('Fulano1')
      cy.get('data-test="loginPassword"]').type('fulano123')
      cy.contains('button','login').click();
    })
  })