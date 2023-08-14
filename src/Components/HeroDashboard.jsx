import React from "react";
import { useNavigate } from "react-router-dom";

const BoxItem = ({ boxId, uid, timestamps }) => (
  <div className="w-full p-4">
    <div className="card bg-primary text-primary-content">
      <div className="card-body">
        <p className="font-bold text-lg">BOX ID: {boxId}</p>
        <p>UID: {uid}</p>
        {timestamps.map((timestamp, index) => (
          <p key={index}>{timestamp}</p>
        ))}
      </div>
    </div>
  </div>
);

const HeroDashboard = () => {
  const boxes = [
    {
      boxId: 2,
      uid: "002",
      timestamps: ["11/08/2023 - 14.24", "11/08/2023 - 16.00"],
    },
    {
      boxId: 3,
      uid: "003",
      timestamps: ["11/08/2023 - 14.24", "11/08/2023 - 16.00"],
    },
    {
      boxId: 4,
      uid: "004",
      timestamps: ["11/08/2023 - 14.24", "11/08/2023 - 16.00"],
    },
    {
      boxId: 5,
      uid: "005",
      timestamps: ["11/08/2023 - 14.24", "11/08/2023 - 16.00"],
    },
  ];
  const mainBox = [
    {
      boxId: 1,
      uid: "001",
      lastUsed: ["14/08/2023 - 14.24"],
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row justify-between items-center bg-base-100 p-4">
        <div
          onClick={() => navigate("/")}
          className="flex items-center space-x-2 sm:justify-center lg:justify-start hover:cursor-pointer"
        >
          <img src="/Logo.png" alt="Logo" className="w-26 h-16" />
          <a className="font-jakarta font-extrabold text-[25px] my-3 text-primary tracking-[.15em]">
            PROBOX
          </a>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-auto">
          <button
            onClick={() => navigate("/")}
            className="btn  bg-primary hover:bg-primary text-white sm:self-center lg:self-start"
          >
            SIGN OUT
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-6 sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="w-full flex justify-center">
          <div className="w-full sm:w-1/2 p-4">
            <div className="card bg-primary text-primary-content">
              <div className="card-body flex p-1">
                <div>
                  {mainBox.map((box) => (
                    <BoxItem
                      key={box.boxId}
                      boxId={box.boxId}
                      uid={box.uid}
                      timestamps={box.lastUsed}
                    />
                  ))}
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
        {boxes.map((box) => (
          <BoxItem
            key={box.boxId}
            boxId={box.boxId}
            uid={box.uid}
            timestamps={box.timestamps}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroDashboard;
