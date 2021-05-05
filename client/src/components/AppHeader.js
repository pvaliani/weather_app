import { Header, Image } from "semantic-ui-react";
import weatherbitLogo from '../assets/weatherbitLogo.png';

function AppHeader(){

    return(
        <>
         <Header className="appHeader" textAlign="center"  as='h1'>
          <Image src={weatherbitLogo} /> 
        </Header>
        </>
    )


}



export default AppHeader;