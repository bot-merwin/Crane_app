import React, { useState } from 'React'
 
const AuthContext = React.createContext({
    token : '',
    isLoggedIn : false,
    login : (token) => {},
    logout : () => {}
});

export const AuthContextProvider = (props) =>{

    const [token, setToken] = useState(null);
    const userLoggedIn = !!token;


    const loginHandler = (token) =>{
        setToken(token);
    }
    const logoutHandler = () =>{
        setToken(null);
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