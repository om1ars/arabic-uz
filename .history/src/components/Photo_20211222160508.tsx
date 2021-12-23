import React, { useState } from "react";
import "./Photo.scss";
const Photo = () => {
  const [toggle, setToggle]= useState(false);


  const togleIt = () => {
    setToggle(!toggle)
  }
  return (
    <div className='photo'>
      <div className={`menu `} onClick={togleIt}>
        <div className="button"></div>
        <div className="button"></div>
        <div className="button"></div>
      </div>
    </div>
  );
};

export default Photo;
