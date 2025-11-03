// Couldn't get this to work. Need more reseach on Cypress testing framework.
describe('Login', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('Student Engagement Portal').should('be.visible');
  });

  it('authenticates with valid credentials', () => {
    // Fill in login credentials
    cy.get('input[name="email"]').should('be.visible').type('annie844@hotmail.com');
    cy.get('input[name="password"]').should('be.visible').type('Password123!');

    // Submit the login form
    cy.get('button[type="submit"]').should('be.enabled').click();

    // Verify successful login
    cy.url().should('include', '/dashboard');
    cy.contains('Welcome').should('be.visible');
  });
});
