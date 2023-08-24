import React from "react";

const Footer = ({ isHomeMenu }) => {
  return (
    <footer
      className={`${
        isHomeMenu ? "fixed bottom-0 left-0 w-full" : ""
      } footer items-center p-2 bg-neutral text-neutral-content`}
    >
      <div className="items-center grid-flow-col">
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current"
        >
          {/* SVG path */}
        </svg>
        <p className="text-sm md:text-base">
          Copyright © 2023 - All rights reserved
        </p>
      </div>
      <div className="grid-flow-col gap-4 mt-2 md:mt-0 md:place-self-center md:justify-self-end">
        <a href="#" className="text-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            {/* SVG path */}
          </svg>
        </a>
        <a href="#" className="text-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            {/* SVG path */}
          </svg>
        </a>
        <a href="#" className="text-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            {/* SVG path */}
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
