import React from 'react';

const CustomRiskTable = () => {
  return (
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
  )
}

export default CustomRiskTable;
