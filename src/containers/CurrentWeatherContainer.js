import { useState, useEffect } from "react";
import CurrentWeatherList from "../components/CurrentWeatherList";
import LocationAsCityForm from "../components/LocationAsCityForm";

function CurrentWeatherContainer(){

    // Sets state for the current weather object which is an array
    // also sets state for the location input by the user
    const [currentWeather, setCurrentWeather] = useState([]);
    const [location, setLocation] = useState("");

    
    // handles the location submitted by the "as city" form
    // invokes the fetch passing the location to getCurrentWeatherAsCity
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
            // console.log(data);
            setCurrentWeather(data);
        })

    }

    // useEffect(() => {
    //     getCurrentWeatherAsCity();
    //   }, [])
    

    // Format the user input to the form
    // Pseudocode to format user input for the API
    // Convert string to lower case
    // Convert string to array with comma delimiter - .split(“,”)
    // For each element in the array, get rid of leading and trailing white space - .trim()
    // For each element in the array, replace any space with an underscore - .replace(“ “, “_”)
    // Convert the array back to a string
    
    const formatInput = (userInput) => {
        const lowerCase = userInput.toLowerCase();
        // const inputArray = lowerCase.split(",");
        // const formattedArray = inputArray.map(i => i.trim());
        // const arrayWithUnderscores = formattedArray.map(i => i.replace(" ", "_"));
        const formattedString = lowerCase;
        // const formattedString = arrayWithUnderscores.toString();
        console.log(formattedString);
        return formattedString;
    }


    return(
        <>
        This is the CurrentWeatherContainer
        <LocationAsCityForm 
        handleLocationAsCitySubmit={handleLocationAsCitySubmit}
        location={location}
        setLocation={setLocation}
        formatInput={formatInput}
        />

        <CurrentWeatherList 
        location={location}
        currentWeather={currentWeather}
        />

        </>
    )


}


export default CurrentWeatherContainer;