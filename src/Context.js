import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

// Custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
} 

export { AppContext, AppProvider };
