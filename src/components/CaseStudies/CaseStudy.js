import React from "react";
import { CaseStudyDetails } from "./CaseStudyDetails";

export const CaseStudy = () => {
  return (
    <React.Fragment>
      <div>
        <h1 className="text-center font-black text-large mt-20">
          CASE STUDIES
        </h1>
        <p className="text-center text-light_gray text-pricing_desc">
          See how leading organizations and freelance developers have used
          Webber to tackle
          <span className="block">
            different use cases and get ahead of the competition{" "}
          </span>
        </p>
        <div className="flex flex-row justify-center items-center">
          <div className="flex box-border h-14 w-96 p-4 border-4 border-light_black justify-center items-center content-center mt-8">
            <button className="mr-4 text-gray text-filter_text">
              Region: All
            </button>
            <button className="mr-4 text-gray text-filter_text">
              Industry: All
            </button>
            <button className="mr-4 text-gray text-filter_text">
              Type: All
            </button>
          </div>
        </div>
        <CaseStudyDetails />
      </div>
    </React.Fragment>
  );
};
