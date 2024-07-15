import React from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'

// This compoent will use/access the Login data of a user (username, password) which is added to the Context after login. Profile will access this (username, password) to get profile
function Profile() {
    // Using that set data in the UserContext with {user} varaiable : user.username, user.password both are available
    const {user} = useContext(UserContext)

    if(!user) return <h1>Not logged in</h1>
    return(
        <div>
            <h1>Profile: {user.username}</h1>
        </div>
    )
}

export default Profile