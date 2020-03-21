import React from 'react'
import PropTypes from 'prop-types'
import AOS from 'aos'

import './layout.scss'
import HelmetComponent from './helmet-component'
import NavBar from './nav-bar'

class Layout extends React.Component {
  componentDidMount() {
    AOS.init({
      once: true,
      easing: 'ease-in-out-quad'
    })
  }

  render() {
    return (
      <div>
        <HelmetComponent />
        <NavBar />
        {this.props.children}
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
