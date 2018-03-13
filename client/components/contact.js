import React from 'react';
import { connect } from 'react-redux';
import { Header } from './';
import { Form, FormGroup, ControlLabel, FormControl, Checkbox, Button, Col } from 'react-bootstrap';
import axios from 'axios';

export const Contact = function () {
  const handleSubmit = (event) => {
    console.log(event)
    const body = {
      email: event.target.email.value,
      name: event.target.name.value,
      content: event.target.content.value
    }
    axios.post('/api/email', body).then(() => { console.log("POSTED EMAIL") })
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1 style={{ textAlign: 'center', marginTop: '1.5em', marginBottom: '1em' }}>Contact Us Today</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '2em' }}>
        <img src="./assets/adjustTable.jpg" style={{ height: '200px' }} />
        <img src="./assets/rally.jpg" style={{ height: '200px' }} />
        <img src="./assets/busSide.jpg" style={{ height: '200px' }} />
      </div>
      <h2 style={{ textAlign: 'center', marginBottom: '1em' }}>Call 855-4TheFIX or email Info@TheChicagoFIX.com</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center' }}>
          <label>Name</label>
          <input type="text" placeholder="Name" />
          <label>Email</label>
          <input type="text" placeholder="Email" />
          <input type="submit" />
      </form>
    </div>
  )
}

const mapState = function () {

}

const mapDispatch = function () {

}

export default connect(null, null)(Contact);
