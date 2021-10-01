require('cypress-dark')
import './commands'

Cypress.on('uncaught:exception', () => false);
// require('cypress-failed-log')

Cypress.SelectorPlayground.defaults({
  selectorPriority: [
    'id',
    'class',
    'attributes',
    'data-testid',
    'data-test',
    'data-cy',
    'tag',
    'nth-child',
  ],
});