import ImageSearch from "@mui/icons-material/ImageSearch";
import React, { useState } from "react";
import "./Photo.scss";
const Photo = () => {
  const [toggle, setToggle] = useState(false);

  const togleIt = () => {
    console.log("togled");

    setToggle(!toggle);
  };
  return (
    <div className="photo">
      <div className={`menu ${toggle && "open"}`} onClick={togleIt}>
        <div className="button">
          <ImageSearch />
        </div>
   
      </div>
    </div>
  );
};

export default Photo;
