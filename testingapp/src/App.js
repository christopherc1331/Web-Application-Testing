import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Display from "./Components/Display/Display.js";
import Dashboard from "./Components/Dashboard/Dashboard.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Display />
        <Dashboard />
      </header>
    </div>
  );
}

export default App;
