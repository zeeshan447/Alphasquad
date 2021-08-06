import React from "react";
import pc from "../../images/pc.png";
import coffee from "../../images/coffee.png";
import sitting from "../../images/sitting.png";
import { MoreCaseStudies } from "./MoreCaseStudies";

export const CaseStudyInner = () => {
  return (
    <React.Fragment>
      <div className="pl-16 pt-16 bg-gradient-to-b from-cyan_background">
        <h4 className="text-case_study_location ">Kanban Software</h4>
        <h1 className="font-extrabold text-case_studydetail_title">
          Trello x Webber
        </h1>
        <p className="text-gray text-faq_answer">
          Learn how Trello has leveraged Webber to consolidate it’s diverse
          <span className="block">range of services software </span>
        </p>
        <div className="flex flex-row">
          <div className="grid grid-cols-2 mt-8 gap-2">
            <p>Industry: Technology</p>
            <p>Use Case: Developer Options</p>
            <p>Since: 2018</p>
            <p>Package: Enterprise +</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-end mr-32">
          <div className="justify-end box-border  p-4 bg-cyan_dark border-transparent ml-96 order-1">
            <h2 className="text-white text-faq_question font-bold">
              Get Webber for your organization
            </h2>
            <p className="text-faq_answer mr-8 text-white mt-8">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look.
            </p>
            <div className="flex space-x-3 mt-8">
              <button className="font-Mullish px-8 py-2 bg-white text-cyan_dark h-32 w-32">
                Start Trial
              </button>
              <button className="font-Mullish px-8 py-2 box-border border-white text-white border-2 bg-transparent">
                Contact Sales
              </button>
            </div>
          </div>
          <img src={pc} alt="computer"></img>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <h1 className="text-black_dark text-case_study_title font-bold mb-8">
              The Details
            </h1>
            <p className="text-black_dark text-faq_answer mb-8">
              It is a long established fact that a reader will be distracted by
              the readable. There are many variations of passages of Lorem Ipsum
              available, but the majority have suffered alteration in some form,
              by injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
            </p>
            <img className="mb-8" src={coffee} alt="table"></img>
            <h2 className="text-filter_text font-semibold text-black_dark mb-8">
              Breakdown of milestones
            </h2>
            <ul className="text-faq_answer mb-8 text-black_dark">
              <li>
                - Mauris ullamcorper neque sed mauris gravida, vel mollis velit
                molestie.
              </li>
              <li>- Donec iaculis erat in vulputate venenatis.</li>
              <li>- Vestibulum et velit et metus commodo iaculis.</li>
              <li>- Sed et urna a felis accumsan commodo vel vel nibh.</li>
              <li>- Praesent sollicitudin nulla non sollicitudin varius.</li>
              <li>- Integer convallis orci sed diam volutpat feugiat.</li>
              <li>- Donec posuere arcu non semper maximus.</li>
            </ul>
            <img className="mb-8" src={sitting} alt="person"></img>
            <p className="text-faq_answer mb-8 text-black_dark ">
              It is a long established fact that a reader will be distracted by
              the readable. There are many variations of passages of Lorem Ipsum
              available, but the majority have suffered alteration in some form,
              by injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
            </p>
          </div>
        </div>
      </div>
      <MoreCaseStudies />
    </React.Fragment>
  );
};
