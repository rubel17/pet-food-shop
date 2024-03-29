import React from "react";
import "./NewsLetter.css";
import NewsBanner from "../../../assets/image/newsletterBanner.png";
import NewsShed from "../../../assets/image/newsletterShed.png";
import rightArrow from "../../../assets/image/BannerRightArrow.png";
import { Link } from "react-router-dom";

const NewsLetter = () => {
  return (
    <>
      <div className="-mt-72 md:-mt-52  lg:mt-40 mb-28">
        <div className="flex justify-center relative ">
          <img className="h-52 lg:h-80 xl:h-full" src={NewsBanner} alt="" />
          <img className="absolute h-full" src={NewsShed} alt="" />
          <div className="absolute top-10 2xl:top-32 lg:top-20 ">
            <p className="text-white lg:text-4xl 2xl:text-5xl font-semibold newsletter lg:tracking-tighter">
              For any update information
              <br />
              Subscribe our Newsletter
            </p>
            <div className="lg:flex text-white mt-4 2xl:mt-12 lg:mt-10">
              <div>
                <p className="newsletter-email lg:mt-6">Enter Your Email</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="315"
                  height="2"
                  viewBox="0 0 343 2"
                  fill="none"
                >
                  <path d="M1 1H342" stroke="white" strokeLinecap="round" />
                </svg>
              </div>

              <Link
                className="newsletter-btn mt-2 lg:ml-5 lg:p-3.5 p-1"
                to="/subscribe"
              >
                Subscribe Now <img src={rightArrow} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
