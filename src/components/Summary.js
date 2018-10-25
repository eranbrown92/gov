import React from "react";
import SignedOutGov from "./SignedOutGov";
import CheckoutForm from "./CheckoutForm";

class Summary extends React.Component {
  constructor() {
    super();
    this.state = {
      details: []
    };
  }
  handleFormData(data) {}
  render() {
    return (
      <div>
        {this.state.details.map(single => {
          return <SignedOutGov details={single} />;
        })}
        <CheckoutForm handleFormData={this.handleFormData.bind(this)} />
      </div>
    );
  }
}
export default Summary;
