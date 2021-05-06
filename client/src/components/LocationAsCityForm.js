import { Header, Form, Input } from 'semantic-ui-react'

function LocationAsCityForm({handleLocationAsCitySubmit, location, setLocation, formatInput}) {

    // handles the text formatted from the search form once it is in the correct format
    // required by the API
    const handleInput = (event) => {
        const formattedInput = formatInput(event.target.value);
        setLocation(formattedInput);

    }

    const submitLocation = (event) => {
        event.preventDefault();
        handleLocationAsCitySubmit(location);
    
    }
    return (
        <> 
            
            <Form className="form-box" onSubmit={submitLocation}>
                             
                    <Form.Field>
                    <Header>Find Weather by City Name:</Header>
                    <Input icon='search' placeholder='e.g. Edinburgh, UK...' onChange={handleInput}/>
                    </Form.Field>              
           </Form>

        </>
    );
}

export default LocationAsCityForm;