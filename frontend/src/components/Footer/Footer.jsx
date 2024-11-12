import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="contact-us">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt=""></img>
          <p>Unbeatable Service | Comfortable Rides | Best Value</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Pivacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+94 740956299</li>
            <li>sereneescapes@gmail.com</li>
            <li>matheeshadias@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        copyright 2024 Matheesha Dias - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
