import React from "react";

export const Numbers = () => {
  return (
    <React.Fragment>
      <div className=" bg-blue_dark mt-32 pt-12 z-40 relative top-28">
        <h1 className="text-white font-black text-numbers_title text-center">
          By the numbers
        </h1>
        <h3 className="text-white text-numbers_desc text-center mt-4">
          5 years, consistent quality and you get results. No matter what
        </h3>
        <div className="flex justify-center items-center space-x-4 text-center mt-32 ">
          <div className="box-border h-60 w-60 p-4 border-4 border-white rounded-large bg-white relative z-30 top-20">
            <h3 className="text-number_card font-extrabold mt-16">40+</h3>
            <p className="text-number_carddesc mt-4">Happy Clients</p>
          </div>
          <div className="box-border h-60 w-60 p-4 border-4 border-white rounded-large rounded-large bg-white relative z-30 top-20">
            <h3 className="text-number_card font-extrabold mt-16">540+</h3>
            <p className="text-number_carddesc mt-4">Projects Completed</p>
          </div>
          <div className="box-border h-60 w-60 p-4 border-4 border-white rounded-large bg-white relative z-30 top-20">
            <h3 className="text-number_card font-extrabold mt-16">300</h3>
            <p className="text-number_carddesc mt-4">Dedicated Members</p>
          </div>
          <div className="box-border h-60 w-60 p-4 border-4 border-white rounded-large bg-white relative z-30 top-20">
            <h3 className="text-number_card font-extrabold mt-16">25+</h3>
            <p className="text-number_carddesc mt-4">Awards Won</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
