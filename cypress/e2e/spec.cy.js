describe("My First Test", () => {
  beforeEach(() => {
    cy.visit("http://172.31.48.1:3000");
    cy.wait(3000);
  });
  it("It routes to my app", () => {
    cy.url().should("include", "http://172.31.48.1:3000");
  });
  it("Navigates from Dashboard to Register Admin Page", () => {
    cy.contains("Dashboard").click();
    cy.url().should("include", "http://172.31.48.1:3000/Dashboard");
    cy.get(".ant-menu-item").contains("Register Admin").click();
    cy.url().should("include", "/register-admin");
  });
});
