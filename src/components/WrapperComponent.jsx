import React from 'react'
import NavbarComp from './NavbarComponent'
import FormWrapperComp from './FormWrapperComponent'

/**
 * ///////////////////////////////////////////////////////
 * WRAPPER COMPONENT
 * ///////////////////////////////////////////////////////
 * @returns wrapper
 */
const WrapperComp = () => {
    return (
        <div className='border p-2'>
            <p>Wrapper Component</p>
            <NavbarComp />
            <FormWrapperComp />
        </div>
    )
}

export default WrapperComp