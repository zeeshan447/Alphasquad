import React from "react";
import airbnb from "../../images/airbnb.png";
import Amazon from "../../images/Amazon.png";
import BookMyShow from "../../images/BookMyShow.png";
import FedEx from "../../images/FedEx.png";
import Google from "../../images/Google.png";
import Microsoft from "../../images/Microsoft.png";
import OYO from "../../images/OYO.png";
import Walmart from "../../images/Walmart.png";
export const Brands = () => {
  return (
    <div>
      <h1 className="text-brands_title font-black text-center mt-32">
        Brands using our services
      </h1>
      <div className="grid grid-cols-4 mt-14 items-center ml-32">
        <div>
          <img src={Microsoft} alt="logo"></img>
        </div>
        <div>
          <img src={OYO} alt="logo"></img>
        </div>
        <div>
          <img src={Walmart} alt="logo"></img>
        </div>
        <div>
          <img src={airbnb} alt="logo"></img>
        </div>
        <div>
          <img className="mt-8" src={FedEx} alt="logo"></img>
        </div>
        <div>
          <img className="mt-8" src={BookMyShow} alt="logo"></img>
        </div>
        <div>
          <img className="mt-8" src={Amazon} alt="logo"></img>
        </div>
        <div>
          <img className="mt-8" src={Google} alt="logo"></img>
        </div>
      </div>
    </div>
  );
};
