import React from 'react';
import { useContext } from 'react';
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
    let userName = context.userName;

    // //// OUTPUT ////////////////////////////////////////////
    return (
        <div>
            <form>
                <div class="form-group mb-2">
                    <label for="userName">User Name:</label>
                    <input  type="userName" class="form-control" 
                            id="userName" name="userName" 
                            aria-describedby="userName" 
                            value={ userName }/>
                </div>
                <button type="submit" class="btn btn-primary btn-sm round"><strong>Submit</strong></button>
            </form>
        </div>
    )
}

export default FormComp