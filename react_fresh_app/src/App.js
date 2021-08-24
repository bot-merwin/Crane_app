import logo from './logo.svg';
import './App.css';
import LoginPage from './Component/LoginPage';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './Component/Home';
import {useContext, useState} from "react";
import AuthContext from './Store/auth-context';

function App() {

const authCtx = useContext(AuthContext);
const loggedIn = authCtx.isLoggedIn;
  return (
    <Switch>
      { loggedIn && (<Route path="/home"><Home></Home> </Route>) } 
      (<Route path="/"><LoginPage></LoginPage></Route>)  
      <Route path="*"><Redirect to="/"></Redirect></Route>
    </Switch>
  );
}

export default App;
