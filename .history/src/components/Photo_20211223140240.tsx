import ImageSearch from "@mui/icons-material/ImageSearch";
import React, { useState } from "react";
import { photoOptions } from "../utils/photoOptions";
// import { sidebarOptions } from "../utils/sidebarOptions";
import "./Photo.scss";
import PhotoFav from "./PhotoFav";
import PhotoPhoto from "./PhotoPhoto";
import PhotoSearch from "./PhotoSearch";
const Photo = () => {
  const [toggle, setToggle] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(<PhotoPhoto />);

  const togleIt = () => {
    console.log("togled");

    setToggle(!toggle);
  };

  const handleChange = (v: any) => {
    console.log(v);

    if (v.title === "Search") {
      setCurrentPhoto(<PhotoSearch />);
    }
    if (v.title === "Photo") {
      setCurrentPhoto(<PhotoPhoto />);
    }
    if (v.title === "Favourite") {
      setCurrentPhoto(<PhotoFav />);
    }
  };
  return (
    <>
      <main className="site-wrapper">
        {currentPhoto}

        {photoOptions.map((v, i) => (
          <>
            <div className="hexagon-item" onClick={() => handleChange(v)}>
              {v.title}
            </div>
          </>
        ))}
      </main>
    </>
  );
};

export default Photo;
