import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'

let backgroundStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: 'black',
  backgroundImage: 'url("assets/Hero.jpg")',
  backgroundSize: 'cover',
  height: "60vh",
  backgroundPosition: 'center'
}

export const Header = function () {
  return (
      <div id="header" style={backgroundStyle}>
        <img src="./assets/MobileLogo.svg" style={{ height: '20vh', zIndex: '4', opacity: '1' }} />
        <h1 style={{color: 'white', webkitTextStroke: '1pt #eb212e', textAlign: 'center', marginLeft: '5vw', marginRight: '5vw'}}>Bringing Premier Healthcare to your workplace.</h1>
        <Button>Contact Us</Button>
      </div>
  )
}

const mapState = function () {

}

const mapDispatch = function () {

}

export default connect(null, null)(Header)
