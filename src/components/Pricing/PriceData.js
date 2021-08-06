import React from "react";
import tick from "../../images/tick.png";
import cross from "../../images/cross.png";
import user1 from "../../images/user1.png";
import users3 from "../../images/users3.png";
import Unlimited from "../../images/Unlimited.png";

export const PriceData = () => {
  const Data = [
    {
      name: "All limited links",
      starter: `${tick}`,
      pro: `${tick}`,
      enterprise: `${tick}`,
    },
    {
      name: "Own analytics platform",
      starter: `${tick}`,
      pro: `${tick}`,
      enterprise: `${tick}`,
    },
    {
      name: "Chat support",
      starter: `${tick}`,
      pro: `${tick}`,
      enterprise: `${tick}`,
    },
    {
      name: "Number of users",
      starter: `${user1}`,
      pro: `${users3}`,
      enterprise: `${Unlimited}`,
    },
    {
      name: "Optimize hashtags",
      starter: `${tick}`,
      pro: `${tick}`,
      enterprise: `${tick}`,
    },
    {
      name: "Account manager",
      starter: `${cross}`,
      pro: `${tick}`,
      enterprise: `${tick}`,
    },
    {
      name: "Number of articles",
      starter: `${cross}`,
      pro: `${cross}`,
      enterprise: `${tick}`,
    },
    {
      name: "Satisfaction guaranteed",
      starter: `${tick}`,
      pro: `${tick}`,
      enterprise: `${tick}`,
    },
  ];
  return (
    <React.Fragment>
      <div className="flex flex-row mt-24 justify-center items-center ml-96 space-x-64 mt-80">
        <h1 className="text-pricing font-extrabold	">Starter</h1>
        <h1 className="text-pricing font-extrabold text-blue_light	">Pro</h1>
        <h1 className="text-pricing font-extrabold	">Enterprise</h1>
      </div>
      <div className="flex flex-row mt-8 justify-center items-center ml-96 space-x-64">
        <h1 className="text-pricing font-extrabold	">$20/month</h1>
        <h1 className="text-pricing font-extrabold text-blue_light	">
          $100/month
        </h1>
        <h1 className="text-pricing font-extrabold	">$200/month</h1>
      </div>
      <div className="grid grid-cols-4 mt-16 ml-80">
        {Data.map((data, key) => {
          return (
            <React.Fragment>
              <div>
                <h1 className="text-filter_text text-black_dark mb-16">
                  {data.name}
                </h1>
              </div>
              <div>
                <img src={data.starter} alt="starter"></img>
              </div>
              <div>
                <img src={data.pro} alt="pro"></img>
              </div>
              <div>
                <img src={data.enterprise} alt="enterprise"></img>
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <div className="flex flex-row mt-24 ml-96 space-x-64 ">
        <button className="font-Mullish px-4 py-2 w-40 h-14 bg-cyan text-cyan_dark">
          Choose plan
        </button>
        <button className="font-Mullish px-4 py-2 w-40 h-14 text-white bg-blue_dark">
          Choose plan
        </button>
        <button className="font-Mullish px-4 py-2 w-40 h-14 bg-cyan text-cyan_dark">
          Choose plan
        </button>
      </div>
    </React.Fragment>
  );
};
