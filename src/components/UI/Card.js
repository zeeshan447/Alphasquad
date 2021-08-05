import React from "react";
import image1 from "../../images/01.png";
import image2 from "../../images/02.png";
import image3 from "../../images/03.png";
import image4 from "../../images/04.png";
import image5 from "../../images/05.png";
import image8 from "../../images/08.png";

export const Card = () => {
  const Data = [
    {
      image: `${image1}`,
      title: "Robust workflow",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique.",
    },
    {
      image: `${image2}`,
      title: "Flexibility",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique.",
    },
    {
      image: `${image3}`,
      title: "User Friendly",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique.",
    },
    {
      image: `${image4}`,
      title: "Multiple layouts",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique.",
    },
    {
      image: `${image5}`,
      title: "Better components",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique.",
    },
    {
      image: `${image8}`,
      title: "Well organised",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique.",
    },
  ];
  return (
    <div className=" mt-9 flex-col grid grid-cols-3 ">
      {Data.map((data, key) => {
        return (
          <div>
            <div>
              <img src={data.image} alt="label" className="ml-56 mt-8"></img>
            </div>

            <div className="text-feature_title text-center">{data.title}</div>
            <div className="text-center text-feature_description text-gray">
              {data.description}
            </div>
          </div>
        );
      })}
    </div>
  );
};
