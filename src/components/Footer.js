import React from "react";
import "../css/Footer.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

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
          <ul className="footer__iconList">
            <li>
              <i className="icon">
                <TwitterIcon />
              </i>
            </li>
            <li>
              <i className="icon">
                <FacebookIcon />
              </i>
            </li>
            <li>
              <i className="icon">
                <InstagramIcon />
              </i>
            </li>
            <li>
              <i className="icon">
                <WhatsAppIcon />
              </i>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
