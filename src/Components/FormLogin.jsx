import React from "react";
import {useNavigate} from 'react-router-dom'

const FormLogin = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div onClick ={() => navigate ("/")} className="flex flex-wrap justify-center py-36 hover:cursor-pointer">
        <img src="/Logo.png" alt="Logo" className="w-26 h-16" />
        <a className=" font-jakarta font-extrabold text-[25px] my-3 text-primary tracking-[.15em]">
          PROBOX
        </a>
      </div>
      <div className="flex flex-col items-center h-screen">
        <div className="card w-96 bg-base-100 shadow-xl ">
          <div className="card-body text-center">
            <h2 className="card-title">Sign In</h2>
            <p>If a dog chews shoes whose shoes does he ?</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormLogin;