import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./CustomForm.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import NameEmailBirthday from "./NameEmailBirthday";
import CityStreetNumber from "./CityStreetNumber";
import ImageAndHobby from "./ImageAndHobby.js";

const CustomForm = () => {
  const [loginData, setLoginData] = useState({
    name: {
      value: "",
      errors: [],
      validations: {
        required: true,
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
        <Switch>
          <Route exact path="/">
            <NameEmailBirthday
              loginData={loginData}
              validateInput={validateInput}
              setIsSection2={setIsSection2}
            />
          </Route>
          <Route exact path="/cityStreetNumber">
            <CityStreetNumber
              loginData={loginData}
              validateInput={validateInput}
              setIsSection2={setIsSection2}
            />
          </Route>
          <Route exact path="/imageAndHobby">
            <ImageAndHobby validateInput={validateInput} />
          </Route>
        </Switch>
      </Container>
    </Form>
  );
};

export default CustomForm;
