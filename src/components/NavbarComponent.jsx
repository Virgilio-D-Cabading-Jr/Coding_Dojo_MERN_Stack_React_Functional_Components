import React from 'react'

/**
 * ////////////////////////////////////////////////////////////////
 * NAV BAR COMPONENT
 * ////////////////////////////////////////////////////////////////
 * @returns Nav Bar
 */
const NavbarComp = () => {
    return (
        <div className='border p-2'>
            {/* //// HEADER //////// */}
            <header>
                <div class="navbar navbar-dark bg-dark box-shadow">
                    <div class="container d-flex justify-content-between">
                        <a href="/" class="navbar-brand d-flex align-items-center">
                            <strong class="text-warning">Nav Bar Context</strong>
                        </a>
                        <a class="btn btn-secondary btn-sm" href="/">HOME</a>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default NavbarComp