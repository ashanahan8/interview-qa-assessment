describe('Sample smoke test', () => {
  it('Loads the login page', () => {
    cy.visit('/');
    cy.contains('Student Engagement Portal');
  });
});
