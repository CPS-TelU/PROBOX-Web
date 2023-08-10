import React from "react";

const HeroDashboard = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      <div className="card w-96 bg-primary text-primary-content mt-10 flex justify-center items-center p-4">
        <div className="card-body">
          <p className="text-lg font-bold">BOX ID: 1</p>
          <p>UID: 001</p>
          <p>Timestamp: 001</p>
        </div>
      </div>
      <div className="flex flex-row justify-center mt-10 gap-4">
        <div className="card w-48 bg-primary text-primary-content p-4">
          <div className="card-body">
            <p className="text-lg font-bold">BOX ID: 2</p>
            <p>UID: 002</p>
            <p>Timestamp: 002</p>
          </div>
        </div>
        <div className="card w-48 bg-primary text-primary-content p-4">
          <div className="card-body">
            <p className="text-lg font-bold">BOX ID: 3</p>
            <p>UID: 003</p>
            <p>Timestamp: 003</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center mt-10 gap-4">
        <div className="card w-48 bg-primary text-primary-content p-4">
          <div className="card-body">
            <p className="text-lg font-bold">BOX ID: 4</p>
            <p>UID: 004</p>
            <p>Timestamp: 004</p>
          </div>
        </div>
        <div className="card w-48 bg-primary text-primary-content p-4">
          <div className="card-body">
            <p className="text-lg font-bold">BOX ID: 5</p>
            <p>UID: 005</p>
            <p>Timestamp: 005</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDashboard;