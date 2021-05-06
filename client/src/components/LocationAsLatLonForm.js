import { Header, Form, Input } from 'semantic-ui-react'

function LocationAsLatLonForm({handleLocationAsLatLonSubmit, location, setLocation, formatInput}) {

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
                    <Input action='Search' placeholder='e.g. EH10 6JX...' onChange={handleInput}/>
                    </Form.Field>              
           </Form>

        </>
    );
}

export default LocationAsLatLonForm;