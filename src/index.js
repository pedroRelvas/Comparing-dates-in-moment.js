import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import "./styles.css";

function App() {
  let now = moment();
  const numbers = [
    "2010-10-20",
    "2015-10-20",
    "2016-10-20",
    "2015-10-22",
    "2019-10-20"
  ];
  const listItems = numbers.map(number => (
    <li key={number.toString()}>
      {number}
      {now}
      {number.isAfter(now) ? console.log("hey") : console.log("ai")}
    </li>
  ));

  return <p>{listItems}</p>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
