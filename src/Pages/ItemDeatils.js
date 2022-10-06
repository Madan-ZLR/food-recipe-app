import { Typography, Box, CardMedia } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import DataContext from "../context/DataContext";
import { useContext, useState } from "react";
const ItemDeatils = () => {
  const params = useParams();
  const Item1 = useState(params.Item);
  const { foodData } = useContext(DataContext);

  return (
    <>
      {foodData.map((Item, index) => {
        if (Item1[0] == Item.recipe.label.replace(/\s+/g, "")) {
          console.log(Item.recipe.label.replace(/\s+/g, ""));
          return (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                width: "80%",
                alignItems: "center",
              }}
              key={index}
            >
              <Stack>
                <Box sx={{ width: 500, height: "100%", borderRadius: 10 }}>
                  <CardMedia
                    component="img"
                    image={Item.recipe.image}
                    alt="Food Picture"
                  />
                </Box>
                <Stack>
                  <Typography color="primary" variant="h4">
                    {Item.recipe.label}
                  </Typography>
                  <Typography color="primary" variant="h4">
                    Calories :{Math.trunc(Item.recipe.calories)}
                  </Typography>
                </Stack>
              </Stack>
              <Stack spacing={1}>
                <Typography variant="h2" color="primary">
                  {Item.recipe.label}
                </Typography>
                <Typography color="primary">
                  Source :{Item.recipe.source}
                </Typography>
                <Typography color="primary">
                  Cautions :{Item.recipe.cautions[0]}
                </Typography>

                <Typography color="primary">
                  Total Weight :{Item.recipe.totalWeight}
                </Typography>
                <Typography color="primary">
                  Total Time : {Item.recipe.totalTime}
                </Typography>
                <Typography color="primary">
                  Cuisine TYpe : {Item.recipe.cuisineType[0]}
                </Typography>
                <Typography color="primary">
                  Meal Type : {Item.recipe.mealType[0]}
                </Typography>
                <Typography color="primary">
                  DishType : {Item.recipe.dishType[0]}
                </Typography>
              </Stack>
            </Box>
          );
        }
      })}
    </>
  );
};

export default ItemDeatils;
