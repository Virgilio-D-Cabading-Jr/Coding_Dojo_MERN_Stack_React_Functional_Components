import React from 'react'
import FormComp from './FormComponent'

/**
 * //// FORM WRAPPER COMPONENT ////////////////////////////////
 * @returns wrapper around an input form
 * ////////////////////////////////////////////////////////////
 */
const FormWrapperComp = () => {
    return (
        <div className='bg-white round'>
            {/* **** FORM COMPONENT *********************** */}
            <FormComp />
        </div>
    )
}

export default FormWrapperComp
