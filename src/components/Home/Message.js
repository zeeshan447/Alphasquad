import React from "react";
import profilepic from "../../images/profilepic.png";

export const Message = () => {
  return (
    <React.Fragment>
      <div className="flex flex-row bg-blue_dark mt-16 ">
        <div>
          <img className="ml-16" src={profilepic} alt="profile"></img>
        </div>
        <div className="mt-2">
          <h1 className="block text-white text-messsage_title ml-4">
            Jenny Wilson
          </h1>
          <h3 className="block text-white text-messsage_title  ml-4">
            Vice President
          </h3>
        </div>
      </div>
    </React.Fragment>
  );
};
