import React from 'react'
import { connect } from 'react-redux'

export const Header = function () {
  return (
    <div id="header" style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '5vh 7.5vw' }}>
        <p>We bring the same treatment that professional athletes use to stay at the top of their game to your
jobsite to help your workers perform at the top of theirs.</p>
      </div>

      <div style={{ display: 'flex', flex: '1 1 auto', flexDirection: 'row', padding: '5vh 7.5vw', backgroundColor: 'lightblue' }}>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '55vw' }}>
          <div style={{ backgroundImage: 'url("assets/businside.jpg")', width: '100%', backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div style={{ backgroundImage: 'url(maxWidth: "assets/stim.jpg")', width: '100%', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        </div>
        <div style={{ width: '30 vw', paddingLeft: '2.5vw' }}>
          <h3 style={{ marginTop: '0px' }}>Preventative Care</h3>
          <p>We will teach your employees proper lifting and moving techniques in order to avoid the most common workplace injuries including low back pain, cervical strain, and repetitive injuries.</p>
          <h3>Immediate Injury Assessment</h3>
          <p>We will be there to assess and treat on –site any musculoskeletal injuries that may be plaguing your employees. With us, your employees will avoid the long wait times of the emergency departments and walk-in clinics as well as avoiding unnecessary medical treatment.</p>
          <h3>Job Specific Strength + Conditioning</h3>
          <p>Our certified personal trainers will come out to your jobsites to lead your employees in a group stretch and warm sessions in order to prepare their bodies for an injury free work day. Our trainers will stay on site to advise your employees on appropriate fitness and diet routines to reach their goals in a healthy and sustainable manner.</p>
          <h3>Wellness Screenings</h3>
          <p>We will come to your offices or jobsites and screen your employees’ vital signs, cholesterol levels, and blood glucose levels. Our staff will then advise your employees on what is needed in order to get their levels to an appropriate healthy level.</p>
        </div>
      </div>
    </div>
  )
}

const mapState = function () {

}

const mapDispatch = function () {

}

export default connect(null, null)(Header)
