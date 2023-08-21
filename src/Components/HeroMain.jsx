import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { auth } from "./firebaseConfig";

const HeroMain = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  const handleGetStarted = () => {
    if (isLoggedIn) {
      navigate("/Dashboard");
    } else {
      navigate("/Login");
    }
  };

  return (
    <div className="hero my-2 lg:my-20 bg-base-100">
      <div className="hero-content flex-col gap-1 lg:flex-row">
        <div className="max-w-sm md:max-w-lg rounded-lg lg:max-w-xl">
          <img
            src="/Logo.png"
          />
        </div>
        <div>
          <div className="flex flex-wrap drop-shadow-2xl">
            <h1 className="font-jakarta text-2xl font-bold md:text-3xl lg:text-5xl">Your Security in a </h1>
            <h1 className="font-jakarta text-2xl font-bold text-primary ps-1.5 md:text-3xl lg:text-5xl px-2.5">Box </h1>
          </div>
          <p className="py-2 text-sm md:text-lg lg:text-xl my-4">
         Probox is an advanced and technologically equipped container designed to enhance security measures for protecting valuable items, documents, or possessions. This innovative device integrates cutting-edge technology to provide comprehensive security features, ensuring that its contents remain safeguarded from unauthorized access, theft, and tampering.
          </p>
          <button onClick={handleGetStarted} className="btn btn-primary hover:bg-primary text-white">
            {isLoggedIn ? "Go to Dashboard" : "Get Started"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroMain;