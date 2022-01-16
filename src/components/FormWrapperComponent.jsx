import React from 'react'
import FormComponent from './FormComponent'

/**
 * //// FORM WRAPPER COMPONENT ////////////////////////////////
 * @returns wrapper around an input form
 * ////////////////////////////////////////////////////////////
 */
const FormWrapperComp = () => {
    return (
        <div className='border'>
            {/* **** FORM COMPONENT *********************** */}
            <FormComp />
        </div>
    )
}

export default FormWrapperComp
