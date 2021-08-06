import React from "react";
import WebberLogo from "../../images/logo.png";

export const Footer = () => {
  return (
    <React.Fragment>
      <footer className="grid grid-cols-4 bg-cream mt-8 pt-52 text-center">
        <div className="ml-8">
          <img src={WebberLogo} alt="logo"></img>
          <p className="text-case_study_location text-black_dark ml-2 mt-2 font-black">
            Webber
          </p>
          <p className="text-gray text-messsage_title mt-16">
            Copyright © 2021 WEBBER.
          </p>
          <p className="text-gray text-messsage_title">All rights reserved</p>
        </div>
        <div className="ml-16">
          <h1 className="text-font-medium text-footer_title">Company</h1>
          <ul className="text-footer_list mt-8">
            <li>About us</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <li>Pricing</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <div>
          <h1 className="text-font-medium text-footer_title">Support</h1>
          <ul className="text-footer_list mt-8">
            <li>Help Center</li>
            <li>Terms of service</li>
            <li>Legal</li>
            <li>Privacy policy</li>
            <li>Status</li>
          </ul>
        </div>
        <div>
          <h1 className="text-font-medium text-footer_title">
            Get Updates and more
          </h1>
          <input
            className="mt-8 placeholder-gray-200::placeholder"
            type="text"
            placeholder="Your email address"
          ></input>
        </div>
      </footer>
    </React.Fragment>
  );
};
