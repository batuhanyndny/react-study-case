describe('ProductList', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render item', () => {
    cy.get('[data-cy=product-card]').should('be.visible');
  });

  it('should render 16 items', () => {
    cy.get('[data-cy=product-card]').should('have.length', 16);
  });

  it('should render items with correct data', () => {
    cy.get('[data-cy=product-card]')
      .first()
      .children()
      .eq(1)
      .invoke('text')
      .should('match', /^₺ ?[0-9]+.?[0-9]?[0-9]?$/);

    cy.get('[data-cy=product-card]').first().children().eq(3).invoke('text').should('eq', 'Add');
  });
});
