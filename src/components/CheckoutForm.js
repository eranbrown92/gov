import React from "react";

class CheckoutForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      reason: "",
      bldg: "",
      to: "",
      ti: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleReason = this.handleReason.bind(this);
    this.handleBldg = this.handleBldg.bind(this);
    this.handleTo = this.handleTo.bind(this);
    this.handleTi = this.handleTi.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.handleFormData(this.state);
  }
  handleName(e) {
    this.setState({
      name: e.target.value
    });
  }
  handleReason(e) {
    this.setState({
      reason: e.target.value
    });
  }
  handleBldg(e) {
    this.setState({
      bldg: e.target.value
    });
  }
  handleTo(e) {
    this.setState({
      to: e.target.value
    });
  }
  handleTi(e) {
    this.setState({
      ti: e.target.value
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name</label>
            <input type="text" name="name" onChange={this.handleName} />
          </div>
          <div>
            <label>Reason</label>
            <input type="text" name="reason" onChange={this.handleReason} />
          </div>
          <div>
            <label>Building</label>
            <input type="text" name="bldg" onChange={this.handleBldg} />
          </div>
          <div>
            <label>Time Out</label>
            <input type="time" name="to" onChange={this.handleTo} />
          </div>
          <div>
            <label>Time In</label>
            <input type="time" name="ti" onChange={this.handleTi} />
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}
export default CheckoutForm;
