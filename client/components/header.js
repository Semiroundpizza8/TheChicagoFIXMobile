import React from 'react'
import { connect } from 'react-redux'

export const Header = function () {
  return (
    <div id="header">
      <div className="bar" />
      <img src="./assets/MobileLogo.svg" />
      <button>Contact</button>
      <h1>I'm Being Helpful!</h1>
      <div className="bar" />
    </div>
  )
}

const mapState = function () {

}

const mapDispatch = function () {

}

export default connect(null, null)(Header)
