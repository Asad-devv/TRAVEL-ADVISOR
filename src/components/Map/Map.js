import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
// import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { Marker } from "@react-google-maps/api";

import Rating from "@material-ui/lab/Rating";
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

const Comp = () =>{
  
}
  // coordinates={lng:0 , lat : 0}
  // setbounds({ne:0,sw:0})
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "  " }}
        defaultCenter={{coordinates}}
        center={coordinates}
        defaultZoom={14}
        yesIWantToUseGoogleMapApiInternals
        margin={[50, 50, 50, 50]}
        // options={''}
        onChange={(e) => {
          // console.log(e)
          setcoordinates({ lat: e.center.lat, lng: e.center.lng });
          setbounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
      >
        {

          <>

<Marker
                    
                    text="Asad"
                    position={{lat: 24.921577, lng: 67.13482}}
                    zIndex={1000} 
                // lat={Number(place.latitude)}
                  // lng={Number(place.longitude)}
                  />
                 {/* {places?.map((place,i) => (
                  <div key={i}>
                    {console.log(place.latitude ? place.latitude : "hat loru ")}
                  <Marker
                    key={i}
                    text={place.name}
                    position={{lat: Number(place.latitude), lng: Number(place.longitude)}}
                    zIndex={1000} center={1231}
                // lat={Number(place.latitude)}
                  // lng={Number(place.longitude)}
                  />
                  </div>
                  ))
                  
                  } */}
                  </>          
          // places?.map((place, i) => {
          //   <div
          //     // className={classes.markerContainer}
          //     lat={Number(place.latitude)}
          //     lng={Number(place.longitude)}
          //     key={i}
          //   >
          //     {
          //       <>
          //        <h5>{place.name}</h5> 
          //       {console.log(place.longitude,place.latitude)}
          //       <Marker ></Marker>
                // </>
                // // console.log("hello")
                // <Paper elevation={3} className={classes.paper}>
                //   {console.log("jash")}
                //   <Typography className={classes.typography} variant ="subtitle" >
                //     {place.name}
                //   </Typography>
                //   <img className={classes.pointer} src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                //   alt={place.name}/>
                // </Paper>
              }
            {/* </div>; */}
          {/* })} */}
      </GoogleMapReact>
    </div>
  );
}

