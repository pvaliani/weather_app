import { Form, Input } from 'semantic-ui-react'



function LocationAsCityForm({handleLocationAsCitySubmit, location, setLocation, formatInput}) {

    const handleInput = (event) => {
        const formattedInput = formatInput(event.target.value);
        // console.log(formattedInput);
        setLocation(formattedInput);
        // console.log(location);
    }

    const submitIngredients = (event) => {
        event.preventDefault();
        handleLocationAsCitySubmit(location);
    
    }
    return (
        <> 
    
            <Form className="form-box" onSubmit={submitIngredients}>
                             
                    <Form.Field>
                    <label>Enter your location</label>
                    <Input action='Search' placeholder='e.g. Edinburgh, UK...' onChange={handleInput}/>
                    </Form.Field>              
           </Form>

        </>
    );
}

export default LocationAsCityForm;