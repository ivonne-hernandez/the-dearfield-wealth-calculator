import { Component } from 'react';
import CalculatorForm from './CalculatorForm/CalculatorForm';
import TotalWealthBreakdown from './TotalWealthBreakdown/TotalWealthBreakdown';
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
      homePrice: Number(submittedHomePrice),
      downPaymentContribution: Number(submittedDownPmt),
      dearfieldFundContribution: Number(submittedFundContribution)
    });
  }

  render = () => {
    return (
      <div>
        <h1>The Dearfield Wealth Calculator</h1>
        <CalculatorForm setCalculatorInputs={this.setCalculatorInputs} />
        <TotalWealthBreakdown 
          homePrice={this.state.homePrice}
          downPaymentContribution={this.state.downPaymentContribution}
          dearfieldFundContribution={this.state.dearfieldFundContribution}
          />
      </div>
    );
  }
}

export default App;
