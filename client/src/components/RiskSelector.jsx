import React from 'react'

const RiskSelector = () => {
  return (
    <div id="risk-selector-container">
      <div className="risk-selector-header-labels">
        <div className="risk-label-select">Please Select A Risk Level For Your Investment Portfolio</div>
        <div className="risk-label-levels">
          <div className="risk-level">Low</div>
          <div className="risk-level">High</div>
        </div>
      </div>
      <div id="risk-selector-button-container">
        <div id="risk-selector">
          <ul className="risk-selector-ul">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
          </ul>
        </div>
        <div id="continue" className="button">Continue</div>
      </div>
      <div id="graphic"></div>
    </div>
  )
}

export default RiskSelector;
