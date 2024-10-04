describe('App Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Happy path for App', () => {
    cy.contains('0');
    cy.contains('+').click();
    cy.contains('1');
    cy.contains('+').click();
    cy.contains('2');
    cy.contains('+').click();
    cy.contains('3');
    cy.contains('-').click();
    cy.contains('2');
    cy.contains('-').click();
    cy.contains('1');
    cy.contains('-').click();
    cy.contains('0');
    cy.contains('-').click();
    cy.contains('0');

    cy.get('input[type="text"]').type('Pull fiction');
    cy.get('button').contains('Search').click();

    cy.contains('Action').click();
  });
});

