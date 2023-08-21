import React, { useState, useEffect } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const BoxItem = ({ uid, status, timestamp }) => (
  <div className="w-full p-4">
    <div className="card bg-primary text-primary-content relative">
      {status === "TIDAK ADA BARANG" ? (
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-red-500 font-bold">
          {status}
        </div>
      ) : (
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-green-500 font-bold">
          {status}
        </div>
      )}
      <div className="card-body">
        <p className="font-bold text-lg">UID: {uid}</p>
        <p>Timestamp: {timestamp}</p>
      </div>
    </div>
  </div>
);

const HistoryItem = ({ uid, status, lock, timestamp }) => (
  <div className="p-2">
    <div className="card bg-primary text-primary-content relative">
      <div className="card-body">
        <p className="font-bold text-lg">UID: {uid}</p>
        <p>Status: {status}</p>
        <p>Lock: {lock}</p>
        <p>Timestamp: {timestamp}</p>
      </div>
    </div>
  </div>
);

const CardDashboard = () => {
  const [currentBox, setCurrentBox] = useState({});
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the first API for current box status
    axios
      .get("https://probox-eta.vercel.app/api/probox")
      .then((response) => {
        setCurrentBox(response.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });

    // Fetch data from the second API for historical data
    axios
      .get("https://probox-eta.vercel.app/api/probox/history")
      .then((response) => {
        setHistory(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching history:", error);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mt-6">
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="w-full flex justify-center">
            <div className="w-full sm:w-9/12 p-4 lg:w-1/2">
              <BoxItem
                uid={currentBox.uid}
                status={currentBox.status}
                timestamp={currentBox.timestamp}
              />
            </div>
          </div>
        </div>
        <div className="text-center mt-4 text-lg font-bold">History</div>
        <div className="flex justify-center mt-2 overflow-x-auto">
          <div className="grid grid-cols-2 gap-4">
            {history.reverse().map((item, index) => (
              <HistoryItem
                key={index}
                uid={item.uid}
                status={item.status}
                lock={item.lock}
                timestamp={item.timestamp}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDashboard;
