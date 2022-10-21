import React from 'react'
import './Header.css'
import logo from './img/logo.svg'

function Header(props) {
  const {title, subtitle} = props;

  return (
    <div id='header'>
      <div>
        <img  src={logo} id = "logo1" className = "headerLogo" alt="" />
      </div>
      <h1>{title}</h1>
      <div>
        <img  src={logo} id = "logo2" className = "headerLogo" alt="" />
      </div>

    </div>
  )
}

export default Header