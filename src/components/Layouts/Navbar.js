import React from "react";
import { Link } from "react-router-dom";
import WebberLogo from "../../images/logo.png";

export const Navbar = () => {
  return (
    <nav>
      <ul className=" space-x-5 flex-1 flex justify-center mr-auto p-4 ">
        <div className="flex-1 ml-1">
          <img src={WebberLogo} alt="logo"></img>
          <p className="ml-2 text-blackdark font-bold">Webber</p>
        </div>
        <li className="mr-3">
          <Link
            className="hover:bg-blue-700 text-black_1 text-base md:focus:underline"
            to="/"
          >
            Overview
          </Link>
        </li>
        <li className="mr-3">
          <Link
            className="hover:bg-blue-700 text-black_1 md:focus:underline"
            to="/pricing"
          >
            Pricing
          </Link>
        </li>
        <li className="mr-3">
          <Link
            className="hover:bg-blue-700 text-black_1 md:focus:underline"
            to="/casestudies"
          >
            Case Studies
          </Link>
        </li>
        <li className="mr-3">
          <Link
            className="hover:bg-blue-700 text-black_1 md:focus:underline"
            to="/faq"
          >
            FAQ
          </Link>
        </li>
        <div className="flex-1 w-1">
          <button className="bg-cyan-500 text-cyan_dark ml-80 rounded">
            Sign In
          </button>
        </div>
      </ul>
    </nav>
  );
};
