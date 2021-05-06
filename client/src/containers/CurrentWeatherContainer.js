import { useState, useEffect } from "react";
import CurrentWeather from "../components/CurrentWeather";
import CurrentWeatherList from "../components/CurrentWeatherList";
import ForecastWeather from "../components/ForecastWeather";
import ForecastWeatherList from "../components/ForecastWeatherList";
import LocationAsCityForm from "../components/LocationAsCityForm";
import LocationAsPostcodeForm from "../components/LocationAsPostcodeForm";
import { Divider} from 'semantic-ui-react';
import { getWeathers, postWeather } from "../WeatherService";
import WeatherGrid from "../components/WeatherGrid";
import LocationAsLatLonForm from "../components/LocationAsLatLonForm";

function CurrentWeatherContainer(){

    // Sets state for the current weather object which is an array
    // also sets state for the location input by the user
    const [currentWeather, setCurrentWeather] = useState([{}]);
    const [forecastWeather, setForecastWeather] = useState([{}]);
    const [location, setLocation] = useState("");
    const [weatherSaves, setWeatherSaves] = useState([]);

    // add a weatherSave after setting the state of an array to hold
    // the searches
    const addWeatherSave = (weatherSave) =>{
        const temp = weatherSaves.map(s =>s);
        temp.push(weatherSave);
        setWeatherSaves(temp);
      }

    const removeWeatherSave = (id) => {
        const temp = weatherSaves.map(s =>s);
        const indexToDel = temp.map(s => s._id).indexOf(id);
        console.log(indexToDel);
    
        temp.splice(indexToDel, 1);
        setWeatherSaves(temp);
    }

    useEffect(()=>{
    getWeathers().then((allWeathers)=>{
        setWeatherSaves(allWeathers);
    })
    }, []);

    

    
    // handles the location submitted by the "as city" form
    // invokes the fetch passing the location to getCurrentWeatherAsCity
    const handleLocationAsCitySubmit = (location) => {
        getCurrentWeatherAsCity(location);
        getForecastWeatherAsCity(location);
    } 

    // handles the location submitted by the "as post code" form
    // invokes the fetch passing the location to getCurrentWeatherAsPostcode
    const handleLocationAsPostcodeSubmit= (location) => {
        getCurrentWeatherAsPostcode(location);
        getForecastWeatherAsPostcode(location);
    } 


    // handles the location submitted by the "as lat/lon" form
    // invokes the fetch passing the location to getCurrentWeatherAsPostcode
    const handleLocationAsLatLonSubmit= (location) => {
        getCurrentWeatherAsLatLon(location);
        getForecastWeatherAsLatLon(location);
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
            // once we have the data from the fetch post this 
            // to the back end
            postWeather(data).then(()=>{
                addWeatherSave(data);
            })
          
        
        })

    }

      // This is the fetch which provides currentWeather from the API via location which will be input by the user as Lat/Lon
      const getCurrentWeatherAsLatLon = (location) => {
        const url = "https://api.weatherbit.io/v2.0/current?lat="+location[0]+"&lon="+location[1]+"&key=42f951c1eea94e33a68cd790a1f613fb"
    
        console.log("Url: " + url);
        
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCurrentWeather(data);
                // once we have the data from the fetch post this 
                // to the back end
                postWeather(data).then(()=>{
                    addWeatherSave(data);
                })
              
            
            })
    
        }





     // This is the fetch which provides currentWeather from the API via location set as post code
     const getCurrentWeatherAsPostcode = (location) => {
        const url = "https://api.weatherbit.io/v2.0/current?postal_code="+location+"&key=42f951c1eea94e33a68cd790a1f613fb"
    
        console.log("Url: " + url);
        
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setCurrentWeather(data);
                postWeather(data).then(()=>{
                    addWeatherSave(data);
                })
                
            })
    
        }

     // This is the fetch which provides forecastWeather from the API via location which will be input by the user
     const getForecastWeatherAsCity = (location) => {
        const url = "https://api.weatherbit.io/v2.0/forecast/daily?city="+location+"&key=42f951c1eea94e33a68cd790a1f613fb"
    
        console.log("Url: " + url);
        
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setForecastWeather(data);
               
               
            
            })
    
        }
    
         // This is the fetch which provides forecastWeather from the API via location set as post code
         const getForecastWeatherAsPostcode = (location) => {
            const url = "https://api.weatherbit.io/v2.0/forecast/daily?postal_code="+location+"&key=42f951c1eea94e33a68cd790a1f613fb"
        
            console.log("Url: " + url);
            
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    setForecastWeather(data);
                })
        
            }


        // This is the fetch which provides forecastWeather from the API via location set as post code
        const getForecastWeatherAsLatLon = (location) => {
            const url = "https://api.weatherbit.io/v2.0/current?lat="+location[0]+"&lon="+location[1]+"&key=42f951c1eea94e33a68cd790a1f613fb"
        
            console.log("Url: " + url);
            
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    setForecastWeather(data);
                })
        
            }


    // Format the user input to the form
    // Pseudocode to format user input for the API
    // Convert string to lower case
    // Convert string to array with comma delimiter - .split(“,”)
    // For each element in the array, get rid of leading and trailing white space - .trim()
    // For each element in the array, replace any space with an underscore - .replace(“ “, “_”)
    // Convert the array back to a string
    
    const formatInput = (userInput) => {
        const upperCase = userInput.toUpperCase();
        // const inputArray = upperCase.split(",");
        // const formattedArray = inputArray.map(i => i.trim());
        // const arrayWithUnderscores = formattedArray.map(i => i.replace(" ", "_"));
        const formattedString = upperCase;
        // // const formattedString = arrayWithUnderscores.toString();
        // console.log(formattedString);
        return formattedString;
        // return userInput
    }

    const formatInputLatLon = (userInput) => {
        const upperCase = userInput.toUpperCase();
        const inputArray = upperCase.split(",");
        const formattedArray = inputArray.map(i => i.trim());
        // const arrayWithUnderscores = formattedArray.map(i => i.replace(" ", "_"));
        const formattedString = formattedArray;
        // // const formattedString = arrayWithUnderscores.toString();
        console.log(formattedString);
        return formattedString;
        // return userInput
    }


    return(
        <>
     
        <LocationAsCityForm 
        handleLocationAsCitySubmit={handleLocationAsCitySubmit}
        location={location}
        setLocation={setLocation}
        formatInput={formatInput}
        />

        <LocationAsPostcodeForm 
        handleLocationAsPostcodeSubmit={handleLocationAsPostcodeSubmit}
        location={location}
        setLocation={setLocation}
        formatInput={formatInput}
        />

        <LocationAsLatLonForm 
          handleLocationAsLatLonSubmit={handleLocationAsLatLonSubmit}
          location={location.toString()}
          setLocation={setLocation}
          formatInput={formatInputLatLon}/>
        
        {/* Passes the array associated with the data key to currentWeatherList as props */}
        <CurrentWeatherList 
        location={location}
        currentWeather={currentWeather.data}
        />

        
        <ForecastWeatherList 
        location={location}
        forecastWeather={forecastWeather.data}
        />

        
        <Divider>
            <ForecastWeather />
        </Divider>

        <WeatherGrid weatherSaves={weatherSaves} removeWeatherSave={removeWeatherSave}/>

       

        </>
    )


}


export default CurrentWeatherContainer;