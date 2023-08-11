import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const HeroDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        <div onClick={() => navigate("/")}
        className="flex flex-wrap justify-center py-5 hover:cursor-pointer">
        <img src="/Logo.png" alt="Logo" className="w-26 h-16" />
        <a className=" font-jakarta font-extrabold text-[25px] my-3 text-primary tracking-[.15em]">
          PROBOX
        </a>
        </div>
        <div className="hidden sm:flex">
        {/* <button
          onClick={() => navigate("/Login")}
          className="btn btn-primary text-white"
        >
          SIGN IN
        </button> */}
      </div>
      <div className="flex flex-col mt-6 sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="w-full flex justify-center">
          <div className="w-full sm:w-1/2 p-4">
            <div className="card bg-primary text-primary-content">
              <div className="card-body flex">
                <div>
                  <p className="font-bold text-lg">BOX ID: 1</p>
                  <p className="font-regular">UID: 001</p>
                  <p className="font-regular">LAST USED: 001</p>
                </div>
                <div className="flex items-end">
                  <p className="font-regular">TEST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row mt-10 items-center justify-center">
        <h2 className="font-medium text-lg text-center">HISTORY</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <div className="w-full p-4">
          <div className="card bg-primary text-primary-content">
            <div className="card-body">
              <p className="font-bold text-lg">BOX ID: 2</p>
              <p>UID: 002</p>
              <p>11/08/2023 - 14.24</p>
              <p>11/08/2023 - 16.00</p>
            </div>
          </div>
        </div>
        <div className="w-full p-4">
          <div className="card bg-primary text-primary-content">
            <div className="card-body">
              <p className="font-bold text-lg">BOX ID: 3</p>
              <p>UID: 003</p>
              <p>11/08/2023 - 14.24</p>
              <p>11/08/2023 - 16.00</p>
            </div>
          </div>
        </div>
        <div className="w-full p-4">
          <div className="card bg-primary text-primary-content">
            <div className="card-body">
              <p className="font-bold text-lg">BOX ID: 4</p>
              <p>UID: 004</p>
              <p>11/08/2023 - 14.24</p>
              <p>11/08/2023 - 16.00</p>
            </div>
          </div>
        </div>
        <div className="w-full p-4">
          <div className="card bg-primary text-primary-content">
            <div className="card-body">
              <p className="font-bold text-lg">BOX ID: 5</p>
              <p>UID: 005</p>
              <p>11/08/2023 - 14.24</p>
              <p>11/08/2023 - 16.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HeroDashboard;