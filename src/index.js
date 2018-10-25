import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Summary from "./components/Summary";
import CheckoutForm from "./components/CheckoutForm";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <CheckoutForm />
        <Summary />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
