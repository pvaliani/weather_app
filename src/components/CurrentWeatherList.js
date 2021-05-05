import CurrentWeather from './CurrentWeather';

// currentWeather and location is same as ingredients and allMeals???

function CurrentWeatherList({currentWeather}){
    // return nothing if there is no current weather object, otherwise...
    if (!currentWeather) return null;

    console.log(currentWeather);
    // console.log(currentWeather.count);


    // Map the currentWeather
    const displayCurrentWeather = currentWeather.map(weather => {
        console.log(weather.sunset);
        console.log(weather.datetime)
        return <CurrentWeather
                datetime={weather.datetime}/>
           
    })

    // console.log(displayCurrentWeather)

    return(
    
        <>
        {/* {currentWeather} */}
        
        {displayCurrentWeather}
        
        </>
    )
}



export default CurrentWeatherList;