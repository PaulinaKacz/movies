describe("Listing Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("search functionality works", () => {
    cy.get("input")
      .type("Star Wars: The Last Jedi{enter}")
      .should("have.value", "Star Wars: The Last Jedi");
    cy.get('[data-testid="movieList-container"]').contains(
      "Star Wars: The Last Jedi"
    );
  });

  it("switching genres works", () => {
    cy.get('[data-testid="genreSelector-container"]')
      .contains("COMEDY")
      .click({ force: true });
  });

  it("selecting a movie and returning back to search works", () => {
    cy.get('[data-testid="movie-tile"]').first().click({ force: true });
    cy.get('[data-testid="search-icon"]').click({ force: true });
  });
});
