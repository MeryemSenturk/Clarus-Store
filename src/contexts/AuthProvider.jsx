import React, { Children, createContext, useState } from 'react'

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()  // kullanıcı bilgilerini tutuyoruz.

  return <AuthContext.Provider value={{user}}>
    {children}
    </AuthContext.Provider>;
};

export default AuthProvider