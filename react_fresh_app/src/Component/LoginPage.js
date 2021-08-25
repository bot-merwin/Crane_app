import React, {useState, useContext} from "react";
import Card from "../UI/Card";
import classes from "./Login.module.css";
import Navbar from "../UI/Navbar";
import AuthContext from "../Store/auth-context";
import { useHistory } from "react-router";
const axios = require('axios').default;


const LoginPage = () =>{
    
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const history = useHistory();
    const authCtx = useContext(AuthContext);

    const req_handler = (e) => {
        e.preventDefault();
        // var xhr= new XMLHttpRequest();
        // xhr.open("POST","https://localhost:44340/api/Authenticate");
        // xhr.setRequestHeader('Accept', 'application/json');
        // xhr.setRequestHeader('Content-Type', 'application/json');
        // xhr.send(JSON.stringify({
        //     username : enteredUsername,
        //     password : enteredPassword
        //}))
        const headers= {"content-type" : "application/json"};
        axios.post("https://localhost:44340/api/Authenticate", {username : enteredUsername, password : enteredPassword}, {headers : headers})
            .then((res) =>{
                if(res.data.token!= null){
                    console.log(res.data.token);
                    authCtx.login(res.data.token);
                    history.push('/home');
                }
                else{
                    console.log("Invalid username/password"); 
                    console.log("recheck your credentials");
                }
            })
            .catch(() => console.log("authentication failed"));
    }   

const usernameHandler = (e) =>{
    setEnteredUsername(e.target.value);
    //console.log(enteredUsername);
}


const passwordHandler = (e) =>{
    setEnteredPassword(e.target.value);
    //setTimeout(function() {console.log(enteredPassword)},1000); 
}
 return(
     
    <React.Fragment>
        <Navbar btnText="Login" className="btn-login"></Navbar>
        <Card className="card">    
            <h1 className={classes.header_pos}>SIGN IN</h1>
                <form onSubmit={req_handler} className= {classes['form_test']}>
                    <div className={classes.input_container}>
                        <input className={classes.username} placeholder="Username" name="usr" onChange={usernameHandler}></input>
                        <input type="password" autocomplete="off" className={classes.password} placeholder="password" name="pwd" onChange={passwordHandler}></input>
                    </div>  
                    <button className={classes['btn-login']}>Sign In</button>
                </form>
         </Card>       
    </React.Fragment>
        )
}



export default LoginPage;