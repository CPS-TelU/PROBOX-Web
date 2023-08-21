import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebaseConfig"; // Make sure to import the auth object

const BoxItem = ({ boxId, uid, timestamps, isAvailable }) => (
  <div className="w-full p-4">
    <div className="card bg-primary text-primary-content relative">
      {isAvailable ? (
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-green-500 font-bold">
          AVAILABLE
        </div>
      ) : (
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-red-500 font-bold">
          UNAVAILABLE
        </div>
      )}
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

const BoxItems = ({ boxes }) => {
  const [currentBox, setCurrentBox] = useState(0);

  const handleNext = () => {
    setCurrentBox((prevBox) => (prevBox + 1) % boxes.length);
  };

  const handlePrev = () => {
    setCurrentBox((prevBox) => (prevBox - 1 + boxes.length) % boxes.length);
  };

  return (
    <div className="flex flex-col items-center md:hidden">
      <div className="carousel w-64 rounded-box gap-x-10 space-x-8">
        {boxes.map((box, index) => (
          <div
            key={index}
            className={`carousel-item w-full  ${
              index === currentBox ? "active" : ""
            }`}
          >
            <div className="card bg-primary text-primary-content">
              <div className="card-body w-72">
                <p className="font-bold text-lg">BOX ID: {box.boxId}</p>
                <p>UID: {box.uid}</p>
                {box.timestamps.map((timestamp, idx) => (
                  <p key={idx}>{timestamp}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
        <button className="carousel-control prev" onClick={handlePrev}>
          &#10094;
        </button>
        <button className="carousel-control next" onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

const CardDashboard = () => {
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

  const handleLogout = () => {
    // Sign out the user
    auth.signOut().then(() => {
      navigate("/"); // Navigate to Home after sign out
    });
  };

  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col mt-6 sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="w-full flex justify-center">
          <div className="w-full sm:w-9/12 p-4 lg:w-1/2">
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
      <div className="flex flex-col mt-4 my-6 sm:flex-row mt-10 my-10 items-center justify-center">
        <h2 className="font-medium text-lg text-center">HISTORY</h2>
      </div>
      <div className="hidden sm:block">
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
      <div className="lg:hidden">
        <BoxItems boxes={boxes} />
      </div>
    </div>
  );
};

export default CardDashboard;