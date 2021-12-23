import React from "react";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./dataLayer/store";
import { setToggleFalse, setToggleTrue } from "./dataLayer/slices/sidebarSlice";

export default function Navbar() {
  const toggleTest = useSelector<RootState>((state) => state.sidebar.toggle);
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    dispatch(setToggleTrue());
  };

  console.log(toggleTest);

  toggleTest && alert("Hey");

  return (
    <div>
      <div className=" w-full  mx-auto px-4 border-b-2">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <a href="/" className="flex items-center py-4 px-2">
                <img src="logo.png" alt="Logo" className="h-8 w-8 mr-2" />
                <span className="font-semibold text-gray-500 text-lg">
                  Navigation
                </span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <NavLink
                to="/"
                className="py-4 px-2 text-gray-500  font-semibold"
                // className={(nav) => nav.isActive }
              >
                Home
              </NavLink>
              <NavLink
                to="/services"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Courses
              </NavLink>
              <NavLink
                to="/about"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Disccues what you got
              </NavLink>
              <NavLink
                to="/contact"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Contact Us
              </NavLink>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3 ">
            <IconButton>
              <MenuIcon onClick={toggleSidebar} />
            </IconButton>
          </div>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button">
              <svg
                className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
