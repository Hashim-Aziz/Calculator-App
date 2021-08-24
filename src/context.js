import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [formulaDisplay, setFormulaDisplay] = useState("");
  const [history, setHistory] = useState([]);
  var stringMath = require("string-math"); // for reference see : https://www.npmjs.com/package/string-math

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

    if (opt == "=") {
      const result = stringMath(formulaValue);
      let newHistory = history;

      newHistory.push(formulaValue + "=" + result);

      setHistory(newHistory);
      console.log(newHistory);

      setInput(result);
    }
    if (opt == "AC") {
      setInput("");
      setFormulaDisplay("");
    }
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
