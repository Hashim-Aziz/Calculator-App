import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [formulaDisplay, setFormulaDisplay] = useState("");

  const changeInput = (value) => {
    const newInput = input + "" + value;
    setInput(newInput);
  };

  return (
    <AppContext.Provider value={{ input, formulaDisplay, changeInput }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
