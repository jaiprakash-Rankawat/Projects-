import React from "react";
import { useState } from "react";
const Gods = () => {
  const [gods, setGods] = useState(["Radha", "Lakshmi", "Ganesha"]);
  const [Add, setAdd] = useState("");
  const [Remove, setRemove] = useState("");
  const [Update, setUpdate] = useState("");

  const handleAdd = () => {
    setGods([...gods, Add]);
    setAdd("");
  };

  const handleRemove = () => {
    if (gods.includes(Remove)) {
      setGods(gods.filter((god) => god !== Remove));
      setRemove("");
    } else {
      alert(`${Remove} not found`);
      setRemove("");
    }
  };

  const handleUpdate = () => {
    if (gods.includes(Update)) {
      setGods(
        gods.map((god) =>
          god === Update ? window.prompt("Enter new name") : god
        )
      );
      setUpdate("");
    } else {
      alert(` ${Update} not found`);
      setUpdate("");
    }
  };

  return (
    <div className="container">
      <div className="map">
        {gods.map((god, index) => (
          <div key={index}>👤 {god} </div>
        ))}
      </div>
      <div className="add">
        <input
          type="text"
          onChange={(e) => setAdd(e.target.value)}
          value={Add}
        />
        <button onClick={handleAdd}>add</button>
      </div>
      <div className="remove">
        <input
          type="text"
          onChange={(e) => setRemove(e.target.value)}
          value={Remove}
        />
        <button onClick={handleRemove}>remove</button>
      </div>
      <div className="update">
        <input
          type="text"
          onChange={(e) => setUpdate(e.target.value)}
          value={Update}
        />
        <button onClick={handleUpdate}>update</button>
      </div>
    </div>
  );
};

export default Gods;
