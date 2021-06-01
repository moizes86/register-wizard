import React, { useState } from "react";
import "./yakovs.css";

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const CustomForm = () => {
  const [loginData, setLoginData] = useState({

    city: {
      value: null,
      errors: [],
      classes:"",
      validations: {
        required: true,
      },
    },

    street: {
      value: null,
      errors: [],
      classes:"",
      validations: {
        required: true,
      },
    },

    number: {
      value: true,
      errors: [],
      classes:"",
      validations: {
        required: false,
      },
    },
  });

  const validateInput = ({ target: { value, name } }) => {
    const newErrors = [];
    const { validations } = loginData[name];

    if (validations.required && !value ) {
      newErrors.push(`${name} is required`);
    }
    if(name == "number" && value != ""){
      if (value == 0 || value < 0 ){
        newErrors.push(`${name} should be more than 0`);
      }
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
        classes:(newErrors.length)? 'redInput' : "",
      },
    });
    
  };

  function back(){}
  function check(){
    if(loginData.city.value && loginData.street.value && loginData.number.value){
      console.log("will go to Dor");
    }
    else{
      alert("You need to fill all the required parts")
    }
  }

  return (
    <Container>

      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control className = {`${loginData.city.classes}`} name='city' onBlur={validateInput} placeholder="Enter City"/>
            <span>{loginData.city.errors[0]}</span>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Street</Form.Label>
            <Form.Control className = {`${loginData.street.classes}`} name='street' onBlur={validateInput} placeholder="Enter Street"/>
            <span>{loginData.street.errors[0]}</span>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Number</Form.Label>
            <Form.Control className = {`${loginData.street.classes}`} name='number' onBlur={validateInput} placeholder="Enter Number"/>
            <span>{loginData.number.errors[0]}</span>
          </Form.Group>
        </Row>
      </Form>

      <Row>
        <Col md={4}> <Button onClick = {back}> go back </Button> </Col>
        <Col md={{ span: 4, offset: 4 }}> <Button onClick={check}> next </Button> </Col>
      </Row>      
    </Container>
  );
};

export default CustomForm;
