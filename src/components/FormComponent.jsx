import React from 'react';
import { useContext } from 'react';
import MyContext from '../context/MyContext';

/**
 * //// FORM COMPONENT ////////////////////////////////
 * @returns Input form
 * ////////////////////////////////////////////////////////////
 */

const FormComp = () => {
    const context = useContext(MyContext);
    return (
        <div className='border p-2'>
            <p>Form Component</p>
            <p>{ JSON.stringify(context) }</p>
            <form>
                <div class="form-group">
                    <label for="userName">User Name:</label>
                    <input type="userName" class="form-control" id="userName" aria-describedby="userName" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default FormComp