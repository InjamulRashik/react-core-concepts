import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const names = ["Injamul", "Haque", "Rashik", "Yo"];
  const products = [
    { name: "PhotoShop", price: "$99.99" },
    { name: "LightRoom", price: "$89.99" },
    { name: "AfterEffect", price: "$69.99" },
  ];
  // const productNames = products.map((product) => product.name);
  // console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>My First React Component</p>
        <Counter></Counter>
        <Users></Users>
        <Products Name={products[0].name} Price={products[0].price}></Products>
        <Products Name={products[1].name} Price={products[1].price}></Products>
        <Products Name={products[2].name} Price={products[2].price}></Products>

        <Person Name={names[0]} Type="A Looser"></Person>
        <Person Name={names[1]} Type="A Winner"></Person>
        <Person Name={names[2]} Type="A Sucker"></Person>
        <Person Name={names[3]} Type="Ultimate Winner"></Person>
      </header>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    setCount(count - 1);
  };
  const btnStyle = {
    backgroundColor: "cyan",
    border: "none",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "10px",
  };
  return (
    <div>
      <h1>Count : {count}</h1>
      <button style={btnStyle} onClick={handleIncrease}>
        Increase
      </button>{" "}
      <button style={btnStyle} onClick={handleDecrease}>
        Decrease
      </button>
    </div>
  );
}
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <div>
      <h1>Dynamic Users : {users.name}</h1>
      <ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
function Products(props) {
  const productStyle = {
    border: "2px cyan solid",
    backgroundColor: "none",
    marginBottom: "5px",
    padding: "20px",
  };
  const btnStyle = {
    backgroundColor: "cyan",
    border: "none",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "10px",
  };
  return (
    <div style={productStyle}>
      <h1>Product Name : {props.Name}</h1>
      <h2>Category : {props.Price} </h2>
      <button style={btnStyle}>Buy Now</button>
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
