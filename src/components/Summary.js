import React from "react";
import SignedOutGov from "./SignedOutGov";

class Summary extends React.Component {
  constructor() {
    super();
    this.state = {
      details: [1, 2, 3]
    };
  }
  render() {
    return (
      <div>
        {this.state.details.map(single => {
          return <SignedOutGov details={single} />;
        })}
      </div>
    );
  }
}
export default Summary;
