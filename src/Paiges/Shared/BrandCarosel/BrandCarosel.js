import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../../../assets/brands/Brand1.png'; 
import Brand2 from '../../../assets/brands/Brand2.jpg';


const BrandCarosel = () => {
    return (
        <Carousel>
        <Carousel.Item>
        <img src={Brand1} className="d-block w-100" alt="..."/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={Brand2} className="d-block w-100" alt="..."/>
        </Carousel.Item>
      </Carousel>
    );
};

export default BrandCarosel;