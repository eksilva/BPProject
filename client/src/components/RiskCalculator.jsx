import React from 'react';
import RiskCalculatorRow from './RiskCalculatorRow.jsx';
import CustomRiskTable from './CustomRiskTable.jsx';

class RiskCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      risk: '',
    }
  }
  
  render() {
    return (
      <div className="risk-calculator-container">
        <div className="risk-calculator-label">Personalized Portfolio</div>
        <div className="risk-calculator-label-container">
          <div className="risk-calculator-label-risk">Risk Level 1</div>
        </div>
        <CustomRiskTable />
        <div id="currentInvestmentContainer">Please Enter Your Current Portfolio
          <div className="button" id="rebalance-button">Rebalance</div>
        </div>
        <div className="risk-calculator-input-container">
          <div className="risk-calculator-input-labels">
            <label>Current Amount</label>
            <label>Difference</label>
            <label>New Amount</label>
            <label>Recommended Transfers</label>
          </div>
          <div className="risk-calculator-main">
              <RiskCalculatorRow label="Bonds $:"/>
              <RiskCalculatorRow label="Large Cap $:"/>
              <RiskCalculatorRow label="Mid Cap $:"/>
              <RiskCalculatorRow label="Foreign $:"/>
              <RiskCalculatorRow label="Small Cap $:"/>
            <div className="risk-calculator-transfers"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default RiskCalculator;
