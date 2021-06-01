import React from "react";
import "./App.css";

import CustomForm from "./components/CustomForm";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className="App">
      <Container>
        <CustomForm />
        <Link to="/display-data">
          <Button>Display Data</Button>
        </Link>
      </Container>
    </div>
  );
}

export default App;
