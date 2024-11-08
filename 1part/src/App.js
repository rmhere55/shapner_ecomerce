// src/App.js
import React from 'react';
import Header from './components/Header.js';
import HeroSection from './components/HeroSection.js';
import ProductShowcase from './components/ProductShowcase.js';
import CategorySection from './components/CategorySection.js';
import Footer from './components/Footer.js';

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <CategorySection />
      <ProductShowcase />
      <Footer />
    </div>
  );
};

export default App;
