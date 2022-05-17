describe('Sample Space', () => {
  it('Should load up the main page', () => {
    cy.visit('localhost:3000')
      .get('header img')
      .get('header h2')
      .get('main button')
  })
})
