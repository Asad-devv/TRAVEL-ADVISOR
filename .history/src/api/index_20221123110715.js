import axios from "axios";
const url =`https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary`

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
 const getPlacesData = async( type, sw,ne)=>{
    try {
      console.log(sw,ne)
div

      
        const {data : {data} } = await axios.get(url,{
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Key':'127c569fddmsh3a9ba3b5d512310p170cc9jsn3887206aacc0',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
        return data
    } catch (error) {
        console.log(error)
    }
    
}
export default getPlacesData;