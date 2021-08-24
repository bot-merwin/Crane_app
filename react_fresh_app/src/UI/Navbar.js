import React, {useContext} from 'react';
import classes from './Navbar.module.css';
import Button from './Button';
import AuthContext from '../Store/auth-context';

const Navbar = (props) => {

    const authCtx = useContext(AuthContext);
    const loggedIn = authCtx.isLoggedIn;

    const login_click = () =>{
        
    }
    const logout_click = (e) => {
        e.preventDefault();
        console.log("logout clicked");
        authCtx.logout();
    }
    return (
        <div className={classes['navbar-box']}>
            <h2 className={classes['navbar-heading']}>React-Test</h2>
            <div className={classes['list_btn_wrapper']}>
                <ul>
                    { loggedIn && (<li href="#">Booking</li>)}
                    <li href="#">About Us</li>
                </ul>        
                {!authCtx.isLoggedIn && (<Button btnText={props.btnText} className={props.className} onClick={login_click}></Button>)}
                {authCtx.isLoggedIn && (<Button btnText={props.btnText} className={props.className} onClick={logout_click}></Button>)}
            </div>
        </div>
    );
}

export default Navbar;