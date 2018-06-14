import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'
import { Button, Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap'

const barStyle = {
  backgroundColor: '#27aae1',
  height: '75px',
  width: '100%'
}

const NavbarComponent = ({ handleClick, isLoggedIn }) => (
    <Navbar inverse collapseOnSelect style={{ marginBottom: '0px' }}>
      <Navbar.Header>
        <Navbar.Brand>
        <img src="./assets/MobileLogo.svg" style={{ height: '5em', zIndex: '4' }} />
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
            <NavItem eventKey={1} href="/">
              Home
          </NavItem>
            <NavItem eventKey={2} href="/contact">
              Contact
          </NavItem>
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
