describe('Test app', function() {

  beforeEach(function() {
    cy.visit('http://localhost:5000')
  })

  it('front page can be opened', function() {
    cy.contains('Learn React')
  })

  it('link can be opened', function() {
    cy.contains('Learn React').click()
  })
})