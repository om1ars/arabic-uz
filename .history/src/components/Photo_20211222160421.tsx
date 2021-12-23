import React, { useState } from "react";
import "./Photo.scss";
const Photo = () => {
  const [toggle, setToggle]= useState()
  return (
    <div className='photo'>
      <div className="menu">
        <div className="button"></div>
        <div className="button"></div>
        <div className="button"></div>
      </div>
    </div>
  );
};

export default Photo;
