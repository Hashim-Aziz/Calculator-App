import React from "react";
import Buttons from "./Buttons";
import { useGlobalContext } from "./context";

function App() {
  const { input, formulaDisplay } = useGlobalContext();

  return (
    <section>
      <div className="calculator">
        <div className="center">
          <input type="text" className="formula-display" />
          <input
            type="text"
            className="input-display "
            placeholder="0"
            value={input}
          />
          <Buttons />
        </div>
      </div>
    </section>
  );
}

export default App;
