import React from "react"
import logo from '../images/ico-logo.png';

function Header() {
 return (
  <div className="header">
   <img src={logo} alt="Logo" />
   <h1>Frontend test</h1>
  </div>
 )
}

export default Header;