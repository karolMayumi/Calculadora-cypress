describe('Pruebas E2E completas de la Calculadora', () => {
  beforeEach(() => {
    cy.visit('./cypress/Calculadora.html');
  });

  it('Debe sumar correctamente (2 + 3 = 5)', () => {
    cy.contains('button', '2').click();
    cy.contains('button', '+').click();
    cy.contains('button', '3').click();
    cy.contains('button', '=').click();
    cy.get('#current-operand').should('have.text', '5');
  });

  it('Debe restar correctamente (9 - 4 = 5)', () => {
    cy.contains('button', '9').click();
    cy.contains('button', '-').click();
    cy.contains('button', '4').click();
    cy.contains('button', '=').click();
    cy.get('#current-operand').should('have.text', '5');
  });

  it('Debe multiplicar correctamente (5 × 5 = 25)', () => {
  cy.contains('button', '5').click();
  cy.contains('button', '×').click();
  cy.contains('button', '5').click();
  cy.contains('button', '=').click();
  cy.get('#current-operand').should('have.text', '25');
});

  it('Debe dividir correctamente (8 ÷ 2 = 4)', () => {
    cy.contains('button', '8').click();
    cy.contains('button', '÷').click();
    cy.contains('button', '2').click();
    cy.contains('button', '=').click();
    cy.get('#current-operand').should('have.text', '4');
  });

  it('Debe borrar un dígito correctamente con el botón DEL', () => {
    cy.contains('button', '5').click();
    cy.contains('button', '9').click();
    cy.contains('button', 'DEL').click();
    cy.get('#current-operand').should('have.text', '5');
  });

  it('Debe limpiar la pantalla con AC', () => {
    cy.contains('button', '7').click();
    cy.contains('button', 'AC').click();
    cy.get('#current-operand').should('have.text', '0');
  });

  // Actividad semana 10: tabla del 5
  it('Debe realizar la multiplicación de dos dígitos correctamente (5 × 5 = 25)', () => {
    cy.contains('button', '5').click();
    cy.contains('button', '×').click();
    cy.contains('button', '5').click();
    cy.contains('button', '=').click();
    cy.get('#current-operand').should('have.text', '25');
  });
});