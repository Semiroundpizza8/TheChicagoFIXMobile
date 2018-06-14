// Util Libs
import React from 'react';
import { connect } from 'react-redux';

// Components
import { Hero } from './';

// CSS
import { Header } from './';
import { Glyphicon } from 'react-bootstrap';

export const Home = function () {
  let info = [
    { key: 1, title: 'Preventative Care', body: 'We will teach your employees proper lifting and moving techniques in order to avoid the most common workplace injuries including low back pain, cervical strain, and repetitive injuries.' },
    { key: 2, title: 'Immediate Injury Assessment', body: 'We will be there to assess and treat on –site any musculoskeletal injuries that may be plaguing your employees. With us, your employees will avoid the long wait times of the emergency departments and walk-in clinics as well as avoiding unnecessary medical treatment.' },
    { key: 3, title: 'Job Specific Strength/Conditioning', body: 'Our certified personal trainers will come out to your jobsites to lead your employees in a group stretch and warm sessions in order to prepare their bodies for an injury free work day. Our trainers will stay on site to advise your employees on appropriate fitness and diet routines to reach their goals in a healthy and sustainable manner.' },
    { key: 4, title: 'Wellness Screenings', body: 'We will come to your offices or jobsites and screen your employees’ vital signs, cholesterol levels, and blood glucose levels. Our staff will then advise your employees on what is needed in order to get their levels to an appropriate healthy level.' },
  ]

  return (
    <div>
      <Hero />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h1 style={{ textAlign: 'center', marginTop: '1.5em', marginBottom: '1em' }}>What Our Team Brings To Your Team</h1>
        <hr />
        <div className="Body" style={{ display: 'flex', margin: "0% 10% 0% 10%" }}>
          <div className="Images">
            <img src="./assets/busInside.jpg" style={{ height: '300px' }} />
            <img src="./assets/stim.jpg" style={{ height: '300px' }} />
          </div>
          <ul className="Info" style={{ listStyle: 'none', marginTop: '0px' }}>
            {info.map(segment => (
              <li key={segment.key}>
                <h2 style={{ marginTop: '0px' }}>{segment.title}</h2>
                <p>{segment.body}</p>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', flexDirection: 'column', marginTop: '2em' }}>
          <div style={{ display: 'flex', justifyContent: 'space-around', marginLeft: "5%", marginRight: "5%", color: '#f15a29' }}>
            <h4><Glyphicon glyph="arrow-down" /> EMR</h4>
            <h4><Glyphicon glyph="arrow-down" /> OSHA Rates</h4>
            <h4><Glyphicon glyph="arrow-down" /> Work Comp Premiums</h4>
            <h4><Glyphicon glyph="arrow-down" /> Cost Work</h4>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around', marginLeft: "5%", marginRight: "5%", marginBottom: '2.5%', color: "#f9931e" }}>
            <h4><Glyphicon glyph="arrow-up" /> Work Site Safety</h4>
            <h4><Glyphicon glyph="arrow-up" /> Employee Wellness</h4>
            <h4><Glyphicon glyph="arrow-up" /> Increase Productivity</h4>
            <h4><Glyphicon glyph="arrow-up" /> Open New Jobs</h4>
          </div>
        </div>
      </div>
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
