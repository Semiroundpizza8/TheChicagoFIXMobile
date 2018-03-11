import React from 'react';
import { connect } from 'react-redux';
import { Header } from './'

export const Home = function () {
  return (
    <div>
      <Header />
      <h1>Hello World</h1>
    </div>
  )
}

//FORMAT
/*
-header
  -bar
  -logo
  -locations?
  -button
  -bar

-body
  -img
  -img
  -info
  -info
  -info
  -info
  -button
*/
const mapState = function () {

}

const mapDispatch = function () {

}

export default connect(null, null)(Home)
