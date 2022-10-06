import React, { useState } from 'react'
import DataContext from './DataContext'
import axios from 'axios'
const DataProvider = ({children}) => {
    const [foodData,setFoodData]=useState([])

    const getItems = async (search) => {
        await axios(
          "https://api.edamam.com/api/recipes/v2?type=public&q=" +
            search +
            "&app_id=384601d9&app_key=7bff5aaf3fe13ec7f580b28c42b543e8"
        )
          .then(function (response) {
            setFoodData(response.data.hits);
            console.log(response.data.hits);
          })
          .catch(function (error) {
            console.error(error);
          });
      };

  return (
    <DataContext.Provider
    value={{getItems,foodData}}
    >
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider;
