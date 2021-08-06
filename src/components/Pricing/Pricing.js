import React from "react";
import { FrequentlyAsked } from "./FrequentlyAsked";
import { GetResults } from "./GetResults";
import { PriceData } from "./PriceData";

export const Pricing = () => {
  return (
    <React.Fragment>
      <div>
        <h1 className="text-dark_black text-large text-center font-black mt-32">
          SIMPLE PRICING
        </h1>
        <p className="text-pricing_desc text-light_gray text-center ">
          No contracts. No surprise fees. Register now or try out the Webbber
          free trial
          <span className="block">
            so you’re absolutely sure that it’s the right fit for your frontend
            team
          </span>
        </p>
        <div className="flex justify-center items-center">
          <button className="mt-20 px-4 py-2 w-40 h-14 text-white bg-blue_dark font-semibold text-pricing_button">
            Monthly
          </button>
          <button className="mt-20 px-4 py-2 w-40 h-14 bg-cyan text-cyan_dark font-semibold text-pricing_button">
            Yearly
          </button>
        </div>
      </div>
      <PriceData />
      <FrequentlyAsked />
      <GetResults />
    </React.Fragment>
  );
};
