import React from "react";
import Gods from "./Components/Gods";

const App = () => {
  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          margin: "10px",
          padding: "10px",
          color: "white",
        }}
      >
        List : Add , Remove , Update
      </h2>
      <Gods />
    </div>
  );
};

export default App;
