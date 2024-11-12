import React, { useContext } from "react";
import "./DeseaseDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import DiseaseItem from "../DiseaseItem/DiseaseItem";

const DiseaseDisplay = ({ category }) => {
  const { disease_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="diseases-display">
      <h1>Book Your Vehicle From Here...</h1>
      <p>
        Experience the best rates in town at a fraction of what large-scale
        operators charge. We’re committed to exceptional service and comfort,
        with highly qualified chauffeurs to ensure an unforgettable journey in
        Sri Lanka.
      </p>
      <div className="food-display-list">
        {disease_list.map((item) => {
          if (category === "All" || category === item.category) {
            return (
              <DiseaseItem
                key={item._id}
                id={item._id}
                diseaseName={item.diseaseName}
                symptoms={item.symptoms}
                severityLevel={item.severityLevel}
                image={item.image}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default DiseaseDisplay;
