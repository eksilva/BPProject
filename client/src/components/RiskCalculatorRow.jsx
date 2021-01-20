import React from 'react';

export class RiskCalculatorRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: props.label,
      amount: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let val = event.target.value;
    this.setState({
      amount: val
    });
  }

  render() {
    return (
      <div className="risk-calculator-main-row">
        <label>{this.state.label}</label>
        <div className="risk-calculator-main-row-box">
          <input type="text" className="risk-calculator-main-input" value={this.state.amount} onChange={this.handleChange}></input>
          <input type="text" className="risk-calculator-main-difference" disabled></input>
          <input type="text" className="risk-calculator-main-new" disabled></input>
        </div>
      </div>
    )
  }
}

export default RiskCalculatorRow;
