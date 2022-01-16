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
        <div>
            {/*//// NAVIGATION BAR COMPONENT ///////// */}
            <NavbarComp />
            {/* //// MAIN AREA /////////////////////// */}
            <main role="main">
                <div class="container mt-4">
                    <div class="row">
                        {/* //// FORM WRAPPER //////// */}
                        <FormWrapperComp className="col" />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default WrapperComp