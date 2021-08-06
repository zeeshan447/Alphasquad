import React from "react";
import Project1 from "../../images/Project1.png";
import Project2 from "../../images/Project2.png";
import Project3 from "../../images/Project3.png";
import Project4 from "../../images/Project4.png";

export const MoreCaseStudies = () => {
  const Data = [
    {
      image: `${Project1}`,
      location: "Technology - SaaS",
      title: "Adobe Systems Inc",
      Description:
        "Learn how Adobe has leveraged Webber to consolidate it’s diverse range of services software",
    },
    {
      image: `${Project2}`,
      location: "Kanban Software",
      title: "Trello",
      Description:
        "Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software",
    },
    {
      image: `${Project3}`,
      location: "Technology - SaaS",
      title: "Gutkowski, Schuppe and Pagac",
      Description:
        "Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software",
    },
    {
      image: `${Project4}`,
      location: "Airline",
      title: "Swiss Airline",
      Description:
        "Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software",
    },
  ];
  return (
    <React.Fragment>
      <div className="bg-cream">
        <h1 className="mt-8 ml-8 text-case_study_title font-bold">
          More Case Studies
        </h1>
        <div className="flex flex-shrink space-x-1 justify-center items-center mt-20">
          {Data.map((data, key) => {
            return (
              <div>
                <img
                  className="object-none w-16 h-16"
                  src={data.image}
                  alt="radom"
                ></img>
                <h3 className="text-case_study_location">{data.location}</h3>
                <h1 className="text-case_study_title font-extrabold">
                  {data.title}
                </h1>
                <p className="text-case_study_desc mb-8 mr-8 text-justify">
                  {data.Description}
                </p>
                <button className="text-cyan_dark text-case_study_location">
                  Read Story
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};
