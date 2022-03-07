import { Component } from 'react';
import './CalculatorForm.css';

class CalculatorForm extends Component {
  constructor() {
    super();
    this.state = {
      homePrice: null,
      downPaymentContribution: null,
      dearfieldFundContribution: null,
      displayMissingInput: false
    }
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  validateHomePriceInput = () => {
    return this.state.homePrice <= 600000;
  }

  validateDownPaymentContributionInput = () => {
    return this.state.downPaymentContribution >= this.state.homePrice * 0.03;
  }

  validateDearfieldFundContribution = () => {
    return this.state.dearfieldFundContribution <= 40000 || this.state.dearfieldFundContribution * (this.state.homePrice * 0.17);
  }

  validateInputs = () => {
    return this.validateHomePriceInput() && this.validateDownPaymentContributionInput() && this.validateDearfieldFundContribution();
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
        <button className='calculator-form-button'>
          Calculate My Total Wealth
        </button>
      </form>
    );

  }
}

export default CalculatorForm;