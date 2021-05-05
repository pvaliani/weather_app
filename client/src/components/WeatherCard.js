import { deleteWeather } from "../WeatherService"

const WeatherCard = ({weatherSave, removeWeatherSave}) => {

    // console.log(weatherSave);

    const handleDelete = () => {
        deleteWeather(weatherSave._id).then(()=>{
            removeWeatherSave(weatherSave._id);
        })
    }
    
    return (
        <>
            
            <h1>City:{weatherSave.data[0]['city_name']}, {weatherSave.data[0]['country_code']} </h1>
            <p>Forecast at time of search: {weatherSave.data[0]['weather']['description']}</p>
            <p>Temperature: {weatherSave.data[0]['temp']} °C</p>
            <button onClick={handleDelete}> 🗑 </button>
            
            <hr></hr>
        </>
    )
}

export default WeatherCard;