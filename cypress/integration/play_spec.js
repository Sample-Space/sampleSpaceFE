describe('/play endpoint', () => {
 beforeEach('Visit the page', () => {
   cy.visit('http://localhost:3000/play')
 })

 it('Should have a header with the Sampls Space logo', () => {
   cy.get('header img')
    .should('have.attr', 'src', '/static/media/sample-space-logo.0b8cea83f06fa8ea8674e40bbf7391fb.svg')
 })

 it('Should have 8 clickable buttons', () => {
   let buttons = cy.get('.pad-container')

    buttons.children()
      .should('have.length', 8)

    buttons.each(button => {
      cy.wrap(button).children()
        .first()
        .should('have.attr', 'src', 'https://images.theconversation.com/files/394/original/See_Explanation._Clicking_on_the_picture_will_download_the_highest_resolution_version_available.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop')
        .parent().click()
      })
 })

 it('Should have an info box', () => {
   cy.get('.info-box h2')
    .contains('Info Goes Here')
  .next()
    .contains('basic summary here')
  .get('.info-box button')
    .contains('Tell me more!')
    .click({force: true})
  .next()
    .contains('Tempo')
  .next()
    .contains('120')
 })
})
