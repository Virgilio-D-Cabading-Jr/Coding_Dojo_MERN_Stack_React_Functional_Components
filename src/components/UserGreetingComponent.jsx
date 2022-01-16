import React, { userContext } from 'react'
import MyContext from '../context/MyContext'

/**
 * ////////////////////////////////////////////////////////////////
 * USER GREETING COMPONENT
 * ////////////////////////////////////////////////////////////////
 * @returns A greeting to the User if there is a User
 */
const UserGreetingComp = () => {
    // //// FIELDS ////////////////////////////////////////////////
    const context = useContext( MyContext );
    const userName = context.userName;

    // //// OUTPUT ////////////////////////////////////////////////
    if (userName !== "") {
        return (
            <div>
                Greetings { userName }
            </div>
        );
    } else {
        return (
            <div />
        );
    }
}

export default UserGreetingComp
