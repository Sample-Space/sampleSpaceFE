import { sampleKit } from '../../src/sampleKit.js';

describe('/play endpoint', () => {
 beforeEach('Visit the page', () => {
   cy.visit('http://localhost:3000/play')
 })

 it('Should have a header with the Sampls Space logo', () => {
   cy.get('header img')
    .should('have.attr', 'src', '/static/media/sample-space-logo.0b8cea83f06fa8ea8674e40bbf7391fb.svg')
 })

 it('Should have 8 clickable buttons', () => {
   cy.wait(500)
   const urls = sampleKit.kit1.map(element => element.img)
   let buttons = cy.get('.pad-container')

    buttons.children()
      .should('have.length', 8)

    buttons.each(button => {
      cy.wrap(button)
        .children()
          .first()
            .invoke('attr', 'src').then($src => {
              expect(urls).to.include($src)
            })

        cy.wrap(button)
          .click()
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
