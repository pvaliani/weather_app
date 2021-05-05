import {Container, Header, Image, List, Embed, Grid} from 'semantic-ui-react';



function CurrentWeather({datetime}){
   if (!datetime) return null
   console.log(datetime + "HIIIIIII")



    return(
        <>
        WEATHER PARAM FOR DATE IS:
        {datetime}

     
        </>
    )


}



export default CurrentWeather;