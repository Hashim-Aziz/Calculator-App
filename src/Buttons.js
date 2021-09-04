import React from "react";
import { useGlobalContext } from "./context";

const Buttons = () => {
  const {
    changeInput,
    applyOperator,
    handleDisplayHistory,
  } = useGlobalContext();

  //handle all buttons except  history
  const clickHandler = (e) => {
    let input = e.target.innerText;

    if (isNaN(input)) {
      console.log(input);
      applyOperator(input);
    }
    if (!isNaN(input)) {
      changeInput(input);
    }
  };

  //handle history
  const historyHandler = (e) => {
    e.preventDefault();
    handleDisplayHistory();
  };

  return (
    <>
      <div className="div-bg">
        <button className="btn his-btn mg-lft" onClick={historyHandler}>
          HISTORY
        </button>
      </div>
      <div className="div-bg">
        <button className="btn mg-top bg-gray mg-lft" onClick={clickHandler}>
          (
        </button>
        <button className="btn bg-gray mg-lft" onClick={clickHandler}>
          )
        </button>
        <button className="btn bg-gray mg-lft" onClick={clickHandler}>
          %
        </button>
        <button className="btn bg-red mg-lft" onClick={clickHandler}>
          AC
        </button>
      </div>
      <div className="div-bg">
        <button className="btn mg-top mg-lft" onClick={clickHandler}>
          7
        </button>
        <button className="btn mg-lft" onClick={clickHandler}>
          8
        </button>
        <button className="btn mg-lft" onClick={clickHandler}>
          9
        </button>
        <button className="btn bg-gray mg-lft" onClick={clickHandler}>
          /
        </button>
      </div>
      <div className="div-bg">
        <button className="btn mg-top mg-lft" onClick={clickHandler}>
          4
        </button>
        <button className="btn mg-lft" onClick={clickHandler}>
          5
        </button>
        <button className="btn mg-lft" onClick={clickHandler}>
          6
        </button>
        <button className="btn bg-gray mg-lft" onClick={clickHandler}>
          *
        </button>
      </div>
      <div className="div-bg">
        <button className="btn mg-top mg-lft" onClick={clickHandler}>
          1
        </button>
        <button className="btn mg-lft" onClick={clickHandler}>
          2
        </button>
        <button className="btn mg-lft" onClick={clickHandler}>
          3
        </button>
        <button className="btn bg-gray mg-lft" onClick={clickHandler}>
          -
        </button>
      </div>
      <div className="div-bg">
        <button className="btn mg-top mg-lft" onClick={clickHandler}>
          0
        </button>
        <button className="btn mg-lft" onClick={clickHandler}>
          .
        </button>
        <button className="btn mg-lft bg-bluish" onClick={clickHandler}>
          =
        </button>
        <button className="btn bg-gray mg-lft" onClick={clickHandler}>
          +
        </button>
      </div>
    </>
  );
};

export default Buttons;
