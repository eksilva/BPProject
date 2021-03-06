import React from 'react';
import { FcPieChart } from 'react-icons/fc';

const RiskTable = () => {
  return (
    <div id="graphic">
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
          <tr>
            <td>2</td>
            <td>70</td>
            <td>15</td>
            <td>15</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>3</td>
            <td>60</td>
            <td>15</td>
            <td>15</td>
            <td>10</td>
            <td>0</td>
          </tr>
          <tr>
            <td>4</td>
            <td>50</td>
            <td>20</td>
            <td>20</td>
            <td>10</td>
            <td>0</td>
          </tr>
          <tr>
            <td>5</td>
            <td>40</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
            <td>0</td>
          </tr>
          <tr>
            <td>6</td>
            <td>30</td>
            <td>25</td>
            <td>5</td>
            <td>30</td>
            <td>5</td>
          </tr>
          <tr>
            <td>7</td>
            <td>20</td>
            <td>25</td>
            <td>25</td>
            <td>25</td>
            <td>5</td>
          </tr>
          <tr>
            <td>8</td>
            <td>10</td>
            <td>20</td>
            <td>40</td>
            <td>20</td>
            <td>10</td>
          </tr>
          <tr>
            <td>9</td>
            <td>5</td>
            <td>15</td>
            <td>40</td>
            <td>25</td>
            <td>15</td>
          </tr>
          <tr>
            <td>10</td>
            <td>0</td>
            <td>5</td>
            <td>25</td>
            <td>30</td>
            <td>40</td>
          </tr>
        </tbody>
      </table>
      <div>
        <FcPieChart id="view-logo"/>
      </div>
    </div>
  )
}

export default RiskTable;
