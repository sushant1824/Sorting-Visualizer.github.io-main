import React from "react";
import { Carousel } from 'react-bootstrap';
import image1 from '../../assets/images/1.gif';
import image2 from '../../assets/images/2.jpeg';
import image3 from '../../assets/images/3.png';
import image4 from '../../assets/images/4.jpeg';
import './slider.css';


const CarouselContainer = () => {
    return (
    <Carousel variant="dark">
      <Carousel.Item className="slider">
        <img
          className="image"
          src={image3}
          alt="First slide"
        />
      </Carousel.Item >
      <Carousel.Item className="slider"> 
        <img
          className="image"
          src={image2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className="slider">
        <img
          className="image"
          src={image4}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item className="slider">
        <img
          className="image"
          src={image1}
          alt="fourth slide"
        />
      </Carousel.Item>
    </Carousel>
    );
}

export default CarouselContainer;
