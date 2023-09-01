import React from "react";
const HeroFeatures = () => {
  return (
    <div className="hero my-2 lg:my-12 bg-base-100 ">
      <div className="hero-content flex-col gap-20 lg:flex-row-reverse align-right lg:gap-24">
        <img src="/fix.png" className=" w-9/12 md:w-11/12 lg:w-7/12 " />
        <div>
          <div>
            <div className="flex flex-wrap drop-shadow-2xl">
              <h1 className=" font-jakarta text-3xl font-extrabold text-primary md:text-4xl ">
                Protection
              </h1>
              <h1 className=" font-jakarta text-3xl font-bold px-2.5 md:text-4xl ">
                is our
              </h1>
            </div>
            <h1 className="font-jakarta text-3xl font-bold md:text-4xl "> Feature</h1>
            <div className="">
              <li className="font-jakarta text-sm py-1 font-medium md:text-lg">
                Ultrasonic Sensor
              </li>
              <li className="font-jakarta text-sm py-1 font-medium md:text-lg">
                Solenoid Door Lock
              </li>
              <li className="font-jakarta text-sm py-1 font-medium md:text-lg">
                RFID (Radio-frequency identification)
              </li>
              <li className="font-jakarta text-sm py-1 font-medium md:text-lg">LED</li>
            </div>
          </div>
          <div className="py-20">
            <div className="flex flex-wrap drop-shadow-2xl">
              <h1 className=" font-jakarta text-3xl font-bold md:text-4xl ">How does it</h1>
            </div>
            <h1 className="font-jakarta text-3xl font-bold text-primary md:text-4xl">
              Work?
            </h1>
            <div className="">
              <li className="font-jakarta text-sm py-1 font-medium md:text-lg">
                Open the box using RFID card by tapping it
              </li>
              <li className="font-jakarta text-sm py-1 font-medium md:text-lg">
                Put the items you want to store inside
              </li>
              <li className="font-jakarta text-sm py-1 font-medium md:text-lg">
                Close the box and tap to lock the box.
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroFeatures;