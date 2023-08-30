import React, { useState, useEffect } from "react";
import axios from "axios";

const BoxItem = ({ uid, status, timestamp, lock }) => (
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
          <p className="font-bold text-md ">User: {uid}</p>
          <p className="font-bold text-md ">Solenoid : {lock}</p>
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
          <p className="font-bold text-md ">User: {uid}</p>
          <p className="font-bold text-md ">Solenoid : {lock}</p>
          <p className="text-md md:text-lg ">Timestamp: {timestamp}</p>
        </div>
      )}
    </div>
  </div>
);

const HistoryItem = ({ uid, status, lock, timestamp, id }) => (
  <div className="p-2">
    {status === "TIDAK ADA BARANG" ? (
      <div className="card bg-primary text-primary-content relative ">
        <div className="card-body text-white font-jakarta ">
          <div className="flex">
            <p className="font-bold text-lg">User: {uid}</p>
            <p className="font-bold text-lg text-end">{id}</p>
          </div>
          <div>
            <p className="text-green-500 font-bold text-md font-jakarta">
              {status}
            </p>
            <p>Solenoid : {lock}</p>
            <p>Timestamp : {timestamp}</p>
          </div>
        </div>
      </div>
    ) : (
      <div className="card bg-primary text-primary-content relative ">
        <div className="card-body text-white font-jakarta ">
          <div className="flex">
            <p className="font-bold text-lg">User: {uid}</p>
            <p className="font-bold text-lg text-end">{id}</p>
          </div>
          <div>
            <p className="text-red-500 font-bold text-md font-jakarta">
              {status}
            </p>
            <p>Solenoid : {lock}</p>
            <p>Timestamp : {timestamp}</p>
          </div>
        </div>
      </div>
    )}
  </div>
);

const CardDashboard = () => {
  const [currentBox, setCurrentBox] = useState({});
  const [history, setHistory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoadingBox, setIsLoadingBox] = useState(true); // Loading state for box data
  const [isLoadingHistory, setIsLoadingHistory] = useState(true); // Loading state for history data
  const itemsPerPage = 4;
  const totalPages = Math.ceil(history.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const fetchBoxData = () => {
    axios
      .get("https://probox-supabase.vercel.app/api/probox")
      .then((response) => {
        setCurrentBox(response.data.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoadingBox(false); // Set loading state to false after the request
      });
  };

  const fetchHistoryData = () => {
    axios
      .get("https://probox-supabase.vercel.app/api/probox/history")
      .then((response) => {
        setHistory(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching history:", error);
      })
      .finally(() => {
        setIsLoadingHistory(false); // Set loading state to false after the request
      });
  };

  useEffect(() => {
    // Fetch data immediately when the component mounts
    fetchBoxData();
    fetchHistoryData();

    // Fetch data every second using setInterval
    const intervalId = setInterval(() => {
      fetchBoxData();
      fetchHistoryData();
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className="flex justify-center">
      <div className="mt-6">
        {isLoadingBox || isLoadingHistory ? ( // Conditional rendering based on loading status
          <div className="flex flex-col -mt-20 justify-center items-center h-screen">
            <img
              src="/Logo.png"
              alt="Logo"
              className="w-40 h-40 animate-bounce mb-2 grayscale brightness-150"
            />
            <p className="text-lg font-medium">Loading...</p>
          </div>
        ) : (
          // Your CardDashboard content here
          <div>
            <div className="flex flex-col sm:flex-row ">
              <div className="w-full flex justify-center">
                <div className="w-full p-2 sm:w-10/12 lg:w-9/12">
                  <BoxItem
                    uid={currentBox.uid}
                    status={currentBox.status}
                    lock={currentBox.selenoid}
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
                    lock={item.selenoid}
                    timestamp={item.timestamp}
                  />
                ))}
              </div>
            </div>
            {/* Pagination controls */}
            <div className="flex w-full justify-center mt-4 mb-10">
              <button
                className="btn btn-primary btn-sm w-1 mx-1 text-white hover:bg-primary sm:btn-md  lg:btn-md"
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
              >
                ❮❮
              </button>
              <button
                className="btn btn-primary btn-sm w-1 mx-1 text-white hover:bg-primary sm:btn-md  lg:btn-md"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                ❮
              </button>
              {/* Page mobile screen */}
              <div className="relative inline-block sm:hidden">
                <select
                  value={currentPage}
                  onChange={(e) => setCurrentPage(parseInt(e.target.value))}
                  className={
                    "btn btn-sm mx-1 w-32 font-jakarta md:w-48 md:btn-md lg:btn-md text-white bg-primary hover:bg-primary"
                  }
                  style={{
                    padding: "0.25rem",
                    textAlign: "center",
                    textAlignLast: "center",
                    borderRadius: "0.52rem",
                    WebkitAppearance: "none",
                    appearance: "none",
                    fontSize: "13px",
                  }}
                >
                  {pageNumbers.map((pageNumber) => (
                    <option
                      key={pageNumber}
                      value={pageNumber}
                      style={{ textAlign: "center" }}
                      className="text-[15px]"
                    >
                      Page {pageNumber}
                    </option>
                  ))}
                </select>
              </div>
              {/* Page tab screen */}
              <div className="hidden md:block relative inline-block lg:hidden">
                <select
                  value={currentPage}
                  onChange={(e) => setCurrentPage(parseInt(e.target.value))}
                  className={
                    "btn btn-sm mx-1 w-32 font-jakarta md:w-48 md:btn-md lg:btn-md text-white bg-primary hover:bg-primary"
                  }
                  style={{
                    padding: "0.25rem",
                    textAlign: "center",
                    textAlignLast: "center",
                    borderRadius: "0.52rem",
                    WebkitAppearance: "none",
                    appearance: "none",
                    fontSize: "18px",
                  }}
                >
                  {pageNumbers.map((pageNumber) => (
                    <option
                      key={pageNumber}
                      value={pageNumber}
                      style={{ textAlign: "center", lineHeight: "10rem" }}
                      className="text-[12px]"
                    >
                      Page {pageNumber}
                    </option>
                  ))}
                </select>
              </div>
              {/* Page desktop screen */}
              <div className="hidden lg:block relative inline-block">
                <select
                  value={currentPage}
                  onChange={(e) => setCurrentPage(parseInt(e.target.value))}
                  className={
                    "btn btn-sm mx-1 w-32 md:w-48 md:btn-md lg:btn-md text-white bg-primary hover:bg-primary"
                  }
                  style={{
                    padding: "0.25rem",
                    textAlign: "center",
                    textAlignLast: "center",
                    borderRadius: "0.5rem",
                    WebkitAppearance: "none",
                    appearance: "none",
                    fontSize: "18px",
                  }}
                >
                  {pageNumbers.map((pageNumber) => (
                    <option
                      key={pageNumber}
                      value={pageNumber}
                      style={{ textAlign: "center" }}
                      className="text-[18px]"
                    >
                      Page {pageNumber}
                    </option>
                  ))}
                </select>
              </div>

              <button
                className="btn btn-primary btn-sm w-1 mx-1 text-white hover:bg-primary sm:btn-md  lg:btn-md"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                ❯
              </button>
              <button
                className="btn btn-primary btn-sm w-1 mx-1 text-white hover:bg-primary sm:btn-md  lg:btn-md"
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage === totalPages}
              >
                ❯❯
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardDashboard;