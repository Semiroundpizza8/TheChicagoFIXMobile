import React from 'react';
import { connect } from 'react-redux';
import { Header } from './';
export const Contact = function () {
  return (
    <div>
      <Header />
      <h1>Aliens are Real</h1>
      <form>
        <input type="text" placeholder="name" />
        <input type="text" placeholder="number" />
        <input type="text" placeholder="email" />
        <input type="text" placeholder="description" />
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
