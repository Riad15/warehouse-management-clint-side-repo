import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from './Picture/banner.jpg'

const Banner = () => {
    return (
        <Carousel id='home' >
            <Carousel.Item>
                <img className="d-block w-100" src={banner1} alt='slide' />
                <Carousel.Caption>
                    <h3>Phone Store</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>


        </Carousel>

    );
};

export default Banner;