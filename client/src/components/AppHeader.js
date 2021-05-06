import { Header } from "semantic-ui-react";
import weatherbitLogo from '../assets/weatherbitLogo.png';

function AppHeader(){

    return(
        <>
         <Header className="appHeader" textAlign="center"  as='h1'>
        </Header>
        <img src={weatherbitLogo}></img> 
        </>
    )


}



export default AppHeader;