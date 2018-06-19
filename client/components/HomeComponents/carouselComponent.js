import React from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'react-bootstrap';

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

export const CarouselComponent = () => (
  <Carousel>
    {carouselImageCreator('./assets/busSide.jpg', 'Injury & Illness Prevention', 'Nulla vitae elit libero, a pharetra augue mollis interdum.')}
    {carouselImageCreator('./assets/busSide.jpg', 'Ergonomics', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.')}
    {carouselImageCreator('./assets/busSide.jpg', 'Wellness Services', 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.')}
  </Carousel>
)

export default connect(null, null)(CarouselComponent);
