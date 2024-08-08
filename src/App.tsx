import React from "react";
import "./App.css";
import { NumberInput } from "./components";

function App() {
  return (
    <div className="container">
      <div className="App">
        <NumberInput />
      </div>
      <div className="App_DisplayPhone">Please Open Another Phone & Desktop</div>
    </div>
  );
}

export default App;
