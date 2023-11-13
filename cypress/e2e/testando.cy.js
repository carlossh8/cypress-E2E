describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/#/home')
    cy.contains('a','Register now').click();
    cy.get('[formcontrolname="email"]').type('testecy@uorak.com')
    cy.get('[formcontrolname="fullName"]').type('fulano de Tal')
    cy.get('[formcontrolname="userName"]').type('fulano1')
    cy.get('[formcontrolname="password"]').type('fulano123')
    cy.contains('button','Register').click();
  })
})