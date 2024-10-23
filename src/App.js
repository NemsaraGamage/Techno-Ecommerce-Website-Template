import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './components/pages/homePage'
import ProductPage from './components/pages/productsPage';
import PhoneProductPage from './components/pages/phoneProductsPage';
import LaptopProductPage from './components/pages/laptopProductsPage';
import NewArrivalPage from './components/pages/newArrivalPage';

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

        {/* New Arrival Page */}
        <Route path="/NewArrivalPage" element={<NewArrivalPage></NewArrivalPage>} />

      </Routes>
    </Router>

    </div>
  );
}

export default App;
