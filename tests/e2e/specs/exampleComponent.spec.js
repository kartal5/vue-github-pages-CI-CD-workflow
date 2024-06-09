describe('ExampleComponent', () => {
    it('displays the correct initial message', () => {
      cy.visit('/')
      cy.contains('p', 'Hello, Vue!')
    })
  
    it('changes message when button is clicked', () => {
      cy.visit('/')
      cy.contains('button', 'Change Message').click()
      cy.contains('p', 'Message Changed!')
    })
  })
  