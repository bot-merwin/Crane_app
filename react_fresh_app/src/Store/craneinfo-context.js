import React, { useRef, useState } from 'react';

const craneInfo_Context = React.createContext({
    title : '',
    crane_Info : '',
    price : 1,
    infoPageHandler : (title,crane_Info,price) => {}
});

export const CraneInfoContextProvider = (props) => {
  const [title, setTitle] = useState('');
  const [crane_Info, setCrane_Info] = useState('');
  const [price, setPrice] = useState(1);



 const infoPageHandler = (title, crane_Info, price) => {
     setTitle(title);
     setCrane_Info(crane_Info);
     setPrice(price);

 }

 const contextValue = {
    title : title,
    crane_Info: crane_Info,
    price : price,
    infoPageHandler : infoPageHandler
 }

 return <craneInfo_Context.Provider value={contextValue}>{props.children}</craneInfo_Context.Provider>
}

export default craneInfo_Context;