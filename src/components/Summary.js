import React from "react";
import SignedOutGov from "./SignedOutGov";
import CheckoutForm from "./CheckoutForm";

class Summary extends React.Component {
  constructor() {
    super();
    this.state = {
      details: ["one", "two"]
    };
  }
  handleFormData(data) {}
  render() {
    return (
      <div>
        <CheckoutForm handleFormData={this.handleFormData.bind(this)} />
        {this.state.details.map(single => {
          return <SignedOutGov details={single} />;
        })}
      </div>
    );
  }
}
export default Summary;
