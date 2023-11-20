import React, { useState } from 'react'
import { AuthContext } from '../context/auth_context'

const AuthProvider = ({children}) => {

    const [user, setuser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = async () => {
    
        setIsLoggedIn(true);
      };

    const logout = () => {
        setIsLoggedIn(false);
    }


  return (
    <AuthContext.Provider 
    value={{
        user,
        isLoggedIn,
        login,
        logout
    }}
    >
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider