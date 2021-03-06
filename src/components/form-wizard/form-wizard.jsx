import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

// Components
import NameEmailBirthday from "../name-email-birthday/name-email-birthday";
import CityStreetNumber from "../city-street-number/city-street-number";
import ImageAndHobbies from "../image-and-hobbies/image-and-hobbies";

// Styles
import "./form-wizard.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import DisplayData from "../display-data/display-data";

const FormWizrad = () => {
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
      value: "",
      errors: [],
      classes: "",
      validations: {
        required: false,
      },
    },

    image: {
      value: "",
      errors: [],
      classes: "",
      validations: {
        required: true,
        pattern:
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g,
      },
    },

    hobbies: {
      value: "",
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

  return (
    <Form>
      <Switch>
        <Route exact path="/">
          <NameEmailBirthday loginData={loginData} validateInput={validateInput} />
        </Route>
        <Route exact path="/city-street-number">
          <CityStreetNumber loginData={loginData} validateInput={validateInput} />
        </Route>
        <Route exact path="/image-and-hobbies">
          <ImageAndHobbies loginData={loginData} validateInput={validateInput} />
        </Route>
        <Route exact path="/display-data">
          <DisplayData />
        </Route>
      </Switch>
    </Form>
  );
};

export default FormWizrad;
