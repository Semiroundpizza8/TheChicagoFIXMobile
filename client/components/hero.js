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

      {/* Side-By-Side */}

      {/* Sponsors */}

      {/* Contact CTA */}
    </div>
  )
}

export default connect(null, null)(LandingPage);
