import { Header, Form, Input } from 'semantic-ui-react'

function LocationAsPostcodeForm({handleLocationAsPostcodeSubmit, location, setLocation, formatInput}) {

    const handleInput = (event) => {
        const formattedInput = formatInput(event.target.value);
        setLocation(formattedInput);
     
    }

    const submitIngredients = (event) => {
        event.preventDefault();
        handleLocationAsPostcodeSubmit(location);
    
    }
    return (
        <> 
            
            <Form className="form-box" onSubmit={submitIngredients}>
                             
                    <Form.Field>
                    <Header>Find Weather by Postcode:</Header>
                    <Input action='Search' placeholder='e.g. EH10 6JX...' onChange={handleInput}/>
                    </Form.Field>              
           </Form>

        </>
    );
}

export default LocationAsPostcodeForm;