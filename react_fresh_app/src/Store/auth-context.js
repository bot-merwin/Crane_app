import React, { useState } from 'react'
 
const AuthContext = React.createContext({
    token : '',
    isLoggedIn : false,
    login : (token) => {},
    logout : () => {}
});

export const AuthContextProvider = (props) =>{
    const token_initial = localStorage.getItem('token');
    const [token, setToken] = useState(token_initial);
    const userLoggedIn = !!token;


    const loginHandler = (token) =>{
        setToken(token);
        localStorage.setItem('token',token);
    }
    const logoutHandler = () =>{
        setToken(null);
        localStorage.removeItem('token');
    } 
   
    const ContextValue = {
        token : token,
        isLoggedIn : userLoggedIn,
        login : loginHandler,
        logout : logoutHandler
    }
    return <AuthContext.Provider value={ContextValue}>{props.children}</AuthContext.Provider>
} 

export default AuthContext;