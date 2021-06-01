import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

const ImageAndHobby = ({ validateInput }) => {
  return (
    <>
      <Card className="text-center">
        <Card.Header>Register Wizard</Card.Header>
        <Card.Body>
          <Row className="mb-2">
            <Col>
              <Form.Group as={Col} controlId="formGridImage">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  name="image"
                  type="text"
                  placeholder="Enter image url"
                  onBlur={validateInput}
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group as={Col} controlId="formGridHobby">
                <Form.Label>Hobby</Form.Label>
                <Form.Control
                  name="hobby"
                  type="text"
                  placeholder="Enter Hobby"
                  onBlur={validateInput}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col md={4}>
              <Link exact to="/cityStreetNumber">
                <Button variant="primary" type="submit">
                  Previous
                </Button>
              </Link>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer className="text-muted">
          Moshe, Jacob and Dor are in the house
        </Card.Footer>
      </Card>
    </>
  );
};

export default ImageAndHobby;
