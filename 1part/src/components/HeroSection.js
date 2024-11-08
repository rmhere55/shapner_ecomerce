// src/components/HeroSection.js
import React from 'react';
import { Container, Button } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <div
      style={{
        backgroundImage: 'url(https://via.placeholder.com/1200x500)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '60vh',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}
    >
      <Container>
        <h1 style={{color: ' black'}}>Welcome to Our Store</h1>
        <p style={{color: ' black'}}>Discover our collection of amazing products!</p>
        <Button class="latest-album">Get our Latest Album</Button><br/>
        <button class="play-btn"> ►  </button>
      </Container>
    </div>
  );
};

export default HeroSection;
