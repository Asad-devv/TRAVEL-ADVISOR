{places.map((place,i) => (
    <div key={i}>
  
  {place.name}
      {place.geometry.location.lat}
      {place.geometry.location.lng}    
  
      </div>
      ))}