import React from "react";
import { useGlobalContext } from "./context";

const Buttons = () => {
  const { setInput } = useGlobalContext();

  const clickHandler = (e) => {
    console.log(e.target.innerText);
    const 
  };
  return (
    <>
      <div className="div-bg">
        <button className="btn his-btn mg-lft">HISTORY</button>
      </div>
      <div className="div-bg">
        <button className="btn mg-top bg-gray mg-lft">(</button>
        <button className="btn bg-gray mg-lft">)</button>
        <button className="btn bg-gray mg-lft">%</button>
        <button className="btn bg-red mg-lft">AC</button>
      </div>
      <div className="div-bg">
        <button className="btn mg-top mg-lft" onClick={clickHandler}>
          7
        </button>
        <button className="btn mg-lft">8</button>
        <button className="btn mg-lft">9</button>
        <button className="btn bg-gray mg-lft">/</button>
      </div>
      <div className="div-bg">
        <button className="btn mg-top mg-lft">4</button>
        <button className="btn mg-lft">5</button>
        <button className="btn mg-lft">6</button>
        <button className="btn bg-gray mg-lft">*</button>
      </div>
      <div className="div-bg">
        <button className="btn mg-top mg-lft">1</button>
        <button className="btn mg-lft">2</button>
        <button className="btn mg-lft">3</button>
        <button className="btn bg-gray mg-lft">-</button>
      </div>
      <div className="div-bg">
        <button className="btn mg-top mg-lft">0</button>
        <button className="btn mg-lft">.</button>
        <button className="btn mg-lft bg-bluish">=</button>
        <button className="btn bg-gray mg-lft">+</button>
      </div>
    </>
  );
};

export default Buttons;
