describe('/play endpoint', () => {
 beforeEach('Visit the page', () => {
   cy.visit('http://localhost:3000/play')
 })

 it('Should have a header with the Sampls Space logo', () => {
   cy.get('header img')
    .should('have.attr', 'src', '/static/media/sample-space-logo.0b8cea83f06fa8ea8674e40bbf7391fb.svg')
 })
})
