import React from "react";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  let [timer, setTimer] = useState(1);

  return (
    <div className="App">
      <h1>{timer}</h1>
      <button onClick={() => setTimer(timer++)}>Click</button>
    </div>
  );
}

export default App;
