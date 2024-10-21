import React, { useState } from "react";
import { products } from "../data/productData"; 
import '../styles.css';
import NavBarHead from '../NavBar';
import Footer from '../Footer';

const ProductList = () => {
  // State for filters
  const [searchTerm, setSearchTerm] = useState(""); // For searching by name
  const [categoryFilter, setCategoryFilter] = useState(""); // For filtering by category

  // Function to handle name search input
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to handle category filter change
  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  // Function to filter products based on search term and category
  const filteredProducts = products.filter((product) => {
    // Apply search filter
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());

    // Apply category filter if selected
    const matchesCategory = categoryFilter
      ? product.category === categoryFilter
      : true;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
    {/* navigation bar */}
    <NavBarHead />

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
          <select value={categoryFilter} onChange={handleCategoryChange}>
            <option value="">All Categories</option>
            <option value="phones">Phones</option>
            <option value="camera">Camera</option>
            <option value="laptop">Laptop</option>
          </select>
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
