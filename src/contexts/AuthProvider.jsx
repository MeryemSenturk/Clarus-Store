import React, { Children, createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()  // kullanıcı bilgilerini tutuyoruz.
 const navigate = useNavigate()

    const login = (info) => {
        setUser(info)
        navigate("/home")
       
    }

  return <AuthContext.Provider value={{user}}>
    {children}
    </AuthContext.Provider>;
};

export default AuthProvider