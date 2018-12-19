import React from 'react'
import PropTypes from 'prop-types'

import './layout.scss'
import HelmetComponent from './helmet-component'
import NavBar from './nav-bar'

const Layout = ({ children }) => (
  <div>
    <HelmetComponent />
    <NavBar />
    {children}
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
