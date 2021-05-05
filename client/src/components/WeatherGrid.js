import WeatherCard from "./WeatherCard";

const WeatherGrid = ({weatherSaves}) => {
    const weatherSavesList = weatherSaves.map((weatherSave) =>{
        return <WeatherCard weatherSave={weatherSave} />
    });
    
    return (
        <>
       Your Recent Weather Location Searches:
            {weatherSavesList}
        </>
    );

}

export default WeatherGrid;