import { Header, Form, Input } from 'semantic-ui-react'


function LocationAsCityForm({handleLocationAsCitySubmit, location, setLocation, formatInput}) {

    const handleInput = (event) => {
        const formattedInput = formatInput(event.target.value);
        // console.log(formattedInput);
        setLocation(formattedInput);
        // console.log(location);
    }

    const submitLocation = (event) => {
        event.preventDefault();
        handleLocationAsCitySubmit(location);
    
    }
    return (
        <> 
            
            <Form color="black" className="form-box" onSubmit={submitLocation}>
                             
                    <Form.Field>
                    <Header>Find Weather by City Name:</Header>
                    <Input action='Search' placeholder='e.g. Edinburgh, UK...' onChange={handleInput}/>
                    </Form.Field>              
           </Form>

        </>
    );
}

export default LocationAsCityForm;