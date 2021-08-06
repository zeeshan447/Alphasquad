import React from "react";
import iphonexs from "../../images/iphonexs.png";
import next from "../../images/next.png";
export const Howitworks = () => {
  return (
    <div>
      <h2 className="text-center font-black text-howitworks_title mt-64">
        How it works
      </h2>
      <div className="grid grid-cols-2 mt-60">
        <div>
          <h3 className="font-extrabold text-howitworks_signup ml-20 mt-20">
            Sign Up
          </h3>
          <p className="text-howitworks_desc text-light_gray ml-20 mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat{" "}
            <span className="block">
              vitae a consectetur dolor. Elementum habitant urna, ac quis{" "}
            </span>
            <span className="block">
              laoreet urna purus. Aliquam at est vel auctor rhoncus et.
            </span>
            <span className="block">
              Sit ac enim, malesuada mattis. Dignissim nibh augue posuer
            </span>
          </p>
        </div>
        <div>
          <img src={iphonexs} alt="iphonexs" className="ml-60 "></img>
        </div>
        <div className="grid grid-cols-2 space-x-10 ml-9">
          <button className=" ml-8 w-40 h-14 text-white bg-blue_dark ">
            Learn More
          </button>
          <img src={next} alt="next"></img>
        </div>
      </div>
    </div>
  );
};
