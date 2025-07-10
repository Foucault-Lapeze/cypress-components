describe("smart tag", () => {
  beforeEach(() => {
    cy.visit("../pages/smart-tag.html");
  });

  it("Tester l'apparition du tag au survol du bouton See more.", () => {
    cy.dataCy("smart-tag").should("not.be.visible");
    cy.dataCy("see-more-btn").trigger("mouseover");
    cy.dataCy("smart-tag").should("be.visible");
  });

  it("Tester la disparition du tag à la sortie du survol du bouton See more", () => {
    cy.dataCy("see-more-btn").trigger("mouseover");
    cy.dataCy("smart-tag").should("be.visible");
    cy.dataCy("see-more-btn").trigger("mouseout");
    cy.dataCy("smart-tag").should("not.be.visible");
  });
});
