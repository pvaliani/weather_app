import WeatherCard from "./WeatherCard";
import { Divider,Header } from "semantic-ui-react";

const WeatherGrid = ({weatherSaves, removeWeatherSave}) => {
    const weatherSavesList = weatherSaves.map((weatherSave) =>{
        return <WeatherCard weatherSave={weatherSave} removeWeatherSave={removeWeatherSave} />
    });
    
    return (
        <>
        <Header as="h2">Your Recent Weather Location Searches </Header>
        <Divider></Divider>
            {weatherSavesList}
        </>
    );

}

export default WeatherGrid;