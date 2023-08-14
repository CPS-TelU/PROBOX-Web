import React from "react";
import {useNavigate} from 'react-router-dom'

const HeroMain = () => {
  const navigate = useNavigate()
  return (
    <div className="hero my-2 lg:my-20 bg-base-100">
      <div className="hero-content flex-col gap-1 lg:flex-row">
        <div className="max-w-sm md:max-w-xl rounded-lg">
        <img
          src="/Logo.png"
        />
        </div>
          <div>
            <div className="flex flex-wrap drop-shadow-2xl">
                <h1 className=" font-jakarta text-2xl font-bold lg:text-5xl">Your Security in a  </h1>
                <h1 className=" font-jakarta text-2xl font-bold text-primary ps-1.5 lg:text-5xl px-2.5">Box </h1>
            </div>
          <p className="py-2 text-sm lg:text-md my-4">
          Probox is an advanced and technologically equipped container designed to enhance security measures for protecting valuable items, documents, or possessions. This innovative device integrates cutting-edge technology to provide comprehensive security features, ensuring that its contents remain safeguarded from unauthorized access, theft, and tampering.
          </p>
          <button onClick ={() => navigate ("/Features")} className="btn btn-primary text-white ">Get Started</button>
        </div>
      </div>
    </div>
  );
};
export default HeroMain
