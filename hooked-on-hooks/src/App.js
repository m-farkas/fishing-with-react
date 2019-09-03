import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HueBridge from "./HueBridge";
import Lights from "./Lights";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <form>
          <label htmlFor="ipAddress">IP Adress of Hue Bridge</label>
          <input
            type="text"
            name="ipAddress"
            id="ipAddress"
            value="192.168.0.100"
          />
          <br />
          <label htmlFor="userName">User Name</label>
          <input type="text" name="userName" id="userName" value="" />
          <br />
        </form>
        <HueBridge ipAddress="192.168.0.100" login="smartHome">
          <Lights />
        </HueBridge>
      </header>
    </div>
  );
}

export default App;
