import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import FormErrorMessages from "../form-error-messages/form-error-messages";

const ImageAndHobbies = ({ validateInput, loginData }) => {
  const obj = localStorage.getItem("user3")
    ? JSON.parse(localStorage.getItem("user3"))
    : "";

  const errors = !loginData.image.errors.length && loginData.image.value.length;

  const setInfo = () => {
    const obj = {
      image: loginData.image.value,
      hobbies: loginData.hobbies.value,
    };
    localStorage.setItem("user3", JSON.stringify(obj));
  };

  const showCard = () => {};

  return (
    <>
      <Container>
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
                    defaultValue={obj.image}
                    placeholder="Enter image url"
                    onBlur={validateInput}
                    className={loginData.image.classes}
                  />
                </Form.Group>
                <FormErrorMessages errors={loginData.image.errors} />
              </Col>

              <Col>
                <Form.Group as={Col} controlId="formGridHobby">
                  <Form.Label>Hobbies</Form.Label>
                  <Form.Control
                    name="hobbies"
                    type="text"
                    defaultValue={obj.hobbies}
                    placeholder="Enter Hobbies"
                    onBlur={validateInput}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col md={4}>
                <Link exact to="/city-street-number">
                  <Button variant="primary" type="submit">
                    Previous
                  </Button>
                </Link>
              </Col>

              <Col md={{ span: 4, offset: 4 }}>
                {errors ? (
                  <Button
                    onClick={() => {
                      setInfo();
                      showCard();
                    }}
                  >
                    Display
                  </Button>
                ) : (
                  <Button disabled>Display</Button>
                )}
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer className="text-muted">
            Moshe, Jacob and Dor are in the house
          </Card.Footer>
        </Card>
      </Container>
    </>
  );
};

export default ImageAndHobbies;
