import React from "react";
const HeroFeatures = () => {
  return (
    <div className="hero py-20 bg-base-100">
<div className="hero-content flex-col lg:flex-row-reverse align-right">
        <img src="/Boxtes.png" className="max-w-4xl " />
        <div>
          <div>
            <div className="flex flex-wrap drop-shadow-2xl">
              <h1 className=" font-jakarta text-5xl font-extrabold text-primary">
                Protection
              </h1>
              <h1 className=" font-jakarta text-5xl font-bold px-2.5">
                {" "}
                is our
              </h1>
            </div>
            <h1 className="font-jakarta text-5xl font-bold"> Feature</h1>
            <div className="">
              <li className="font-jakarta text-sm py-1 font-medium">
                Ultrasonic Sensor
              </li>
              <li className="font-jakarta text-sm py-1 font-medium">
                Solenoid Door Lock
              </li>
              <li className="font-jakarta text-sm py-1 font-medium">
                RFID (Radio-frequency identification)
              </li>
              <li className="font-jakarta text-sm py-1 font-medium">LED</li>
            </div>
          </div>
          <div className="py-20">
            <div className="flex flex-wrap drop-shadow-2xl">
              <h1 className=" font-jakarta text-5xl font-bold">How does it</h1>
            </div>
            <h1 className="font-jakarta text-5xl font-extrabold text-primary">
              Work?
            </h1>
            <div className="">
              <li className="font-jakarta text-sm py-1 font-medium">
                Open the box using RFID card by tapping it
              </li>
              <li className="font-jakarta text-sm py-1 font-medium">
                Put the items you want to store inside
              </li>
              <li className="font-jakarta text-sm py-1 font-medium">
                Close the box and it will automatically locked.
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroFeatures;
