import WeatherCard from "./WeatherCard";

const WeatherGrid = ({weatherSaves, removeWeatherSave}) => {
    const weatherSavesList = weatherSaves.map((weatherSave) =>{
        return <WeatherCard weatherSave={weatherSave} removeWeatherSave={removeWeatherSave} />
    });
    
    return (
        <>
       Your Recent Weather Location Searches:
            {weatherSavesList}
        </>
    );

}

export default WeatherGrid;