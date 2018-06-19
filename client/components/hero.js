import React from 'react';
import { connect } from 'react-redux';
import { Carousel, Glyphicon } from 'react-bootstrap';

const textFlexContainer = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  justifyContent: 'center',
  padding: '2em',
};

const blackTextboxContainers = {
  ...textFlexContainer,
  backgroundColor: '#0e121c',
  color: 'white',
  height: '60vh',
  width: '100vw'
};

const redTextboxContainers = {
  ...textFlexContainer,
  backgroundColor: 'red',
  color: 'white',
  height: '30vh',
  width: '50vw'
};

const offwhiteTextboxContainers = {
  ...textFlexContainer,
  backgroundColor: '#dddddd',
  color: 'black',
  height: '30vh',
  width: '100vw',
  display: 'flex'
};

const carouselImageCreator = (url, header, text) => {
  const carouselImageStyle = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    resize: 'both',
    width: '900px',
    height: '500px'
  }
  return (
    <Carousel.Item >
      <div style={carouselImageStyle} alt="900x500" src={url} />
      <Carousel.Caption>
        <h3>{header}</h3>
        <p>{text}</p>
      </Carousel.Caption>
    </Carousel.Item>
  )
};

const pictureBackgroundCreator = (url, header, text, left) => {
  let imageBackgroundStyle = {
    ...textFlexContainer,
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '40vw',
    height: '40vh'
  };

  let sideBlock = {
    backgroundColor: '#0e121c',
    color: 'white',
    width: '60vw',
    height: '40vh',
    padding: '3vw'
  }
  return left ? (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
      <div style={sideBlock}>
        <h1>{header}</h1>
        <p>{text}</p>
      </div>
      <div style={imageBackgroundStyle} />
    </div>
  ) : (
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
        <div style={imageBackgroundStyle} />
        <div style={sideBlock}>
          <h1>{header}</h1>
          <p>{text}</p>
        </div>
      </div>
    )

}

export const LandingPage = () => {
  return (
    <div>

      {/* Carousel Hero Image */}
      <Carousel>
        {carouselImageCreator('./assets/busSide.jpg', 'Injury & Illness Prevention', 'Nulla vitae elit libero, a pharetra augue mollis interdum.')}
        {carouselImageCreator('./assets/busSide.jpg', 'Ergonomics', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.')}
        {carouselImageCreator('./assets/busSide.jpg', 'Wellness Services', 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.')}
      </Carousel>

      {/* Top Description */}
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

      {/* Side-By-Side */}
      {pictureBackgroundCreator('./assets/Orange1.jpg', 'Immediate Injury Assessment', 'We will be there to assess and treat on –site any musculoskeletal injuries that may be plaguing your employees. With us, your employees will avoid the long wait times of the emergency departments and walk-in clinics as well as avoiding unnecessary medical treatment.', true)}
      {pictureBackgroundCreator('./assets/Red1.jpg', 'Wellness Screenings', 'We will come to your offices or jobsites and screen your employees’ vital signs, cholesterol levels, and blood glucose levels. Our staff will then advise your employees on what is needed in order to get their levels to an appropriate healthy level.')}
      {pictureBackgroundCreator('./assets/Red2.jpg', 'Job Specific Strength/Conditioning', 'Our certified personal trainers will come out to your jobsites to lead your employees in a group stretch and warm sessions in order to prepare their bodies for an injury free work day. Our trainers will stay on site to advise your employees on appropriate fitness and diet routines to reach their goals in a healthy and sustainable manner.', true)}
      {pictureBackgroundCreator('./assets/Orange2.jpg', 'Preventative Care', 'We will teach your employees proper lifting and moving techniques in order to avoid the most common workplace injuries including low back pain, cervical strain, and repetitive injuries.')}

      {/* Testimonial */}
      <div style={offwhiteTextboxContainers} >
        <h1>Testimonials</h1>
        <p style={{width: '33vw'}}>“We have been working with Dr. O and his staff for two years.  Our field workers have really appreciated the opportunity to receive treatment for their aches and pains right on the jobsite.  Each year our safety statistics have improved, and in 2017 we recorded zero lost work days!” - Steven Brazel, John Burns Construction Company Safety Director </p>
      </div >


      {/* Contact */}
      < div style={textFlexContainer} >
        < h1 >Contact</h1 >
        <p>Placeholder for clients section</p>
      </div >
    </div >
  )
}

export default connect(null, null)(LandingPage);
