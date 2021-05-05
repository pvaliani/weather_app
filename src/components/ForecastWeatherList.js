import ForecastWeather from './ForecastWeather';

// forecastWeather in this location is the array stored in the data key from the Weatherbit API

function ForecastWeatherList({forecastWeather}){
    // return nothing if there is no current weather object, otherwise...
    if (!forecastWeather) return null;

    // console.log(forecastWeather);

    // Map forecastWeather array to access the JSON keys
    const displayForecastWeather = forecastWeather.map(weather => {
 
        return <ForecastWeather
                datetime={weather.datetime}
                weatherCondition={weather.weather.description}
                currentTemperature={weather.temp}

                />
                
           
    })

    return(
    
        <>

     
        {displayForecastWeather}
        
        </>
    )
}



export default ForecastWeatherList;