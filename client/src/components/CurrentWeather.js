import {Container, Divider, Header, Image, List, Embed, Grid} from 'semantic-ui-react';



function CurrentWeather({ weatherCondition, cityName, sunsetTime, currentTemperature, sunriseTime, observedTime}){
   if (!CurrentWeather) return null
//    console.log(datetime + "HIIIIIII")

    return(
        <>
      
        <Container>
            <Grid>
            <Grid.Column textAlign="center">
                <Container><Header as="h3">Location: {cityName} </Header></Container> 
                <Container>Current Weather Condition: {weatherCondition} </Container>
                <Container>Current Temperature: {currentTemperature} °C </Container> 
                <Container>Sunrise Time:{sunriseTime} </Container> 
                <Container>Sunset Time: {sunsetTime} </Container> 
                <Container>Weather Last Observed At: {observedTime} </Container> 
                <Divider></Divider>
            </Grid.Column>
            </Grid>
        </Container>
       
        </>
    )


}



export default CurrentWeather;