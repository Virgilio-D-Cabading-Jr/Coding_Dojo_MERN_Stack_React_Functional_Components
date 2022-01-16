import React from 'react'

/**
 * //// FORM COMPONENT ////////////////////////////////
 * @returns Input form
 * ////////////////////////////////////////////////////////////
 */

const FormComp = () => {
    return (
        <div className='border p-2'>
            <p>Form Component</p>
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