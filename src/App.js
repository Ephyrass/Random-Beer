import React from "react";
import "./App.css";
import CallApiBeer from "./CallApiBeer";

function App() {
  return (
    <div className="App">
      <h1
        style={{
          textAlign: "center",
          fontFamily: "Roboto",
          fontSize: "50px"
        }}
      >
        Random Beer
      </h1>
      <CallApiBeer />
    </div>
  );
}

export default App;
