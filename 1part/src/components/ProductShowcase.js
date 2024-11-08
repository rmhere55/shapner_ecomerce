// src/components/ProductShowcase.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

const products = [
  { id: 1, image: 'https://via.placeholder.com/150', title: 'Product 1', description: 'Best product ever', price: 29.99 },
  { id: 2, image: 'https://via.placeholder.com/150', title: 'Product 2', description: 'Great for daily use', price: 49.99 },
  { id: 3, image: 'https://via.placeholder.com/150', title: 'Product 3', description: 'Top-rated product', price: 19.99 },
  { id: 4, image: 'https://via.placeholder.com/150', title: 'Product 4', description: 'Popular choice', price: 39.99 },
];

const ProductShowcase = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center">Featured Products</h2>
      <Row>
        {products.map(product => (
          <Col key={product.id} sm={6} md={4} lg={3}>
            <ProductCard {...product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductShowcase;
