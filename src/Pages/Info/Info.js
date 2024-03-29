import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneVolume,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import React, { useContext, useState } from "react";
import "./Info.css";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Info = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalR, setShowModalR] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div className="bg-colors md:h-20 pb-5 md:pb-0 pl-3 md:pl-3">
      <div className="info-responsive md:flex md:justify-center w-screen">
        <div className="md:flex">
          <div className="flex pt-3">
            <FontAwesomeIcon className="mt-5" icon={faPhoneVolume} />
            <div className="ml-3">
              <p>Contact Us</p>
              <p>+8801923064377</p>
            </div>
          </div>
          <div className="mr-5 md:ml-3 lg:ml-8 md:h-8 mt-5 md:border border-t"></div>
          <div className="flex mt-2  md:mt-3 md:ml-5">
            <FontAwesomeIcon className="mt-5" icon={faEnvelope} />
            <div className="ml-3">
              <p>Email</p>
              <p>Rubelrk377@gmail.com</p>
            </div>
          </div>
          <div className="mr-5 md:ml-3 lg:ml-8 md:h-8 mt-5 md:border border-t md:hidden xl:flex"></div>

          <div className="flex md:hidden xl:flex mt-2  md:mt-3 md:ml-5">
            <FontAwesomeIcon className="mt-5" icon={faClock} />
            <div className="ml-3">
              <p>Time</p>
              <p>9AM - 10PM</p>
            </div>
          </div>
          <div className="mr-5 md:mr-2 md:ml-3 lg:ml-8 h-8 mt-5 md:border border-t"></div>
          <div className="flex md:mt-3 lg:ml-8 ml-1 mr-2">
            <Link to="https://www.facebook.com/" target="_blank">
              <FontAwesomeIcon className="md:mt-5" icon={faFacebookF} />
            </Link>
            <Link to="https://www.linkedin.com/" target="_blank">
              <FontAwesomeIcon className="md:mt-5 ml-5" icon={faLinkedinIn} />
            </Link>
            <Link to="https://twitter.com/" target="_blank">
              <FontAwesomeIcon className="md:mt-5 ml-5" icon={faTwitter} />
            </Link>
            <Link to="https://www.instagram.com/" target="_blank">
              <FontAwesomeIcon className="md:mt-5 ml-5" icon={faInstagram} />
            </Link>
          </div>
        </div>

        <div className="xl:ml-40 mt-10 md:mt-5 flex">
          {user ? (
            <span className="lg:ml-3 xl:-ml-16 mt-3 text-teal-300">
              {user.displayName}
            </span>
          ) : (
            <button>
              <label htmlFor="my-drawer-3" className="drawer-button lg:ml-8">
                Sign Up
              </label>
            </button>
          )}

          {user ? (
            <Link
              onClick={handleSignOut}
              className="normal-case text-lg btn btn-ghost"
            >
              Logout
            </Link>
          ) : (
            <button>
              <label
                htmlFor="my-drawer-2"
                className="drawer-button login-btn py-1.5 px-4 rounded-md text-xl font-semibold active:bg-blue-500 active:text-white  outline-none focus:outline-none  bg-white ml-5"
              >
                Login
              </label>
            </button>
          )}
        </div>
      </div>
      <Login
        showModal={showModal}
        setShowModal={setShowModal}
        setShowModalR={setShowModalR}
        showModalR={showModalR}
      ></Login>
      <Register
        showModalR={showModalR}
        setShowModalR={setShowModalR}
        setShowModal={setShowModal}
      ></Register>
    </div>
  );
};

export default Info;
