import { Component } from 'react';
import CalculatorForm from './CalculatorForm/CalculatorForm';
import './App.css';

class App extends Component {
  constructor() { 
    super();
    this.state = {
      homePrice: null,
      downPaymentContribution: null,
      dearfieldFundContribution: null
    }
  }

  setCalculatorInputs = (submittedHomePrice, submittedDownPmt, submittedFundContribution) => {
    this.setState({
      homePrice: submittedHomePrice,
      downPaymentContribution: submittedDownPmt,
      dearfieldFundContribution: submittedFundContribution
    });
  }

  render = () => {
    return (
      <div>
        <h1>The Dearfield Wealth Calculator</h1>
        <CalculatorForm setCalculatorInputs={this.setCalculatorInputs} />
      </div>
    );
  }
}

export default App;
