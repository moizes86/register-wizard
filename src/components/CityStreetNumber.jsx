import React from "react";
import ErrorMessages from "./ErrorMessages";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const CityStreetNumber = ({ loginData, validateInput, setIsSection2 }) => {
  const errors =
    !loginData.city.errors.length &&
    !loginData.street.errors.length &&
    !loginData.number.errors.length &&
    loginData.city.value.length &&
    loginData.street.value.length &&
    loginData.number.value.length;

  return (
    <div>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control
            className={`${loginData.city.classes}`}
            name="city"
            onBlur={validateInput}
            placeholder="Enter City"
          />
          <ErrorMessages errors={loginData.city.errors} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Street</Form.Label>
          <Form.Control
            className={`${loginData.street.classes}`}
            name="street"
            onBlur={validateInput}
            placeholder="Enter Street"
          />
          <ErrorMessages errors={loginData.street.errors} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Number</Form.Label>
          <Form.Control
            className={`${loginData.street.classes}`}
            name="number"
            onBlur={validateInput}
            placeholder="Enter Number"
          />
          <ErrorMessages errors={loginData.number.errors} />
        </Form.Group>
      </Row>

      <Row>
        <Col md={4}>
          <Link to="/">
            <Button onClick={""}> go back </Button>{" "}
          </Link>
        </Col>
        <Col md={{ span: 4, offset: 4 }}>
          <Link to="imageAndHobby">
            {errors ? (
              <Button onClick={()=>{
                const obj = {
                  city: loginData.city.value,
                  street:loginData.street.value,
                  number:loginData.number.value
                }
                let obj2= JSON.parse(localStorage.getItem('testObject'));
                localStorage.setItem('testObject', JSON.stringify({...obj,...obj2}));
                
              }}>Next</Button>
            ) : (
              <Button disabled>Next</Button>
            )}
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default CityStreetNumber;
