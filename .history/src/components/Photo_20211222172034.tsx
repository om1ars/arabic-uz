import ImageSearch from "@mui/icons-material/ImageSearch";
import React, { useState } from "react";
import { photoOptions } from "../utils/photoOptions";
// import { sidebarOptions } from "../utils/sidebarOptions";
import "./Photo.scss";
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

    if(v.title === 'Search') {
      setCurrentPhoto(<PhotoSearch />)
    }
    if(v.title === 'photo') {
      setCurrentPhoto(<PhotoPhoto />)
    }
    if(v.title === 'Favourite')
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
                    {photoOptions.map((v, i) => (
                      <div
                        className="hexagon-item"
                        onClick={() => handleChange(v)}
                      >
                        <div className="hex-item">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                        <div className="hex-item">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                        <a className="hex-content">
                          <span className="hex-content-inner">
                            <span className="icon">
                              <i className="fa fa-braille"></i>
                            </span>
                            <span className="title">{v.title}</span>
                          </span>
                          <svg
                            viewBox="0 0 173.20508075688772 200"
                            height="200"
                            width="174"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                              fill="#1e2530"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    ))}
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
