import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './components/pages/homePage'
import NewArrivalPage from './components/pages/newArrivalPage';
import ProductPage from './components/category-Products/productsPage';
import PhoneProductPage from './components/category-Products/phoneProductsPage';
import LaptopProductPage from './components/category-Products/laptopProductsPage';
import TabletProductPage from './components/category-Products/tabletsProductsPage';
import HeadphonesProductPage from './components/category-Products/headphonesProductsPage';

function App() {
  return (
    <div className="App">
    <Router> 
      <Routes>
        {/* HomePage routes */}
        <Route index element={<HomePage />} />
        <Route path='/Techno-Ecommerce-Website-Template/' element={<HomePage />} />

        {/* Main Page */}
        <Route path="/HomePage" element={<HomePage></HomePage>} />

        {/* Product Page */}
        <Route path="/ProductsDisplayPage" element={<ProductPage></ProductPage>} />

        {/* Phone Product Page */}
        <Route path="/PhoneProductPage" element={<PhoneProductPage></PhoneProductPage>} />

        {/* Laptop Product Page */}
        <Route path="/LaptopProductPage" element={<LaptopProductPage></LaptopProductPage>} />

        {/* Tablet Product Page */}
        <Route path="/TabletProductPage" element={<TabletProductPage></TabletProductPage>} />

        {/* Headphones Product Page */}
        <Route path="/HeadphoneProductPage" element={<HeadphonesProductPage></HeadphonesProductPage>} />

        {/* New Arrival Page */}
        <Route path="/NewArrivalPage" element={<NewArrivalPage></NewArrivalPage>} />

      </Routes>
    </Router>

    </div>
  );
}

export default App;
