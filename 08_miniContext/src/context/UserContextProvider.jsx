import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)

    return(
        // setUser will be used by Login.jsx -> to set data
        // user will be used by Porfile.jsx -> to access that data
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;