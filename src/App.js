import React from "react";
import DataProvider from "./context/DataProvider.js";
import FoodRoute from "./Roters.js";

function App() {
  return (
    <>
      <DataProvider>
        <FoodRoute />
      </DataProvider>
    </>
  );
}

export default App;
