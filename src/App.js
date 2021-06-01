import React from "react";
import "./App.css";

import CustomForm from "./components/CustomForm";
import DisplayData from "./components/display-data/DisplayData";

function App() {
  return (
    <div className="App">
      <CustomForm />
      <DisplayData />
    </div>
  );
}

export default App;
