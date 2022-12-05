import React, { useState, useContext } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { Card, CardContent, CardMedia, CardActionArea } from "@mui/material";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext";

const FoodItems = () => {
  const { getItems, foodData } = useContext(DataContext);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const getFoodItems = () => {
    getItems(search);
    console.log("morningg");
    console.log("this line added by madan");
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 1,
          background: "linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)",
          padding: 3,
          borderRadius: 10,
        }}
      >
        <Typography variant="h4" color="primary">
          Search Food Items
        </Typography>
        <Stack spacing={2}>
          <TextField
            type="text"
            label="Enter Food Item"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <Button variant="contained" onClick={getFoodItems}>
            Get Items
          </Button>
        </Stack>
      </Box>
      <Box
        sx={{
          width: "99%",
          height: 670,
          padding: 2,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          border: 2,
          alignItems: "center",
        }}
      >
        {foodData.map((data, index) => {
          return (
            <Card
              sx={{
                maxWidth: 645,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              key={index}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="280"
                  image={data.recipe.image}
                  alt="Food Picture"
                />
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="primary"
                  >
                    {data.recipe.label}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="secondary"
                  >
                    Calories :{Math.trunc(data.recipe.calories)}
                  </Typography>
                  <Button
                    variant="contained"
                    size="medium"
                    color="secondary"
                    endIcon={<ArrowForwardIosIcon />}
                    onClick={() => {
                      navigate(
                        "/fooditem/" + data.recipe.label.replace(/\s+/g, "")
                      );
                    }}
                  >
                    View
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </Box>
    </>
  );
};

export default FoodItems;
