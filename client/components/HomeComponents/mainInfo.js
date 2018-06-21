import React from 'react';
import { connect } from 'react-redux';
import { Glyphicon } from 'react-bootstrap';
import MediaQuery from 'react-responsive';

const blackTextboxContainers = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2em',
  backgroundColor: '#333',
  color: 'white',
  height: 'auto',
  width: '100vw'
};

const imageBackgroundStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  textAlign: 'left',
  justifyContent: 'flex-start',
  padding: '2em',
  color: 'white',
  width: '35vw',
  alignItems: 'flex-start',
  backgroundImage: `url('./assets/pictures/PatientsRot.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  borderRadius: '40px'
};

const mobileImageBackgroundStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  textAlign: 'left',
  justifyContent: 'flex-start',
  padding: '2em',
  color: 'white',
  width: '80vw',
  alignItems: 'flex-start',
  backgroundImage: `url('./assets/pictures/PatientsRot.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  borderRadius: '40px'
};

export const mainInfo = () => (
  <div style={blackTextboxContainers}>
    <div style={{ width: '75vw', textAlign: 'left' }} >
      <img src="./assets/MobileLogo.svg" style={{ width: '80vw', maxWidth: '700px', zIndex: '4' }} />
      <h1><b>Using a proactive approach in sports medicine to prevent injuries and keep employees performing at their best.</b></h1>
      <p style={{ width: '50vw' }}>At the Chicago FIX Mobile, we bring the same treatment that professional athletes use to stay at the top of their game right to your job site to keep your employees performing at the top of theirs.</p>
      {/* <h1>We offer:</h1>
      <p> Chiropractic Care
        <br />Compression Ice Therapy
        <br />Thermotherapy
        <br />Assisted Stretching
        <br />Personal Training
        <br />Wellness Services
        <br />Injury Evaluation
        <br />Rehabilitation
      </p> */}
      <MediaQuery query='(max-width: 600px)'>
        <div style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-between', flexDirection: 'column', marginTop: '2em' }}>
            <div>
            <h4>Offering a decrease in</h4>
            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: "5%", marginRight: "5%", color: '#f15a29' }}>
              <h4><Glyphicon glyph="arrow-down" /> EMR</h4>
              <h4><Glyphicon glyph="arrow-down" /> OSHA Rates</h4>
              <h4><Glyphicon glyph="arrow-down" /> Work Comp Premiums</h4>
              <h4><Glyphicon glyph="arrow-down" /> Cost Work</h4>
            </div>
            </div>
            <div>
            <h4>Offering an Increase in</h4>
            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: "5%", marginRight: "5%", marginBottom: '2.5%', color: "#f9931e" }}>
              <h4><Glyphicon glyph="arrow-up" /> Work Site Safety</h4>
              <h4><Glyphicon glyph="arrow-up" /> Employee Wellness</h4>
              <h4><Glyphicon glyph="arrow-up" /> Increase Productivity</h4>
              <h4><Glyphicon glyph="arrow-up" /> Open New Jobs</h4>
            </div>
            <h3 style={{ textAlign: 'left', marginBottom: '1em', fontSize: '145%' }}>Call 855-4TheFIX or email Info@TheChicagoFIXMobile.com<br />to bring our premier healthcare to your job site today!</h3>

            </div>
        </div>
      </MediaQuery>
      <MediaQuery query='(min-width: 600px)'>
        <div style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-between', flexDirection: 'row', marginTop: '2em' }}>
          <div style={{ width: '30vw', height: 'auto' }}>
            <h4>Offering a decrease in</h4>
            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: "5%", marginRight: "5%", color: '#f15a29' }}>
              <h4><Glyphicon glyph="arrow-down" /> EMR</h4>
              <h4><Glyphicon glyph="arrow-down" /> OSHA Rates</h4>
              <h4><Glyphicon glyph="arrow-down" /> Work Comp Premiums</h4>
              <h4><Glyphicon glyph="arrow-down" /> Cost Work</h4>
            </div>
            <h4>Offering an Increase in</h4>
            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: "5%", marginRight: "5%", marginBottom: '2.5%', color: "#f9931e" }}>
              <h4><Glyphicon glyph="arrow-up" /> Work Site Safety</h4>
              <h4><Glyphicon glyph="arrow-up" /> Employee Wellness</h4>
              <h4><Glyphicon glyph="arrow-up" /> Increase Productivity</h4>
              <h4><Glyphicon glyph="arrow-up" /> Open New Jobs</h4>
            </div>
            <h3 style={{ textAlign: 'left', marginBottom: '1em', fontSize: '145%' }}>Call 855-4TheFIX or email Info@TheChicagoFIXMobile.com<br />to bring our premier healthcare to your job site today!</h3>
          </div>
          <div style={imageBackgroundStyle} />
        </div>
      </MediaQuery>
    </div >
  </div >
)

export default connect(null, null)(mainInfo);
