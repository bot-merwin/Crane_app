import React from "react";
import Navbar from "../UI/Navbar";
import classes from "./Home.module.css";
import Card from "../UI/Card";

const Home = () => {
    return(
        <React.Fragment>
            <Navbar btnText="Logout" className="btn-login"/>
            <div className={classes['list-header']}>
                <h3>HOT Bookings</h3>
                <hr/>
            </div>
            <div className={classes['product-card-container']}>
                <Card className="product-card"></Card>
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