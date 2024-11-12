import React from "react";
import "./Prediction.css";

const TouristForm = () => {
  return (
    <div className="tourist-form" id="tourist-form">
      <h1>Book Your Airport Pickup or Drop-off Today</h1>
      <p>
        Please fill out the form below to provide your details. This will help
        us plan your visit to Sri Lanka more effectively.
      </p>

      {/* Link to the Google Form */}
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfFBrZmMMZDv72VJXX-KIdpVMm0CZKqD8mWbkow6wh-P21oHQ/viewform?usp=sf_link" // Replace with your Google Form URL
        target="_blank"
        rel="noopener noreferrer"
        className="form-link"
      >
        Fill out the Tourist Registration Form
      </a>

      {/* Alternatively, you can embed the form directly in an iframe */}
      {/* <iframe
        src="https://forms.gle/your-google-form-link" // Replace with your Google Form URL
        width="100%"
        height="600px"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading…
      </iframe> */}
      <p>Contact us now via WhatsApp or Call: +94740956299</p>
    </div>
  );
};

export default TouristForm;
