import React from 'react'
import { connect } from 'react-redux'
import {
  Container,
  Header,
  Button,
  Icon,
  Image
} from 'semantic-ui-react'
import { isAbsolute } from 'path';

let backgroundStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: 'black',
  backgroundImage: 'url("assets/Hero.jpg")',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: "60vh",
}

export const HomepageHeader = function () {
  return (
    <div id="header" style={backgroundStyle}>
      <img src="./assets/MobileLogo.svg" style={{ marginTop: '-10vh', height: '20vh', zIndex: '4', opacity: '1' }} />
      <h1 style={{ color: 'white', textAlign: 'center', marginLeft: '5vw', marginRight: '5vw' }}>Bringing Premier Healthcare to your workplace.</h1>
    </div>
  )
}

const mapState = function () {

}

const mapDispatch = function () {

}

export default connect(null, null)(HomepageHeader)
