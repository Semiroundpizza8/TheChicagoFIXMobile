import React from 'react';
import { connect } from 'react-redux';
import { Header } from './';
import { Form, FormGroup, ControlLabel, FormControl, HelpBlock, Button, Col } from 'react-bootstrap';


export const Contact = function () {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flexAlign: 'center', justifyContent: 'center' }}>
      <h1>Aliens are Real</h1>

      <Form horizontal>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <FormControl type="email" placeholder="Email" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalName">
          <Col componentClass={ControlLabel} sm={2}>
            Name
          </Col>
          <Col sm={10}>
            <FormControl type="email" placeholder="Email" />
          </Col>
        </FormGroup>

        <Button type="submit">Submit</Button>
      </Form>

      <h2>Call 855-4TheFIX or email Info@TheChicagoFIX.com</h2>
    </div>
  )
}

const mapState = function () {

}

const mapDispatch = function () {

}

export default connect(null, null)(Contact);
