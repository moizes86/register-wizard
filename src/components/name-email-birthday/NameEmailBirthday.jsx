import React, { useState } from "react";
import ErrorMessages from "../ErrorMessages";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const NameEmailBirthday = ({ loginData, validateInput, setIsSection2 }) => {
  const errors =
    !loginData.name.errors.length &&
    !loginData.email.errors.length &&
    !loginData.birthday.errors.length &&
    loginData.name.value.length &&
    loginData.email.value.length &&
    loginData.birthday.value.length;


  return (
    <div>
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
          <Form.Control type="date" name="birthday" onBlur={validateInput} />
          <ErrorMessages errors={loginData.birthday.errors} />
        </Form.Group>
      </Row>

      {errors ? <Button onClick={()=>setIsSection2(true)}>Next</Button> : <Button disabled>Next</Button>}
    </div>
  );
};

export default NameEmailBirthday;