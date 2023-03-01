import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";
import mapStyles from "../../mapStyles";
import useStyles from "./styles";
export default function Map({
  setcoordinates,
  setbounds,
  coordinates,
  places,
  setChildClicked,
}) {
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width : 600px)");

  // coordinates={lng:0 , lat : 0}
  // setbounds({ne:0,sw:0})
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDvxvi2jrBkuDYYGCigwOe-zwGujYPYPmU" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={15}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          console.log(e);
          setcoordinates({ lat: e.center.lat, lng: e.center.lng });
          setbounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => {
          setChildClicked(child);
        }}
      >
       
       {places.map((place,i) => (
          <Marker
            key={i}
            text={place.name}
            lat={place.geometry.location.lat}
            lng={place.geometry.location.lng}
          />))}
      </GoogleMapReact>
    </div>
  );
}
