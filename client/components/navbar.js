import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logout } from '../store'
import { Navbar, Nav, NavItem } from 'react-bootstrap'


const NavbarComponent = () => (
  <Navbar inverse collapseOnSelect style={{ marginBottom: '0px' }}>
    <Navbar.Header>
      <Navbar.Brand>
        <img src="./assets/MobileLogo.svg" style={{ height: '5em', zIndex: '4' }} />
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>

      <Nav pullRight>
        <NavItem eventKey={1} href="/">Home</NavItem>
        {/* <NavItem eventKey={2} href="/About">About</NavItem> */}
      </Nav>
      
    </Navbar.Collapse>
  </Navbar>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(NavbarComponent)

/**
 * PROP TYPES
 */
NavbarComponent.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
