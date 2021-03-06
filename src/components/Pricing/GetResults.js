import React from "react";

export const GetResults = () => {
  return (
    <React.Fragment>
      <div className="bg-blue_dark">
        <h1 className="text-center text-number_card text-white pt-4">
          Get Results, no matter what
        </h1>
        <p className="text-center text-white mt-8 font-Mullish">
          Start your free trial today, you get all the pro features for 1 month
          for you
          <span className="block">
            and your team. If you think its not for you can easily unsubscribe
          </span>
        </p>
        <div className="flex flex-row justify-center items-center">
          <button className="font-Mullish mt-8 px-4 py-2 mb-8  w-40 h-14 text-cyan_dark bg-white">
            Start Free Trial
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};
