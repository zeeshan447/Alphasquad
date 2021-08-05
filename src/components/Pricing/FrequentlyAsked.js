import React from "react";
import Faq from "../../Faq.json";

export const FrequentlyAsked = () => {
  return (
    <React.Fragment>
      <div className="bg-cream">
        <h1 className="text-center text-numbers_title font-black mt-80">
          Frequently Asked Questions
        </h1>
        <div className="grid grid-cols-2 ml-16 mt-20">
          {Faq.map((data, key) => {
            return (
              <div>
                <h2 className="text-black_dark font-semibold text-faq_question mt-8">
                  {data.question}
                </h2>
                <p className="text-light_gray text-faq_answer mt-8 mb-8">
                  {data.answer}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};
