
import sampleKit from '../../src/sampleKit.js'

describe('/play endpoint', () => {
 beforeEach('Visit the page', () => {

   cy.intercept('https://sample-space-be.herokuapp.com/api/v1/kits/Andromeda%20Strain', {fixture: 'kit'})
   cy.visit('http://localhost:3000/play')
   cy.wait(500)
 })

 it('Should have a header with the Sample Space logo', () => {
   cy.get('header img')
    .should('have.attr', 'src', '/static/media/sample-space-logo.0b8cea83f06fa8ea8674e40bbf7391fb.svg')
 })

it('Should have a selector with three options', () => {
  cy.get('.kit-select')
    .children()
      .first()
        .contains('Andromeda Strain')
      .next()
        .contains('Magnetosphere')
      .next()
        .contains('Apollo 11')
})

 it('Should have 8 clickable buttons', () => {
   cy.fixture('kit').then((kit) => {
     let elements = Object.keys(kit.kit.elements);
     const urls = elements.map(element => kit.kit.elements[element].thumbnail_url)
     let buttons = cy.get('.pad-container')
     const keystrokes = [
       'Q',
       'W',
       'E',
       'R',
       'A',
       'S',
       'D',
       'F'
     ]

      buttons.children()
        .should('have.length', 8)

      buttons.each(button => {
        cy.wait(500);
        cy.wrap(button)
          .children()
            .first()
              .invoke('attr', 'src').then($src => {
                expect(urls).to.include($src)
              })
              cy.wrap(button)
                .children()
                  .first()
                  .next()
                    .then($p => {
                      let text = $p.text()
                      expect(keystrokes).to.include(text)
                    })
          cy.wrap(button)
            .click()
        })
   })
 })

 it('Should have an info box', () => {
   cy.get('.info-box')
    .contains('Play a Sample to learn more!')
  cy.get('.info-box')
    .contains('Tempo: 90')
  cy.get('.more-info-button')
 })


 it('Info box should display information about the last played sample', () => {
   cy.fixture('kit').then((kit) => {
     let elements = Object.keys(kit.kit.elements);
     const names = elements.map(element => kit.kit.elements[element].name)
     const descriptions = elements.map(element => kit.kit.elements[element].description)

     let buttons = cy.get('.pad-container')

      buttons.children()
        .should('have.length', 8)

      buttons.each(button => {
        cy.wait(500);
        cy.wrap(button)
            .click();

        cy.get('.info-box h2')
          .then($h2 => {
            let text = $h2.text();
            expect(names).to.include(text);
          })

        cy.get('.description p')
          .then($p => {
            let text = $p.text();
            expect(descriptions).to.include(text);
          })
        cy.get('.more-info-button')
          .click();
        })
   })
 })

 it('Sequencer should play and pause', () => {
   cy.get('.play-button')
    .contains('PLAY')
    .wait(500)
    .click()
    .contains('STOP')
    .click()
 })

it('Sequencer should display the steps, kit elements and buttons related for each', () => {
  cy.get('.roll-display')
    .contains("Steps");

    cy.get('.roll-display')
      .contains("1");

    cy.get('.roll-display')
      .contains("2");

    cy.get('.roll-display')
      .contains("3");

    cy.get('.roll-display')
      .contains("4");

    cy.get('.roll-display')
      .contains("5");

    cy.get('.roll-display')
      .contains("6");

    cy.get('.roll-display')
      .contains("7");

    cy.get('.roll-display')
      .contains("8");

    cy.get('.roll-display')
      .contains("9");

    cy.get('.roll-display')
      .contains("10");

    cy.get('.roll-display')
      .contains("11");

    cy.get('.roll-display')
      .contains("12");

    cy.get('.roll-display')
      .contains("13");

    cy.get('.roll-display')
      .contains("14");

    cy.get('.roll-display')
      .contains("15");

    cy.get('.roll-display')
      .contains("16");

    cy.get('.roll-display')
      .contains("S4");

    cy.get('.roll-display')
      .contains("S3");

    cy.get('.roll-display')
      .contains("S2");

    cy.get('.roll-display')
      .contains("S1");

    cy.get('.roll-display')
      .contains("HH2");

    cy.get('.roll-display')
      .contains("HH1");

    cy.get('.roll-display')
      .contains("Sn");

    cy.get('.roll-display')
      .contains('K');

      let buttons = cy.get('.piano-button')
        .each(($button) => {
          const classList = $button.attr('class');
          if(classList.includes('active')) {
            $button.click()
          } else {
            $button.click();
          }
        })

})

})
