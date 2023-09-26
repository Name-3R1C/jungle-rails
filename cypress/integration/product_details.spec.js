describe('home page', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("navigate to product detail page", () => {
    const itemToClick = "Cliff Collard"
    const expectedURL = "http://localhost:3000/products/12"
    cy.contains(".products article", itemToClick).click();
    cy.url().should('include', expectedURL);
  });
  
});