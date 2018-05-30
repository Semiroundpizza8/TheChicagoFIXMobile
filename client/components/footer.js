import React from 'react'
import { connect } from 'react-redux'

export const Footer = function () {
  const barStyle = {
    backgroundColor: 'black',
    height: '75px',
    width: '100%',
    textAlign: 'center',
    color: 'white'
  }
  return (
    <div style={barStyle}>
      <h5 style ={{ marginTop: '0px' }}>By Benjamin Odisho</h5>
      <h5>Please visit our sister site TheChicagoFIX.com</h5>
    </div>
  )
}

const mapState = function () {

}

const mapDispatch = function () {

}

export default connect(null, null)(Footer)
