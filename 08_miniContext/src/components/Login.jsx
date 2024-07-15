import React from "react";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";


function Login() {
    // We want to add username, password to the context so that it can be used by Profile or any other compoent
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    // to set or add selected data in the Context(in our case UserContext)
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

    return(
        <div>
            <input
                type = "text"
                value={username}
                onChange={(e) => {setUsername(e.target.value)}}
                placeholder="Username"
            />
            <input
                type = "password"
                value={password}
                onChange={(e) => {setPassword(e.target.password)}}
                placeholder="Password"
            />
            <button 
                onClick={handleSubmit}
            >Submit</button>
        </div>
    )
}

export default Login