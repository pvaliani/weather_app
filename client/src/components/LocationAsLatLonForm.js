import { Header, Form, Input } from 'semantic-ui-react'

function LocationAsLatLonForm({handleLocationAsLatLonSubmit, location, setLocation, formatInput}) {

    // handles the text formatted from the search form once it is in the correct format
    // required by the API
    const handleInput = (event) => {
        const formattedInput = formatInput(event.target.value);
        setLocation(formattedInput);
     
    }

    const submitLocation = (event) => {
        event.preventDefault();
        handleLocationAsLatLonSubmit(location);
    
    }
    return (
        <> 
            
            <Form className="form-box" onSubmit={submitLocation}>
                             
                    <Form.Field>
                    <Header>Find Weather by Lat/Lon:</Header>
                    <Input icon='search'placeholder='e.g. 55.95,-3.18...' onChange={handleInput}/>
                    </Form.Field>              
           </Form>

        </>
    );
}

export default LocationAsLatLonForm;