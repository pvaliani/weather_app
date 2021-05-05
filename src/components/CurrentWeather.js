import {Container, Header, Image, List, Embed, Grid} from 'semantic-ui-react';



function CurrentWeather({datetime, weatherCondition, cityName, sunsetTime, currentTemperature, sunriseTime, observedTime, weatherIcon}){
   if (!datetime) return null
//    console.log(datetime + "HIIIIIII")

    return(
        <>
        <Container>
            <Grid>
            <Grid.Column textAlign="center">
                <Container>DATE: {datetime}  </Container>
                <Container>WEATHER CONDITION: {weatherCondition} </Container>
                <Container>ICON: <Image src={weatherIcon} /> </Container> 
                <Container>CITY NAME: {cityName} </Container> 
                <Container>SUNRISE TIME:{sunriseTime} </Container> 
                <Container>SUNSET TIME: {sunsetTime} </Container> 
                <Container>CURRENT TEMP: {currentTemperature} °C </Container> 
                <Container>TIME WEATHER LAST OBSERVED: {observedTime} </Container> 
            </Grid.Column>
            </Grid>
        </Container>
        </>
    )


}



export default CurrentWeather;