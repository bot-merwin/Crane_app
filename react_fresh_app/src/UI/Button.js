import { checkPropTypes } from "prop-types";
import React from "react";
import "./Button.css";

const Button = (props) => {
    return(
        <button className={props.className} onClick={props.onClick}>{props.btnText}</button>
    );
}


export default Button;