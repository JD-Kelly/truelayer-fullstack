describe("App E2E testing", () => {

  it('should load Pokémon data on button click', () => {
    cy.visit('/');
    
    // enter a pokemon name and search
    cy.get("input")
      .type("charizard")
    cy.get("button").click()
  });
})