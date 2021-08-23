import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [formulaDisplay, setFormulaDisplay] = useState("");
  var stringMath = require("string-math");

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

  const compute = (str = "") => {
    let total = 0;
    str = str.match(/[+\−]*(\.\d+|\d+(\.\d+)?)/g) || [];
    while (str.length) {
      total += parseFloat(str.shift());
    }
    return total;
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
      const result = stringMath(formulaValue); //eval(formulaValue);
      //console.log(eval(result));
      console.log(result);

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
