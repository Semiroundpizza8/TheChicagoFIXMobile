import React from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'react-bootstrap';

export const LandingPage = () => {
  let ImageStyle = {
    backgroundImage: 'url(./assets/busSide.jpg)',
    backgroundSize: 'cover',
    resize: 'both',
    width: '900px',
    height: '500px'
  }

  let textFlexContainer = {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    margin: '2em',
  }
  return (
    <div>

      {/* Carousel Hero Image */}
      <Carousel>
        <Carousel.Item >
          <div style={ImageStyle} alt="900x500" src="./assets/busSide.jpg" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={ImageStyle} alt="900x500" src="./assets/busSide.jpg" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={ImageStyle} alt="900x500" src="./assets/busSide.jpg" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Top Description */}
      <div style={textFlexContainer}>
        {/* Center, text-header flex */}
        <h1>Lorem Ipsum</h1>
        <p>items are evenly distributed in the line with equal space around them. Note that visually the spaces aren't equal, since all the items have equal space on both sides. The first item will have one unit of space against the container edge, but two units of space between the next item because that next item has its own spacing that applies.</p>
      </div>

      {/* Side-By-Side */}
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <div style={textFlexContainer}>
          {/* Center, text-header flex */}
          <h1>Lorem Ipsum</h1>
          <p>items are evenly distributed in the line with equal space around them. Note that visually the spaces aren't equal, since all the items have equal space on both sides. The first item will have one unit of space against the container edge, but two units of space between the next item because that next item has its own spacing that applies.</p>
        </div>
        <div style={textFlexContainer}>
          {/* Center, text-header flex */}
          <h1>Lorem Ipsum</h1>
          <p>items are evenly distributed in the line with equal space around them. Note that visually the spaces aren't equal, since all the items have equal space on both sides. The first item will have one unit of space against the container edge, but two units of space between the next item because that next item has its own spacing that applies.</p>
        </div>
      </div>
      {/* Clients */}
      <div style={textFlexContainer}>
        {/* Center, text-header flex */}
        <h1>Lorem Ipsum</h1>
        <p>Placeholder for clients section</p>
      </div>
      {/* Contact CTA */}
    </div>
  )
}

export default connect(null, null)(LandingPage);
