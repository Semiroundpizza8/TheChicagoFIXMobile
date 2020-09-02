import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

export class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      name: '',
      content: '',
      emailSent: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const body = {
      email: this.state.email,
      name: this.state.name,
      content: this.state.content,
    }
    
    console.log(body)
    axios.post('/api/email', body).then(() => { 
      this.setState({
        email: '',
        name: '',
        content: '',
        oldName: this.state.name,
        emailSent: true,
      });
      console.log("POSTED EMAIL")
    })
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5vh', backgroundColor: 'white' }}>
        <div style={{ width: '60vw'}}>
          <h1 style={{ textAlign: 'center', marginBottom: '1em' }}>Contact Us Today</h1>
        </div>
        <form onSubmit={this.handleSubmit} style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
          <label>Name</label>
          <input type="text" value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }} style={{ border: '1px solid #88D5E9', marginBottom: '1em', width: '70vw' }} />
          <label>Email</label>
          <input type="text" value={this.state.email} onChange={(e) => { this.setState({ email: e.target.value }) }} style={{ border: '1px solid #88D5E9', marginBottom: '1em', width: '70vw'}} />
          <label>Comments</label>
          <textarea value={this.state.content} onChange={(e) => { this.setState({ content: e.target.value }) }} style={{ border: '1px solid #88D5E9', marginBottom: '3em', width: '70vw' }} />
          {this.state.emailSent && (
            <div id="verify-sent">
              <h4 style={{ color: "green" }}>Thank you {this.state.oldName}!</h4>
              <h4 style={{ color: "green" }}>Your Email has been sent! If you have any more questions feel free to reach out to Info@TheChicagoFIXMobile.com.</h4>
            </div>
            )}
          <input type="submit" style={{ marginBottom: '3em', width: '100px' }} />
        </form>
        <h4 style={{ textAlign: 'center', marginBottom: '1em' }}>Call <span style={{ color: '#f9931e' }}>855-4TheFIX</span> or email <span style={{ color: '#f9931e' }}>Info@TheChicagoFIXMobile.com</span><br />to bring our premier healthcare to your job site today!</h4>
      </div>
    )
  }
}

export default connect(null, null)(Contact);
