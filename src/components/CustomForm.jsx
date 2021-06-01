import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import ImageAndHobby from "./ImageAndHobby.js";

const CustomForm = () => {
  const [loginData, setLoginData] = useState({
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
        <ImageAndHobby validateInput={validateInput} />
      </Form>
    </Container>
  );
};

export default CustomForm;
