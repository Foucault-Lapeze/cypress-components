describe("TodoList AlpineJS", () => {
  beforeEach(() => {
    cy.visit("../pages/to-do-list.html");
  });

  it("ajout de quatre todos puis la suppression de la deuxième todo au clique sur la croix associée", () => {
    const todos = ["Todo 1", "Todo 2", "Todo 3", "Todo 4"];

    todos.forEach((todo) => {
      cy.dataCy("addTodo").type(todo);
      cy.dataCy("submit-btn").click();
    });

    cy.dataCy("delete-btn").should("have.length", 4);
    cy.dataCy("delete-btn").eq(1).click();
    cy.dataCy("delete-btn").should("have.length", 3);
  });
});
