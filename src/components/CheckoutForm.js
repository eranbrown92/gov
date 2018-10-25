import React from "react";

class CheckoutForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <div>
            <label>Name</label>
            <input type="text" />
          </div>
          <div>
            <label>Reason</label>
            <input type="text" />
          </div>
          <div>
            <label>Building</label>
            <input type="text" />
          </div>
          <div>
            <label>Time Out</label>
            <input type="text" />
          </div>
          <div>
            <label>Time In</label>
            <input type="text" />
          </div>
          <div>
            <input type="submit" value="Sign Out" />
          </div>
        </form>
      </div>
    );
  }
}
export default CheckoutForm;
