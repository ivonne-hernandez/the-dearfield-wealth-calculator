describe('The Dearfield Wealth Calculator dashboard user flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it("As a user, when I only type in the home price and down payment contribution (i.e. no Dearfield Fund contribution) I should see an error message", () => {
    cy.get('form[class="calculator-form"]').should('have.length', 1)
      .get('input[id=homePrice]').clear().type('10000')
      .get('input[id=downPaymentContribution]').clear().type('300')
      .get('button[class="calculator-form-button"]').click()
      .get('div[class="missing-input-message-container"]').contains('*The Dearfield Fund Value must be greater than $0 and not exceed $40,000 or 17% of the home\'s overall value')
  });

  it("As a user, when I only type in the home price and Dearfield Fund contribution (i.e. no down payment information) I should see an error message", () => {
      cy.get('input[id=homePrice]').clear().type('10000')
      .get('input[id=dearfieldFundContribution]').clear().type('300')
      .get('button[class="calculator-form-button"]').click()
      .get('div[class="missing-input-message-container"]').contains('*Down Payment Value must be greater than $0 and be at least 3% of home price')
  });

  it("As a user, when I only type in the down payment contribution and Dearfield Fund contribution (i.e. no home price) I should see an error message", () => {
    cy.get('input[id=downPaymentContribution]').clear().type('300')
    .get('input[id=dearfieldFundContribution]').clear().type('300')
    .get('button[class="calculator-form-button"]').click()
    .get('div[class="missing-input-message-container"]').contains('*Home Value must be greater than $0 and not exceed $600,000')
  });

  it("As a user, when I type in all the required inputs, I should see the total wealth breakdown", () => {
    cy.get('input[id=homePrice]').clear().type('10000')
    .get('input[id=downPaymentContribution]').clear().type('300')
    .get('input[id=dearfieldFundContribution]').clear().type('300')
    .get('button[class="calculator-form-button"]').click()
    .get('p[class="total-wealth-output-down-payment"]').contains('$6000.00')
    .get('p[class="total-wealth-output-appreciation"]').contains('$62889.46')
    .get('p[class="total-wealth-output-repaid"]').contains('$3000.00')
    .get('p[class="total-wealth-output-five-percent"]').contains('$3144.47')
    .get('p[class="total-wealth-output-reinvested"]').contains('$6144.47')
    .get('p[class="total-wealth-output-total"]').contains('$53744.99')
  });
});