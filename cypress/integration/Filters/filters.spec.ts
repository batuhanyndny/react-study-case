import { breakpoints } from '../../../src/constants';

describe('Filters', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render all three components', () => {
    cy.viewport(breakpoints.widescreen + 1, breakpoints.widescreen);
    cy.get('[data-cy=tags]').should('be.visible');
    cy.get('[data-cy=sort]').should('be.visible');
    cy.get('[data-cy=brands]').should('be.visible');
  });

  it('should render all three labels on mobile', () => {
    cy.viewport(breakpoints.mobile - 1, breakpoints.mobile);
    cy.get('[data-cy=tags__label]').should('be.visible');
    cy.get('[data-cy=tags__content]').should('not.exist');

    cy.get('[data-cy=sort__label]').should('be.visible');
    cy.get('[data-cy=sort__content]').should('not.exist');

    cy.get('[data-cy=brands__label]').should('be.visible');
    cy.get('[data-cy=brands__content]').should('not.exist');
  });

  it('should render tags content on click on mobile', () => {
    cy.viewport(breakpoints.mobile - 1, breakpoints.mobile);
    cy.get('[data-cy=tags__label]').click();
    cy.get('[data-cy=tags__content]').should('be.visible');
  });

  it('should render sort content on click on mobile', () => {
    cy.viewport(breakpoints.mobile - 1, breakpoints.mobile);
    cy.get('[data-cy=sort__label]').click();
    cy.get('[data-cy=sort__content]').should('be.visible');
  });

  it('should render brands content on click on mobile', () => {
    cy.viewport(breakpoints.mobile - 1, breakpoints.mobile);
    cy.get('[data-cy=brands__label]').click();
    cy.get('[data-cy=brands__content]').should('be.visible');
  });
});
