/// <reference types="Cypress" />

describe('Página de cadastro', () => {
  it('Preencher os campos de registrar agora', () => {
    cy.visit('http://localhost:4200/#/home')
    cy.contains('a','Register now').click();
    cy.get('[data-test="email"]').type('testecy@uorak.com')
    cy.get('[data-test="fullName"]').type('fulano de Tal')
    cy.get('[data-test="registerUserName"]').type('fulano2')
    cy.get('[data-test="registerPassword"]').type('fulano1234')
    cy.contains('button','Register').click();
  })
})