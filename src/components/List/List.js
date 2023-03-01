import React, { useState } from "react";
import Placedetails from "../Placedetails/Placedetails";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import useStyles from "./styles";



export default function List({places,loading,ChildClick , type ,setType ,rating, setRaiting  }) {

  
  const classes = useStyles();
  return (

    <div className={classes.container}>
      {console.log(rating)}
      <Typography variant="h4">
        Restaurents , Hotels And Attraction around you
      </Typography>
      {loading? (
          <div className={classes.loading }>
            <CircularProgress size="5rem"/>
            </div>)
       : 
      ( 
<>
      <FormControl id="type" className={classes.formControl}>
        <InputLabel id="type">Type</InputLabel>
        <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>

      <FormControl id="raiting" className={classes.formControl}>
        <InputLabel id="raiting">Rating</InputLabel>
        <Select id="raiting" value={rating} onChange={(e) => setRaiting(e.target.value)}>
          <MenuItem value="0">All</MenuItem>
          <MenuItem value="3">Above 3.0</MenuItem>
          <MenuItem value="4">Above 4.0</MenuItem>
          <MenuItem value="4.5">Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className ={classes.list}>
        {places?.map((place,i)=>(
            <Grid item  key = {i} xs={12}>
              <Placedetails place={place}/>

            </Grid>

        ))}


      </Grid>
      </>
      )}
    </div>
  )
}
