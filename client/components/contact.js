import React from 'react';
import { connect } from 'react-redux';
import { Header } from './';
import { Form, FormGroup, ControlLabel, FormControl, Checkbox, Button, Col } from 'react-bootstrap';
import axios from 'axios';

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
    return (<div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1 style={{ textAlign: 'center', marginTop: '1.5em', marginBottom: '1em' }}>Contact Us Today</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '2em' }}>
        <img src="./assets/adjustTable.jpg" style={{ height: '200px' }} />
        <img src="./assets/busSide.jpg" style={{ height: '200px' }} />
      </div>
      <h2 style={{ textAlign: 'center', marginBottom: '1em' }}>Call 855-4TheFIX or email Info@TheChicagoFIX.com</h2>
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
    )
  }
}
const mapState = function () {

}

const mapDispatch = function () {

}

export default connect(null, null)(Contact);
