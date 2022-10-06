import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
const Homepage = () => {
  return (
    <>
      <Typography variant="h3" color="secondary">
        Food Recipes and Food Nutrition
      </Typography>
      <Stack spacing={24} direction="row">
        <NavLink
          to="/fooditem"
          style={({ isActive }) => ({
            color: isActive ? "greenyellow" : "white",
          })}
        >
          <Button variant="contained" color="primary" to="/fooditems">
            Search Food Item
          </Button>
        </NavLink>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "greenyellow" : "white",
          })}
        >
          <Button variant="contained" color="primary">
            Search Food Nutrition
          </Button>
        </NavLink>
      </Stack>
    </>
  );
};

export default Homepage;
