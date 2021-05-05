import './App.css';
import {Container, Grid, Header, Image, List, Embed} from 'semantic-ui-react';
import AppHeader from './components/AppHeader';
import CurrentWeatherContainer from "./containers/CurrentWeatherContainer";
import ForecastWeatherContainer from "./containers/ForecastWeatherContainer";

function App() {
  return (
  <>
     <Container>
            <Grid>
            <Grid.Column textAlign="center">
                <AppHeader />
                <CurrentWeatherContainer />
                <ForecastWeatherContainer />
            </Grid.Column>
            </Grid>
        </Container>
  </>
  );
}

export default App;
