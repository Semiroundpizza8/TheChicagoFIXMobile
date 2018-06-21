import React from 'react';
import { connect } from 'react-redux';
import { Glyphicon } from 'react-bootstrap';

const blackTextboxContainers = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2em',
  backgroundColor: '#333',
  color: 'white',
  height: '80vh',
  width: '100vw'
};

export const mainInfo = () => (
  <div style={blackTextboxContainers}>
    <div style={{ width: '75vw', textAlign: 'left' }} >
      <img src="./assets/MobileLogo.svg" style={{ height: '15em', zIndex: '4' }} />
      <h1><b>Using a proactive approach in sports medicine to prevent injuries and keep employees performing at their best.</b></h1>
      <p style={{ width: '50vw' }}>At the Chicago FIX Mobile, we bring the same treatment that professional athletes use to stay at the top of their game right to your job site to keep your employees performing at the top of theirs.</p>
      <div style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', flexDirection: 'column', marginTop: '2em' }}>
        <h4>Offering a decrease in</h4>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: "5%", marginRight: "5%", color: '#f15a29' }}>
          <h4><Glyphicon glyph="arrow-down" /> EMR</h4>
          <h4><Glyphicon glyph="arrow-down" /> OSHA Rates</h4>
          <h4><Glyphicon glyph="arrow-down" /> Work Comp Premiums</h4>
          <h4><Glyphicon glyph="arrow-down" /> Cost Work</h4>
        </div>
        <h4>Offering an Increase in</h4>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: "5%", marginRight: "5%", marginBottom: '2.5%', color: "#f9931e" }}>
          <h4><Glyphicon glyph="arrow-up" /> Work Site Safety</h4>
          <h4><Glyphicon glyph="arrow-up" /> Employee Wellness</h4>
          <h4><Glyphicon glyph="arrow-up" /> Increase Productivity</h4>
          <h4><Glyphicon glyph="arrow-up" /> Open New Jobs</h4>
        </div>
      </div>
      <h3 style={{ textAlign: 'left', marginBottom: '1em' }}>Call 855-4TheFIX or email Info@TheChicagoFIXMobile.com to bring our premiere healthcare to your jobsite today!</h3>
    </div >
    {/* <div style={blackTextboxContainers}>
      <h1>At The Chicago FIX Mobile, we offer:</h1>
      <ul>
        <li>Chiropractic Care</li>
        <li>Compression Ice Therapy</li>
        <li>Thermotherapy</li>
        <li>Assisted Stretching</li>
        <li>Personal Training</li>
        <li>Wellness Services</li>
        <li>Injury Evaluation</li>
        <li>Rehabilitation</li>

      </ul>
    </div> */}
  </div>
)

export default connect(null, null)(mainInfo);
