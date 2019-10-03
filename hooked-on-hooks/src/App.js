import React from "react";
import "./App.css";
import HueBridge from "./HueBridge";
import Lights from "./Lights";

function App() {
  return (
    <div className="App">
      <HueBridge ipAddress="192.168.0.100" login="smartHome">
        <Lights />
      </HueBridge>
    </div>
  );
}

export default App;
