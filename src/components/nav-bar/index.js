import React from 'react'

import './index.scss'
import Logo from '../../images/logo.svg'

const NavBar = () => (
  <div className="nav-bar transparent" data-aos="fade-down" data-aos-duration="1000">
    <img className="logo" src={Logo} alt="Alex Gale" />
  </div>
)

export default NavBar
