import React from 'react'
import FormComponent from './FormComponent'

/**
 * //// Form Wrapper Component ////////////////////////////////
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
