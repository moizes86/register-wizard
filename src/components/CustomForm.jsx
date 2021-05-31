import React, { useState } from "react";
import ErrorMessage from './ErrorMessages';

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ErrorMessages from "./ErrorMessages";

const CustomForm = () => {
  const [loginData, setLoginData] = useState({
    name: {
      value: "",
      errors: [],
      validations: {
        required: true,
        pattern: /(^[a-zA-Z][0-9a-zA-Z]{2,}.[a-zA-Z][0-9a-zA-Z]{2,})/g,
      },
    },

    email: {
      value: "",
      errors: [],
      validations: {
        required: true,
        pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      },
    },

    birthday: {
      value: null,
      errors: [],
      validations: {
        required: true,
      },
    },

    city: {
      value: null,
      errors: [],
      validations: {
        required: true,
      },
    },

    street: {
      value: null,
      errors: [],
      validations: {
        required: true,
      },
    },

    number: {
      value: null,
      errors: [],
      validations: {
        required: false,
      },
    },

    image: {
      value: null,
      errors: [],
      validations: {
        required: true,
      },
    },
    hobbies: {
      value: null,
      errors: [],
      validations: {
        required: false,
      },
    },
  });

  const validateInput = ({ target: { value, name } }) => {
      console.log(name);
      console.log(value);
    const newErrors = [];
    const { validations } = loginData[name];

    if (validations.required && !value) {
      newErrors.push(`${name} is required`);
    }

    if (validations.pattern && !validations.pattern.test(value)) {
      newErrors.push(`Invalid ${name} value`);
    }

    setLoginData({
      ...loginData,
      [name]: {
        ...loginData[name],
        value: value,
        errors: newErrors,
      },
    });
  };

  return (
    <Container>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter name" onBlur={validateInput} />
            <ErrorMessages errors={loginData.name.errors} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              onBlur={validateInput}
            />
            <ErrorMessages errors={loginData.email.errors} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridBirthday">
            <Form.Label>Birthday</Form.Label>
            <Form.Control
              type="date"
              name="birthday"
              onBlur={validateInput}
            />
            <ErrorMessages errors={loginData.birthday.errors} />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default CustomForm;
