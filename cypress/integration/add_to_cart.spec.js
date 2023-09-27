describe('home page', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("check add to cart button", () => {
    cy.get('li.nav-item.end-0').contains('0');

    const itemToFind = "Cliff Collard"
    cy.contains(".products article", itemToFind)
      .first()
      .find('button[type="submit"]')
      .click({force: true});

    cy.get('li.nav-item.end-0').contains('1');
  });
  
});