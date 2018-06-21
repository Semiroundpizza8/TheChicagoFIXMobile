import React from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'react-bootstrap';

const carouselImageCreator = (url, header, text) => {
  const carouselImageStyle = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    resize: 'both',
    width: '100vw',
    height: '60vh',
    overflow: 'hidden'
  }
  return (
    <Carousel.Item >
      <div style={carouselImageStyle} />
      <Carousel.Caption>
        <h3>{header}</h3>
        <p>{text}</p>
      </Carousel.Caption>
    </Carousel.Item>
  )
};

export const CarouselComponent = () => (
  <Carousel>
    {carouselImageCreator('./assets/pictures/DSC_0426_long.jpg', 'Injury & Illness Prevention', '')}
    {carouselImageCreator('./assets/pictures/DSC_0524_long.jpg', 'Ergonomics', '')}
    {carouselImageCreator('./assets/pictures/DSC_0580_long.jpg', 'Wellness Services', '')}
  </Carousel>
)

export default connect(null, null)(CarouselComponent);
