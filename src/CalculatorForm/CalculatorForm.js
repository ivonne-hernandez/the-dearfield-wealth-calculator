import { Component } from 'react';
import './CalculatorForm.css';

class CalculatorForm extends Component {
  constructor() {
    super();
    this.state = {
      homePrice: 0,
      downPaymentContribution: 0,
      dearfieldFundContribution: 0,
      displayMissingInput: false
    }
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: Number(event.target.value) });
  }

  validateHomePriceInput = () => {
    return this.state.homePrice <= 600000 && this.state.homePrice > 0;
  }

  validateDownPaymentContributionInput = () => {
    return this.state.downPaymentContribution >= (this.state.homePrice * 0.03) && this.state.downPaymentContribution > 0;
  }

  validateDearfieldFundContribution = () => {
    return (this.state.dearfieldFundContribution <= 40000 && this.state.dearfieldFundContribution > 0)
      || (this.state.dearfieldFundContribution * this.state.homePrice * 0.17 && this.state.dearfieldFundContribution > 0);
  }

  validateInputs = () => {
    return this.validateHomePriceInput() && this.validateDownPaymentContributionInput() && this.validateDearfieldFundContribution();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ displayMissingInput: true });
  
    if (this.validateInputs()) {
      this.setState({ displayMissingInput: false });
      const homePrice = this.state.homePrice;
      const downPayment = this.state.downPaymentContribution;
      const dearfieldFundContribution = this.state.dearfieldFundContribution;
      this.props.setCalculatorInputs(homePrice, downPayment, dearfieldFundContribution);
    }
  }

  displayMissingInputMessage = () => {
    if (!this.validateHomePriceInput()) {
      return <p className="missing-input-message">*Home Value must be greater than $0 and not exceed $600,000</p>
    } else if (!this.validateDownPaymentContributionInput()) {
      return <p className="missing-input-message">*Down Payment Value must be greater than $0 and be at least 3% of home price</p>
    } else if (!this.validateDearfieldFundContribution()) {
      return <p className="missing-input-message">*The Dearfield Fund Value must be greater than $0 and not exceed $40,000 or 17% of the home's overall value
      </p>
    }
  }

  render = () => {
    return (
      <form className='calculator-form'>
        <label className='calculator-form-label' htmlFor='homePrice'>
          Home Price:
        </label>
        <input 
          type='number' 
          name='homePrice'
          value={this.state.homePrice}
          id="homePrice"
          className='home-price-input'
          onChange={(event) => this.handleInputChange(event)} />
        <label className='calculator-form-label' htmlFor='downPaymentContribution'>
          My Down Payment Contribution:
        </label>
        <input 
          type='number'
          name='downPaymentContribution'
          value={this.state.downPaymentContribution}
          id="downPaymentContribution"
          className='down-payment-input'
          onChange={(event) => this.handleInputChange(event)} />
        <label className='calculator-form-label' htmlFor='dearfieldFundContribution'>
          Dearfield Fund Contribution:
        </label>
        <input 
          type='number'
          name='dearfieldFundContribution'
          value={this.state.dearfieldFundContribution}
          id="dearfieldFundContribution"
          className='dearfield-fund-contribution-input'
          onChange={(event) => this.handleInputChange(event)} />
        <button className='calculator-form-button'
          onClick={(event) => this.handleSubmit(event)}>
          Calculate My Total Wealth
        </button>
        <div className='missing-input-message-container'>
          {this.state.displayMissingInput ? this.displayMissingInputMessage() : null}
        </div>
      </form>
    );
  }
}

export default CalculatorForm;