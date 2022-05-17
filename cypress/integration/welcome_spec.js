describe('Sample Space', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
  })
  it('Should have a header with an image and description of the app', () => {
    cy.get('header img')
        .should('have.attr', 'src', '/static/media/sample-space-logo.0b8cea83f06fa8ea8674e40bbf7391fb.svg')
      .get('header h2')
        .contains('an educational drum machine featuring samples from across the universe')
  })

  it('Should load the video player', () => {
    cy.get('.main-item')
      .contains('Learn How to Play:')
    .get('main button')
      .contains(`Let's Jam`)
    .get('iframe')
        .should('have.attr', 'src', 'https://www.youtube.com/embed/dokLwszdUgY')
  })

  it('Should have a button that takes the user to the /play endpoint', () => {
    cy.get('main button')
      .click()
    cy.url().should('eq', 'http://localhost:3000/play')
  })
})
