import React, { useContext } from 'react';
import Button from '../UI/Button';
import './CraneInfo.css';
import Navbar from '../UI/Navbar';
import Ton8 from '../resources/images/8Ton.jpg';
import craneInfo_Context from '../Store/craneinfo-context';

const CraneInfo = () => 
{

const craneInfoCtx = useContext(craneInfo_Context);

  return(
  <React.Fragment>
        <Navbar btnText="Logout" className="btn-login"/>
        <div className="crane-info-container">
            <img src={Ton8} className="Crane-Info-Image"/>
            <hr/>
            <div className="detail-container">
                <h3>{craneInfoCtx.title}</h3>
                <p>{craneInfoCtx.crane_Info}</p>
                <span><b>Price : </b><b>{craneInfoCtx.price}<i>*Distance charges may apply</i></b></span>
                <Button btnText="BookNow" className="btn-book"></Button>
            </div>
        </div>
    </React.Fragment>
  )
}

export default CraneInfo;