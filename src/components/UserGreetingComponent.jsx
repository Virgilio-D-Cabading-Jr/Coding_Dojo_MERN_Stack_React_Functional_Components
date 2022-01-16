import React, { useContext } from 'react'
import MyContext from '../context/MyContext'

/**
 * ////////////////////////////////////////////////////////////////
 *      USER GREETING COMPONENT
 * ////////////////////////////////////////////////////////////////
 * @returns A greeting to the User if there is a User
 */
const UserGreetingComp = () => {
    // //// FIELDS ////////////////////////////////////////////////
    const context = useContext( MyContext );
    const userName = context.userName;
    console.log(JSON.stringify(userName));

    // //// OUTPUT ////////////////////////////////////////////////
    if (userName !== "") {
        return (
            <div className='text-white'>
                Greetings { userName }
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}

export default UserGreetingComp
