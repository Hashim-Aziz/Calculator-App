import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [formulaDisplay, setFormulaDisplay] = useState("");
  const [history, setHistory] = useState([]);
  const [isEqualPressed, setIsEqualPressed] = useState(false);
  const [isHistoryDisplay, setIsHistoryDisplay] = useState(false); //use for toggle history display
  var stringMath = require("string-math"); // for reference see : https://www.npmjs.com/package/string-math

  const handleDisplayHistory = () => {
    let historyvalue = isHistoryDisplay == true ? false : true; // for toggle history display
    setFormulaDisplay("");
    setIsHistoryDisplay(historyvalue);
  };

  const historyDisplay = () => {
    if (isHistoryDisplay) {
      setFormulaDisplay("");
    }
  };

  useEffect(() => {
    historyDisplay();
  }, [isHistoryDisplay]);

  const changeInput = (value) => {
    if (isEqualPressed) {
      setFormulaDisplay("");
    }

    const oldInputValue = isEqualPressed ? "" : input; // for empty all field on pressed any button if '=' is pressed just before the key pressed

    let newInput = oldInputValue + "" + value;

    if (isNaN(value)) {
      newInput = value;
    }

    if (isNaN(input)) {
      const newFormulaValue = formulaDisplay + input;
      setFormulaDisplay(newFormulaValue);
      newInput = value;
    }

    setInput(newInput);
    setIsEqualPressed(false);
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
      const result = stringMath(formulaValue); // use string-math library to convert string to math equation and return result

      // add previous equation in history when '=' pressed
      let newHistory = history;
      newHistory.push(formulaValue + "=" + result);
      setHistory(newHistory);

      setInput(result);
      setIsEqualPressed(true);
    }
    //empty all things when AC press
    if (opt == "AC") {
      setInput("");
      setFormulaDisplay("");
    }
  };

  return (
    <AppContext.Provider
      value={{
        input,
        formulaDisplay,
        changeInput,
        applyOperator,
        handleDisplayHistory,
        isHistoryDisplay,
        history,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
