describe("Counter", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("has the correct initial value", () => {
    cy.get('[data-testid="count"]').should("have.text", "1");
  });

  it("increments the count", () => {
    cy.get('[data-testid="count"]').should("have.text", "1");
    cy.get('[data-testid="increment-button"]').click();
    cy.get('[data-testid="count"]').should("have.text", "2");
  });

  it("decrements the count", () => {
    cy.get('[data-testid="decrement-button"]').click();
    cy.get('[data-testid="count"]').should("have.text", "0");
  });
});
