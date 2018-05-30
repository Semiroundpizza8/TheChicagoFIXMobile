import React from 'react';
import { connect } from 'react-redux';
import { Header, contact } from './';
import { Form, FormGroup, ControlLabel, FormControl, Checkbox, Button, Col } from 'react-bootstrap';
import axios from 'axios';

let parentFlexboxStyle = {
  display: 'flex',
  flexDirection: 'row',
  backgroundImage: 'url("assets/dark-triangles.png")',
  justifyContent: 'center',
  height: '70vh'
}

let contactHeaderStyle = {
  color: 'white'
}

let leftStyle = {
  marginLeft: '12.5vw',
  width: '37.5vw',
  marginTop: '10vh'
}

let rightStyle = {
  marginRight: '12.5vw',
  width: '37.5vw',
  marginTop: '10vh'
}

export class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      name: '',
      content: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    const body = {
      email: this.state.email,
      name: this.state.name,
      content: this.state.content
    }
    console.log(body)
    axios.post('/api/email', body).then(() => { console.log("POSTED EMAIL") })
  }

  render() {
    return (
    <div style={parentFlexboxStyle}>

      <div id='contactLeft' style={leftStyle}>
        <h1 style={contactHeaderStyle}>Contact Us Today</h1>
        <p style={contactHeaderStyle}>Call 855-4TheFIX or email Info@TheChicagoFIX.com</p>
      </div>

      <div id='contactRight' style={rightStyle}>
        <form onSubmit={this.handleSubmit} style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center', marginLeft: '10%', marginRight: '10%' }}>
          <label>Name</label>
          <input type="text" value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }} style={{ border: '1px solid #88D5E9', marginBottom: '1em' }} />
          <label>Email</label>
          <input type="text" value={this.state.email} onChange={(e) => { this.setState({ email: e.target.value }) }} style={{ border: '1px solid #88D5E9', marginBottom: '1em' }} />
          <label>Comments</label>
          <textarea value={this.state.content} onChange={(e) => { this.setState({ content: e.target.value }) }} style={{ border: '1px solid #88D5E9', marginBottom: '3em' }} />
            <input type="submit" style={{marginBottom: '3em'}} />
        </form>
        </div>
    </div>
    )
  }
}
const mapState = function () {

}

const mapDispatch = function () {

}

export default connect(null, null)(Contact);
