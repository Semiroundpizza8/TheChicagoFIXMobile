import React from 'react';
import { connect } from 'react-redux';
import { Header } from './'

export const Home = function () {
  let info = [
    {key: 1, title: 'Preventative Care', body: 'We will teach your employees proper lifting and moving techniques in order to avoid the most common workplace injuries including low back pain, cervical strain, and repetitive injuries.'},
    {key: 2, title: 'Immediate Injury Assessment', body: 'We will be there to assess and treat on –site any musculoskeletal injuries that may be plaguing your employees. With us, your employees will avoid the long wait times of the emergency departments and walk-in clinics as well as avoiding unnecessary medical treatment.'},
    {key: 3, title: 'Job Specific Strength/Conditioning', body: 'Our certified personal trainers will come out to your jobsites to lead your employees in a group stretch and warm sessions in order to prepare their bodies for an injury free work day. Our trainers will stay on site to advise your employees on appropriate fitness and diet routines to reach their goals in a healthy and sustainable manner.'},
    {key: 4, title: 'Wellness Screenings', body: 'We will come to your offices or jobsites and screen your employees’ vital signs, cholesterol levels, and blood glucose levels. Our staff will then advise your employees on what is needed in order to get their levels to an appropriate healthy level.'},
  ]

  return (
    <div>
      <Header />
      <h1>Hello World</h1>
      <img src="./assets/busInside.jpg" style={{height: '200px'}} />
      <img src="./assets/stim.jpg" style={{height: '200px'}} />
      {info.map(segment => (
        <li key={segment.key}>
          <h2>{segment.title}</h2>
          <p>{segment.body}</p>
        </li>
      ))}
      <button />
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
