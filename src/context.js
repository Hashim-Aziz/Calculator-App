import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [formulaDisplay, setFormulaDisplay] = useState("");

  const changeInput = (value) => {
    let newInput = input + "" + value;

    if (isNaN(value)) {
      newInput = value;
    }

    if (isNaN(input)) {
      const newFormulaValue = formulaDisplay + input;
      setFormulaDisplay(newFormulaValue);
      newInput = value;
    }

    setInput(newInput);
  };

  const applyOperator = (opt) => {
    let formulaValue;
    if (input === "") {
      formulaValue = 0;
    }
    if (input !== "") {
      formulaValue = formulaDisplay + input;
    }
    setFormulaDisplay(formulaValue);
    changeInput(opt);
  };

  return (
    <AppContext.Provider
      value={{ input, formulaDisplay, changeInput, applyOperator }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
