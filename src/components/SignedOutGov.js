import React from "react";

class SignedOutGov extends React.Component {
  render() {
    const { details } = this.props;
    return <div>{details}</div>;
  }
}
export default SignedOutGov;
