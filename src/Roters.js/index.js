import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import FoodItems from "../Pages/FoodItems";
import ItemDeatils from "../Pages/ItemDeatils";
const FoodRoute = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<FoodItems />} />
          <Route path="/fooditem/:Item" element={<ItemDeatils />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default FoodRoute;
