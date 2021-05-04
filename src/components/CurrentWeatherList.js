import CurrentWeather from './CurrentWeather';

// currentWeather and location is same as ingredients and allMeals???

function CurrentWeatherList({currentWeather}){
    // return nothing if there is no current weather object, otherwise...
    if (!currentWeather) return null;

    console.log(currentWeather);
    console.log(currentWeather.count);


    // Map the currentWeather
    // const displayCurrentWeather = currentWeather.data.map(weather => {
    //     return <CurrentWeather
    //             weather={weather}/>
    // })

    // console.log(displayCurrentWeather)

    return(
    
        <>
        {currentWeather.count}

        {/* {displayCurrentWeather} */}
        
        </>
    )
}



export default CurrentWeatherList;