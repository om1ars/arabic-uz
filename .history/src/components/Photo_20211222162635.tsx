import ImageSearch from "@mui/icons-material/ImageSearch";
import React, { useState } from "react";
import { photoOptions } from "../utils/photoOptions";
// import { sidebarOptions } from "../utils/sidebarOptions";
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
          {photoOptions.map((v:any, i:any) => (
            {v.}
          ))}
        </div>
   
      </div>
    </div>
  );
};

export default Photo;
