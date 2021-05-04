import CurrentWeather from './CurrentWeather';


function CurrentWeatherList({currentWeather}){
    // return nothing if there is no current weather object, otherwise...
    if (!currentWeather) return null;


    // Map the currentWeather
    const displayCurrentWeather = currentWeather.map(weather => {
        return <CurrentWeather
                currentWeather={weather}/>
    })



    return(
        <>
        {displayCurrentWeather}
        </>
    )


}



export default CurrentWeatherList;