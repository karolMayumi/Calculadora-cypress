describe('Pruebas E2E de la Calculadora', () => {
  it('Debe abrir la calculadora corretamente', () => {
    cy.visit('./cypress/Calculadora.html');
  });
});