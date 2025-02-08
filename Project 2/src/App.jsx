import React, { useState } from "react";
import PopupForm from "./Components/PopupForm";
import DisplayBox from "./Components/Display";
import { Container } from "@mui/material";
const App = () => {
  const [data, setData] = useState([]);

  // Function to add new item to the list
  const handleAddData = (newData) => {
    setData([...data, newData]);
  };

  return (
    <Container>
      <h2 style={{ textAlign: "center" }}>Task Manager</h2>
      <PopupForm onSubmit={handleAddData} />
      <DisplayBox data={data} />
    </Container>
  );
};

export default App;
