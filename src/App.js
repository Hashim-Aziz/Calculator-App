import React from "react";
import Buttons from "./Buttons";

function App() {
  return (
    <section>
      <div className="calculator">
        <div className="center">
          <input type="text" className="formula-display" />
          <input type="text" className="input-display " value="0" />
          <Buttons />
        </div>
      </div>
    </section>
  );
}

export default App;
