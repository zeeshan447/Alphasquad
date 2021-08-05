import React from "react";
import Project1 from "../../images/Project1.png";
import Project2 from "../../images/Project2.png";
import Project3 from "../../images/Project3.png";
import Project4 from "../../images/Project4.png";
import Project5 from "../../images/Project5.png";
import Project6 from "../../images/Project6.png";

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
  {
    image: `${Project5}`,
    location: "Technology - SaaS",
    title: "Adobe Systems Inc",
    Description:
      "Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software",
  },
  {
    image: `${Project6}`,
    location: "Kanban Software",
    title: "Mann and Sons",
    Description:
      "Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software",
  },
];

export const CaseStudyDetails = () => {
  return (
    <React.Fragment>
      <div className="flex flex-wrap justify-center items-center mt-20">
        {Data.map((data, key) => {
          return (
            <div>
              <img
                className="w-500px h-600px"
                src={data.image}
                alt="random"
              ></img>
              <h4 className="text-case_study_location">{data.location}</h4>
              <h3 className="text-case_study_title font-extrabold">
                {data.title}
              </h3>
              <p className="text-case_study_desc mb-8 mr-8 text-justify">
                {data.Description}
              </p>
              <button className="text-cyan_dark text-case_study_location">
                Read More
              </button>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};
