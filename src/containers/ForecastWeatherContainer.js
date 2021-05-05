// import { useState, useEffect } from "react";
// import ForecastWeather from "../components/ForecastWeather";
// import ForecastWeatherList from "../components/ForecastWeatherList";
// import LocationAsCityForm from "../components/LocationAsCityForm";
// import LocationAsPostcodeForm from "../components/LocationAsPostcodeForm";

// function ForecastWeatherContainer(){

//     // Sets state for the current weather object which is an array
//     // also sets state for the location input by the user
//     const [forecastWeather, setForecastWeather] = useState([{}]);
//     const [location, setLocation] = useState("");

    
//     // handles the location submitted by the "as city" form
//     // invokes the fetch passing the location to getForecastWeatherAsCity
//     const handleLocationAsCitySubmit = (location) => {
//         getForecastWeatherAsCity(location);
//     } 

//     // handles the location submitted by the "as post code" form
//     // invokes the fetch passing the location to getForecastWeatherAsPostcode
//     const handleLocationAsPostcodeSubmit= (location) => {
//         getForecastWeatherAsPostcode(location);
//     } 

//     // This is the fetch which provides forecastWeather from the API via location which will be input by the user
//     const getForecastWeatherAsCity = (location) => {
//     const url = "https://api.weatherbit.io/v2.0/forecast/daily?city="+location+"&key=42f951c1eea94e33a68cd790a1f613fb"

//     console.log("Url: " + url);
    
//     fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             // console.log(data);
//             setForecastWeather(data);
//         })

//     }

//      // This is the fetch which provides forecastWeather from the API via location set as post code
//      const getForecastWeatherAsPostcode = (location) => {
//         const url = "https://api.weatherbit.io/v2.0/forecast/daily?postal_code="+location+"&key=42f951c1eea94e33a68cd790a1f613fb"
    
//         console.log("Url: " + url);
        
//         fetch(url)
//             .then(res => res.json())
//             .then(data => {
//                 // console.log(data);
//                 setForecastWeather(data);
//             })
    
//         }


//     // Format the user input to the form
//     // Pseudocode to format user input for the API
//     // Convert string to lower case
//     // Convert string to array with comma delimiter - .split(“,”)
//     // For each element in the array, get rid of leading and trailing white space - .trim()
//     // For each element in the array, replace any space with an underscore - .replace(“ “, “_”)
//     // Convert the array back to a string
    
//     const formatInput = (userInput) => {
//         const upperCase = userInput.toUpperCase();
//         // const inputArray = lowerCase.split(",");
//         // const formattedArray = inputArray.map(i => i.trim());
//         // const arrayWithUnderscores = formattedArray.map(i => i.replace(" ", "_"));
//         const formattedString = upperCase;
//         // // const formattedString = arrayWithUnderscores.toString();
//         // console.log(formattedString);
//         return formattedString;
//         // return userInput
//     }


//     return(
//         <>
     
//         <LocationAsCityForm 
//         handleLocationAsCitySubmit={handleLocationAsCitySubmit}
//         location={location}
//         setLocation={setLocation}
//         formatInput={formatInput}
//         />

//         <LocationAsPostcodeForm 
//         handleLocationAsPostcodeSubmit={handleLocationAsPostcodeSubmit}
//         location={location}
//         setLocation={setLocation}
//         formatInput={formatInput}
//         />
        
//         {/* Passes the array associated with the data key to currentWeatherList as props */}
//         <ForecastWeatherList 
//         location={location}
//         forecastWeather={forecastWeather.data}
//         />

//         <ForecastWeather />

//         </>
//     )


// }


// export default ForecastWeatherContainer;