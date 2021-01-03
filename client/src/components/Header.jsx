import React from "react";
import { FcHome } from 'react-icons/fc';

const Header = () => {
  return (
    <header>
      <FcHome id="top-logo" />
      <div id="app-title">Financial Advisor</div>
    </header>
  )
}

export default Header;