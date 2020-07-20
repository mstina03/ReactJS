import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';


function ShoppingTitle(props) {
  return (
    <div>
      <header className="App">
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
      </header>
      <h1>{props.title}</h1>
      <h2>Total Number of Items: {props.numItems}</h2>
    </div>    

  )
}

function ListItem(props) {
  return <li>{props.item}</li>
}

function ShoppingList(props) {
  return (
    <div>
      <h3>{props.header}</h3>
      <ol>
        <ListItem item={props.items[0]} />
        <ListItem item={props.items[1]} />
        <ListItem item={props.items[2]} />
      </ol>
    </div>
  )
}

function ShoppingApp(props) {

  return (
    <div>
      <ShoppingTitle title="My Shopping List" numItems="9" />
      <ShoppingList header="Food" items={["Apple", "Bread", "Cheese"]} />
      <ShoppingList header="Clothes" items={["Shirt", "Pants", "Hat"]} />
      <ShoppingList header="Supplies" items={["Pen", "Paper", "Glue"]} />
    </div>
  )
}

ReactDOM.render(
  <ShoppingApp />,
  document.getElementById("root")
)

export default ShoppingApp;
