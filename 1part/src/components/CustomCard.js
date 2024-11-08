import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

function CustomCard() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="text-center shadow-sm">
            <Card.Img variant="top" src="your-image-url-here" alt="Card image" />
            <Card.Body>
              <Card.Title>Your Card Title</Card.Title>
              <Card.Text>
                This is a brief description of the content. Add more details here if needed.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CustomCard;
