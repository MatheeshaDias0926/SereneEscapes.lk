import React, { useContext } from "react";
import "./DiseaseItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const DiseaseItem = ({ id, diseaseName, severityLevel, symptoms, image }) => {
  const { url } = useContext(StoreContext);

  return (
    <div className="disease-item">
      <div className="disease-item-img-container">
        <img
          className="disease-item-image"
          src={`${url}/images/${image}`}
          alt={diseaseName}
        />
      </div>
      <div className="disease-item-info">
        <div className="disease-item-name-rating">
          <p>{diseaseName}</p>
        </div>
        <p className="disease-item-desc">{symptoms}</p>
        <p className="disease-item-case-count">
          {" "}
          Severity Level: {severityLevel}{" "}
        </p>
      </div>
    </div>
  );
};

export default DiseaseItem;
