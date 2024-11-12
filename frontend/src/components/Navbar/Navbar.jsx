import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a href="#contact-us" onClick={() => setMenu("contact-us")}>
          Hot Line
        </a>
        <a
          href="#diseases"
          onClick={() => setMenu("diseases")}
          className={menu === "diseases" ? "active" : ""}
        >
          Vehicles
        </a>
        <a
          href="#diseases"
          onClick={() => setMenu("diseases")}
          className={menu === "remedies" ? "active" : ""}
        >
          Packages
        </a>
        <a
          href="#contact-us"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        <div className="navbar-right">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfFBrZmMMZDv72VJXX-KIdpVMm0CZKqD8mWbkow6wh-P21oHQ/viewform?usp=sf_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Book Now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
