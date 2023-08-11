import React from "react";
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a onClick ={() => navigate ("/")} className="font-jakarta font-medium">HOME</a>
            </li>
            <li>
              <a onClick ={() => navigate ("/Features")} className="font-jakarta font-medium">FEATURES</a>
            </li>
            <li>
              <a onClick ={() => navigate ("/Features")} className="font-jakarta font-medium">OUR TEAM</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap">
        <img src="/Logo.png" alt="Logo" className="w-26 h-16"/>
        <a className=" font-jakarta font-extrabold text-[25px] my-3 text-primary tracking-[.15em]">PROBOX</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="font-jakarta font-Bo">
            <a onClick ={() => navigate ("/")}>HOME</a>
          </li>
          <li className="font-jakarta font-medium">
            <a onClick ={() => navigate ("/Features")}>FEATURES</a>
          </li>
          <li className="font-jakarta font-medium">
            <a>OUR TEAM</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
      <button onClick ={() => navigate ("/Login")}className="btn btn-primary text-white">SIGN IN</button>
      </div>
    </div>
  );
};
export default Navbar;