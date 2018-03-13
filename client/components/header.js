import React from 'react'
import { connect } from 'react-redux'

export const Header = function () {
  const barStyle = {
    backgroundColor: 'lightblue',
    height: '75px',
    width: '100%'
  }
  return (
    <div id="header" style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="bar" style={barStyle} />
      <img src="./assets/MobileLogo.svg" style={{ height: '16em', zIndex: '4', marginTop: '-4em'}} />
      <button>Contact</button>
      <div className="bar" style={barStyle} />
    </div>
  )
}

const mapState = function () {

}

const mapDispatch = function () {

}

export default connect(null, null)(Header)
