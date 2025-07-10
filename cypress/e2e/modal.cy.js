describe("Composant Modal", () => {
  beforeEach(() => {
    // Remplace le chemin par l'URL ou le chemin local de ta page de test
    cy.visit("../../modal.html");
  });

  it('ouvre la modale au clic sur le bouton "Display"', () => {
    // Vérifie que la modale n'est pas visible au départ
    cy.contains("h2", "Lorem Ipsum").should("not.be.visible");
    // Clique sur le bouton
    cy.contains("button", "Display").click();
    // Vérifie que la modale est visible
    cy.contains("h2", "Lorem Ipsum").should("be.visible");
  });

  it("ferme la modale au clic en dehors de la modale", () => {
    // Ouvre la modale
    cy.contains("button", "Display").click();
    cy.contains("h2", "Lorem Ipsum").should("be.visible");
    // Clique sur l'overlay (en dehors de la modale)
    cy.get("body").click(0, 0); // clique en haut à gauche, généralement hors de la modale
    // Vérifie que la modale n'est plus visible
    cy.contains("h2", "Lorem Ipsum").should("not.be.visible");
  });

  it('la modale contient un <h2> avec "Lorem Ipsum"', () => {
    // Ouvre la modale
    cy.contains("button", "Display").click();
    // Vérifie la présence du h2 avec le texte
    cy.get("h2").contains("Lorem Ipsum").should("be.visible");
  });
});
