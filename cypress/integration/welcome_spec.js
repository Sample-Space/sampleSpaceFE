describe('Sample Space', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
  })
  it('Should have a header with an image and description of the app.', () => {
    cy.get('header img')
        .should('have.attr', 'src', '/static/media/sample-space-logo.0b8cea83f06fa8ea8674e40bbf7391fb.svg')
      .get('header h2')
        .contains('an educational drum machine featuring samples from across the universe')
  })

  it('Should have a carousel to show the user how to play the game.', () => {
    cy.get('.slider')
      .contains('Welcome to Sample Space, Where the space between learning and grooving is microscopic!')
    .get('a[href="#slide-2"]')
      .click()
      cy.get('.slider')
        .contains('Learn about the crazy sounds of our solar system: the weird, the spooky, and the downright alien music of the spheres')
    cy.get('a[href="#slide-3"]')
      .click()
      cy.get('.slider')
        .contains('Play the drumkit with your mouse or keyboard using QWER/ASDF')
    cy.get('a[href="#slide-4"]')
      .click()
        cy.get('.slider')
          .contains(`Each sound has info on it's astral origin, learn even more by clicking the handy link!`)
    cy.get('a[href="#slide-5"]')
        .click()
          cy.get('.slider')
            .contains(`Click 'Let's Jam' to get started!`)
  })

  it('Should have a button that takes the user to the /play endpoint.', () => {
    cy.get('main button')
      .click()
    cy.url().should('eq', 'http://localhost:3000/play')
  })
})
