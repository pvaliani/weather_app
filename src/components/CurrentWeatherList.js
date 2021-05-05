import CurrentWeather from './CurrentWeather';

// currentWeather in this location is the array stored in the data key from the Weatherbit API

function CurrentWeatherList({currentWeather}){
    // return nothing if there is no current weather object, otherwise...
    if (!currentWeather) return null;

    console.log(currentWeather);

    // Map currentWeather array to access the JSON keys
    const displayCurrentWeather = currentWeather.map(weather => {
        console.log(weather.sunset);
        console.log(weather.datetime)
        return <CurrentWeather
                weatherCondition={weather.weather.description}
                cityName={weather.city_name}
                sunsetTime={weather.sunset}
                sunriseTime={weather.sunrise}
                currentTemperature={weather.temp}
                observedTime={weather.ob_time}

                />
           
    })


    return(
    
        <>

        {displayCurrentWeather}
        
        </>
    )
}



export default CurrentWeatherList;