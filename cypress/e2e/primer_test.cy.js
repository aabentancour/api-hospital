describe('Test de página Hospital', () => {
  it('Carga correctamente la página principal', () => {
    cy.visit('http://localhost:7050');

    cy.contains('Sistema de Gestión Hospital Malvinas Argentinas'); // Verifica que se cargó el título

    cy.contains('Gestionar Personas (Alta)').click(); // Simula el clic en el botón verde

  });
});
