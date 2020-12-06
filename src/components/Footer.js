import React from "react";
import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__options">
          <h3>Categories</h3>
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Journal</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div className="footer__options">
          <h3>Partners</h3>
          <ul>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Shipping & Returns</a>
            </li>
            <li>
              <a href="#">Size Guide</a>
            </li>
            <li>
              <a href="#">Product Care</a>
            </li>
          </ul>
        </div>

        <div className="footer__options">
          <h3>Contact us</h3>
          <p>26A Pagoda St, TANGS, Singapore, 058187</p>
          <p> +65 6221 5462</p>
        </div>

        <div className="footer__options">
          <h3>Follow us</h3>
          <i></i>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
