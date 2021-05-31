import React, { useState } from 'react';


import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

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

     address: {
       value: "",
       errors: [],
       validations: {
         required: true,
       },
     },

     course: {
       value: "",
       errors: [],
       validations: {
         required: true,
       },
     },

     gender: {
       value: null,
       errors: [],
       validations: {
         required: true,
       },
     },
   });
    return <Form></Form>;
}

export default CustomForm;