import React from "react";
const HeroMain = () => {
  return (
    <div className="hero py-20 bg-base-100">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="/Logo.png"
          className="max-w-xl rounded-lg "
        />
        <div>
            <div className="flex flex-wrap drop-shadow-2xl">
                <h1 className=" font-jakarta text-5xl font-bold">Your Security in a  </h1>
                <h1 className=" font-jakarta text-5xl font-bold px-2.5 text-primary ">Box </h1>
            </div>
          <p className="py-9">
          Probox is an advanced and technologically equipped container designed to enhance security measures for protecting valuable items, documents, or possessions. This innovative device integrates cutting-edge technology to provide comprehensive security features, ensuring that its contents remain safeguarded from unauthorized access, theft, and tampering.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};
export default HeroMain
