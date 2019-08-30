import React from 'react'; 
import { Button } from 'reactstrap';


const SearchForm = (props) => {
    return(
        <form className="mt-4" onSubmit={props.getSearch}>
            <input type="text" name="search"/>
            
            <Button color="success" className="ml-4">Buscar</Button>
        </form>
    );
}

export default SearchForm;