import React from "react";
import "./Header.css";

const Header = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+94740956299"; // replace with your WhatsApp number
    const message = "Hello! I'm interested in your tour packages."; // optional message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="header">
      <div className="header-contents">
        <h2>Serene Escapes</h2>
        <p>
          Serene Escapes is an Inbound Tour Operator & Transportation Service in
          Sri Lanka, conveniently located near Colombo Airport with a 24/7 open
          Travel Counter. We offer comprehensive Tour Packages and reliable
          Transportation Services across Sri Lanka. Specialists in providing
          exceptional Holiday Tour Packages, we’re dedicated to making every
          journey unforgettable.
        </p>
        <button onClick={handleWhatsAppClick}>Contact Us</button>
      </div>
    </div>
  );
};

export default Header;
