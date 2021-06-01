import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ImageAndHobby from "./ImageAndHobby.js";
import NameEmailBirthday from "./NameEmailBirthday";
import CityStreetNumber from "./CityStreetNumber";

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
      value: "",
      errors: [],
      validations: {
        required: true,
      },
    },
    city: {
      value: "",
      errors: [],
      classes: "",
      validations: {
        required: true,
      },
    },
    street: {
      value: "",
      errors: [],
      classes: "",
      validations: {
        required: true,
      },
    },
    number: {
      value: true,
      errors: [],
      classes: "",
      validations: {
        required: false,
      },
    },
    image: {
      value: null,
      errors: [],
      validations: {
        required: true,
        pattern: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g,
      },
    },
    hobby: {
      value: null,
      errors: [],
      validations: {
        required: false,
      },
    },
  });

  const validateInput = ({ target: { value, name } }) => {
    const newErrors = [];
    const { validations } = loginData[name];

    if (validations.required && !value) {
      newErrors.push(`${name} is required`);
    }
    if (name == "number" && value != "") {
      if (value == 0 || value < 0) {
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
        classes: newErrors.length ? "redInput" : "",
      },
    });
  };

  const [isSection2, setIsSection2] = useState(false);

  return (
    <Form>
      <Container>
        <NameEmailBirthday
          loginData={loginData}
          setLoginData={setLoginData}
          validateInput={validateInput}
          setIsSection2={setIsSection2}
        />

        {isSection2 && <p>Hey</p>}
        {/* 
        <CityStreetNumber
          loginData={loginData}
          setLoginData={setLoginData}
          validateInput={validateInput}
        />

        <ImageAndHobby validateInput={validateInput} /> */}

        {/* <Button variant="primary" type="submit">
          Submit
        </Button> */}
      </Container>
    </Form>
  );
};

export default CustomForm;
