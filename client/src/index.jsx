import React from 'react';
import ReactDOM from 'react-dom';
import { FcHome } from 'react-icons/fc';


const Index = () => {
  return (
    <header>
      <FcHome id="top-logo" />
      <div id="app-title">Financial Advisor</div>
    </header>
  )
}

ReactDOM.render(<Index />, document.getElementById('app'));
