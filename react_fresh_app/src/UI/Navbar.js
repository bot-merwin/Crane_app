import React from 'react';
import classes from './Navbar.module.css';
import Button from './Button';

const Navbar = (props) => {
    return (
        <div className={classes['navbar-box']}>
            <h2 className={classes['navbar-heading']}>React-Test</h2>
            <div className={classes['list_btn_wrapper']}>
                <ul>
                    <li href="#">Booking</li>
                    <li href="#">About Us</li>
                </ul>        
                <Button btnText={props.btnText} className={props.className}></Button>
            </div>
        </div>
    );
}

export default Navbar;