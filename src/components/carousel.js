import React from 'react';
import { Carousel } from 'antd';
import './styles.css';

// banners
import ban1 from '../components/pics/banners/ban1.jpg';
import ban2 from '../components/pics/banners/ban2.jpg';
import ban3 from '../components/pics/banners/ban3.jpg';
import ban4 from '../components/pics/banners/ban4.jpg';

const CarouselComp = () => (
    <Carousel autoplay>
        <div className="carousel-slide">
        <img src={ban2} alt="Image 1" />
        </div>
        <div className="carousel-slide">
        <img src={ban4} alt="Image 4" />
        </div>
        <div className="carousel-slide">
        <img src={ban1} alt="Image 2" />
        </div>
        <div className="carousel-slide">
        <img src={ban3} alt="Image 3" />
        </div>
    </Carousel>

);

export default CarouselComp;