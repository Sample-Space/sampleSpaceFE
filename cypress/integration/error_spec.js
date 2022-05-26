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

  it('If the fetch for play fails, the user is warned and has a way to get home', () => {
    cy.intercept('https://sample-space-be.herokuapp.com/api/v1/kits/Andromeda%20Strain', {
      statusCode: 500
    })
    cy.visit('http://localhost:3000/play')

    cy.get('.error h1')
      .contains(`Sorry, we're unable to get that. Please try again!`)

    cy.get(`.go-back-button`)
      .contains('Home')
      .click()
  })
})
