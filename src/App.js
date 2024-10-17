import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './components/pages/homePage'

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

      </Routes>
    </Router>

    </div>
  );
}

export default App;
