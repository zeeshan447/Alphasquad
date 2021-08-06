import React from "react";
import { FrequentlyAsked } from "./FrequentlyAsked";
import { GetResults } from "./GetResults";
import { PriceData } from "./PriceData";

export const Pricing = () => {
  return (
    <React.Fragment>
      <div className="bg-gradient-to-b from-cyan_background">
        <h1 className="text-dark_black text-large text-center font-black pt-32">
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
        <div className="flex justify-center items-center mr-8">
          <button className="font-Mullish mt-20 px-12 py-4 w-40 h-14 text-white bg-blue_dark font-semibold text-pricing_button">
            Monthly
          </button>
          <button className="font-Mullish mt-20 px-12 py-4 w-40 h-14 bg-cyan text-cyan_dark font-semibold text-pricing_button">
            Yearly
          </button>
        </div>
        <PriceData />
      </div>

      <FrequentlyAsked />
      <GetResults />
    </React.Fragment>
  );
};
