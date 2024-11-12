import React, { createContext, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [disease_list] = useState([]);

  const contextValue = {
    disease_list,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
