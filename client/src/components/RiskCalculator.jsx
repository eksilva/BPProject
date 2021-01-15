import React from 'react';
import RiskCalculatorRow from './RiskCalculatorRow.jsx';

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
        <div id="custom-risk-table">
          <table>
            <thead>
              <tr>
                <th>Risk</th>
                <th>Bonds %</th>
                <th>Large Cap %</th>
                <th>Mid Cap %</th>
                <th>Foreign %</th>
                <th>Small Cap %</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>80</td>
                <td>20</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
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
            <div className="risk-calculator-man-row">
              <label>Bonds $:</label>
              <RiskCalculatorRow />
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default RiskCalculator;
