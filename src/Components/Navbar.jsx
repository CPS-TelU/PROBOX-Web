import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start sm: flex flex-row">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost sm:hidden">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            <li className="font-jakarta font-medium py-1 ">
              <NavLink to={"/"}>HOME</NavLink>
            </li>
            <li className="font-jakarta font-medium py-1">
              <NavLink to={"/Features"}>FEATURES</NavLink>
            </li>
            <li className="font-jakarta font-medium py-1">
              <NavLink to={"/OurTeams"}>OUR TEAMS</NavLink>
            </li>
            <li className="font-jakarta font-medium py-1">
              <NavLink to={"/Login"}>SIGN IN</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap ">
          <div className="sm: flex flex-row mx-10">
          <img src="/Logo.png" alt="Logo" className="w-26 h-16 " />
          <a className=" font-jakarta font-extrabold text-[20px] my-4 text-primary tracking-[.15em] ">
            PROBOX
          </a>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden sm:flex">
        <ul className="menu menu-horizontal">
          <li className="font-jakarta font-medium px-2">
            {/* <a onClick ={() => navigate ("/")}>HOME</a> */}
            <NavLink to={"/"}>HOME</NavLink>
          </li>
          <li className="font-jakarta font-medium px-2">
            {/* <a onClick={() => navigate("/Features")}>FEATURES</a> */}
            <NavLink to={"/Features"}>FEATURES</NavLink>
          </li>
          <li className="font-jakarta font-medium px-2">
            {/* <a onClick={() => navigate("/OurTeams")}>OUR TEAMS</a> */}
            <NavLink to={"/OurTeams"}>OUR TEAMS</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="hidden sm:flex">
        <button
          onClick={() => navigate("/Login")}
          className="btn btn-primary text-white"
        >
          SIGN IN
        </button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
