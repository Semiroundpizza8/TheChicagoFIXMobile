import React from 'react';
import { connect } from 'react-redux';
import { Glyphicon } from 'react-bootstrap';

const blackTextboxContainers = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  justifyContent: 'center',
  padding: '2em',
  backgroundColor: '#0e121c',
  color: 'white',
  height: '60vh',
  width: '100vw'
};

export const mainInfo = () => (
  <div style={blackTextboxContainers} >
    <h1>Using a proactive approach to sports medicine to prevent injuries and keep employees performing at their best.</h1>
    <p>At the Chicago FIX Mobile we bring the same treatment that professional athletes use to stay at the top of their game right to your jobsite to keep your employees performing at the top of theirs.</p>
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
  </div >
)

export default connect(null, null)(mainInfo);
