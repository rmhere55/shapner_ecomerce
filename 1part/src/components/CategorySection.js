// src/components/CategorySection.js
import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const categories = [
  { id: 1, title: 'Electronics', image: 'https://via.placeholder.com/100' },
  { id: 2, title: 'Fashion', image: 'https://via.placeholder.com/100' },
  { id: 3, title: 'Home Decor', image: 'https://via.placeholder.com/100' },
  { id: 4, title: 'Books', image: 'https://via.placeholder.com/100' }
];

const CategorySection = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center">Shop by Category</h2>
      <Row>
        {categories.map(category => (
          <Col key={category.id} sm={6} md={3}>
            <Card className="text-center m-2">
              <Card.Img variant="top" src={category.image} style={{ height: '150px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{category.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CategorySection;
