import React from "react";

export const GetResults = () => {
  return (
    <React.Fragment>
      <div className="bg-blue_dark">
        <h1 className="text-center text-number_card text-white pt-4">
          Get Results, no matter what
        </h1>
        <p className="text-center text-white">
          Start your free trial today, you get all the pro features for 1 month
          for you and your team. If you think its not for you can easily
          unsubscribe
        </p>
        <div className="flex flex-row justify-center items-center">
          <button className="mt-8 rounded-sm w-40 h-14 text-cyan_dark bg-white">
            Start Free Trial
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};
