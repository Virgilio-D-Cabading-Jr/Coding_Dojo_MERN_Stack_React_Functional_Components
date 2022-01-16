import React from 'react'
import FormComp from './FormComponent'

/**
 * //// FORM WRAPPER COMPONENT ////////////////////////////////
 * @returns wrapper around an input form
 * ////////////////////////////////////////////////////////////
 */
const FormWrapperComp = () => {
    return (
        <div className='border p-2'>
            <p>Form Wrapper Component</p>
            {/* **** FORM COMPONENT *********************** */}
            <FormComp />
        </div>
    )
}

export default FormWrapperComp
