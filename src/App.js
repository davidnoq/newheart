import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Home from './pages/home';
import Shop from './pages/shop'; // Example additional page
import Collections from './pages/collections'; // Example additional page
import Contact from './pages/contact'; // Example additional page

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Navbar is always rendered */}
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
