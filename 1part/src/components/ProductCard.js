// src/components/ProductCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ image, title, description, price }) => {
  return (
    <Card style={{ width: '18rem' }} className="m-3">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Buy Now - ${price}</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
