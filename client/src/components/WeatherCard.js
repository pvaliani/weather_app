
const WeatherCard = ({weatherSave}) => {

    // console.log(weatherSave);
    
    return (
        <>
            
            <h1>City:{weatherSave.data[0]['city_name']}, {weatherSave.data[0]['country_code']} </h1>
            <p>Forecast at time of search: {weatherSave.data[0]['weather']['description']}</p>
            <p>Temperature: {weatherSave.data[0]['temp']}</p>
            
            <hr></hr>
        </>
    )
}

export default WeatherCard;