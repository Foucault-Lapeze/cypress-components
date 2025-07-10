describe("Bouton Scroll to Top", () => {
  beforeEach(() => {
    cy.visit("../pages/scroll-to-top.html");
  });

  it("Tester apparition du bouton scroll-to-top en bas à droite qaund on scroll vers le bas", () => {
    cy.get("div.fixed.bottom-3.right-3").should("not.be.visible");
    cy.contains("button", "Scroll").click();
    cy.wait(500);
    cy.get("div.fixed.bottom-3.right-3").should("be.visible");
  });

  it("Tester le retour en haut de la page et la disparition du bouton scroll-to-top lors du clique sur celui-ci", () => {
    cy.contains("button", "Scroll").click();
    cy.wait(500);
    cy.get("div.fixed.bottom-3.right-3").should("be.visible");
    cy.get("div.fixed.bottom-3.right-3 button").click();
    cy.wait(500);
    cy.get("div.fixed.bottom-3.right-3").should("not.be.visible");
  });
});
