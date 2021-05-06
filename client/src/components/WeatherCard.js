import { deleteWeather } from "../WeatherService"
import { Button } from 'semantic-ui-react'

const WeatherCard = ({weatherSave, removeWeatherSave}) => {

    // invokes a delete of a recemt search from the front end to the back end to ensure persistance
    const handleDelete = () => {
        deleteWeather(weatherSave._id).then(()=>{
            removeWeatherSave(weatherSave._id);
        })
    }
    
    return (
        <>
            
            <h3>City: {weatherSave.data[0]['city_name']}, {weatherSave.data[0]['country_code']} </h3>
            <p>Forecast at time of search: {weatherSave.data[0]['weather']['description']}</p>
            <p>Temperature: {weatherSave.data[0]['temp']} °C 🌡</p>
            <Button onClick={handleDelete}> Delete 🗑 </Button>
            
            <hr></hr>
        </>
    )
}

export default WeatherCard;