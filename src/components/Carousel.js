import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import MainImage from '../assets/main.JPG'


const ImageCarousel = () => {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={MainImage}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={MainImage}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }


  export default ImageCarousel;