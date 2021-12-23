import React from "react";
import CardListing from "../components/CardListing";
import SearchForQuran from "../components/SearchForQuran";
import { sidebarOptions } from "../utils/sidebarOptions";

export default function HomeScreen() {
  return (
    <>
      {sidebarOptions.map((v, i) => {
        console.log(v.opt);

        return (
          <>
            <nav class="sidebar">
              <button class="nav-toggle">
                <i class="fas fa-angle-left"></i>
              </button>

              <ul id="primary-navigation" class="nav__list">
                <li class="nav__list-divider divider-a">
                  <h3 class="nav-title">general</h3>
                </li>

                <li class="nav__item" data-tooltip="open folder">
                  <a href="#" class="nav__link">
                    <i class="far fa-folder-open"></i>
                    <span class="nav__link-text">open folder</span>
                  </a>
                </li>
                <li class="nav__item" data-tooltip="address">
                  <a href="#" class="nav__link">
                    <i class="far fa-address-book"></i>
                    <span class="nav__link-text">address</span>
                  </a>
                </li>
                <li class="nav__item" data-tooltip="calender">
                  <a href="#" class="nav__link">
                    <i class="far fa-calendar"></i>
                    <span class="nav__link-text">calender</span>
                  </a>
                </li>
                <li class="nav__item" data-tooltip="new message">
                  <a href="#" class="nav__link">
                    <i class="far fa-comment"></i>
                    <span class="nav__link-text">new message</span>
                  </a>
                </li>
                <li class="nav__item" data-tooltip="image">
                  <a href="#" class="nav__link">
                    <i class="far fa-image"></i>
                    <span class="nav__link-text">image</span>
                  </a>
                </li>
              </ul>

              <ul id="secondary-navigation-a" class="nav__list">
                <li class="nav__list-divider divider-b">
                  <h3 class="nav-title">media</h3>
                </li>

                <li class="nav__item" data-tooltip="youtube">
                  <a href="#" class="nav__link">
                    <i class="fab fa-youtube"></i>
                    <span class="nav__link-text">youtube</span>
                  </a>
                </li>
                <li class="nav__item" data-tooltip="opera">
                  <a href="#" class="nav__link">
                    <i class="fab fa-opera"></i>
                    <span class="nav__link-text">opera</span>
                  </a>
                </li>
                <li class="nav__item" data-tooltip="facebook">
                  <a href="#" class="nav__link">
                    <i class="fab fa-facebook-f"></i>
                    <span class="nav__link-text">facebook</span>
                  </a>
                </li>
                <li class="nav__item" data-tooltip="codepen">
                  <a href="#" class="nav__link">
                    <i class="fab fa-codepen"></i>
                    <span class="nav__link-text">codepen</span>
                  </a>
                </li>
                <li class="nav__item" data-tooltip="github">
                  <a href="#" class="nav__link">
                    <i class="fab fa-github"></i>
                    <span class="nav__link-text">Github</span>
                  </a>
                </li>
              </ul>

              <ul id="secondary-navigation-b" class="nav__list">
                <li class="nav__list-divider divider-c">
                  <h3 class="nav-title">custom</h3>
                </li>

                <li class="nav__item" data-tooltip="protection">
                  <a href="#" class="nav__link">
                    <i class="fas fa-shield-alt"></i>
                    <span class="nav__link-text">protection</span>
                  </a>
                </li>
                <li class="nav__item" data-tooltip="user settings">
                  <a href="#" class="nav__link">
                    <i class="fas fa-user-cog"></i>
                    <span class="nav__link-text">user settings</span>
                  </a>
                </li>
                <li class="nav__item" data-tooltip="settings">
                  <a href="#" class="nav__link">
                    <i class="fas fa-cog"></i>
                    <span class="nav__link-text">settings</span>
                  </a>
                </li>
                <li class="nav__item" data-tooltip="power off">
                  <a href="#" class="nav__link">
                    <i class="fas fa-power-off"></i>
                    <span class="nav__link-text">power off</span>
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
