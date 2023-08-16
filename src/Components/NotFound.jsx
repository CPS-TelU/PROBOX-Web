import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 to-red-800">
      <img src="/Logo.png" alt="Logo" className="w-40 h-40 animate-bounce mb-4 grayscale brightness-150" />
      <h1 className="text-5xl font-semibold mb-2 text-white">404</h1>
      <p className="text-lg text-white text-center mb-6">
        Oops! It seems you've taken a wrong turn. This page doesn't exist.
      </p>
      <Link
        to="/"
        className="text-blue-400 hover:text-blue-600 transition duration-300 ease-in-out"
      >
        ❮❮ Let's get you back home
      </Link>
    </div>
  );
};

export default NotFound;
