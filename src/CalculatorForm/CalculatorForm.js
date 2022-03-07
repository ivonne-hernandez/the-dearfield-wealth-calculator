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