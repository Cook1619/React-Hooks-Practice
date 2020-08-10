import React, { useState } from "react";
import Toggler from "./Toggler";
import SimpleFormHooks from "./SimpleFormHooks";
import SimpleFormInputHook from "./SimpleFormInputHook";
import UseEffect from "./UseEffect";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>The Count is: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
      <Toggler />
      <SimpleFormHooks />
      <SimpleFormInputHook />
      <UseEffect />
    </div>
  );
}

export default App;
