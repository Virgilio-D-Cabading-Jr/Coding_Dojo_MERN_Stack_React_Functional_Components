import React from 'react';
import UserGreetingComp from './UserGreetingComponent';

/**
 * ////////////////////////////////////////////////////////////////
 * NAV BAR COMPONENT
 * ////////////////////////////////////////////////////////////////
 * @returns Nav Bar
 */
const NavbarComp = () => {
    return (
        <div>
            {/* //// HEADER //////// */}
            <header>
                <div className="navbar navbar-dark bg-dark box-shadow">
                    <div className="container d-flex justify-content-between">
                        <a href="/" className="navbar-brand">
                            <strong className="text-warning">Nav Bar Context</strong>
                        </a>
                        < UserGreetingComp />
                    </div>
                </div>
            </header>
        </div>
    )
}

export default NavbarComp