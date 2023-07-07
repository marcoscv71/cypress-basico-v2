Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function () {
  cy.get('#firstName').type('Marcos');
  cy.get('#lastName').type('Silva');
  cy.get('#email').type('teste@teste.com');
  cy.get('#open-text-area').type('Teste');

  cy.contains('Enviar').click();
});
