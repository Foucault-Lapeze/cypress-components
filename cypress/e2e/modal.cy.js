describe("Composant Modal", () => {
  beforeEach(() => {
    cy.visit("../pages/modal.html");
  });

  it("Tester ouverture de la fênetre modale au clique sur display", () => {
    cy.contains("h2", "Lorem Ipsum").should("not.be.visible");

    cy.contains("button", "Display").click();

    cy.contains("h2", "Lorem Ipsum").should("be.visible");
  });

  it("Tester la fermeture de la fênetre modale au clique en dehors de la modale", () => {
    cy.contains("button", "Display").click();
    cy.contains("h2", "Lorem Ipsum").should("be.visible");

    cy.get("body").click(0, 0);

    cy.contains("h2", "Lorem Ipsum").should("not.be.visible");
  });

  it("Tester que la fênetre modale contient un <h2></h2> contenant Lorem Ipsum", () => {
    cy.contains("button", "Display").click();

    cy.get("h2").contains("Lorem Ipsum").should("be.visible");
  });
});
