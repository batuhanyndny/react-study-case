import { breakpoints } from '../../../src/constants';

describe('Basket', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('shouldnt render the basket component in mobile', () => {
    cy.viewport(breakpoints.mobile, breakpoints.mobile);
    cy.get('[data-cy=test__basket]').should('not.be.visible').contains('Cart is empty');
  });

  it('should render the basket component in desktop', () => {
    cy.viewport(breakpoints.widescreen + 1, breakpoints.widescreen);
    cy.get('[data-cy=test__basket]').should('be.visible').contains('Cart is empty');
  });

  it('should render the basket on cart click', () => {
    cy.get('[data-cy=header-cart]').click();
    cy.get('[data-cy=test__basket]').should('be.visible').contains('Cart is empty');
  });

  it('should contain added item in basket', () => {
    cy.viewport(breakpoints.widescreen + 1, breakpoints.widescreen);
    cy.get('[data-cy=test__basket]').should('be.visible').contains('Cart is empty');
    cy.get('[data-cy=add-to-cart]').first().click();
    cy.get('[data-cy=test__basket]').should('be.visible').should('not.contain', 'Cart is empty');
  });
});
