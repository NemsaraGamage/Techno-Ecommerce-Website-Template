import React, { useState } from "react";
import { products } from "../data/productData"; 
import '../styles.css';
import NavBarHead from '../NavBar';
import Footer from '../Footer';

const ProductList = () => {
  // State for filters
  const [searchTerm, setSearchTerm] = useState(""); 
  const [categoryFilter, setCategoryFilter] = useState(""); 
  const [minPrice, setMinPrice] = useState(""); 
  const [maxPrice, setMaxPrice] = useState("");
  const [searchColor, setSearchColor] = useState("");
  const [brandFilter, setbrandFilter] = useState("");

  // Function to handle name search input
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to handle category filter change
  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  // Function to handle minimum price input
  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  // Function to handle maximum price input
  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  // Function to search by color
  const handleColorChange = (e) => {
    setSearchColor(e.target.value);
  };

  // Function to filter color
  const handleBrandChange = (e) => {
    setbrandFilter(e.target.value);
  };

  // Function to filter products based on search term, category, and price
  const filteredProducts = products.filter((product) => {
    // Apply search filter
    const matchesSearch = product.des.toLowerCase().includes(searchTerm.toLowerCase());

    // Apply category filter 
    const matchesCategory = categoryFilter
      ? product.category === categoryFilter
      : true;

    // Apply price filter 
    const matchesPrice = (!minPrice || product.price >= parseFloat(minPrice)) && (!maxPrice || product.price <= parseFloat(maxPrice));

    // Apply color filter
    const colorSearch = product.color.toLowerCase().includes(searchColor.toLowerCase());

    // Apply category filter 
    const matchesBrand = brandFilter
      ? product.name === brandFilter
      : true;

    return matchesSearch && matchesCategory && matchesPrice && colorSearch && matchesBrand;
  });

  return (
    <>
      {/* navigation bar */}
      <NavBarHead />

      <h1 className="productHeader" >All Products</h1>

      <div className="product-page">
        <div className="content">
          <aside className="filter-section">
            <h2>Filter Products</h2>
            {/* Filter input: Search by name */}
            <input
              type="text"
              placeholder="Search by name"
              value={searchTerm}
              onChange={handleSearchChange}
            />

            {/* Filter input: Filter by category */}
            <h4 className="filter-head">Categories</h4>
            <select value={categoryFilter} onChange={handleCategoryChange}>
              <option value="">All Categories</option>
              <option value="phones">Phones</option>
              <option value="camera">Camera</option>
              <option value="laptop">Laptop</option>
              <option value="tablet">Tablet</option>
            </select>

            {/* Filter input: Filter by brand */}
            <h4 className="filter-head">Brands</h4>
            <select value={brandFilter} onChange={handleBrandChange}>
              <option value="">All Brand</option>
              <option value="Samsung">Samsung</option>
              <option value="Apple">Apple</option>
              <option value="Canon">Canon</option>
              <option value="Acer">Acer</option>
              <option value="LENOVO">LENOVO</option>
              <option value="XIAOMI">XIAOMI</option>
            </select>

            {/* Filter input: Filter by price */}
            <div className="price-filter">
              <h4>Price</h4>
              <input
                type="number"
                placeholder="Min Price"
                value={minPrice}
                onChange={handleMinPriceChange}
              />
              <input
                type="number"
                placeholder="Max Price"
                value={maxPrice}
                onChange={handleMaxPriceChange}
              />
            </div>

            {/* Filter input: by color */}
            <div className="color-filter">
              <h4>Color</h4>
              <input
                type="text"
                placeholder="Enter color"
                value={searchColor}
                onChange={handleColorChange}
              />
            </div>
          </aside>

          <section className="product-list">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.des}</p>
                <p>${product.price}</p>
                <button className='addCartBtn2'>Add to Cart</button>
              </div>
            ))}
          </section>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </>
  );
};

export default ProductList;
