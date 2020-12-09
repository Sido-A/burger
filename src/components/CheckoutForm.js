import React from "react";
import "../css/CheckoutForm.css";

function CheckoutForm() {
  return (
    <form className="checkoutForm">
      <p className="checkoutForm__title">Your details</p>
      <select name="genderTitle">
        <option value="Title" selected disabled hidden>
          Title*
        </option>
        <option value="Mr">Mr</option>
        <option value="Ms">Ms</option>
        <option value="Mrs">Mrs</option>
        <option value="None">None</option>
      </select>
      <div className="checkoutForm__nameInput">
        <input
          className="checkoutForm__firstName"
          type="text"
          placeholder="First Name*"
          required
        />
        <input type="text" placeholder="Last Name*" required />
      </div>
      <input type="email" placeholder="Email Address*" required />
      <input type="password" placeholder="Password*" required />
      <label for="mobileNumber">Contact number*</label>
      <input
        id="mobileNumber"
        type="text"
        placeholder="Mobile Number*"
        required
      />
      <label for="postcode">Delivery Address*</label>
      <input
        id="postcode"
        className="postcode"
        type="text"
        placeholder="Postcode*"
        required
      />

      <input className="checkoutForm__submit" type="submit" value="Submit" />
    </form>
  );
}

export default CheckoutForm;
