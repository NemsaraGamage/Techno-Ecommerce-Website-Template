import React, { Component } from 'react';
import '../styles.css';
import NavBarHead from '../NavBar';
import Footer from '../Footer';

// npm run deploy

// banners
import Carousel from '../carousel'

// intro category images 
import disCata1 from '../pics/introCata/cat1.jpg'
import disCata2 from '../pics/introCata/cat2.jpg'
import disCata3 from '../pics/introCata/cat3.jpg'
import disCata4 from '../pics/introCata/cat4.jpg'
import disCata5 from '../pics/introCata/cat5.jpg'
import disCata6 from '../pics/introCata/cat6.jpg'

// item carousel
import ItemCarousel from '../itemCarousel1'
import ItemCarousel2 from '../itemCarousel2'
import ItemCarousel3 from '../itemCarousel3'
import ItemCarousel4 from '../itemCarousel4'
import ItemCarousel5 from '../itemCarousel5'
import ItemCarousel6 from '../itemCarousel6'
import ItemCarousel7 from '../itemCarousel7'
import ItemCarousel8 from '../itemCarousel8'

// mid banner
import midban1 from '../pics/banners/midBan1.jpg';
import midban2 from '../pics/banners/midban2.jpg';
import midban3 from '../pics/banners/midban3.jpg';
import midban4 from '../pics/banners/midban4.jpg';

const HomePage = () => {

    return (
        <>
  
        {/* navbar */}
        <NavBarHead></NavBarHead>
        
        {/* carousel */}
        <Carousel></Carousel>

        {/* intro category */}
        <div className='displayCata'>
            <img src={disCata1}></img>
            <img src={disCata2}></img>
            <img src={disCata3}></img>
            <img src={disCata4}></img>
            <img src={disCata5}></img>
            <img src={disCata6}></img>
        </div>

        {/* item carousels */}
        <div className='itemCarouselContainer'>
            <h3 className='itemCarouselHead'>Hot Deals</h3>
            <ItemCarousel></ItemCarousel>
        </div>

        <div className='itemCarouselContainer'>
            <h3 className='itemCarouselHead'>Mobile Phones</h3>
            <ItemCarousel2></ItemCarousel2>
        </div>

        {/* mid banner */}
        <br></br>
        <div className="midBannerCat">
            <img src={midban1} alt="Banner" />
            <div className="bannerOverlay">
                <button>See More</button>
            </div>
        </div>
        <br></br>

        {/* item carousels */}
        <div className='itemCarouselContainer'>
            <h3 className='itemCarouselHead'>Laptops</h3>
            <ItemCarousel3></ItemCarousel3>
        </div>

        <br></br>
        <div className='itemCarouselContainer'>
            <h3 className='itemCarouselHead'>Gift Card's</h3>
            <ItemCarousel4></ItemCarousel4>
        </div>

        <br></br>
        <br></br>
        <div className='itemCarouselContainer'>
            <h3 className='itemCarouselHead'>Gaming</h3>
            <ItemCarousel5></ItemCarousel5>
        </div>

        {/* middle banner */}
        <br></br>
        <div className="middleBanner2">
            <img src={midban2} alt="Banner" />
            <img src={midban3} alt="Banner" />
        </div>

        {/* item carousels */}
        <div className='itemCarouselContainer'>
            <h3 className='itemCarouselHead'>Tablets</h3>
            <ItemCarousel6></ItemCarousel6>
        </div>

        <div className='itemCarouselContainer'>
            <h3 className='itemCarouselHead'>Cameras</h3>
            <ItemCarousel7></ItemCarousel7>
        </div>

        {/* mid banner */}
        <br></br>
        <div className="midBannerCat">
            <img src={midban4} alt="Banner" />
            <div className="bannerOverlay">
                <button>See More</button>
            </div>
        </div>
        <br></br>

        {/* item carousels */}
        <div className='itemCarouselContainer'>
            <h3 className='itemCarouselHead'>Monitors</h3>
            <ItemCarousel8></ItemCarousel8>
        </div>

        {/* footer */}
        <Footer></Footer>

        </>
    )

}

export default HomePage;