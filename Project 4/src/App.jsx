import React, { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(() => Math.floor(Math.random() * 100));
  const handleClick = () => {
    setNumber(Math.floor(Math.random() * 100));
  };
  return (
    <div className="main">
      <div className="random">
        <h1>Genrating Random Number</h1>
        <h1>{number}</h1>
        <button onClick={handleClick}>Click</button>
      </div>
    </div>
  );
};

export default App;
