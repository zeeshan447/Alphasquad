import React from "react";
import { Feature } from "./Feature";
import { Howitworks } from "./Howitworks";
import { Message } from "./Message";
import { Brands } from "./Brands";
import { Numbers } from "./Numbers";
import { NextBigThing } from "./NextBigThing";

export const Home = () => {
  return (
    <div>
      <div>
        <h1 className="text-center text-large font-black">
          DEPLOY YOUR
          <span className="block"> FRONT-END </span>
        </h1>
      </div>
      <div className="flex space-x-4 justify-center">
        <button className="mt-20 w-40 h-14 text-white bg-blue_dark ">
          Get Started
        </button>
        <button className="mt-20 bg-cyan rounded-sm w-40 h-14 text-cyan_dark">
          Learn More
        </button>
      </div>
      <Feature />
      <Howitworks />
      <Message />
      <Brands />
      <Numbers />
      <NextBigThing />
    </div>
  );
};
