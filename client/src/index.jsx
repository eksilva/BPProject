import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.jsx';
import RiskSelector from './components/RiskSelector.jsx';
import RiskTable from './components/RiskTable.jsx';

const Index = () => {
  return (
    <div id="content">
      <Header />
      <RiskSelector />
      <RiskTable />
    </div>
  )
}

ReactDOM.render(<Index />, document.getElementById('app'));
