import React from "react";
import profilepic from "../../images/profilepic.png";

export const Message = () => {
  return (
    <React.Fragment>
      <div className="flex flex-row bg-blue_dark mt-16 pb-32 justify-center items-center pt-32 ">
        <div>
          <img className="ml-16" src={profilepic} alt="profile"></img>
        </div>
        <div className="mt-2 ml-16">
          <h1 className="block text-white text-messsage_title ml-4">
            Jenny Wilson
          </h1>
          <h3 className="block text-white text-messsage_title  ml-4">
            Vice President
          </h3>
        </div>
        <div className=" text-center text-justify ml-48 mr-32 text-white text-message_desc font-medium">
          <p>
            Eos enim quo est necessitatibus nobis consectetur rerum qui dolores.
            Quia commodi similique est sed aut. Aspernatur voluptas nisi tenetur
            voluptates iusto debitis ex voluptatem odit. Repudiandae et et quod
            et. Enim sit delectus numquam. Molestiae aut voluptatem. Quia
            commodi similique est sed aut. Aspernatur voluptas nisi tenetur
            voluptates iusto debitis.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};
