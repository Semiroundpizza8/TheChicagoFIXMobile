import React from 'react'
import { connect } from 'react-redux'

export const Header = function () {
  const barStyle = {
    backgroundColor: '#27aae1',
    height: '75px',
    width: '100%'
  }
  return (
    <div id="header" style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="bar" style={barStyle} />
      <img src="./assets/MobileLogo.svg" style={{ height: '20em', zIndex: '4', marginTop: '-6em', marginBottom: '-1em' }} />
      <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around'}}>
          <h3>Chiropractic</h3>
          <h3>Medical</h3>
          <h3>Rehab</h3>
          <h3>Massage</h3>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around'}}>
          <h3>Injury Prevention</h3>
          <h3>On-Site Therapy</h3>
          <h3>Wellness Screenings</h3>
        </div>
      </div>
      <div className="bar" style={barStyle} />
    </div>
  )
}

const mapState = function () {

}

const mapDispatch = function () {

}

export default connect(null, null)(Header)
