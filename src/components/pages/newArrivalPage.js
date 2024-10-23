import React, { Component } from 'react';
import '../styles.css';
import NavBarHead from '../NavBar';
import Footer from '../Footer';

// items
import NewArrivalItem from '../newArrivalItem'

// banners
import ban5 from '../pics/banners/ban5.jpg';
import ban6 from '../pics/banners/ban6.jpg';
import ban7 from '../pics/banners/ban7.jpg';
import ban8 from '../pics/banners/ban8.jpg';

const NewArrival = () => {

    return(
        <>

        {/* navbar */}
        <NavBarHead></NavBarHead>

        {/* banner */}
        <div className="newArrivalBan">
            <img src={ban5} alt="Banner" />
        </div>

        {/* item carousels */}
        <div className='itemCarouselContainer'>
            <h3 className='itemCarouselHead'>New Arrivals</h3>
            <NewArrivalItem></NewArrivalItem>
        </div>

        {/* banner */}
        <br></br>
        <br></br>
        <div className="newArrivalBan">
            <img src={ban6} alt="Banner" />
        </div>

        {/* banner */}
        <br></br>
        <div className="newArrivalBan">
            <img src={ban7} alt="Banner" />
        </div>

        {/* banner */}
        <br></br>
        <div className="newArrivalBan">
            <img src={ban8} alt="Banner" />
        </div>


        {/* footer */}
        <Footer></Footer>

        </>
    )

}

export default NewArrival;
