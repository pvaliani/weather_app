import CurrentWeather from './CurrentWeather';


function CurrentWeatherList({CurrentWeather}){

    const displayCurrentWeather = CurrentWeather.map(currentWeather => {
        return <CurrentWeather
                // key={meal.idMeal}
                currentWeather={currentWeather}/>
    })


    return(
        <>
        {displayCurrentWeather}
        </>
    )


}



export default CurrentWeatherList;