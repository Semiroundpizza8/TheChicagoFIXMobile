import React from 'react';
import { connect } from 'react-redux';
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
  handleSubmit(e) {
    e.preventDefault();
    const body = {
      email: this.state.email,
      name: this.state.name,
      content: this.state.content
    }
    this.setState({email: '', name: '', content: ''})
    console.log(body)
    axios.post('/api/email', body).then(() => { console.log("POSTED EMAIL") })
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
          <input type="submit" style={{ marginBottom: '3em', width: '100px' }} />
        </form>
        <h4 style={{ textAlign: 'center', marginBottom: '1em' }}>Call 855-4TheFIX or email Info@TheChicagoFIXMobile.com <br />to bring our premier healthcare to your job site today!</h4>
      </div>
    )
  }
}
const mapState = function () {

}

const mapDispatch = function () {

}

export default connect(null, null)(Contact);
