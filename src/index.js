import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import "./styles.css";

function App() {
  let now = moment().format("MM-DD-YYYY");

  let styles = {
    backgroundColor: "red"
  };

  const numbers = [
    moment("12-25-1995").format("MM-DD-YYYY"),
    moment("12-25-1999").format("MM-DD-YYYY"),
    moment("12-25-2043").format("MM-DD-YYYY")
  ];
  const listItems = numbers.map(number => {
    return moment(number).isAfter(now) ? (
      <li key={number.toString()}>{number}</li>
    ) : (
      <li style={styles} key={number.toString()}>
        {number}
      </li>
    );
  });
  console.log(now);
  console.log({ listItems });
  return <>{listItems}</>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
