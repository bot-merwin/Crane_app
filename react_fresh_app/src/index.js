import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginPage from "./Component/LoginPage";
import reportWebVitals from './reportWebVitals';
import Navbar from "./UI/Navbar";
import Home from './Component/Home';
import AuthContext from './Store/auth-context';

ReactDOM.render(
  <AuthContext>
    <React.StrictMode>
      <App></App>
    </React.StrictMode>
  </AuthContext>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
