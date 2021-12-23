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
    <>
      <main className="site-wrapper">
        <div className="pt-table desktop-768">
          <div className="pt-tablecell page-home relative">
            <div className="overlay"></div>

            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
                  ]\\\\
                  <div className="hexagon-menu clear">
                   {photo}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Photo;
