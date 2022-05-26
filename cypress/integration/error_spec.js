describe('Error Handling' , () => {

  beforeEach(() => {
    cy.visit('localhost:3000/')
  })

  it('If the url address does not exist user should be given a warning and button to go home', () => {
    cy.visit('http://localhost:3000/hotgarbage')
    cy.get('.error h1')
      .contains(`Sorry, this part of space is empty!`)

    cy.get(`.go-back-button`)
      .contains('Home')
      .click()

    cy.url().should('eq', 'http://localhost:3000/')
  })
})
