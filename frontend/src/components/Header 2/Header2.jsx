import React from "react";
import "./Header2.css";

const Header2 = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+94740956299"; // replace with your WhatsApp number
    const message = "Hello! I'm interested in your tour packages."; // optional message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="header2">
      <div className="header2-contents">
        <h2>Book Today...</h2>
        <p>
          Airport Pickup & Drop-off , Convenient and friendly service from the
          moment you arrive Personalized Guided Tours , Tailored to your
          interests and pace, so you can make the most of every moment. Local
          Insights & Hidden Gems , Discover beautiful places and cultural
          experiences off the beaten path.
        </p>
        <button onClick={handleWhatsAppClick}>Contact Us</button>
      </div>
    </div>
  );
};

export default Header2;
