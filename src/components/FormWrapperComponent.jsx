import React from 'react'
import FormComponent from './FormComponent'

/**
 * //// FORM WRAPPER COMPONENT ////////////////////////////////
 * @returns wrapper around an input form
 * ////////////////////////////////////////////////////////////
 */
const FormWrapperComponent = () => {
    return (
        <div className='border'>
            {/* **** FORM COMPONENT *********************** */}
            <FormComponent />
        </div>
    )
}

export default FormWrapperComponent
