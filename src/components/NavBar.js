import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const NavBar = () => {
  return (
    <>
    <div className='navbarCon'>

      <div className="navbar">

        <Link to="/" className="logo">Techno</Link>
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
          <Link to="/" className="nav-link">New Arrivals</Link>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <i className="fas fa-search"></i>
        </div>

      </div>

    </div>
    </>
  );
}

export default NavBar;