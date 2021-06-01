import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import NameEmailBirthday from "./name-email-birthday/NameEmailBirthday";

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

  const [isSection2, setIsSection2] = useState(false)

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
        <NameEmailBirthday
          loginData={loginData}
          setLoginData={setLoginData}
          validateInput={validateInput}
          setIsSection2={setIsSection2}
        />

        {isSection2 && <p>Hey</p>}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default CustomForm;
