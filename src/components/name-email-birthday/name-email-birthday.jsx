import React from "react";
import FormErrorMessages from "../form-error-messages/form-error-messages";
import { Link } from "react-router-dom";

// Styles
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const NameEmailBirthday = ({ loginData, validateInput }) => {
  const obj = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : "";
  const errors =
    !loginData.name.errors.length &&
    !loginData.email.errors.length &&
    !loginData.birthday.errors.length &&
    loginData.name.value.length &&
    loginData.email.value.length &&
    loginData.birthday.value.length;

  const setInfo = () => {
    const obj = {
      name: loginData.name.value,
      email: loginData.email.value,
      birthday: loginData.birthday.value,
    };
    localStorage.setItem("user", JSON.stringify(obj));
  };

  return (
    <Container>
      <Card className="text-center">
        <Card.Header>Register Wizard</Card.Header>
        <Card.Body className="">
          <Row className="mb-3">
            <Col>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  onBlur={validateInput}
                  defaultValue={obj.name}
                  className={`${loginData.name.classes}`}
                />
                <FormErrorMessages errors={loginData.name.errors} />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  defaultValue={obj.email}
                  onBlur={validateInput}
                  className={`${loginData.email.classes}`}
                />
                <FormErrorMessages errors={loginData.email.errors} />
              </Form.Group>
            </Col>

            <Col xs={3}>
              <Form.Group className="mb-3" controlId="formGridBirthday">
                <Form.Label>Birthday</Form.Label>
                <Form.Control
                  type="date"
                  name="birthday"
                  defaultValue={obj.birthday}
                  onBlur={validateInput}
                  className={`${loginData.birthday.classes}`}
                />
                <FormErrorMessages errors={loginData.birthday.errors} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 4, offset: 8 }}>
              {errors ? (
                <Link to="/city-street-number">
                  <Button onClick={setInfo}>Next</Button>
                </Link>
              ) : (
                <Button disabled>Next</Button>
              )}
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer className="text-muted">Dor, Moshe and Jacob are in the house</Card.Footer>
      </Card>
    </Container>
  );
};

export default NameEmailBirthday;
