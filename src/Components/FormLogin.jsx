import React from "react";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center h-screen">
      <div
        onClick={() => navigate("/")}
        className="flex flex-wrap justify-center py-28 hover:cursor-pointer"
      >
        <img src="/Logo.png" alt="Logo" className="w-26 h-16" />
        <a className=" font-jakarta font-extrabold text-[25px] my-3 text-primary tracking-[.15em]">
          PROBOX
        </a>
      </div>
      <div className="card w-96 bg-base-100  shadow-xl my-3">
        <div className="card-body items-center text-center">
          <h2 className="card-title font-jakarta font-bold text-[30px] ">Sign in to your</h2>
          <h2 className="card-title font-jakarta font-extrabold text-[30px] text-primary">account </h2>
          <p className="font-jakarta my-3 text-[15px]">Put it, Leave it  </p>
          <div className="card-actions justify-end my-3">
            <button onClick={() => navigate("/Dashboard")} className="btn bg-base-200">
            <img src="/google.png" alt="" className="w-5 h-5"/>Sign in with google</button>
          </div>
        </div>
      </div>  
      </div>
  );
};
export default FormLogin;
