import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Drawer } from '@mui/material';

import AccountPopup from './accountPopUp';

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <>
      <div className='navbarCon'>
        <div className="navbar">
          
          {/* Mobile Menu Icon */}
          <div className="mobile-menu-icon" onClick={handleDrawerToggle}>
            {mobileOpen ? (
              <CloseIcon style={{ color: 'white', fontSize: '30px' }} />
            ) : (
              <MenuIcon style={{ color: 'white', fontSize: '30px' }} />
            )}
          </div>

          <Link to="/" className="logo">Techno</Link>
          <div className="desktop-nav">
            <div className="nav-links">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/" className="nav-link">Brands</Link>
              <div className="dropdown">
                <Link to="/ProductsDisplayPage" className="nav-link">Categories</Link>
                <div className="dropdown-content">
                  <Link to="/PhoneProductPage">Phones</Link>
                  <Link to="/LaptopProductPage">Laptops</Link>
                  <Link to="/ProductsDisplayPage">Tablets</Link>
                  <Link to="/ProductsDisplayPage">Cameras</Link>
                  <Link to="/ProductsDisplayPage">Headphones</Link>
                </div>
              </div>
              <Link to="/NewArrivalPage" className="nav-link">New Arrivals</Link>
            </div>
            <div className="search-bar">
              <input type="text" placeholder="Search..." />
              <i className="fas fa-search"></i>
            </div>
            <div className='nav-icons'>
              <AccountCircleIcon
                style={{ color: 'white', fontSize: '30px', marginRight: '15px', cursor: 'pointer' }}
                onClick={openPopup} // Open the popup when clicked
              />
              <ShoppingCartIcon style={{ color: 'white', fontSize: '29px' }} />
            </div>
          </div>
          
        </div>
      </div>

      {/* Account Popup */}
      <AccountPopup isOpen={isPopupOpen} closePopup={closePopup} />

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        className="mobile-drawer"
      >
        <div className="mobile-nav">
          <IconButton onClick={handleDrawerToggle} className="close-menu-btn">
            <CloseIcon />
          </IconButton>
          <Link to="/" className="nav-link" onClick={handleDrawerToggle}>Home</Link>
          <Link to="/" className="nav-link" onClick={handleDrawerToggle}>Brands</Link>
          <div className="dropdown">
            <Link to="/ProductsDisplayPage" className="nav-link">Categories</Link>
            <div className="dropdown-content">
              <Link to="/PhoneProductPage" onClick={handleDrawerToggle}>Phones</Link>
              <Link to="/LaptopProductPage" onClick={handleDrawerToggle}>Laptops</Link>
              <Link to="/ProductsDisplayPage" onClick={handleDrawerToggle}>Tablets</Link>
              <Link to="/ProductsDisplayPage" onClick={handleDrawerToggle}>Cameras</Link>
              <Link to="/ProductsDisplayPage" onClick={handleDrawerToggle}>Headphones</Link>
            </div>
          </div>
          <Link to="/NewArrivalPage" className="nav-link" onClick={handleDrawerToggle}>New Arrivals</Link>
        </div>
      </Drawer>
    </>
  );
};

export default NavBar;
