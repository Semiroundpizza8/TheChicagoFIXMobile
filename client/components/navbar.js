import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'
import { Button } from 'react-bootstrap'

const barStyle = {
  backgroundColor: '#27aae1',
  height: '75px',
  width: '100%'
}

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    <div id="header" style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="bar" style={barStyle} />
      <img src="./assets/MobileLogo.svg" style={{ height: '17.5em', zIndex: '4', marginTop: '-4em', marginBottom: '-1em' }} />
      <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', color: '#ed1c24'}}>
          <h3>Chiropractic</h3>
          <h3>Medical</h3>
          <h3>Rehab</h3>
          <h3>Massage</h3>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', color: '#ed1c24'}}>
          <h3>Injury Prevention</h3>
          <h3>On-Site Therapy</h3>
          <h3>Wellness Screenings</h3>
        </div>
      </div>
      <div className="bar" style={{...barStyle, marginTop:'1em'}}>
        <nav>
          <div style={{ display: 'flex', justifyContent: 'space-around'}}>
            {/* The navbar will show these links after you log in */}
            <Link to="/"><Button bsSize="large">Home</Button></Link>
            <Link to="/contact"><Button bsSize="large">Contact</Button></Link>
          </div>
        </nav>
      </div>
    </div>
  </div>
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

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
