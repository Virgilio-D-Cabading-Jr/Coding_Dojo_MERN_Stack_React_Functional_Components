import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import MyContext from '../context/MyContext';

/**
 * ////////////////////////////////////////////////////////////
 *      FORM COMPONENT
 * ////////////////////////////////////////////////////////////
 * @returns Input form
 */

const FormComp = () => {
    // //// FIELDS ////////////////////////////////////////////
    const context = useContext(MyContext);
    const [userName, setUserName] = useState(context.userName);

    // //// UTILITY FUNCTIONS /////////////////////////////////

    const handleSubmit = (e) => {
        e.preventDefault();
        context.setUserName(userName);
        // **** Reset Input ********
        setUserName("");
    }

    // //// OUTPUT ////////////////////////////////////////////
    return (
        <div>
            <form onSubmit={ (e) => handleSubmit(e) }>
                <div className="form-group mb-2">
                    <label for="userName">Enter New User Name:</label>
                    <input  type="userName" 
                            className="form-control" 
                            id="userName" name="userName" 
                            aria-describedby="userName"
                            onChange={ (e) => setUserName( e.target.value )}
                            value={ userName }/>
                </div>
                <button type="submit" className="btn btn-primary btn-sm round"><strong>Submit</strong></button>
            </form>
        </div>
    )
}

export default FormComp