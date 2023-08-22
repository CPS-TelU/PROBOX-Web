import React, { useState, useEffect } from "react";
import axios from "axios";

const BoxItem = ({ uid, status, timestamp }) => (
  <div className="">
    <div className="card bg-primary text-primary-content">
      {status === "TIDAK ADA BARANG" ? (
        <div className="card-body w-full text-white font-jakarta">
        <div className="hidden md:block absolute top-1/2 right-4 -translate-y-2 text-green-500 font-bold text-md">
          {status}
        </div>
        <div className="flex text-green-500 font-bold text-md md:hidden ">
          {status}
        </div>
        <p className="font-bold text-md ">UID: {uid}</p>
        <p className="text-md md:text-lg ">Timestamp: {timestamp}</p>
      </div>
      ) : (
        <div className="card-body w-full text-white font-jakarta">
          <div className="hidden md:block absolute top-1/2 right-4 -translate-y-2 text-red-500 font-bold text-md">
            {status}
          </div>
          <div className="flex text-red-500 font-bold text-md md:hidden ">
            {status}
          </div>
          <p className="font-bold text-md ">UID: {uid}</p>
          <p className="text-md md:text-lg ">Timestamp: {timestamp}</p>
        </div>
      )}
    </div>
  </div>
);

const HistoryItem = ({ uid, status, lock, timestamp, id }) => (
  <div className="p-2">
    <div className="card bg-primary text-primary-content relative ">
      <div className="card-body text-white font-jakarta ">
        <div className="flex">
          <p className="font-bold text-lg">UID: {uid}</p>
          <p className="font-bold text-lg text-end">{id}</p>
        </div>
        <p>Status : {status}</p>
        <p>Lock : {lock}</p>
        <p>Timestamp  : {timestamp}</p>
      </div>
    </div>
  </div>
);

const CardDashboard = () => {
  const [currentBox, setCurrentBox] = useState({});
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(history.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const fetchData = () => {
    axios
      .get("https://probox-supabase.vercel.app/api/probox")
      .then((response) => {
        setCurrentBox(response.data.data);
      })
      .catch((error) => {
        setError(error);
      });

    axios
      .get("https://probox-supabase.vercel.app/api/probox/history")
      .then((response) => {
        setHistory(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching history:", error);
      });
  };

  useEffect(() => {
    // Fetch data immediately when the component mounts
    fetchData();

    // Fetch data every second using setInterval
    const intervalId = setInterval(fetchData, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex justify-center">
      <div className="mt-6">
        <div className="flex flex-col sm:flex-row ">
          <div className="w-full flex justify-center">
            <div className="w-full p-2 sm:w-10/12 lg:w-9/12">
              <BoxItem
                uid={currentBox.uid}
                status={currentBox.status}
                timestamp={currentBox.timestamp}
              />
            </div>
          </div>
        </div>
        <div className="text-center mt-4 text-lg font-medium font-jakarta">
          History
        </div>
        <div className="flex justify-center mt-2 overflow-x-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {history.slice(startIndex, endIndex).map((item) => (
              <HistoryItem
                key={item.id}
                id={item.id}
                uid={item.uid}
                status={item.status}
                lock={item.lock}
                timestamp={item.timestamp}
              />
            ))}
          </div>
        </div>
        {/* Pagination controls */}
        <div className="flex justify-center mt-4">
          <button
            className="btn btn-primary mx-2 text-white hover:bg-primary"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            ❮❮
          </button>
          <button
            className="btn btn-primary mx-2 text-white hover:bg-primary"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            ❯❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDashboard;