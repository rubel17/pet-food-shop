import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import React from "react";
import "./Info.css";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <div className="flex justify-center bg-col md:h-20">
      <div className="md:flex md:justify-between t-width">
        <div className="md:flex">
          <div className="flex mt-3">
            <FontAwesomeIcon className="mt-5" icon={faPhoneVolume} />
            <div className="ml-3">
              <p>Contact Us</p>
              <p>+880123456789</p>
            </div>
          </div>
          <div className="md:ml-6 h-10 mt-5 md:border border-t"></div>
          <div className="flex mt-3 ml-5">
            <FontAwesomeIcon className="mt-5" icon={faEnvelope} />
            <div className="ml-3">
              <p>Email</p>
              <p>xyz@gmail.com</p>
            </div>
          </div>
          <div className="md:ml-6 h-10 mt-5 md:border border-t"></div>
          <div className="flex mt-7 ml-5">
            <div className="ml-3">
              <p>Time: 9AM - 10PM</p>
            </div>
          </div>
          <div className="md:ml-6 h-10 mt-5 md:border border-t"></div>
          <div className="flex mt-3 ml-5">
            <FontAwesomeIcon className="mt-5" icon={faFacebookF} />
            <FontAwesomeIcon className="mt-5 ml-5" icon={faLinkedinIn} />
            <FontAwesomeIcon className="mt-5 ml-5" icon={faTwitter} />
            <FontAwesomeIcon className="mt-5 ml-5" icon={faInstagram} />
          </div>
        </div>

        <div className="mt-10 md:mt-7">
          <Link to="/register">Sign Up</Link>
          <Link
            to="/login"
            className="py-2 px-9 text-xl font-semibold bg-white text-emerald-600 w-32 ml-5"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Info;
