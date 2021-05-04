import { useState } from "react";

function CurrentWeatherContainer(){

    // sets state for the current weather object which is an array
    const [currentWeather, setCurrentWeather] = useState([]);

    
    // handles the location submitted by the "as city" form
    const handleLocationAsCitySubmit = (location) => {
        getCurrentWeatherAsCity(location);
    }

    // This is the fetch which provides currentWeather from the API via location which will be input by the user
    const getCurrentWeatherAsCity = (location) => {
    const url = "https://api.weatherbit.io/v2.0/current?city="+location+"&key=42f951c1eea94e33a68cd790a1f613fb"
    console.log("Url: " + url);
    

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setCurrentWeather(data);
        })

}


    return(
        <>
        This is the CurrentWeatherContainer
        </>
    )


}



export default CurrentWeatherContainer;