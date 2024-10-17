import React, { Component } from 'react';
import '../styles.css';
import NavBarHead from '../NavBar';
import Footer from '../Footer';

// banners
import Carousel from '../carousel'

const HomePage = () => {

    return (
        <>
  
        {/* navbar */}
        <NavBarHead></NavBarHead>
        
        {/* carousel */}
        <Carousel></Carousel>

        </>
    )

}

export default HomePage;