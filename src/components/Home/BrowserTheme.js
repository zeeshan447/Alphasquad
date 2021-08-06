import React from "react";
import browser from "../../images/browser.png";

export const BrowserTheme = () => {
  return (
    <React.Fragment>
      <div className="container mx-auto">
        <section className="bg-cyan_dark w-full relative top-28 ">
          <img
            className="ml-40 relative relative z-30 top-40 "
            src={browser}
            alt="browser"
          ></img>
        </section>
      </div>
    </React.Fragment>
  );
};
