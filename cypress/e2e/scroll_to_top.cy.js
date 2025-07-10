describe("Bouton Scroll to Top", () => {
  beforeEach(() => {
    cy.visit("../pages/scroll-to-top.html");
  });

  it("Tester apparition du bouton scroll-to-top en bas à droite qaund on scroll vers le bas", () => {
    cy.dataCy("scroll-to-top").should("not.be.visible");
    cy.dataCy("scroll-btn").click();
    cy.wait(500);
    cy.dataCy("scroll-to-top").should("be.visible");
  });

  it("Tester le retour en haut de la page et la disparition du bouton scroll-to-top lors du clique sur celui-ci", () => {
    cy.dataCy("scroll-btn").click();
    cy.wait(500);
    cy.dataCy("scroll-to-top").should("be.visible");
    cy.dataCy("scroll-to-top-btn").click();
    cy.wait(500);
    cy.dataCy("scroll-to-top").should("not.be.visible");
  });
});
