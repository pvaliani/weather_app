import {Container, Header, Image, List, Embed, Grid} from 'semantic-ui-react';



function ForecastWeather({datetime, weatherCondition,currentTemperature}){
   if (!datetime) return null
   

    return(
        <>
         
        <Container>
            <Grid>
            <Grid.Column textAlign="center">
                <Container><Header as="h4">Date: {datetime} </Header></Container>
                <Container>Condition: {weatherCondition} </Container>
                <Container>Temperature: {currentTemperature} °C </Container> 
            
            </Grid.Column>
            </Grid>
        </Container>
        </>
    )


}



export default ForecastWeather;