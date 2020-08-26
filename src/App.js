import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const names = ["Injamul", "Haque", "Rashik", "Yo"];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>My First React Paragraph</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Person Name={names[0]} Type="A Looser"></Person>
        <Person Name={names[1]} Type="A Winner"></Person>
        <Person Name={names[2]} Type="A Sucker"></Person>
        <Person Name={names[3]} Type="Ultimate Winner"></Person>
      </header>
    </div>
  );
}
function Person(props) {
  return (
    <div
      style={{ border: "2px solid #61dafb", margin: "10px", padding: "2px" }}
    >
      <h1>Name: {props.Name} </h1>
      <p>Type: {props.Type}</p>
    </div>
  );
}

export default App;
