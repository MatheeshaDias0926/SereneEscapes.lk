import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const url = "http://localhost:4000";
  const [disease_list, setDiseaseList] = useState([]);

  const fetchDiseaseList = async () => {
    try {
      const response = await axios.get(url + "/api/disease/list");
      setDiseaseList(response.data.data); // Corrected function usage here
    } catch (error) {
      console.error("Failed to fetch disease list:", error);
    }
  };

  useEffect(() => {
    fetchDiseaseList();
  }, []);

  const contextValue = {
    disease_list,
    url,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
