describe('The Dearfield Wealth Calculator dashboard user flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it("As a user, when I just type in the home price and down payment contribution (i.e. Dearfield Fund contribution is at 0) I should see an error message", () => {
    cy.get('form[class="calculator-form"]').should('have.length', 1)
      .get('input[id=homePrice]').type(100000)
      .get('input[id=downPaymentContribution]').type(3000)
      .get('button[class="calculator-form-button"]').click()
      .get('div[class="missing-input-message-container"]').contains('*Home Value must be greater than $0 and not exceed $600,000')
  })
});