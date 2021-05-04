import CurrentWeather from './CurrentWeather';

// currentWeather and location is same as ingredients and allMeals???

function CurrentWeatherList({currentWeather}){
    // return nothing if there is no current weather object, otherwise...
    if (!currentWeather) return null;

    console.log(currentWeather);
    console.log(currentWeather.data[0]);


    // Map the currentWeather
    // const displayCurrentWeather = currentWeather.data.map(weather => {
    //     return <CurrentWeather
    //             weather={weather}/>
    // })

    return(
        <>
        {/* {displayCurrentWeather} */}
        </>
    )
}



export default CurrentWeatherList;