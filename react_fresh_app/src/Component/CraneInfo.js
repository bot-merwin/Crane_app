import React from 'react';
import Button from '../UI/Button';
import './CraneInfo.css';
import Navbar from '../UI/Navbar';
import Ton8 from '../resources/images/8Ton.jpg';

const CraneInfo = () => {
  return(
  <React.Fragment>
        <Navbar btnText="Logout" className="btn-login"/>
        <div className="crane-info-container">
            <img src={Ton8} className="Crane-Info-Image"/>
            <hr/>
            <div className="detail-container">
                <h3>Escorts 8 Ton Hydraulic crane</h3>
                <p>This crane is used to perform light load shifting ranging from 0-6 Ton capacityA HYDRAULIC CRANE IS A TYPE OF HEAVY-DUTY EQUIPMENT USED FOR LIFTING AND HOISTING. UNLIKE SMALLER CRANES, WHICH RELY ON ELECTRIC OR DIESEL-POWERED MOTORS, HYDRAULIC CRANES INCLUDE AN INTERNAL HYDRAULIC SYSTEM THAT ALLOWS THE CRANE TO LIFT HEAVIER LOADS. THIS FLUID-FILLED HYDRAULIC SYSTEM ENABLES THE CRANE TO TRANSPORT OBJECTS SUCH AS HEAVY SHIPPING CONTAINERS AND TRACTOR TRAILERS, WHICH ARE WELL BEYOND THE SIZE AND SCOPE OF ANY OTHER LIFTING DEVICE.</p>
                <span><b>Price : </b><b>500INR/Hr<i>   *Distance charges may apply</i></b></span>
                <Button btnText="BookNow" className="btn-book"></Button>
            </div>
        </div>
    </React.Fragment>
  )
}

export default CraneInfo;