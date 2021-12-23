import React from "react";
import CardListing from "../components/CardListing";
import SearchForQuran from "../components/SearchForQuran";
import { sidebarOptions } from "../utils/sidebarOptions";
import

export default function HomeScreen() {
  return (
    <>
      {sidebarOptions.map((v, i) => {
        console.log(v.opt);

        return (
          <>
            <nav className="sidebar">
              <button className="nav-toggle">
                <i className="fas fa-angle-left"></i>
              </button>

              <ul id="primary-navigation" className="nav__list">
                <li className="nav__list-divider divider-a">
                  <h3 className="nav-title">general</h3>
                </li>

                <li className="nav__item" data-tooltip="open folder">
                  <a href="#" className="nav__link">
                    <i className="far fa-folder-open"></i>
                    <span className="nav__link-text">open folder</span>
                  </a>
                </li>
                <li className="nav__item" data-tooltip="address">
                  <a href="#" className="nav__link">
                    <i className="far fa-address-book"></i>
                    <span className="nav__link-text">address</span>
                  </a>
                </li>
                <li className="nav__item" data-tooltip="calender">
                  <a href="#" className="nav__link">
                    <i className="far fa-calendar"></i>
                    <span className="nav__link-text">calender</span>
                  </a>
                </li>
                <li className="nav__item" data-tooltip="new message">
                  <a href="#" className="nav__link">
                    <i className="far fa-comment"></i>
                    <span className="nav__link-text">new message</span>
                  </a>
                </li>
                <li className="nav__item" data-tooltip="image">
                  <a href="#" className="nav__link">
                    <i className="far fa-image"></i>
                    <span className="nav__link-text">image</span>
                  </a>
                </li>
              </ul>

              <ul id="secondary-navigation-a" className="nav__list">
                <li className="nav__list-divider divider-b">
                  <h3 className="nav-title">media</h3>
                </li>

                <li className="nav__item" data-tooltip="youtube">
                  <a href="#" className="nav__link">
                    <i className="fab fa-youtube"></i>
                    <span className="nav__link-text">youtube</span>
                  </a>
                </li>
                <li className="nav__item" data-tooltip="opera">
                  <a href="#" className="nav__link">
                    <i className="fab fa-opera"></i>
                    <span className="nav__link-text">opera</span>
                  </a>
                </li>
                <li className="nav__item" data-tooltip="facebook">
                  <a href="#" className="nav__link">
                    <i className="fab fa-facebook-f"></i>
                    <span className="nav__link-text">facebook</span>
                  </a>
                </li>
                <li className="nav__item" data-tooltip="codepen">
                  <a href="#" className="nav__link">
                    <i className="fab fa-codepen"></i>
                    <span className="nav__link-text">codepen</span>
                  </a>
                </li>
                <li className="nav__item" data-tooltip="github">
                  <a href="#" className="nav__link">
                    <i className="fab fa-github"></i>
                    <span className="nav__link-text">Github</span>
                  </a>
                </li>
              </ul>

              <ul id="secondary-navigation-b" className="nav__list">
                <li className="nav__list-divider divider-c">
                  <h3 className="nav-title">custom</h3>
                </li>

                <li className="nav__item" data-tooltip="protection">
                  <a href="#" className="nav__link">
                    <i className="fas fa-shield-alt"></i>
                    <span className="nav__link-text">protection</span>
                  </a>
                </li>
                <li className="nav__item" data-tooltip="user settings">
                  <a href="#" className="nav__link">
                    <i className="fas fa-user-cog"></i>
                    <span className="nav__link-text">user settings</span>
                  </a>
                </li>
                <li className="nav__item" data-tooltip="settings">
                  <a href="#" className="nav__link">
                    <i className="fas fa-cog"></i>
                    <span className="nav__link-text">settings</span>
                  </a>
                </li>
                <li className="nav__item" data-tooltip="power off">
                  <a href="#" className="nav__link">
                    <i className="fas fa-power-off"></i>
                    <span className="nav__link-text">power off</span>
                  </a>
                </li>
              </ul>
            </nav>
            <div>
              <SearchForQuran />
              <CardListing />
            </div>
          </>
        );
      })}
    </>
  );
}
