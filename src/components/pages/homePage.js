import React, { Component } from 'react';
import '../styles.css';
import NavBarHead from '../NavBar';
import Footer from '../Footer';

// banners
import Carousel from '../carousel'

// category images 
import disCata1 from '../pics/introCata/cat1.jpg'
import disCata2 from '../pics/introCata/cat2.jpg'
import disCata3 from '../pics/introCata/cat3.jpg'
import disCata4 from '../pics/introCata/cat4.jpg'

const HomePage = () => {

    return (
        <>
  
        {/* navbar */}
        <NavBarHead></NavBarHead>
        
        {/* carousel */}
        <Carousel></Carousel>

        {/* display category */}

        <div className='displayCata'>

            <img src={disCata1}></img>
            <img src={disCata2}></img>
            <img src={disCata3}></img>
            <img src={disCata4}></img>

        </div>

        </>
    )

}

export default HomePage;