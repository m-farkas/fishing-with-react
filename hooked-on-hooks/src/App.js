import React from "react";
import "./App.css";
import HueBridge from "./HueBridge";
import Lights from "./Lights";

function App() {
  return (
    <div className="App">
      <HueBridge ipAddress="127.0.0.1" login="smartHome">
        <Lights />
      </HueBridge>
    </div>
  );
}

export default App;
