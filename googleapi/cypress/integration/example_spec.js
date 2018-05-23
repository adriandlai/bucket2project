

describe('BizEatz', function () {
  it('.should() ensure correct domain and ensure input is empty - ', function () {
    cy.visit('http://localhost:3000/')
    cy.get('.geosuggest__input').should('be', 'empty')
  })

  it('Should fill out the address', function () {
    cy.get('.geosuggest__input').type('1150 East Colfax Avenue, Denver, CO, USA{enter}')
  })

  it('Select Paleo, Submit, and display 4 menu items', function () {
    cy.get('select').select('Paleo')
    cy.get('#submit').click()
    cy.get('.menu_items').children().should('have.length', 4)
    

  })

  
})

  

