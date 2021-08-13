import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [input, setInput] = useState(0);
  const [formulaDisplay, setFormulaDisplay] = useState("");

  return (
    <AppContext.Provider value={{ input, formulaDisplay, setInput }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
