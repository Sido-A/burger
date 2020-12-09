import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import "../css/CheckoutForm.css";
import { burgersContext } from "../Context";

function CheckoutForm() {
  const { state, dispatch } = useContext(burgersContext);
  const [input, setInput] = useState({});
  const history = useHistory();

  const changeHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (input !== "") {
      dispatch({
        type: "ADD_USER",
        payload: input,
      });
      history.replace("/orderComplete");
    }
  };

  console.log(input);
  return (
    <form className="checkoutForm" onSubmit={submitHandler}>
      <p className="checkoutForm__title">Your details</p>
      <select name="genderTitle" onChange={changeHandler}>
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
          onChange={changeHandler}
          name="firstName"
          required
        />
        <input
          type="text"
          placeholder="Last Name*"
          onChange={changeHandler}
          name="lastName"
          required
        />
      </div>
      <input
        type="email"
        placeholder="Email Address*"
        onChange={changeHandler}
        name="email"
        required
      />
      <input
        type="password"
        placeholder="Password*"
        onChange={changeHandler}
        name="password"
        required
      />
      <label htmlFor="mobileNumber">Contact number*</label>
      <input
        id="mobileNumber"
        type="text"
        maxLength="10"
        pattern="\d{10}"
        placeholder="Mobile Number*"
        onChange={changeHandler}
        name="mobileNumber"
        required
      />
      <label htmlFor="postcode">Delivery Address*</label>
      <input
        id="postcode"
        className="postcode"
        type="text"
        placeholder="Postcode*"
        onChange={changeHandler}
        name="postcode"
        required
      />

      <input className="checkoutForm__submit" type="submit" value="Submit" />
    </form>
  );
}

export default CheckoutForm;
