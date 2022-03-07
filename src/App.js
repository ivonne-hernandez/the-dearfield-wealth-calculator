import { Component } from 'react';
import CalculatorForm from './CalculatorForm/CalculatorForm';
import './App.css';

class App extends Component {
  constructor() { 
    super();
    this.state = {

    }
  }
  render = () => {
    return (
      <div>
        <h1>The Dearfield Wealth Calculator</h1>
        <CalculatorForm />
      </div>
    );
  }
}

export default App;
