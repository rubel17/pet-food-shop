import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
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
    <div className="md:flex md:justify-center bg-colors md:h-20">
      <div className="info-responsive md:flex md:justify-around w-screen">
        <div className="md:flex">
          <div className="flex md:ml-5 pt-3">
            <FontAwesomeIcon className="mt-5" icon={faPhoneVolume} />
            <div className="ml-3">
              <p>Contact Us</p>
              <p>+880123456789</p>
            </div>
          </div>
          <div className="mr-5 md:ml-6 md:h-8 mt-5 md:border border-t"></div>
          <div className="flex mt-2  md:mt-3 md:ml-5">
            <FontAwesomeIcon className="mt-5" icon={faEnvelope} />
            <div className="ml-3">
              <p>Email</p>
              <p>xyz@gmail.com</p>
            </div>
          </div>
          <div className="mr-5 md:ml-6 md:h-8 mt-5 md:border border-t"></div>
          <div className="flex mt-3 lg:mt-6 ml-6">
            <div className="ml-1">
              <p>Time: 9AM - 10PM</p>
            </div>
          </div>
          <div className="mr-5 md:mr-0 md:ml-6 h-8 mt-5 md:border border-t"></div>
          <div className="flex md:mt-3 ml-8">
            <FontAwesomeIcon className="md:mt-5" icon={faFacebookF} />
            <FontAwesomeIcon className="md:mt-5 ml-5" icon={faLinkedinIn} />
            <FontAwesomeIcon className="md:mt-5 ml-5" icon={faTwitter} />
            <FontAwesomeIcon className="md:mt-5 ml-5" icon={faInstagram} />
          </div>
        </div>

        <div className="mt-10 md:mt-5">
          {user ? (
            <span className="ml-5 pe-3 text-teal-300">{user.displayName}</span>
          ) : (
            <button
              className="sm:ml-8"
              type="button"
              onClick={() => setShowModalR(true)}
            >
              Signup
            </button>
          )}

          {user ? (
            <Link onClick={handleSignOut} className="normal-case btn btn-ghost">
              Logout
            </Link>
          ) : (
            <button
              className="login-btn mb-10 py-1.5 px-4 rounded-md text-xl font-semibold active:bg-blue-500 active:text-white  outline-none focus:outline-none  bg-white ml-5"
              type="button"
              onClick={() => setShowModal(true)}
            >
              Login
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
