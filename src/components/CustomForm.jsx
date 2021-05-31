import React, { useState } from 'react';


import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const CustomForm = ()=>{
 const [loginData, setLoginData] = useState({
     name: {
       value: "",
       errors: [],
       validations: {
         required: true,
         pattern: /^[a-zA-Z][0-9a-zA-Z]{5,}/g,
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
    return (
      <Form>
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

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>

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

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
}

export default CustomForm;