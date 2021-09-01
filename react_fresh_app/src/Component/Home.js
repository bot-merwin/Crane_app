import React from "react";
import Navbar from "../UI/Navbar";
import classes from "./Home.module.css";
import Card from "../UI/Card";
import { useContext } from "react";
import { useHistory } from 'react-router';
import AuthContext from "../Store/auth-context";
import Button from "../UI/Button";
import craneInfo_Context from "../Store/craneinfo-context";


const axios = require('axios').default;

const Home = () => {

    const authCtx = useContext(AuthContext);
    const craneInfoCtx = useContext(craneInfo_Context);
    const history = useHistory();
    const onInfoHandler = (e) =>{
        e.preventDefault();
        const config = {
            headers: { Authorization: `Bearer ${authCtx.token}` }
        };
        
        axios.get('https://localhost:44340/api/cranes/Cranes?id=3',config)
            .then((res)=>{
                craneInfoCtx.infoPageHandler(res.data.title, res.data.crane_info, res.data.price);
                history.push("/CraneInfo");
            })
    }

    return(
        <React.Fragment>
            <Navbar btnText="Logout" className="btn-login"/>
            <div className={classes['list-header']}>
                <h3>HOT Bookings</h3>
                <hr/>
            </div>
            <div className={classes['product-card-container']}>
                <Card className="product-card">
                    <Button btnText="book now" className="btn-login" onClick={onInfoHandler}></Button>
                </Card>
                <Card className="product-card"></Card>
                <Card className="product-card"></Card>
                <Card className="product-card"></Card>
                <Card className="product-card"></Card>
                <Card className="product-card"></Card>
            </div>
        </React.Fragment>
    );
}

export default Home;