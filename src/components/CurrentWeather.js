import {Container, Header, Image, List, Embed, Grid} from 'semantic-ui-react';



function CurrentWeather({currentWeather}){
    if (!currentWeather) return null;
    console.log(currentWeather);

    const currentWeatherJSX = currentWeather.map(weatherParam => {
        return (<List.Item>{weatherParam}</List.Item>);
    });


    return(
        <>
        Weather Params:
        {currentWeatherJSX}
        {currentWeather.datetime}
        </>
    )


}



export default CurrentWeather;