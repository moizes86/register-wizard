import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

const ImageAndHobby = ({ validateInput }) => {
  return (
    <>
      <Row className="mb-3">
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

      <Row className="mb-3">
        <Col md={1}>
          <Link exact to="/cityStreetNumber">
            <Button variant="primary" type="submit">
              Previous
            </Button>
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default ImageAndHobby;
