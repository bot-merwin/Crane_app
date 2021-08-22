import React, { Children } from 'react';
import "./Card.css";
const Card = (props) =>{
    return (
        <div className={props.className}>{props.children}</div>
    );
}

export default Card;